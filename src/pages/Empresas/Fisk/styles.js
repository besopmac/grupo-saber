import styled from 'styled-components';
import bgTechFisk from '../../../assets/images/banner-tecnologia-fisk.png';
import image1 from '../../../assets/images/kid-with-phone.jpg';

export const Container = styled.div``;

export const Intro = styled.section`
  background: #d71415;
  height: auto;
  margin-top: calc(12rem + 1vh);
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(10rem + 1vh);

  .container-intro {
    display: flex;
    position: relative;

    .lines-element {
      position: absolute;
      top: 0;
      right: -15%;
      width: 30rem;
      z-index: 1;
      @media (max-width: 680px) {
        display: none;
      }
    }

    .x-element {
      position: absolute;
      top: -40%;
      left: -10%;
      width: 10rem;
      @media (max-width: 680px) {
        display: none;
      }
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
        width: 100%;
      }

      .video {
        background: white;
        width: 50rem;
        height: 30rem;
        position: relative;
        z-index: 10;
        width: 100%;
      }
    }
  }
`;

export const PossibilidadeDigitais = styled.section`
  padding-top: calc(15rem + 1vh);
  padding-bottom: calc(15rem + 1vh);

  background: rgb(242, 244, 248);
  background: linear-gradient(
    180deg,
    rgba(242, 244, 248, 1) 0%,
    rgba(229, 229, 229, 1) 100%
  );
  height: auto;

  .title {
    position: relative;
    margin-bottom: 3.5rem;
    h2 {
      font-family: 'Gilroy-Bold';
      color: var(--fisk-color-red);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;

      ::before {
        content: 'METODOLODGIA';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--font-blue-color);
        z-index: 1;
        font-size: 10rem;
        filter: opacity(0.05);
        @media (max-width: 680px) {
          font-size: 5rem;
        }
      }

      span {
        font-family: 'Gilroy-Light';
        color: var(--fisk-color-red);
      }
    }
  }

  .description {
    padding-left: calc(7rem + 1vw);
    padding-right: calc(7rem + 1vw);
    margin-top: calc(7rem + 1vh);
    max-width: 95rem;
    margin: 0 auto;

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

  .column-content {
    .column-block {
      height: 20rem;
      max-width: 85rem;
      margin: 5rem auto;
      display: flex;
      border-radius: 1.5rem;

      @media (max-width: 680px) {
        height: fit-content;
        max-width: 100%;
        margin: 2rem;
        padding: 3rem;
        align-items: center;
        justify-content: center;
      }

      background: #fff;
      .content {
        display: flex;
        align-items: center;

        @media (max-width: 680px) {
          display: initial;
        }

        .logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem 0 5rem;
          min-width: 170px;

          @media (max-width: 680px) {
            padding: 0;
            margin-bottom: 3rem;
          }
          .icon {
            img {
              max-width: 8rem;
            }
          }
          p {
            margin-top: 1rem;
            font-family: 'Gilroy-Bold';
            color: var(--fisk-color-red);
            font-size: 1.6rem;
          }
        }
        .text {
          padding: 0 2rem;
          @media (max-width: 680px) {
            padding: 0;
          }

          p {
            font-family: 'Gilroy-Regular';
            color: var(--font-description-color);
            font-size: 1.6rem;
          }
        }
      }

      :nth-child(3) {
        .content {
          .logo {
            .icon {
              img {
                max-width: 6rem;
              }
            }
          }
        }
      }
    }
  }
`;

export const ModalidadeDeEnsino = styled.section`
  padding-top: calc(15rem + 1vh);
  padding-bottom: calc(45rem + 1vh);
  position: relative;
  .right-elements {
    position: absolute;
    max-width: 100%;
    width: 150rem;
    right: -50%;
    top: -5%;
    z-index: 1;
    @media (max-width: 680px) {
      right: -71%;
    }
  }
  .left-elements {
    position: absolute;
    width: 100%;
    left: -50%;
    top: -15%;
    z-index: 1;
  }

  .title {
    position: relative;
    margin-bottom: 3.5rem;
    h2 {
      font-family: 'Gilroy-Bold';
      color: var(--fisk-color-red);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;

      ::before {
        content: 'MODALIDADES';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--font-blue-color);
        z-index: 1;
        font-size: 10rem;
        filter: opacity(0.05);
        @media (max-width: 680px) {
          font-size: 5rem;
        }
      }

      span {
        font-family: 'Gilroy-Light';
        color: var(--fisk-color-red);
      }
    }
  }

  .container-modalidades {
    position: relative;
    z-index: 10;
    padding-top: calc(10rem + 1vh);
    display: flex;
    @media (max-width: 680px) {
      display: block;
    }

    .content-left {
      width: 50%;
      color: var(--fisk-color-red);
      @media (max-width: 680px) {
        width: 100%;
      }

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
          color: var(--font-description-color);
        }

        p.bold {
          font-family: 'Gilroy-Bold';
          color: var(--fisk-color-red);
        }
      }
    }
    .content-right {
      width: 50%;
      display: flex;
      align-items: center;
      @media (max-width: 680px) {
        width: 100%;
      }

      .image {
        max-width: 100%;
        img {
          width: 100%;
          border-radius: 1rem;
        }
      }
    }
  }
`;

