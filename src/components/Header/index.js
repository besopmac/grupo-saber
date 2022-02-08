/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-scroll';

import { Container } from './styles';

import MegaMenu from '../../components/MegaMenu';
import MegaMenuMobile from '../../components/MegaMenuMobile';

export default function Header() {
  const [seMenuAberto, setSeMenuAberto] = useState(false);
  const [cursosLivres, setCursosLivres] = useState(false);
  const [graduacao, setGraduacao] = useState(false);
  const [posGraduacao, setPosGraduacao] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(null);

  const megamenu = document.querySelector('.megamenu-mobile-1');
  const megamenu2 = document.querySelector('.megamenu-mobile-2');
  const megamenu3 = document.querySelector('.megamenu-mobile-3');

  const seta1 = document.querySelector('.one');
  const seta2 = document.querySelector('.two');
  const seta3 = document.querySelector('.tree');

  function abreFechaMenu() {
    setSeMenuAberto(!seMenuAberto);
    document.body.classList.toggle('is-active');
  }

  function handleMegaMenuCursosLivres() {
    if (cursosLivres === true) {
      setCursosLivres(false);
      megamenu.classList.remove('open');
      seta1.classList.remove('active');
    } else {
      setCursosLivres(true);
      megamenu.classList.add('open');
      seta1.classList.add('active');
    }
  }

  function handleMegaMenuGraduacao() {
    if (graduacao === true) {
      setGraduacao(false);
      megamenu2.classList.remove('open');
      seta2.classList.remove('active');
    } else {
      setGraduacao(true);
      megamenu2.classList.add('open');
      seta2.classList.add('active');
    }
  }

  function handleMegaMenuPosGraduacao() {
    if (posGraduacao === true) {
      setPosGraduacao(false);
      megamenu3.classList.remove('open');
      seta3.classList.remove('active');
    } else {
      setPosGraduacao(true);
      megamenu3.classList.add('open');
      seta3.classList.add('active');
    }
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      //console.log(window.pageYOffset);
    });
  }, []);

  if (isMobile) {
    return (
      <>
        <Container>
          <div className="main-container short">
            <div className={`container ${hideOnScroll && `hide`} mobile`}>
              <div className="main-content-header">
                <div className="logo">
                  <a href="/">
                    <img
                      src={require('../../assets/images/logo.svg')}
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="logo-companies">
                  <div className="block-logo-companies">
                    <a href="/centro-de-ensino-saber">
                      <img
                        src={require('../../assets/images/CentroEnsinoSaber_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="block-logo-companies">
                    <a href="/unicesumar">
                      <img
                        src={require('../../assets/images/Unicesumar_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="block-logo-companies">
                    <a href="/super-cerebro">
                      <img
                        src={require('../../assets/images/SuperCérebro_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="block-logo-companies">
                    <a href="/fisk">
                      <img
                        src={require('../../assets/images/Fisk_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <button
                  className={`hamburger  hamburger--squeeze ${
                    seMenuAberto && 'is-active'
                  }`}
                  type="button"
                  onClick={abreFechaMenu}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>

                <nav className={`${seMenuAberto && 'is-active'}`}>
                  <div className="container-fatherOfAll">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                    </ul>
                    <div className="container-items-megamenu">
                      <div className="holder-item onee">
                        <p onClick={handleMegaMenuCursosLivres}>
                          Cursos Livres
                        </p>
                        <i className={`fas fa-chevron-right one`}></i>
                      </div>
                      <div className="megamenu-mobile-1">
                        <MegaMenuMobile id={68} />
                      </div>
                      <div className="holder-item treee">
                        <p onClick={handleMegaMenuPosGraduacao}>Graduação</p>
                        <i className={`fas fa-chevron-right tree`}></i>
                      </div>
                      <div className="megamenu-mobile-3">
                        <MegaMenuMobile id={55} />
                      </div>
                      <div className="holder-item twoo">
                        <p onClick={handleMegaMenuGraduacao}>Pós-Graduação</p>
                        <i className={`fas fa-chevron-right two`}></i>
                      </div>
                      <div className="megamenu-mobile-2">
                        <MegaMenuMobile id={41} />
                      </div>
                    </div>

                    <ul>
                      <li>
                        <a href="/quem-somos">Quem somos</a>
                      </li>
                      <li>
                        <a href="/ebomsaber">Blog</a>
                      </li>
                      <li>
                        <a onClick={abreFechaMenu} href="/#goto-contato">
                          Contato
                        </a>
                      </li>
                    </ul>

                    <div className="logo-companies">
                      <div className="block-logo-companies">
                        <a href="/centro-de-ensino-saber">
                          <img
                            src={require('../../assets/images/CentroEnsinoSaber_Logo.svg')}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="block-logo-companies">
                        <a href="/unicesumar">
                          <img
                            src={require('../../assets/images/Unicesumar_Logo.svg')}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="block-logo-companies">
                        <a href="/super-cerebro">
                          <img
                            src={require('../../assets/images/SuperCérebro_Logo.svg')}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="block-logo-companies">
                        <a href="/fisk">
                          <img
                            src={require('../../assets/images/Fisk_Logo.svg')}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="top-content-header">
                      <div className="social-icons">
                        <a
                          href="https://api.whatsapp.com/send?phone=5542998701010&text=Ol%C3%A1!%20Estou%20visitando%20o%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.%20Meu%20c%C3%B3digo%20%C3%A9%20%23GSSITE%20(envie%20este%20c%C3%B3digo%20para%20falar%20com%20um%20de%20nossos%20tutores)."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require('../../assets/icons/whatsapp.svg')}
                            alt=""
                          />
                        </a>
                        <a href="tel:+554234231010">
                          <img
                            src={require('../../assets/icons/phone.svg')}
                            alt=""
                          />
                        </a>
                        <a
                          href="https://www.facebook.com/gruposabereducacional/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require('../../assets/icons/facebook.svg')}
                            alt=""
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/gruposabereducacional/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require('../../assets/icons/instagram.svg')}
                            alt=""
                          />
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UC6oPbO6kTYRiqHoxY1GCJ3Q"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require('../../assets/icons/youtube.svg')}
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="work">
                        <a href="/oportunidades">Vagas de trabalho</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <div className="main-container short">
            <div className={`container ${hideOnScroll && `hide`}`}>
              <div className="top-content-header">
                <div className="social-icons">
                  <a
                    href="https://api.whatsapp.com/send?phone=5542998701010&text=Ol%C3%A1!%20Estou%20visitando%20o%20site%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.%20Meu%20c%C3%B3digo%20%C3%A9%20%23GSSITE%20(envie%20este%20c%C3%B3digo%20para%20falar%20com%20um%20de%20nossos%20tutores)."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require('../../assets/icons/whatsapp.svg')}
                      alt=""
                    />
                  </a>
                  <a href="tel:+554234231010">
                    <img src={require('../../assets/icons/phone.svg')} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com/gruposabereducacional/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require('../../assets/icons/facebook.svg')}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/gruposabereducacional/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require('../../assets/icons/instagram.svg')}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC6oPbO6kTYRiqHoxY1GCJ3Q"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require('../../assets/icons/youtube.svg')}
                      alt=""
                    />
                  </a>
                </div>
                <div className="work">
                  <a href="/oportunidades">Vagas de trabalho</a>
                </div>
              </div>

              <div className={`main-content-header ${hideOnScroll && `hide`}`}>
                <div className="logo">
                  <a href="/">
                    <img
                      src={require('../../assets/images/logo.svg')}
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="logo-companies">
                  <div className="block-logo-companies">
                    <a href="/centro-de-ensino-saber">
                      <img
                        src={require('../../assets/images/CentroEnsinoSaber_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="block-logo-companies">
                    <a href="/unicesumar">
                      <img
                        src={require('../../assets/images/Unicesumar_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="block-logo-companies">
                    <a href="/super-cerebro">
                      <img
                        src={require('../../assets/images/SuperCérebro_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="block-logo-companies">
                    <a href="/fisk">
                      <img
                        src={require('../../assets/images/Fisk_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <button
                  className={`hamburger  hamburger--squeeze ${
                    seMenuAberto && 'is-active'
                  }`}
                  type="button"
                  onClick={abreFechaMenu}
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>

                <nav className={`${seMenuAberto && 'is-active'}`}>
                  <ul className="list-1">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="cursos-livre">
                      <a>Cursos livres</a>
                    </li>
                    <MegaMenu
                      id={68}
                      class={'megamenu-cursos-livres'}
                      image={require('../../assets/images/cursos-livres-photo.jpg')}
                    />
                    <li className="graduacao">
                      <a>Graduação</a>
                    </li>
                    <MegaMenu
                      id={55}
                      class={'megamenu-graduacao'}
                      image={require('../../assets/images/graduacao-photo.jpg')}
                    />
                    <li className="pos-graduacao">
                      <a>Pós-graduação</a>
                    </li>
                    <MegaMenu
                      id={41}
                      class={'megamenu-pos-graduacao'}
                      image={require('../../assets/images/pos-graduacao-photo.jpg')}
                    />
                  </ul>
                  <ul className="list-2">
                    <li>
                      <a href="/quem-somos">Quem somos</a>
                    </li>
                    <li>
                      <a href="/ebomsaber">Blog</a>
                    </li>
                    <li>
                      <Link to="titulo-contato" offset={-150} duration={2000}>
                        Contato
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
