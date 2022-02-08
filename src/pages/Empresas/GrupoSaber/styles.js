import styled from 'styled-components';

export const Container = styled.div`
  .qualificacoes {
    padding-bottom: calc(20rem + 1vh);
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
    }

    .title {
      position: relative;
      margin-bottom: 3.5rem;
      padding-top: calc(5rem + 1vh);

      h2 {
        font-family: 'Gilroy-Bold';
        color: var(--font-blue-color);
        font-size: var(--title-size);
        text-align: center;
        line-height: 1;
        z-index: 2;

        ::before {
          content: 'NOSSOS DIFERENCIAIS';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -14%);
          color: #000;
          z-index: -1;
          font-size: 6rem;
          filter: opacity(0.05);
          @media (max-width: 680px) {
            font-size: 5rem;
            top: 67%;
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
      gap: 8rem;
      margin-top: calc(10rem + 1vh);
      @media (max-width: 680px) {
        gap: 2rem;
      }

      .block {
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #fff;
        box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 8px 29px -10px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        padding-top: calc(4rem + 1vh);
        padding-bottom: calc(2rem + 1vh);

        .icon {
          position: relative;
          ::before {
            content: '';
            width: 2.5rem;
            height: 8rem;
            background: #f2f4f8;
            position: absolute;
            left: 50%;
            z-index: 1;
            border-radius: 2rem;
            transform: translate(-50%, -25%);
          }
          img {
            position: relative;
            z-index: 3;
            max-width: 5rem;
          }
        }

        .title-qualificacao {
          padding-top: calc(1.5rem + 1vh);
          position: relative;
          margin-bottom: 1.4rem;
          h2 {
            font-family: 'Gilroy-Bold';
            color: var(--font-blue-color);
            font-size: 1.6rem;
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
          }
        }
      }
    }
  }
`;

export const Intro = styled.section`
  height: auto;
  margin-top: calc(10rem + 1vh);
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(10rem + 1vh);

  .container-intro {
    position: relative;

    .x {
      position: absolute;
      top: -60%;
      width: 10%;
      left: -10%;
    }
    display: flex;
    @media (max-width: 680px) {
      display: inherit;
    }
    .content-left {
      width: 50%;
      @media (max-width: 680px) {
        width: 100%;
      }
      h2 {
        font-size: var(--title-size-short);
        font-family: 'Gilroy-Bold';
        margin-bottom: 3rem;
        color: var(--font-blue-color);
        width: 50%;
        @media (max-width: 680px) {
          width: 100%;
        }
        span {
          font-family: 'Gilroy-Light';
          color: var(--button-blue-color);
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

        p.styled {
          strong {
            background: var(--button-blue-color);
            padding: 0.3rem 1rem;
            color: #fff;
            font-family: 'Gilroy-Bold';
          }
        }
      }
    }
    .content-right {
      width: 50%;
      display: flex;
      align-items: center;
      position: relative;

      @media (max-width: 680px) {
        width: 100%;
        margin-top: 5rem;
      }

      .element-above-video {
        position: absolute;
        top: -23%;
        width: 50rem;
        z-index: 1;
        right: 10%;
        @media (max-width: 680px) {
          top: 9%;
        }
      }
      @media (max-width: 680px) {
        width: initial;
      }

      .video {
        background: var(--font-blue-color);
        width: 50rem;
        z-index: 5;
        position: relative;
        height: 30rem;
        max-width: 100%;
      }
    }
  }
`;

