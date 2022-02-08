import styled from 'styled-components';
import bannerOrange from '../../assets/images/banner-orange-footer.png';

export const Container = styled.section`
  padding-top: ${(props) => (props.padding ? 'calc(20rem + 1vh)' : '0')};
  position: relative;
  z-index: 10;

  .title {
    position: relative;
    width: fit-content;
    margin: 0 auto;
  }

  .background {
    height: 100%;
    background: var(--font-blue-color);
    img {
      max-width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  h2 {
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: 'Gilroy-Bold';
    color: var(--font-white-color);
    font-size: var(--title-size);
    text-align: center;
    line-height: 1;
    @media (max-width: 680px) {
      font-size: 2.6rem;
    }

    ::before {
      content: 'CONTATO';
      font-family: 'Gilroy-Heavy';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: var(--font-white-color);
      z-index: -1;
      font-size: 10rem;
      filter: opacity(0.2);
      @media (max-width: 680px) {
        font-size: 5rem;
      }
    }

    span {
      font-family: 'Gilroy-Light';
      color: var(--font-white-color);
    }
  }

  .container {
    height: auto;
    background: var(--font-blue-color);
    padding-top: calc(7rem + 1vh);
    padding-bottom: 80px;
    position: relative;
    z-index: 3;

    @media (max-width: 680px) {
      padding-top: calc(40rem + 1vh);
    }

    .info-icons {
      position: absolute;
      width: 68rem;
      top: calc(-11rem + 1vh);
      display: grid;
      z-index: 4;
      line-height: 1;
      grid-template-columns: repeat(3, 1fr);
      /* width: 50%; */
      left: 50%;
      transform: translate(-50%, 50%);
      @media (max-width: 680px) {
        width: initial;
        gap: 2rem;
        grid-template-columns: initial;
        top: calc(-10rem + 1vh);
      }

      .block-info {
        text-align: center;

        p {
          color: var(--font-white-color);
        }
        .icon {
          img {
            width: 4rem;
          }
        }

        .title {
          p {
            font-family: 'Gilroy-Bold';
            font-size: 1rem;
            text-transform: uppercase;
            margin-top: 1.2rem;
            margin-bottom: 0.5rem;
          }
        }

        .address {
          p {
            font-family: 'Gilroy-Regular';
            font-size: 1.1rem;

            a {
              color: #fff;
              white-space: nowrap;
            }
          }
        }
      }
    }

    ::before {
      content: '';
      background-image: url(${bannerOrange});
      width: 75.6rem;
      height: 24.6rem;
      object-fit: cover;
      max-width: 100%;
      position: absolute;
      top: -9%;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;

      @media (max-width: 680px) {
        display: none;
      }
    }

    .form-container {
      position: relative;
      z-index: 2;
      width: 70rem;
      height: auto;
      background: var(--bg-ice-color);
      margin: 0 auto;
      border-radius: 10px;
      padding-left: calc(5rem + 1vw);
      padding-right: calc(5rem + 1vw);
      padding-top: calc(4rem + 1vh);
      padding-bottom: calc(4rem + 1vh);

      @media (max-width: 680px) {
        width: 100%;
        padding-left: calc(3rem + 1vw);
        padding-right: calc(3rem + 1vw);
        margin-top: 8rem;
      }

      .text {
        text-align: center;

        h3 {
          font-family: 'Gilroy-Bold';
          color: var(--font-orange-color);
          font-size: 2rem;
        }

        p:first-of-type {
          margin-top: 2rem;
          font-family: 'Gilroy-Bold';
          color: var(--font-grey-color);
          font-size: 1.3rem;
          line-height: 1.5;

          span {
            color: var(--font-white-color);
            background: var(--font-orange-color);
            padding: 0.4rem 1rem;
            font-family: 'Gilroy-Medium';
          }
        }

        p:last-of-type {
          color: var(--font-grey-color);
          font-size: 1.3rem;
          margin-top: 2rem;
          font-family: 'Gilroy-Bold';
          span {
            font-family: 'Gilroy-Medium';
          }
        }
      }

      form {
        font-size: 1.4rem;
        width: 100%;
        margin-top: 2rem;
        font-family: 'Gilroy-Regular';

        .row-2-items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: space-between;
          .item:not(:first-of-type) {
            margin: 1rem 0 0 2rem;
          }
        }

        .ant-select-single:not(.ant-select-customize-input)
          .ant-select-selector {
          background-color: transparent;
          border: none;
          border-bottom: 0.6px solid #c3c3c3;
        }

        .ant-picker {
          background-color: transparent;
          border: none;
          border-bottom: 0.6px solid #c3c3c3;
          border-bottom-style: none;
        }

        .date-picker {
          width: 100%;
          height: 3.5rem;
        }

        .select {
          width: 100%;
          height: 3.5rem;
          padding: 4px 11px 4px;
        }

        .item {
          margin: 1rem 0;

          label {
            white-space: nowrap;
          }
        }

        input {
          background: transparent;
          outline: none;
          border-bottom: 0.6px solid #c3c3c3;
          padding-left: 2rem;
          width: 100%;
          height: 3.5rem;
          border-style: none;
          border-bottom-style: solid;
        }

        textarea {
          background: transparent;
          outline: none;
          border-bottom: 0.6px solid #c3c3c3;
          padding-left: 2rem;
          padding-top: 2rem;
          width: 100%;
          height: 5rem;
          border-style: none;
          border-bottom-style: solid;
          resize: none;
        }
        .submit-button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 7rem;
          button {
            background: #09e398;
            box-shadow: 10px 10px 44px -8px rgba(0, 0, 0, 0.43);
            -webkit-box-shadow: 10px 10px 44px -8px rgba(0, 0, 0, 0.43);
            -moz-box-shadow: 10px 10px 44px -8px rgba(0, 0, 0, 0.43);
            color: #fff;
            padding: 1rem 2rem;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            border-radius: 5rem;
            font-family: 'Gilroy-Medium';
            font-size: 1.7rem;

            span {
              font-family: 'Gilroy-Bold';
            }
          }
        }
      }
    }

    .sou-aluno {
      padding-top: calc(5rem + 1vh);
      text-align: center;
      color: var(--bg-ice-color);
      p {
        font-family: 'Gilroy-Bold';
        font-size: 1.4rem;
        margin-bottom: calc(0.6rem + 1vh);
      }

      .links {
        @media (max-width: 680px) {
          display: flex;
          flex-direction: column;
        }

        a {
          color: var(--bg-ice-color);
          font-family: 'Gilroy-Regular';
          font-size: 1.3rem;
          padding: 0 1rem;
          filter: opacity(0.7);

          :hover {
            filter: opacity(1);
          }

          @media (max-width: 680px) {
            padding: 15px 0;
          }

          span {
            padding-left: 2.5rem;

            @media (max-width: 680px) {
              display: none;
            }
          }
        }
      }
    }
    .horario-de-atendimento {
      padding-top: calc(4rem + 1vh);
      text-align: center;
      color: var(--bg-ice-color);
      position: relative;

      ::after {
        content: '';
        position: absolute;
        top: 150%;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        filter: opacity(0.2);
        height: 0.1rem;
        background: var(--bg-ice-color);
      }

      p {
        font-family: 'Gilroy-Bold';
        font-size: 1.4rem;
        margin-bottom: calc(0.6rem + 1vh);
      }

      .horarios {
        display: flex;
        justify-content: center;
        p {
          font-family: 'Gilroy-Regular';
          font-size: 1.2rem;
          padding: 0 1rem;
          filter: opacity(0.7);

          span {
            padding-left: 2rem;
            filter: opacity(1);
          }
        }
      }
    }

    .social-networks {
      margin-top: calc(10rem + 1vh);
      position: relative;

      p {
        font-family: 'Gilroy-Bold';
        font-size: 1.4rem;
        text-align: center;
        color: var(--font-white-color);
      }

      ::after {
        content: '';
        position: absolute;
        top: 150%;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        filter: opacity(0.2);
        height: 0.1rem;
        background: var(--bg-ice-color);
        @media (max-width: 680px) {
          top: 110%;
        }
      }

      .holder-social {
        display: flex;
        justify-content: space-evenly;
        padding: 0 12rem;
        @media (max-width: 680px) {
          display: grid;
          grid-template-columns: initial;
          padding: 0;
        }
        .social-block {
          margin-top: calc(3rem + 1vh);
          display: flex;

          @media (max-width: 680px) {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p {
            font-family: 'Gilroy-Regular';
            margin-right: 0.9rem;
          }

          p:nth-child(1) {
            filter: opacity(0.8);
          }

          .insta {
            display: flex;
            justify-content: space-between;

            @media (max-width: 680px) {
              justify-content: initial;
            }
            img {
              height: 20px;
              margin-right: 15px;
            }
            p {
              font-family: 'Gilroy-Bold';
            }
          }

          .facebook {
            display: flex;
            justify-content: space-around;

            @media (max-width: 680px) {
              justify-content: initial;
            }

            img {
              height: 20px;
              margin-right: 15px;
            }
            p {
              font-family: 'Gilroy-Bold';
            }
          }
        }
      }
    }

    .signature {
      margin-top: calc(10rem + 1vh);
      display: flex;
      justify-content: space-evenly;
      @media (max-width: 680px) {
        display: inherit;
        justify-content: initial;
      }

      p {
        font-family: 'Gilroy-Regular';
        font-size: 1.4rem;
        text-align: center;
        color: var(--font-white-color);

        a {
          color: #fff;
          transition: all ease 200ms;

          :hover {
            color: #e8f4ff;
          }
        }

        :first-child {
          margin-bottom: 1rem;
        }
      }

      img {
        margin: 0 1rem;
      }
    }
  }
`;
