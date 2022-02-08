import styled from 'styled-components';
import image1 from '../../../assets/images/homem_olhando_computador.jpg';
import image2 from '../../../assets/images/girl-computer.jpg';

export const Container = styled.div``;

export const Intro = styled.section`
  background: #1b86d6;
  height: auto;
  margin-top: calc(12rem + 1vh);
  padding-top: calc(10rem + 1vh);
  padding-bottom: 200px;

  .container-intro {
    display: flex;
    position: relative;

    .x {
      position: absolute;
      top: -60%;
      width: 10%;
      left: -10%;
    }

    @media (max-width: 680px) {
      display: inherit;
    }
    .content-left {
      width: 50%;
      @media (max-width: 680px) {
        width: 100%;
      }
      color: #fff;
      h2 {
        font-size: var(--title-size-short);
        font-family: 'Gilroy-Bold';
        margin-bottom: 3rem;

        span {
          font-family: 'Gilroy-Light';
        }
      }

      .description {
        padding-right: 10rem;
        @media (max-width: 680px) {
          padding-right: 0;
        }
        p {
          font-family: 'Gilroy-Regular';
          font-size: 1.6rem;
          margin-bottom: 2rem;
        }

        p.bold {
          font-family: 'Gilroy-Bold';
        }
      }
    }
    .content-right {
      width: 50%;
      display: flex;
      align-items: center;
      @media (max-width: 680px) {
        width: initial;
      }

      .video {
        background: white;
        width: 50rem;
        height: 30rem;
        max-width: 100%;
      }
    }
  }
`;

export const Excelencia = styled.section`
  padding-top: calc(15rem + 1vh);
  position: relative;
  ::before {
    content: '';
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(242, 244, 248, 1) 100%
    );
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    left: 0;
    top: 0;
  }
  height: auto;
  .title {
    position: relative;
    margin-bottom: 3.5rem;
    h2 {
      font-family: 'Gilroy-Bold';
      color: var(--font-blue-color);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;

      ::before {
        content: 'EXCELÊNCIA';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--font-blue-color);
        z-index: -1;
        font-size: 10rem;
        filter: opacity(0.05);
        @media (max-width: 680px) {
          font-size: 5rem;
        }
      }

      span {
        font-family: 'Gilroy-Light';
        color: var(--button-blue-color);
      }
    }
  }

  .grid-excelencia {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 8rem;
    margin-top: calc(8rem + 1vh);
    padding-bottom: calc(30rem + 1vh);
    padding-left: calc(5rem + 1vh);
    padding-right: calc(5rem + 1vh);
    @media (max-width: 680px) {
      gap: 3rem;
      padding-left: 0;
      padding-right: 0;
    }

    .block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #fff;
      width: 90%;
      margin: 0 auto;
      height: 23rem;
      width: 23rem;
      margin: 0 auto;
      box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
      border-radius: 20rem;
      padding-top: calc(4rem + 1vh);
      padding-bottom: calc(2rem + 1vh);

      .icon {
        position: relative;
        ::before {
          content: '';
          width: 2.5rem;
          height: 10rem;
          background: #ffe200;
          position: absolute;
          left: 50%;
          z-index: 1;
          border-radius: 2rem;
          transform: translate(-50%, -15%);
        }
        img {
          position: relative;
          z-index: 3;
          max-width: 7rem;
        }
      }

      .title-excelencia {
        padding-top: calc(1.5rem + 1vh);
        position: relative;
        margin-bottom: 1.4rem;
        h2 {
          font-family: 'Gilroy-Bold';
          color: var(--font-blue-color);
          font-size: 1.6rem;
          width: 15rem;
          text-align: center;
          line-height: 1;
        }
      }
    }
  }
`;

export const CursosGraduacao = styled.section`
  padding-top: calc(32rem + 1vh);
  height: auto;
  position: relative;

  ::before {
    content: '';
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(242, 244, 248, 1) 100%
    );
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    left: 0;
    top: 0;
  }

  ::after {
    content: '';
    position: absolute;
    top: -10%;
    right: 50%;
    background-image: url(${image1});
    background-repeat: no-repeat;
    background-size: cover;
    width: 95.4rem;
    max-width: 100%;
    height: 35.8rem;
    border-radius: 2rem;
    transform: translate(50%, 0);
    @media (max-width: 680px) {
      top: 100px;
      transform: translate(50%, -50%);
      width: 100%;
    }
  }

  .title {
    position: relative;
    margin-bottom: 3.5rem;
      h2 {
      font-family: 'Gilroy-Bold';
      color: var(--font-blue-color);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;

      ::before {
        content: 'GRADUAÇÃO';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--font-blue-color);
        z-index: -1;
        font-size: 10rem;
        filter: opacity(0.05);
        @media (max-width: 680px) {
          font-size: 5rem;
        }
      }

      span {
        font-family: 'Gilroy-Light';
        color: var(--button-blue-color);
      }
    }
  }

  .description {
    padding-left: calc(7rem + 1vw);
    padding-right: calc(7rem + 1vw);
    margin-top: calc(7rem + 1vh);

    @media (max-width: 680px) {
      padding-left: calc(2rem + 1vw);
      padding-right: calc(2rem + 1vw);
    }

    p.bold {
      font-family: 'Gilroy-Bold';
    }

    p {
      padding-top: calc(3rem + 1vh);
      font-family: 'Gilroy-Regular';
      line-height: 1.6;
      font-size: 1.6rem;
      color: var(--font-description-color);
    }
  }

  .button {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(8rem + 1vh);

    a {
      font-family: 'Gilroy-Regular';
      font-size: 2rem;
      color: #fff;
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
      }

      span {
        font-family: 'Gilroy-Bold';
      }
    }
  }
`;

