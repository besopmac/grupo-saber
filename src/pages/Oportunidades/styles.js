import styled from 'styled-components';

import { Form, Input, FileInput } from '@rocketseat/unform';
import UnformMaskedInput from '../../components/UnformMaskedInput';

export const StyledUnformMaskedInput = styled(UnformMaskedInput)`
  background: transparent;
  outline: none;
  border-bottom: 0.6px solid #c3c3c3;
  padding-left: 2rem;
  width: 100%;
  height: 3.5rem;
  border-style: none;
  border-bottom-style: solid;
  font-family: 'Gilroy-Regular';
`;

export const Container = styled.div`
  height: auto;

  .grid-top-content {
    position: relative;
    display: flex;

    @media screen and (max-width: 1080px) {
      flex-wrap: wrap;
    }

    .x {
      position: absolute;
      top: -7%;
      width: 10%;
      left: -9%;
    }

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.1rem;
      bottom: -2%;
      background: var(--border-separator);
    }

    .description {
      h2 {
        font-size: var(--title-size);
        font-family: 'Gilroy-Bold';
        margin-bottom: 1rem;
        padding: 1.4rem 7rem 1.4rem 1rem;
        color: var(--font-blue-color);
        span {
          color: var(--button-blue-color);
          font-family: 'Gilroy-Light';
        }
      }

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
      p.bold-text {
        font-family: 'Gilroy-Bold';
      }
    }

    .description2 {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;

      .element-top-video {
        position: absolute;
        width: 100%;
        z-index: 1;
        top: 0;
        @media (max-width: 680px) {
          top: 4%;
        }
      }
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
    }

    .video {
      width: 50rem;
      position: relative;
      z-index: 3;
      height: 30rem;
      background: var(--font-blue-color);
      margin-bottom: calc(4rem + 1vh);

      iframe {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        @media (max-width: 680px) {
          width: 100%;
        }
      }

      @media (max-width: 680px) {
        width: 100%;
        margin-top: calc(4rem + 1vh);
      }
    }
  }

  .grid-top-content.empresas {
    padding-top: calc(17rem + 1vh);
  }

  .grid-valores {
    margin-top: calc(8rem + 1vh);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    height: auto;
    margin-bottom: 10rem;

    .block {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      margin: 2rem 1.5rem;
      padding: 0 1.5rem 0 5.5rem;

      @media (max-width: 680px) {
        padding: 0;
      }

      :first-of-type::before {
        display: none;
      }

      :first-of-type {
        padding-left: 0;
      }

      :last-of-type {
        padding-right: 0;
      }

      ::before {
        content: '';
        position: absolute;
        width: 0.1rem;
        height: 110%;
        background: var(--border-separator);
        left: 0;

        @media (max-width: 680px) {
          display: none;
        }
      }

      .icon {
        img {
          max-width: 7rem;
        }
        margin-bottom: 5.5rem;
      }

      .title {
        position: relative;
        margin-bottom: 3.5rem;
        h2 {
          font-family: 'Gilroy-Bold';
          color: var(--font-blue-color);
          font-size: 3.5rem;
          text-align: center;
          line-height: 1;
        }
      }

      .title.missao {
        ::before {
          content: 'MISSÃO';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: var(--font-blue-color);
          z-index: -1;
          font-size: 7rem;
          filter: opacity(0.05);
        }
      }

      .title.visao {
        ::before {
          content: 'VISÃO';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: var(--font-blue-color);
          z-index: -1;
          font-size: 7rem;
          filter: opacity(0.05);
        }
      }

      .title.valores {
        ::before {
          content: 'VALORES';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: var(--font-blue-color);
          z-index: -1;
          font-size: 7rem;
          filter: opacity(0.05);
        }
      }

      .description {
        p {
          font-family: 'Gilroy-Regular';
          color: var(--font-description-color);
          font-size: 1.4rem;
          line-height: 1.4;
        }
      }
    }
  }

  .estrutura {
    margin-top: calc(8rem + 1vh);
    padding-bottom: calc(20rem + 1vh);
    background: var(--font-blue-color);
    height: auto;
    position: relative;

    .element-estrutura {
      position: absolute;
      left: 0;
      width: 100%;
      top: 32%;
      z-index: 1;
    }

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

        ::before {
          content: 'ESTRUTURA';
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
      z-index: 4;
      position: relative;
      img {
        max-width: 100%;
        border-radius: 1rem;
        cursor: pointer;
      }
    }
  }

  .qualificacoes {
    margin-top: calc(8rem + 1vh);
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
      padding-top: calc(10rem + 1vh);

      h2 {
        font-family: 'Gilroy-Bold';
        color: var(--font-blue-color);
        font-size: var(--title-size);
        text-align: center;
        line-height: 1;
        z-index: 2;

        ::before {
          content: 'QUALIFICAÇÕES';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, 5%);
          color: #000;
          z-index: -1;
          font-size: 10rem;
          filter: opacity(0.05);
          @media (max-width: 680px) {
            font-size: 5rem;
            transform: translate(-50%, 50%);
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

export const Vagas = styled.section`
  padding: 100px 0;
  min-height: 300px;
  h2 {
    margin: 10rem 0;
    font-size: 20px;
    color: #444444;
    margin-bottom: 50px;
    font-family: 'Gilroy-Regular';
    text-align: center;
  }

  @media (max-width: 768px) {
  }