export const TecnologiaFisk = styled.section`
  padding-top: calc(25rem + 1vh);
  padding-bottom: calc(15rem + 1vh);
  background-image: url(${bgTechFisk});
  background-position: center;
  background-size: cover;
  height: auto;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -10%;
    right: 50%;
    background-image: url(${image1});
    background-repeat: no-repeat;
    background-size: cover;
    width: 83.3rem;
    max-width: 100%;
    height: 36.7rem;
    border-radius: 2rem;
    transform: translate(50%, -40%);
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
        content: 'TECNOLOGIA';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: var(--font-white-color);
        z-index: 1;
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
    padding-left: calc(15rem + 1vw);
    padding-right: calc(15rem + 1vw);
    margin-top: calc(7rem + 1vh);
    max-width: 95rem;
    margin: 0 auto;

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
      color: var(--font-white-color);
    }
  }
`;

export const WhyFisk = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(5rem + 1vh);
  .title {
    text-align: center;

    h2 {
      font-size: 7rem;
      font-family: 'Gilroy-Bold';
      color: var(--fisk-color-red);
    }
  }

  .grid-whyfisk {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    margin-top: calc(3rem + 1vh);

    .block {
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: calc(4rem + 1vh);
      padding-bottom: calc(2rem + 1vh);

      .icon {
        img {
          height: 6rem;
        }
      }

      .title-qualificacao {
        padding-top: calc(1rem + 1vh);
        position: relative;
        margin-bottom: 2rem;
        h2 {
          font-family: 'Gilroy-Bold';
          color: var(--fisk-color-red);
          font-size: 1.6rem;
          text-align: center;
          line-height: 1;
          padding: 0 3rem;
        }
      }
      .description {
        text-align: center;
        p {
          font-family: 'Gilroy-Regular';
          color: var(--font-description-color);
          font-size: 1.6rem;
          line-height: 1.4;
          /* padding: 0 1rem; */
          width: 24rem;
        }
      }
    }
  }
`;

export const ParaQuem = styled.section`
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(20rem + 1vh);

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

    .block {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 2.5rem;
      transition: all ease-out 130ms;

      :hover {
        transform: scale(1.1);
        background: #fff;
        box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.15);
      }
      .image {
        img {
          max-width: 30rem;
          border-radius: 1rem;

          @media (max-width: 680px) {
            max-width: 100%;
          }
        }
      }
      .title {
        align-self: flex-start;
        margin: 2rem 0 1.5rem;

        color: var(--fisk-color-red);
        h2 {
          font-size: 3rem;
          font-family: 'Gilroy-Bold';

          span {
            font-family: 'Gilroy-Light';
          }
        }
      }

      .age {
        margin: 0 0 2rem;
        align-self: flex-start;
        p {
          font-family: 'Gilroy-Regular';
          color: var(--fisk-color-red);
          font-size: 1.8rem;
        }
      }

      .description {
        p.bold {
          color: var(--fisk-color-red);
          font-size: 1.6rem;
          font-family: 'Gilroy-Bold';
        }

        p {
          color: var(--font-description-color);
          font-size: 1.6rem;
          font-family: 'Gilroy-Bold';
          margin-bottom: 2rem;
        }
      }
    }
  }

  .agendar {
    padding-top: calc(15rem + 1vh);
    position: relative;
    .last-element {
      position: absolute;
      width: 43%;
      left: 0;
      top: 17%;
      @media (max-width: 680px) {
        display: none;
      }
    }
    .title {
      text-align: center;

      h2 {
        font-size: 5.5rem;
        font-family: 'Gilroy-Bold';
        color: var(--fisk-color-red);

        @media (max-width: 680px) {
          font-size: 3rem;
        }
      }
    }

    .button {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      margin-top: calc(8rem + 1vh);
      button {
        cursor: pointer;
        font-family: 'Gilroy-Regular';
        font-size: 2rem;
        color: #fff;
        background: rgb(50, 62, 74);
        background: linear-gradient(
          90deg,
          rgba(50, 62, 74, 1) 0%,
          rgba(215, 20, 21, 1) 100%
        );
        padding: 1.4rem 3rem;
        border-radius: 3rem;
        border: 0;

        span {
          font-family: 'Gilroy-Bold';
        }
      }
    }
  }
`;