export const Qualificacoes = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(10rem + 1vh);

  .title {
    position: relative;
    margin-bottom: 3.5rem;
      h2 {
      font-family: 'Gilroy-Bold';
      color: var(--font-blue-color);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;
      margin-bottom: 10rem;

      ::before {
        content: 'METODOLOGIAS';
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
  .below-title-qualificacoes {
    font-family: 'Gilroy-Regular';
    font-size: 1.6rem;
    padding-left: calc(15rem + 1vh);
    padding-right: calc(15rem + 1vh);
    text-align: center;
    @media (max-width: 680px) {
      padding-left: calc(2rem + 1vh);
      padding-right: calc(2rem + 1vh);
    }

    span {
      font-family: 'Gilroy-Bold';
    }
  }
`;

export const TurmaRegular = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(10rem + 1vh);

  .container-intro {
    position: relative;
    display: flex;
    @media (max-width: 680px) {
      display: initial;
    }

    .blue-element-gs {
      position: absolute;
      top: 90%;
      right: -8%;
      width: 120%;
      z-index: -1;
      transform: rotate(-10deg);
    }

    .content-left {
      width: 50%;
      @media (max-width: 680px) {
        width: initial;
      }
      h2 {
        font-size: var(--title-size-short);
        font-family: 'Gilroy-Bold';
        margin-bottom: 3rem;
        color: var(--font-blue-color);
        span {
          font-family: 'Gilroy-Light';
          color: var(--button-blue-color);
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

        p.styled {
          span {
            background: var(--button-blue-color);
            padding: 0.3rem 1rem;
            color: #fff;
            font-family: 'Gilroy-Bold';
          }
        }
      }

      .button {
        width: fit-content;

        margin-top: calc(5rem + 1vh);
        a {
          font-family: 'Gilroy-Regular';
          font-size: 2rem;
          color: #fff;
          background: var(--button-blue-color);
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
    }
    .content-right {
      width: 50%;
      display: flex;
      align-items: center;
      @media (max-width: 680px) {
        width: 100%;
        margin-top: 5rem;
      }

      .image {
        img {
          max-width: 100%;
          border-radius: 1.5rem;
          /* @media (max-width: 680px) {
            display: none;
          } */
        }
      }
    }
  }

  .image-gallery {
    .grid-images {
      margin-top: calc(9rem + 1vh);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 1.5rem;
      img {
        max-width: 100%;
        border-radius: 1rem;
        cursor: pointer;
        height: 30rem;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const TurmaVip = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(10rem + 1vh);
  background: var(--font-blue-color);

  .container-intro {
    display: flex;
    color: #fff;
    @media (max-width: 680px) {
      display: initial;
    }

    .orange-element-gs {
      position: absolute;
      top: 40%;
      right: -8%;
      width: 120%;
      z-index: -1;
      transform: rotate(-10deg);
    }
    .content-left {
      width: 50%;
      @media (max-width: 680px) {
        width: initial;
      }
      h2 {
        font-size: var(--title-size-short);
        font-family: 'Gilroy-Bold';
        margin-bottom: 3rem;
        span {
          font-family: 'Gilroy-Light';
          color: var(--font-orange-color);
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

        p.styled {
          span {
            background: var(--button-blue-color);
            padding: 0.3rem 1rem;
            color: #fff;
            font-family: 'Gilroy-Bold';
          }
        }
      }

      .button {
        width: fit-content;

        margin-top: calc(5rem + 1vh);
        a {
          cursor: pointer;
          font-family: 'Gilroy-Regular';
          font-size: 2rem;
          color: #fff;
          background: var(--font-orange-color);
          padding: 1.4rem 3rem;
          border-radius: 3rem;

          span {
            font-family: 'Gilroy-Bold';
          }
        }
      }
    }
    .content-right {
      width: 50%;
      display: flex;
      align-items: center;
      @media (max-width: 680px) {
        width: 100%;
        margin-top: 5rem;
      }

      .image {
        img {
          max-width: 100%;
          border-radius: 1.5rem;
          /* @media (max-width: 680px) {
            display: none;
          } */
        }
      }
    }
  }

  .image-gallery {
    position: relative;
    z-index: 10;
    .grid-images {
      margin-top: calc(9rem + 1vh);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 1.5rem;
      img {
        max-width: 100%;
        border-radius: 1rem;
        cursor: pointer;
        height: 30rem;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const TurmaOnline = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);
  padding-bottom: calc(10rem + 1vh);

  .container-intro {
    display: flex;
    @media (max-width: 680px) {
      display: initial;
    }
    .red-element-gs {
      position: absolute;
      top: 60%;
      right: -8%;
      width: 120%;
      z-index: -1;
      transform: rotate(-10deg);
    }
    .content-left {
      width: 50%;
      padding-top: 42px;

      @media (max-width: 680px) {
        width: initial;
      }
      h2 {
        font-size: var(--title-size-short);
        font-family: 'Gilroy-Bold';
        margin-bottom: 3rem;
        color: var(--font-blue-color);
        span {
          font-family: 'Gilroy-Light';
          color: #e34e4a;
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

        p.styled {
          span {
            background: var(--button-blue-color);
            padding: 0.3rem 1rem;
            color: #fff;
            font-family: 'Gilroy-Bold';
          }
        }
      }

      .button {
        width: fit-content;

        margin-top: calc(5rem + 1vh);
        a {
          font-family: 'Gilroy-Regular';
          font-size: 2rem;
          color: #fff;
          background: #e34e4a;
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
    }
    .content-right {
      width: 50%;
      display: flex;
      align-items: center;
      @media (max-width: 680px) {
        width: 100%;
        margin-top: 5rem;
      }

      .image {
        img {
          max-width: 100%;
          border-radius: 1.5rem;
          /* @media (max-width: 680px) {
            display: none;
          } */
        }
      }
    }
  }

  .image-gallery {
    .grid-images {
      margin-top: calc(9rem + 1vh);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 1.5rem;
      img {
        max-width: 100%;
        border-radius: 1rem;
        cursor: pointer;
        height: 30rem;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;
