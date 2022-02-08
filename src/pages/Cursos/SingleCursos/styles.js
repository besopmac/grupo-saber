import styled from 'styled-components';

export const Container = styled.div`
  padding-top: calc(6rem + 1vh);
  height: 300rem;
  .top-content {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
    }

    .title {
      text-align: center;
      position: absolute;
      top: 54%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      color: #fff;
      @media (max-width: 680px) {
        top: 64%;
      }

      h2 {
        font-family: 'Gilroy-Heavy';
        font-size: 4.7rem;
        width: 70%;
        margin: 0 auto;
        @media (max-width: 680px) {
          font-size: 1.7rem;
        }
      }

      p:nth-child(2) {
        font-family: 'Gilroy-Regular';
        font-size: 2.8rem;
        margin-bottom: calc(2rem + 1vh);
        @media (max-width: 680px) {
          font-size: 1.4rem;
        }
      }
    }
  }

  .estrutura {
    margin-top: calc(15rem + 1vh);
    padding-bottom: calc(20rem + 1vh);
    background: var(--font-blue-color);
    height: auto;

    .title {
      position: relative;
      margin-bottom: 3.5rem;
      padding-top: calc(10rem + 1vh);

      h2 {
        font-family: 'Gilroy-Bold';
        color: var(--font-white-color);
        font-size: var(--title-size);
        text-align: center;
        line-height: 1;
        z-index: 2;
        font-size: var(--title-size);

        ::before {
          content: 'GALERIA';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, 5%);
          color: #000;
          font-size: 10rem;
          filter: opacity(0.1);
          @media (max-width: 680px) {
            font-size: 5rem;
            transform: translate(-50%, 50%);
          }
        }

        span {
          font-family: 'Gilroy-Light';
          color: var(--font-orange-color);
        }
      }
    }

    .grid-images {
      margin-top: calc(9rem + 1vh);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 1.5rem;
      img {
        max-width: 100%;
        border-radius: 1rem;
        cursor: pointer;
      }
    }
  }

  .qualificacoes {
    margin-top: calc(3rem + 1vh);
    padding-bottom: calc(10rem + 1vh);
    height: auto;
    position: relative;

    .title {
      position: relative;
      margin-bottom: 3.5rem;
      padding-top: calc(10rem + 1vh);
      margin-left: calc(5rem + 1vh);

      h2 {
        font-family: 'Gilroy-Bold';
        color: var(--font-blue-color);
        font-size: var(--title-size);
        text-align: left;
        line-height: 1;
        font-size: var(--title-size);
        z-index: 2;

        ::before {
          content: 'DÚVIDAS';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(-10%, 15%);
          color: #000;
          z-index: -1;
          font-size: 8rem;
          filter: opacity(0.05);
          @media (max-width: 680px) {
            font-size: 5rem;
            transform: translate(-10%, 50%);
          }
        }

        span {
          font-family: 'Gilroy-Light';
          color: var(--button-blue-color);
        }
      }
    }

    .grid-qualificacao {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 2rem;
      margin-top: calc(5rem + 1vh);

      .block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #fff;

        .title-qualificacao {
          padding-top: calc(1.5rem + 1vh);
          position: relative;
          margin-bottom: 1.4rem;
          h2 {
            font-family: 'Gilroy-Bold';
            color: var(--font-blue-color);
            font-size: 2rem;
            text-align: center;
            line-height: 1;
          }
        }
        .description {
          text-align: center;
          p {
            font-family: 'Gilroy-Regular';
            color: var(--font-description-color);
            font-size: 1.3rem;
            line-height: 1.4;
            /* padding: 0 1rem; */
            width: 24rem;
            @media (max-width: 680px) {
              width: 100%;
            }
          }
        }
      }
    }
  }

  .main-container.short {
    .container {
      position: relative;
      .x {
        position: absolute;
        top: -12%;
        width: 10%;
        left: -14%;
      }
      .title {
        font-size: 2.5rem;
        @media (max-width: 680px) {
          font-size: 2rem;
        }

        h2 {
          font-family: 'Gilroy-Light';
          color: var(--button-blue-color);
          font-size: var(--title-size);
          padding: 4.5rem 2.5rem 2.5rem 0;
          @media (max-width: 680px) {
            padding: 2.2rem 0;
          }

          span {
            font-family: 'Gilroy-Bold';
            color: var(--font-blue-color);
          }
        }
      }

      .description {
        p {
          font-family: 'Gilroy-Regular';
          color: var(--font-description-color);
          font-size: 1.6rem;
        }
        span {
          font-family: 'Gilroy-Regular';
          color: var(--font-description-color);
          font-size: 1.6rem;
        }

        span.bold {
          font-family: 'Gilroy-Bold';
        }
      }
      .description.bold {
        p {
          font-family: 'Gilroy-Bold';
        }
      }
      .content-top {
        display: flex;
        position: relative;

        @media (max-width: 680px) {
          display: initial;
        }

        .content-left {
          width: 50%;
          margin-right: 2rem;
          @media (max-width: 680px) {
            width: 100%;
            margin-right: 0;
          }
          .content-1-top {
            .description {
              p {
                padding-right: 3rem;
                @media (max-width: 680px) {
                  padding-right: 0;
                }
              }
            }
          }

          .content-2-bottom {
            .description {
              line-height: 1;
              .content {
                display: flex;
                align-items: center;
                padding: 5px 0;

                .number {
                  margin-right: 2rem;
                  font-family: 'Gilroy-Heavy';
                  font-size: 3rem;
                  color: var(--font-orange-color);
                }
              }
            }
          }
        }
        .content-right {
          width: 50%;
          @media (max-width: 680px) {
            width: 100%;
          }
          .title {
            margin-top: calc(6rem + 1vh);
          }

          .content-3-top {
            .video {
              width: 100%;
              height: 30rem;
              background: var(--font-blue-color);
            }
          }

          .content-4-bottom {
            margin-left: calc(2rem + 1vw);
            padding-top: 10rem;
            @media (max-width: 680px) {
              margin-left: 0;
            }

            .description {
              margin-bottom: 1.5rem;
              span.bold {
                color: var(--font-blue-color);
                font-size: 2.5rem;
                @media (max-width: 680px) {
                  font-size: 2rem;
                }
              }

              span {
                color: var(--button-blue-color);
                font-size: 2.5rem;
                @media (max-width: 680px) {
                  font-size: 2rem;
                }
              }
            }
          }

          .button {
            margin-left: calc(2rem + 1vw);
            margin-top: calc(8rem + 1vh);
            @media (max-width: 680px) {
              margin-left: auto;
              margin-right: auto;
              width: fit-content;
            }
            button {
              font-family: 'Gilroy-Regular';
              font-size: 2rem;
              border: none;
              color: #fff;
              cursor: pointer;
              background: rgb(56, 155, 235);
              background: linear-gradient(
                260deg,
                rgba(34, 205, 228, 1) 0%,
                rgba(56, 155, 235, 1) 100%
              );
              padding: 1.4rem 3rem;
              border-radius: 3rem;
              @media (max-width: 680px) {
                padding: 1.4rem 2rem;
                font-size: 1.5rem;
              }

              span {
                font-family: 'Gilroy-Bold';
              }
            }
          }
        }
      }

      .content-bottom {
        margin-top: calc(6rem + 1vh);
        padding: 0 5rem;

        @media (max-width: 680px) {
          padding: 0;
        }
        .title {
          position: relative;

          ::before {
            content: 'BÔNUS';
            font-family: 'Gilroy-Heavy';
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translate(-80%, -70%);
            color: #000;
            z-index: -1;
            font-size: 6rem;
            filter: opacity(0.05);
            @media (max-width: 680px) {
              left: 50%;
            }
          }
        }

        .description {
          width: 40rem;
          display: flex;
          flex-wrap: wrap;
          margin-left: 5rem;
          @media (max-width: 680px) {
            width: 100%;
            margin-left: 0;
            margin-top: 2rem;
          }
          span {
            font-family: 'Gilroy-Bold';
            color: var(--font-blue-color);
          }
        }
      }
    }
  }
`;
