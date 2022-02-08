import styled from 'styled-components';

export const Container = styled.div`
  padding-top: calc(6rem + 1vh);

  /* Categoria da noticia */

  .main-container {
    position: relative;
    .x {
      position: absolute;
      top: 10%;
      width: 10%;
      left: -6%;
    }
  }

  .holder-type-noticia {
    display: flex;
    flex-wrap: wrap;
  }

  .type-noticia {
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    border-radius: 5px;
    background: var(--bg-ice-color);
    padding: 0.5rem 1.5rem;
    width: fit-content;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Gilroy-Medium';
    font-size: 1rem;
    color: var(--font-blue-color);
    letter-spacing: 0.4ch;
  }

  .type-noticia.bigger {
    font-size: 1.3rem;
    margin: 2rem 0;
    padding: 0.9rem 2.5rem;
  }

  .top-content {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      height: 400px;
      max-width: 100%;
      object-fit: cover;
    }

    .title {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      @media (max-width: 680px) {
        top: 59%;
      }

      h2 {
        font-family: 'Gilroy-Heavy';
        font-size: 6rem;
        @media (max-width: 680px) {
          font-size: 4rem;
        }
      }

      p:nth-child(2) {
        font-family: 'Gilroy-Regular';
        font-size: 2.8rem;
        margin-top: calc(1rem + 1vh);
        margin-bottom: calc(2rem + 1vh);
        @media (max-width: 680px) {
          font-size: 1.4rem;
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }
  }

  .main-container.short {
    position: relative;

    .container-noticia {
      margin-top: -7rem;
      background: #fff;
      height: auto;
      border-radius: 1rem;
      display: grid;
      grid-template-columns: 75% 25%;
      padding: 2rem 2.5rem;
      @media (max-width: 680px) {
        margin-top: 0;
        grid-template-columns: initial;
        padding: 0;
        display: block;
      }

      .content-left {
        padding: 0 2.5rem;
        @media (max-width: 680px) {
          padding: 0;
        }

        .image {
          img {
            width: 90%;
            border-radius: 15px;
            margin-top: calc(2.5rem + 1vh);
          }
        }

        img {
          width: auto;
          border-radius: 15px;
          margin-top: calc(2.5rem + 1vh);
        }

        .title-noticia {
          width: 80%;
          p {
            margin-top: calc(0.1rem + 1vw);
            font-family: 'Gilroy-Bold';
            font-size: 4.2rem;
            line-height: 1;
            color: var(--font-blue-color);
            @media (max-width: 680px) {
              font-size: 3.2rem;
              margin-top: calc(0.9rem + 1vh);
            }
          }
        }

        .text-content {
          margin-top: calc(2.5rem + 1vw);

          p {
            font-family: 'Gilroy-Regular';
            color: var(--font-description-color);
            font-size: 1.6rem;
            line-height: 1.4;
            padding: 1.4rem 7rem 1.4rem 1rem;
            @media (max-width: 680px) {
              padding: 0;
            }
          }

          blockquote {
            font-family: 'Gilroy-Bold';
            color: var(--font-blockquote-color);
            font-size: 2.5rem;
            line-height: 1.4;
            padding: 1.4rem 8rem 1.4rem 5rem;
          }
          p {
            img {
              width: 100%;
              height: 300px;
              object-fit: cover;
            }
          }
          img {
            width: 100%;
            height: 300px;
            object-fit: cover;
          }
        }
      }

      .content-right {
        position: relative;
        @media (max-width: 680px) {
          padding: 0 2.5rem;
        }
        ::before {
          content: '';
          position: absolute;
          top: 5%;
          left: -15%;
          width: 0.1rem;
          height: 50rem;
          background: var(--border-separator-noticia);
        }

        h2 {
          font-family: 'Gilroy-Bold';
          font-size: 3.1rem;
          color: var(--font-blue-color);
        }

        .categorias {
          margin-top: calc(10rem + 1vh);
          @media (max-width: 680px) {
            margin-top: calc(5rem + 1vh);
          }

          a {
            color: var(--font-blue-color);
          }
        }

        .tags {
          margin-top: calc(5rem + 1vh);

          .content {
            margin-top: calc(1.5rem + 1vh);
            min-width: 15rem;
            max-width: 22rem;
            display: flex;
            flex-wrap: wrap;

            a {
              p {
                margin: 0.5rem;
                font-family: 'Gilroy-Bold';
                color: var(--font-blue-color);
                font-size: 1.2rem;
              }
            }
          }
        }
      }

      .autor {
        margin-top: calc(5rem + 1vw);
        padding: 0 2.5rem;

        h2 {
          font-family: 'Gilroy-Bold';
          font-size: 1.8rem;
          span {
            font-family: 'Gilroy-Regular';
            font-size: 1.4rem;
            padding: 0 1rem;
          }
        }
      }
    }

    .related-posts {
      margin-top: calc(10rem + 1vh);
      height: auto;

      .title-related-posts {
        font-family: Gilroy-Bold;
        font-size: 4rem;
        color: #064578;
        max-width: 20rem;
        padding-left: 5rem;
        @media (max-width: 680px) {
          padding-left: 2rem;
        }
      }

      .holder-btn {
        color: var(--font-white-color);
        text-transform: uppercase;
        font-family: 'Gilroy-Bold';
        white-space: nowrap;
        font-size: 1rem;

        .button {
          background: var(--button-blue-color);
          width: 10rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          text-align: center;
          transition: all ease 350ms;

          :hover {
            background: #00bdd6;
          }
        }
      }

      .see-more {
        margin: 9rem auto 0 auto;
        padding: 1.4rem 2rem !important;
        width: 13rem !important;
      }

      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        margin-top: calc(9rem + 1vw);
        padding: 0 2.5rem;
        gap: 1.5rem;

        img {
          height: 25rem;
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .block {
          .type-noticia {
            margin-top: 1.5rem;
            border-radius: 5px;
            background: var(--bg-ice-color);
            padding: 0.5rem 1.5rem;
            width: fit-content;
            white-space: nowrap;
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            font-family: 'Gilroy-Medium';
            font-size: 1rem;
            letter-spacing: 0.4ch;

            a {
              p {
                color: var(--font-blue-color);
              }
            }
          }

          .title-noticia {
            height: 10rem;
            overflow: hidden;
            @media (max-width: 680px) {
              height: auto;
              margin-bottom: 1rem;
            }
            p {
              margin-top: calc(0.1rem + 1vw);
              font-family: 'Gilroy-Bold';
              font-size: 2.5rem;
              line-height: 1;
              color: var(--font-blue-color);
              @media (max-width: 680px) {
                margin-top: calc(1.1rem + 1vw);
              }
            }
          }
        }
      }
    }
  }
`;
