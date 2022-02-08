import styled from 'styled-components';

export const menuSelected = styled.li`
  display: 'flex';
  align-items: 'center';
  background: var(--font-orange-color);
  justify-content: 'center';
  border-radius: 2rem;
  padding: 2px 5px;
  width: 100%;
  height: 2rem;
`;

export const Container = styled.header`
  /* position: absolute; */
  z-index: 999;
  width: 100%;
  box-shadow: 0px 8px 39px -20px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 8px 39px -20px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 39px -20px rgba(0, 0, 0, 0.15);
  background: #fff;
  position: fixed;

  @media (max-width: 680px) {
    position: sticky;
    top: 0;
  }

  .container.mobile {
    height: 5rem;
    padding: 1.2rem 0;

    .main-content-header {
      grid-template-columns: repeat(3, 1fr);

      .logo {
        a {
          img {
            margin: 0.5rem 0;
          }
        }
      }
    }

    nav {
      .top-content-header {
        height: fit-content;
        z-index: 9999;
        display: flex;
        justify-content: flex-end;

        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--font-blue-color);
          padding: 0 1.5rem;
          height: 2.8rem;

          img {
            margin-right: 1.2rem;
            transition: all ease-in 100ms;
            cursor: pointer;
            width: 1.5rem;
            :hover {
              transform: scale(1.2);
            }
          }

          a:nth-child(5) {
            img {
              width: 1.8rem;
            }
          }

          a:last-of-type img {
            margin-right: 0;
          }
        }

        .work {
          padding: 0 2.5rem;

          display: flex;
          align-items: center;
          margin-right: calc(2.5rem + 1vw);
          background: var(--font-orange-color);
          transition: all ease 350ms;
          a {
            font-family: 'Gilroy-Medium';
            color: var(--font-white-color);
            font-size: calc(1rem + 0.4vw);

            @media only screen and (min-width: 1280px) {
              font-size: 1.3rem;
            }
          }
          :hover {
            background: #ffa867;
          }
        }
      }
    }
  }

  .container.hide {
    height: 0;

    .main-content-header {
      filter: opacity(0);
    }
  }

  .container {
    transition: all 250ms ease;
    height: 9rem;
    display: grid;
    grid-template-rows: repeat(2, 4.5rem);
    justify-content: center;
    border-top: 0.2rem solid var(--font-orange-color);

    .top-content-header {
      height: fit-content;
      display: flex;
      justify-content: flex-end;
      z-index: 9999;

      .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--font-blue-color);
        padding: 0 1.5rem;
        height: 2.8rem;

        img {
          margin-right: 1.2rem;
          transition: all ease-in 100ms;
          cursor: pointer;
          width: 1.5rem;
          :hover {
            transform: scale(1.2);
          }
        }

        a:nth-child(5) {
          img {
            width: 1.8rem;
          }
        }

        a:last-of-type img {
          margin-right: 0;
        }
      }

      .work {
        padding: 0 2.5rem;

        display: flex;
        align-items: center;
        margin-right: calc(2.5rem + 1vw);
        background: var(--font-orange-color);
        transition: all ease 350ms;
        a {
          font-family: 'Gilroy-Medium';
          color: var(--font-white-color);
          font-size: calc(1rem + 0.4vw);

          @media only screen and (min-width: 1280px) {
            font-size: 1.3rem;
          }
        }
        :hover {
          background: #ffa867;
        }
      }
    }

    .main-content-header.hide {
      margin-top: -100%;
    }

    .main-content-header {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-auto-rows: 100%;
      position: relative;
      transition: all 560ms ease;

      .logo {
        grid-column: span 1 / auto;
        padding-right: calc(1.2rem + 1vw);
        margin-top: -1rem;

        a {
          img {
            width: 15rem;

            @media (max-width: 680px) {
              margin: 0.5rem 2rem;
            }
          }
        }
      }

      .logo-companies {
        grid-column: span 1 / auto;
        padding-left: calc(1.2rem + 1vw);
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        margin-top: -1.5rem;

        @media (max-width: 680px) {
          display: none;
        }

        ::before {
          content: '';
          position: absolute;
          height: 3rem;
          width: 0.1rem;
          top: 10%;
          left: 0;
          background: var(--border-separator);
        }

        img {
          margin-right: calc(0.5rem + 1vw);
        }

        .block-logo-companies {
          :nth-child(1) {
            position: relative;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: center;

            ::before {
              content: '';
              width: 0px;
              height: 0px;
              position: absolute;
              left: 50%;
              top: 76%;
              transform: translate(-50%, 50%);
              border-style: solid;
              border-width: 7px 10px 9px 10px;
              border-color: transparent transparent var(--bg-blue-color)
                transparent;
              display: inline-block;
              vertical-align: middle;
              display: none;
            }

            ::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              top: 120%;
              width: 100%;
              background: var(--bg-blue-color);
              height: 0.5rem;
              display: none;
            }

            :hover {
              @media (min-width: 1280px) {
                ::before {
                  display: initial;
                }

                ::after {
                  display: initial;
                }
              }
            }
          }

          :nth-child(2) {
            position: relative;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: center;

            ::before {
              content: '';
              width: 0px;
              height: 0px;
              position: absolute;
              left: 50%;
              top: 76%;
              transform: translate(-50%, 50%);
              border-style: solid;
              border-width: 7px 10px 9px 10px;
              border-color: transparent transparent var(--bg-blue-color)
                transparent;
              display: inline-block;
              vertical-align: middle;
              display: none;
            }

            ::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              top: 120%;
              width: 100%;
              background: var(--bg-blue-color);
              height: 0.5rem;
              display: none;
            }
            :hover {
              @media (min-width: 1280px) {
                ::before {
                  display: initial;
                }

                ::after {
                  display: initial;
                }
              }
            }
          }

          :nth-child(3) {
            position: relative;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: center;

            ::before {
              content: '';
              width: 0px;
              height: 0px;
              position: absolute;
              left: 50%;
              top: 76%;
              transform: translate(-50%, 50%);
              border-style: solid;
              border-width: 7px 10px 9px 10px;
              border-color: transparent transparent var(--bg-blue-color)
                transparent;
              display: inline-block;
              vertical-align: middle;
              display: none;
            }

            ::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              top: 120%;
              width: 100%;
              background: var(--bg-blue-color);
              height: 0.5rem;
              display: none;
            }
            :hover {
              @media (min-width: 1280px) {
                ::before {
                  display: initial;
                }

                ::after {
                  display: initial;
                }
              }
            }
          }

          :nth-child(4) {
            position: relative;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: center;
            width: fit-content;
            margin-left: -15px;

            ::before {
              content: '';
              width: 0px;
              height: 0px;
              position: absolute;
              left: 50%;
              top: 76%;
              transform: translate(-50%, 50%);
              border-style: solid;
              border-width: 7px 10px 9px 10px;
              border-color: transparent transparent var(--bg-blue-color)
                transparent;
              display: inline-block;
              vertical-align: middle;
              display: none;
            }

            ::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              top: 120%;
              width: 100%;
              background: var(--bg-blue-color);
              height: 0.5rem;
              display: none;
            }
            :hover {
              @media (min-width: 1280px) {
                ::before {
                  display: initial;
                }

                ::after {
                  display: initial;
                }
              }
            }
          }

          :nth-child(1) a img {
            width: 7rem;
          }

          :nth-child(2) a img {
            width: 9rem;
          }

          :nth-child(3) a img {
            width: 8rem;
          }

          :nth-child(4) a img {
            width: 6rem;
          }

          :nth-child(4) a {
            padding-left: 2rem;
          }
        }
      }
    }

    nav.is-active {
      display: block !important;
      position: fixed;
      background: #fff;
      top: 0;
      left: 0;
      width: 100%;
      bottom: 0;
      overflow-y: scroll;

      .container-fatherOfAll {
        position: relative;

        p {
          color: var(--font-header-color);
          font-family: 'Gilroy-Bold';
          text-transform: uppercase;
          font-size: 1.6rem;
          padding-left: 2rem;
        }
        .container-items-megamenu {
          .holder-item {
            display: flex;
            align-items: center;
            margin: 3rem 0;
          }
        }

        ul {
          padding-left: 2rem;
          flex-direction: column;

          :first-child {
            margin-top: 2rem;
            li {
              :first-child {
                margin: 2rem 0 0;
              }
            }
          }

          :last-of-type {
            li {
              :first-child {
                margin: 0 0 1rem 0;
              }
              :last-child {
                margin: 1rem 0;
              }
            }
          }

          li:not(:first-child) {
            margin: 2rem 0;
          }

          li {
            a {
              font-size: 1.6rem;
            }
          }
        }

        .logo-companies {
          display: flex;
          justify-content: center;
          grid-column: initial;
          padding-left: 0;

          height: initial;
          margin: 3rem 0;
        }
      }
    }

    nav {
      display: flex;
      grid-column: 10 / auto;
      @media (max-width: 680px) {
        display: none !important;
      }

      @media only screen and (max-width: 1180px) {
        display: inherit;
      }

      ul {
        display: flex;

        .cursos-livre.active {
          a {
            color: var(--bg-blue-color);
            ::before {
              display: initial;
            }

            ::after {
              display: initial;
            }
          }
        }

        .graduacao.active {
          a {
            color: var(--bg-blue-color);
            ::before {
              display: initial;
            }

            ::after {
              display: initial;
            }
          }
        }
        .pos-graduacao.active {
          a {
            color: var(--bg-blue-color);
            ::before {
              display: initial;
            }

            ::after {
              display: initial;
            }
          }
        }

        li {
          width: max-content;
          margin-right: calc(1.2rem + 1vw);
          position: relative;

          a {
            color: var(--font-header-color);
            font-family: 'Gilroy-Bold';
            text-transform: uppercase;
            font-size: 1.1rem;

            ::before {
              content: '';
              width: 0px;
              height: 0px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, 30%);
              border-style: solid;
              border-width: 7px 10px 9px 10px;
              border-color: transparent transparent var(--bg-blue-color)
                transparent;
              display: inline-block;
              vertical-align: middle;
              display: none;
            }

            ::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              background: var(--bg-blue-color);
              height: 0.5rem;
              display: none;
            }
          }

          :hover {
            @media (min-width: 1280px) {
              a {
                color: var(--bg-blue-color);
                ::before {
                  display: initial;
                }

                ::after {
                  display: initial;
                }
              }
            }
          }
        }

        .list-2 {
          position: relative;

          ::before {
            content: '';
            position: absolute;
            height: 2rem;
            width: 0.1rem;
            top: -0.1rem;
            left: -1.3rem;
            background: var(--border-separator);

            @media only screen and (max-width: 1180px) {
              display: none;
            }
          }
        }
      }
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    z-index: 999;
    margin-top: -2.2rem;
    left: 120%;
    position: relative;

    @media screen and (max-width: 480px) {
      display: inline-block;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }
  .hamburger.is-active:hover {
    opacity: 0.7;
  }
  .hamburger .hamburger-inner,
  .hamburger .hamburger-inner::before,
  .hamburger .hamburger-inner::after {
    background-color: ${(corDoHamburger) => corDoHamburger.hamburgerColor};
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  /*
   * Squeeze
   */
  .hamburger--squeeze .hamburger-inner {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--squeeze .hamburger-inner::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }
  .hamburger--squeeze .hamburger-inner::after {
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--squeeze.is-active .hamburger-inner {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--squeeze.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease;
  }
  .hamburger--squeeze.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease,
      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