`;

export const Formulario = styled(Form)`
  display: grid;
  grid-row-gap: 2rem;

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
  .row {
    display: grid;
    grid-column-gap: 2rem;
    margin-bottom: 20px;

    &.row1 {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &.row2 {
      grid-template-columns: 2fr 5fr 1fr 4fr;
    }
    &.row3 {
      grid-template-columns: 5fr 1fr 3fr 3fr 3fr;
    }
    &.row4 {
      /* justify-items: end; */
      grid-template-columns: 0.3fr 1fr;
    }
  }

  .rowFile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;

    label {
      font-size: 1.8rem;
      color: #444444;
    }
  }

  .btnSubmit {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    width: 20%;
    background: #09e398;
    box-shadow: 10px 10px 44px -8px rgba(0, 0, 0, 0.43);
    -webkit-box-shadow: 10px 10px 44px -8px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 10px 10px 44px -8px rgba(0, 0, 0, 0.43);
    color: #fff;
    padding: 1.5rem 1.2rem;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 5rem;
    font-family: 'Gilroy-Bold';
    font-size: 1.7rem;

    @media screen and (max-width: 680px) {
      width: 100%;
    }
  }
  .inputField {
    label {
      font-family: 'Gilroy-Regular';
      color: #444444;
      font-size: 1.4rem;
      display: block;
      white-space: nowrap;
    }

    input {
      margin-bottom: 5px;
    }

    span {
      color: #e57373;
      font-weight: bold;
      position: relative;
      top: 5px;
    }
  }
  @media (max-width: 480px) {
    .row {
      display: grid;
      grid-column-gap: 2rem;
      grid-row-gap: 20px;
      margin-bottom: 20px;
      grid-template-columns: 1fr !important;

      /* &.row1 {
      grid-template-columns: 1fr;
    }
    &.row2 {
      grid-template-columns: 1fr;
    }
    &.row3 {
      grid-template-columns: 5fr 1fr 3fr 3fr 3fr;
    }
    &.row4 {
      /* justify-items: end; */
      /* grid-template-columns: 0.3fr 1fr; */
      /* }  */
    }
  }
`;

export const UnformInput = styled(Input)`
  background: transparent;
  outline: none;
  border-bottom: 0.6px solid #c3c3c3;
  padding-left: 2rem;
  width: 100%;
  height: 3.5rem;
  border-style: none;
  border-bottom-style: solid;
  font-family: 'Gilroy-Regular';
`;

export const UnformFileInput = styled(FileInput)`
  font-size: 1.6rem;
  color: #444444;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  transition: 0.5s ease;
  font-family: 'Gilroy-Bold';

  i {
    font-size: 2rem;
    margin-right: 1.5rem;
  }
`;
