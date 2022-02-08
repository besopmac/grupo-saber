import styled from 'styled-components';

export const Container = styled.div``;

export const MainContent = styled.section`
  background: rgba(255, 126, 15, 1) 0%;
  height: auto;
  margin-top: calc(12rem + 1vh);
  padding-top: calc(10rem + 1vh);
  position: relative;

  @media (max-width: 680px) {
    padding-bottom: 0;
  }

  .first-elements {
    position: absolute;
    top: -2%;
    left: 15%;
    width: 85%;
    z-index: 1;
  }

  .x {
    position: absolute;
    top: -6%;
    z-index: 2;
    width: 10%;
    left: -2%;
  }

  .container-intro {
    z-index: 10;
    display: flex;
    position: relative;
    @media (max-width: 680px) {
      display: inherit;
    }
    .content-left {
      width: 50%;
      color: #fff;
      @media (max-width: 680px) {
        width: initial;
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
        width: 100%;
      }
    }
  }
`;

export const DesenvolvimentoCognitivo = styled.section`
  padding-top: calc(25rem + 1vh);
  padding-bottom: calc(10rem + 1vh);
  position: relative;

  .second-elements {
    position: absolute;
    top: 14%;
    left: -5%;
    width: 110%;
    z-index: 1;
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
        content: 'DESENVOLVIMENTO';
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
        font-family: 'Homemade Apple', cursive;
        color: var(--font-description-color);
        font-size: 5rem;
        @media (max-width: 680px) {
          font-size: 1.6rem;
        }
      }
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      max-width: 25rem;

      :nth-child(1) {
        max-width: 31rem;
      }
      :nth-child(2) {
        margin-left: -4rem;
      }
      :nth-child(3) {
        max-width: 23rem;
      }
    }
  }

  .description {
    padding-left: calc(10rem + 1vw);
    padding-right: calc(10rem + 1vw);
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

  .image1 {
    padding-top: calc(14rem + 1vh);
    margin: 0 auto;
    width: fit-content;
    img {
      max-width: 100rem;
      @media (max-width: 680px) {
        max-width: 100%;
      }
    }
  }
`;

export const DesenvolvimentoSocioemocional = styled.section`
  padding-top: calc(1rem + 1vh);
  padding-bottom: calc(10rem + 1vh);
  position: relative;

  .third-elements {
    position: absolute;
    top: -15%;
    right: -55%;
    width: 200%;
    z-index: 0;

    @media (max-width: 680px) {
      display: none;
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
        content: 'DESENVOLVIMENTO';
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
        font-family: 'Homemade Apple', cursive;
        color: var(--font-description-color);
        font-size: 5rem;
        @media (max-width: 680px) {
          font-size: 1.6rem;
        }
      }
      @media only screen and (max-width: 600px){
        font-size: 15px;
      }
    }
  }

  .icons {
    margin-top: calc(8rem + 1vh);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 680px) {
      margin-top: 40px;
      display: grid;
      flex-wrap: initial;
      gap: 6rem;
      grid-template-columns: 1fr;
    }

    img {
      max-width: 12rem;
      margin-right: 7rem;

      @media (max-width: 680px) {
        margin-right: initial;
        justify-self: center;
      }

      :nth-child(1) {
        max-width: 9rem;
      }
      :nth-child(3) {
        max-width: 14rem;
      }

      :nth-child(4) {
        max-width: 8.5rem;
      }

      :last-of-type {
        margin-right: 0;
      }
    }
  }

  .container-jogos.fatherOfAll {
    position: relative;
  }

  .container-jogos {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    @media (max-width: 680px) {
      padding-top: calc(5rem + 1vh);
    }

    .content-left {
      color: #fff;

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
          strong{
            font-weight: bold;
          }
        }

        p.bold {
          font-family: 'Gilroy-Bold';
        }
      }
    }
    .imagem {
      position: relative;
      height: 450px;
      justify-content: center;
      align-items: center;
      display: flex;
      img {
        display: flex;
        width: auto;
        height: 350px;
        object-fit: cover;
        justify-content: center;
        align-items: center;
      }
    }
    @media only screen and (max-width: 600px){
      grid-template-columns: 90%;
      .imagem{
        width: 100%;
        height: auto;
        img{
          object-fit: contain;
          width: 100%;
          height: auto;
        }
      }
    }
  }

  #fix {
    .content-left {
      width: 100%;

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

        @media (max-width: 680px) {
          grid-gap: 10px;
        }

        img {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 680px) {
          grid-template-columns: 1fr;
        }
      }
    }
  }

  .images-jogos {
    @media (max-width: 680px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
    }
    img {
      position: absolute;
      border-radius: 1.5rem;
      @media (max-width: 680px) {
        max-width: 100%;
        position: initial;
      }

      :nth-child(1) {
        top: 15%;
        right: -5%;
        max-width: 30%;
        @media (max-width: 680px) {
          max-width: 100%;
        }
      }

      :nth-child(2) {
        top: 30%;
        right: 0;
        max-width: 50%;
        @media (max-width: 680px) {
          max-width: 100%;
        }
      }
      :nth-child(3) {
        top: 110%;
        right: 10%;
        max-width: 30%;
        @media (max-width: 680px) {
          max-width: 100%;
        }
      }
    }
  }
`;

export const SecondContent = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(5rem + 1vh);
  z-index: 10;
  position: relative;

  .title {
    text-align: center;

    h2 {
      font-size: 7rem;
      font-family: 'Gilroy-Bold';
      color: var(--button-blue-color);

      @media (max-width: 680px) {
        font-size: 5rem;
      }
    }
  }

  .column-container {
    .block {
      display: flex;
      margin: 10rem 0;
      align-items: center;
      justify-content: center;
      position: relative;

      .lines-sc {
        position: absolute;
        top: 0;
        left: -5%;

        @media (max-width: 1280px) {
          display: none;
        }
      }

      @media screen and (max-width: 1080px) {
        flex-wrap: wrap;
      }

      img {
        height: 100%;
        width: 40%;
        border-radius: 1.5rem;

        @media (max-width: 680px) {
          width: 100%;
        }
      }

      .texts {
        margin-left: 5rem;
        @media screen and (max-width: 1080px) {
          margin-left: 0;
        }
        h2 {
          font-family: 'Homemade Apple', cursive;
          color: var(--font-orange-color);
          font-size: 5rem;
        }

        p {
          font-size: 1.6rem;
          color: var(--font-description-color);
          font-family: 'Gilroy-Regular';
          line-height: 1.5;
        }

        p:not(:last-of-type) {
          margin-bottom: 1.2rem;
        }
      }
    }
  }
  .agendar {
    padding-top: calc(10rem + 1vh);
    position: relative;

    .last-element {
      position: absolute;
      width: 100%;
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
        color: var(--button-blue-color);
        @media (max-width: 680px) {
          font-size: 3rem;
        }
      }
    }

    .button {
      z-index: 10;
      position: relative;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      margin-top: calc(8rem + 1vh);
      button {
        cursor: pointer;
        font-family: 'Gilroy-Regular';
        font-size: 2rem;
        color: #fff;
        background: rgb(255, 126, 15);
        background: linear-gradient(
          90deg,
          rgba(233, 64, 87, 1) 0%,
          rgba(255, 126, 15, 1) 100%
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
