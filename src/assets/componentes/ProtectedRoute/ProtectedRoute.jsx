import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ allowedRoles, checkFirstRegistration = false }) => {
    const [canAccess, setCanAccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    useEffect(() => {
        const checkUserRegistration = async () => {
            // Only perform this check if it's the first registration route
            if (checkFirstRegistration) {
                try {
                    const response = await fetch("https://colmenaresdeleje.onrender.com/users/register_permision/", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const data = await response.json();

                    setCanAccess(data.message === "Register");
                } catch (error) {
                    console.error("Error checking user registration:", error);
                    setCanAccess(false);
                }
            } else {
                const token = getCookie("token");
                const role = getCookie("role");

                setCanAccess(token && allowedRoles.includes(role));
            }

            setIsLoading(false);
        };

        checkUserRegistration();
    }, [allowedRoles, checkFirstRegistration]);

    // Show loading state if still checking
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If not allowed, redirect
    if (!canAccess) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;