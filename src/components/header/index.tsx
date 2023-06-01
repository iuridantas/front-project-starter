import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export function Header() {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const btnMobile = document.getElementById(
      'btn-mobile',
    ) as HTMLElement | null;
    const nav = document.getElementById('nav') as HTMLElement | null;

    function toggleMenu(event: MouseEvent) {
      nav?.classList.toggle('active');
      const active = nav?.classList.contains('active') || false;

      if (event.currentTarget instanceof HTMLElement) {
        event.currentTarget.setAttribute('aria-expanded', active.toString());

        if (active) {
          event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
          event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
      }
    }

    if (btnMobile) {
      btnMobile.addEventListener('click', toggleMenu);
    }

    return () => {
      if (btnMobile) {
        btnMobile.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('#menu a');
    function closeMenu() {
      const nav = document.getElementById('nav');
      nav?.classList.remove('active');
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <Container>
      <nav id="nav">
        <button
          id="btn-mobile"
          aria-label={isMenuActive ? 'Fechar Menu' : 'Abrir Menu'}
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded={isMenuActive ? 'true' : 'false'}
        >
          <AiOutlineMenu />
        </button>
        <ul id="menu" role="menu">
          <li>
            
          </li>
        </ul>
      </nav>
    </Container>
  );
}