export const Diferenciais = styled.div`
  padding-top: calc(18rem + 1vh);

  .title.diferenciais {
      h2 {
      ::before {
        content: 'VANTAGENS';
      }
    }
  }

  .grid-diferenciais {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 4rem;
    margin-top: calc(10rem + 1vh);
    padding-bottom: ${(props) =>
      props.paddingBottomHigher ? 'calc(40rem + 1vh)' : 'calc(17rem + 1vh)'};

    .block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #fff;
      height: 23rem;
      width: 23rem;
      margin: 0 auto;
      box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
      border-radius: 20rem;
      padding-top: calc(4rem + 1vh);
      padding-bottom: calc(2rem + 1vh);

      .icon {
        position: relative;
        ::before {
          content: '';
          width: 2.5rem;
          height: 8rem;
          background: #ffe200;
          position: absolute;
          left: 50%;
          z-index: 1;
          border-radius: 2rem;
          transform: translate(-50%, -25%);
        }
        img {
          position: relative;
          z-index: 3;
          max-width: 6rem;
        }
      }

      .title-diferenciais {
        padding-top: calc(1.5rem + 1vh);
        position: relative;
        margin-bottom: 1.4rem;
        h2 {
          font-family: 'Gilroy-Bold';
          color: var(--font-blue-color);
          font-size: 1.4rem;
          width: 10rem;
          text-align: center;
          line-height: 1;
        }
      }
    }
  }
`;

export const CursosPosGraduacao = styled.section`
  padding-top: calc(28em + 1vh);
  background: rgb(6, 69, 120);
  background: linear-gradient(
    180deg,
    rgba(6, 69, 120, 1) 0%,
    rgba(6, 41, 70, 1) 100%
  );
  height: auto;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: -10%;
    right: 50%;
    background-image: url(${image2});
    background-repeat: no-repeat;
    background-size: cover;
    width: 95.4rem;
    max-width: 100%;
    height: 35.8rem;
    border-radius: 2rem;
    transform: translate(50%, -5%);
    background-position: 50% center;

    @media (max-width: 680px) {
      top: 100px;
      transform: translate(50%, -50%);
      width: 100%;
    }
  }

  .title {
    position: relative;
    margin-bottom: 3.5rem;
      h2 {
      font-family: 'Gilroy-Bold';
      color: var(--font-white-color);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;

      ::before {
        content: 'PÓS-GRADUAÇÃO';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--font-white-color);
        z-index: 1;
        width: 100%;
        font-size: 10rem;
        filter: opacity(0.05);
        @media (max-width: 680px) {
          font-size: 5rem;
        }
      }

      span {
        font-family: 'Gilroy-Light';
        color: var(--font-white-color);
      }
    }
  }

  .description {
    padding-left: calc(7rem + 1vw);
    padding-right: calc(7rem + 1vw);
    margin-top: calc(7rem + 1vh);
    @media (max-width: 680px) {
      padding-left: calc(2rem + 1vw);
      padding-right: calc(2rem + 1vw);
    }

    p.bold {
      font-family: 'Gilroy-Bold';
    }

    p.bold.background {
      background: #fd8023;
      padding: 0.5rem 3rem;
      margin-top: 2rem;
      width: fit-content;
      @media (max-width: 680px) {
        border-radius: 3rem;
      }
    }

    p {
      padding-top: calc(3rem + 1vh);
      font-family: 'Gilroy-Regular';
      line-height: 1.6;
      font-size: 1.6rem;
      color: var(--font-white-color);
    }
  }
  .button {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(8rem + 1vh);
    padding-bottom: 70px;

    a {
      font-family: 'Gilroy-Regular';
      font-size: 2rem;
      color: #fff;
      background: rgb(241, 39, 17);
      background: linear-gradient(
        90deg,
        rgba(241, 39, 17, 1) 0%,
        rgba(245, 175, 25, 1) 100%
      );
      padding: 1.4rem 3rem;
      border-radius: 3rem;
      @media (max-width: 680px) {
        padding: 1.4rem 2rem;
      }

      span {
        font-family: 'Gilroy-Bold';
      }
    }
  }
`;
