import styled from 'styled-components';

export const Container = styled.div`
  padding-top: calc(6rem + 1vh);

  .top-content {
    position: relative;
    img {
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
        top: 64%;
      }

      h2 {
        font-family: 'Gilroy-Heavy';
        font-size: 6rem;
        @media (max-width: 680px) {
          font-size: 2.7rem;
        }
      }

      p:nth-child(2) {
        font-family: 'Gilroy-Regular';
        font-size: 2.8rem;
        margin-top: calc(1rem + 1vh);
        margin-bottom: calc(2rem + 1vh);
        @media (max-width: 680px) {
          font-size: 1.8rem;
          margin: 0;
        }
      }

      p:nth-child(3) {
        margin-top: calc(2rem + 1vh);
        margin-bottom: calc(2rem + 1vh);
        font-family: 'Gilroy-Bold';
        font-size: 2.5rem;
        @media (max-width: 680px) {
          display: none;
        }
      }
    }
  }

  .block {
    .image {
      img {
        height: 25rem;
        width: 100%;
        object-fit: cover;
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
        font-size: 2rem;
        line-height: 1;
        color: var(--font-blue-color);
        @media (max-width: 680px) {
          margin-top: calc(1.1rem + 1vw);
        }
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
        margin-top: 2rem;

        :hover {
          background: #00bdd6;
        }
      }
    }
  }

  .noticias {
    position: relative;
    width: 100%;

    .x {
      position: absolute;
      top: -7rem;
      width: 10%;
      left: -3%;
    }

    .latest {
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translate(-50%, -12%);
      @media (max-width: 680px) {
        position: relative;
        top: 0;
        left: 0;
        transform: initial;
        width: 100%;
        padding: 0 2rem;
      }

      .image {
        overflow: hidden;
        border: 5px solid #fff;
        border-radius: 2rem;
      }
      img {
        width: 100%;
        height: 45rem;
        object-fit: cover;

        @media (max-width: 680px) {
          height: inherit;
        }
      }

      .title-noticia.latest-noticia {
        height: auto;

        p {
          font-size: 2rem;
        }
      }
    }
  }

  .grid-container {
    margin-top: calc(65rem + 1vh);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    @media (max-width: 680px) {
      grid-template-columns: initial;
      margin-top: calc(5rem + 1vh);
    }

    .block {
      margin-top: 3rem;
      @media (max-width: 680px) {
        width: 100%;
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
          margin-top: 0;

          :hover {
            background: #00bdd6;
          }
        }
      }
    }

    img {
      max-width: 100%;
      border-radius: 15px;
    }
  }
  .ant-pagination {
    margin: 25px auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
