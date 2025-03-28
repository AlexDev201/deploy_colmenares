import { styled } from "styled-components";
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from 'src/img/Colmenares_del_eje_logo.png';

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1080px'
};

const HeaderWrapper = styled.div`
  position: relative;
  padding-top: ${props => props.$headerHeight}px;

  @media (min-width: ${breakpoints.tablet}) {
    padding-top: ${props => props.$headerHeight}px;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    padding-top: ${props => props.$headerHeight}px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9d77e;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.5rem 1.5rem;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    padding: 0.5rem 2rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 25px;
    
    @media (min-width: ${breakpoints.tablet}) {
      height: 30px;
    }
    
    @media (min-width: ${breakpoints.desktop}) {
      height: 35px;
    }
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  
  @media (min-width: ${breakpoints.tablet}) {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    flex-grow: 1;
  }
`;

const LinksContainer = styled.div`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  align-items: center;
  background: #f9d77e;
  padding: 0.3rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0;
    background: none;
    position: static;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    gap: 1rem;
  }
`;

const LinkNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #5d4037;
  font-weight: 500;
  padding: 4px 8px;
  font-size: 0.9rem;
  width: 90%;
  text-align: center;
  transition: color 0.2s ease;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    font-size: 1rem;
    padding: 6px 10px;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.1rem;
    padding: 6px 12px;
  }
  
  svg {
    margin-right: 4px;
    font-size: 0.9rem;
    
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
  
  &:hover {
    color: #ffab40;
  }
  
  &.active {
    color: #ffab40;
    font-weight: 600;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 1001;
  
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const HamburgerLine = styled.div`
  width: 18px;
  height: 1px;
  background-color: #5d4037;
  margin: 2px 0;
  transition: all 0.2s ease;
  
  &:nth-child(1) {
    transform: ${props => props.$isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.$isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
  }
`;

function Admin_Nav_Bar() {
  const [loaded, setLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efecto para medir y actualizar la altura del header
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    
    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0].target === headerRef.current) {
        setHeaderHeight(entries[0].target.offsetHeight);
      }
    });
    
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    
    return () => {
      if (headerRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Efecto para manejar el margen móvil solo cuando el menú está abierto
  useEffect(() => {
    const isMobile = window.innerWidth < parseInt(breakpoints.tablet);
    
    if (isMobile && isMenuOpen) {
      // En móvil con menú abierto, agregar espacio para el menú
      const menuHeight = 150; // Altura estimada del menú desplegado
      document.body.style.marginTop = `${headerHeight + menuHeight}px`;
      document.body.style.transition = 'margin-top 0.2s ease';
    } else {
      // En cualquier otro caso, dejar que HeaderWrapper maneje el espacio
      document.body.style.marginTop = '0';
      document.body.style.transition = '';
    }
    
    return () => {
      document.body.style.marginTop = '0';
      document.body.style.transition = '';
    };
  }, [isMenuOpen, headerHeight]);

  // Cierra el menú al cambiar de tamaño de pantalla a tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= parseInt(breakpoints.tablet)) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efecto para marcar como cargado
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeaderWrapper $headerHeight={headerHeight}>
      <Header ref={headerRef} style={{ transform: loaded ? 'translateY(0)' : 'translateY(-100%)' }}>
        <Logo>
          <Link to="/Dashboard">
            <img src={logo} alt="Logo Colmenares" />
          </Link>
        </Logo>
        
        <HamburgerButton onClick={toggleMenu} aria-label="Menú">
          <HamburgerLine $isOpen={isMenuOpen} />
          <HamburgerLine $isOpen={isMenuOpen} />
          <HamburgerLine $isOpen={isMenuOpen} />
        </HamburgerButton>
        
        <NavContainer>
          <LinksContainer $isOpen={isMenuOpen}>
            <LinkNav to='/UserRegister' $index={0} onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
              Crear Apicultor
            </LinkNav>
            <LinkNav to='/ViewApicultor' $index={1} onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
              </svg>
              Ver Apicultor
            </LinkNav>
            <LinkNav to='/HivenRegister' $index={2} onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
              Crear Colmena
            </LinkNav>
            <LinkNav to='/Dashboard' $index={3} onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
              </svg>
              Ver Colmenas
            </LinkNav>
            <LinkNav to='/Scan_QR' $index={4} onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"/>
                <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"/>
                <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"/>
                <path d="M9 2h5v5H9zm1 1v3h3V3zm0 8h1v1h-1z"/>
                <path d="M12 9h2v2h-2zm-1-2h3v5h-3zm-7 4h1v1H4zm7 1h1v1h-1z"/>
              </svg>
              Escanear QR
            </LinkNav>
          </LinksContainer>
        </NavContainer>
      </Header>
    </HeaderWrapper>
  );
}

export default Admin_Nav_Bar;