import styled from 'styled-components';
import dots from '../../assets/images/dots.svg';
import pinkbg from '../../assets/images/pinkbg.svg';
import circle from '../../assets/icons/circle.svg';
import triangle from '../../assets/icons/triangle.svg';
import waves from '../../assets/icons/waves.svg';

export const Container = styled.div`
  .ant-table-content {
    overflow: hidden !important;
  }
`;

export const FiltroModalidade = styled.div`
  padding: 0 2rem 25px;
  display: flex;

  @media (max-width: 680px) {
    display: inherit;
    padding: 0 0 25px;
  }
  .tags-container {
    overflow: auto;
    @media (max-width: 680px) {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 1280px) {
      margin-left: 2rem;
    }
  }

  .tags {
    border-radius: 5rem;
  }

  .ant-tag-checkable-checked {
    background-color: #389beb !important;
  }

  .ant-tag-checkable {
    background-color: #d6d6d6;
  }

  .ant-tag-checkable:active,
  .ant-tag-checkable-checked {
    color: #fff;
  }
  .title-container {
    .title {
      font-family: 'Gilroy-Bold';
      font-size: 1.6rem;
    }
  }

  .tags {
    font-size: 1.4rem;
    font-family: 'Gilroy-Medium';

    @media (max-width: 680px) {
      display: flex;
      padding: 0.2rem 1rem;
      width: 100%;
      margin: 6px 0;
    }

    :hover {
      color: #fff;
    }
  }
`;

export const Filtro = styled.div`
  padding: 3rem 2rem 1.5rem;
  display: flex;

  @media (max-width: 680px) {
    display: inherit;
    padding: 3rem 0 1.5rem;
  }
  .tags-container {
    overflow: auto;
    @media (max-width: 680px) {
      margin-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 1280px) {
      margin-left: 2rem;
    }
  }

  .tags {
    border-radius: 5rem;
  }

  .ant-tag-checkable-checked {
    background-color: #389beb !important;
  }

  .ant-tag-checkable {
    background-color: #d6d6d6;
  }

  .ant-tag-checkable:active,
  .ant-tag-checkable-checked {
    color: #fff;
  }
  .title-container {
    .title-filter {
      font-family: 'Gilroy-Bold';
      font-size: 1.6rem;
    }
  }

  .tags {
    font-size: 1.4rem;
    font-family: 'Gilroy-Medium';

    @media (max-width: 680px) {
      display: flex;
      padding: 0.2rem 1rem;
      width: 100%;
      margin: 6px 0;
    }

    :hover {
      color: #fff;
    }
  }
`;

export const FilterCourses = styled.section`
  background-color: var(--bg-blue-color);
  height: auto;
  padding-bottom: calc(12rem + 1vh);

  .main-container {
    display: flex;
    flex-direction: column;
    position: relative;

    .title {
      position: relative;
      margin-bottom: 3.5rem;
      padding-top: 8rem;
      @media (max-width: 680px) {
        padding-top: 3rem;
        padding-left: 0;
      }
      h2 {
        font-family: 'Gilroy-Bold';
        color: var(--font-white-color);
        font-size: var(--title-size);
        text-align: left;
        line-height: 1;
        z-index: 3;
        position: relative;

        ::before {
          content: 'CURSO';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -60%);
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
          color: var(--font-orange-color);
        }
      }
    }

    .holder {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      .image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        transform: translate(-30%, 50%);
        img {
          max-width: 100%;
        }
      }

      .image.right {
        right: 0;
        transform: translate(50%, 50%);
      }
    }

    .container-courses {
      border-radius: 1.5rem;
      background: var(--bg-ice-color);
      align-self: flex-end;
      z-index: 2;
      padding: 3rem;
      position: relative;
      z-index: 10;

      @media (max-width: 680px) {
        width: 100%;
        margin-bottom: 5rem;
        padding: 10px;
        overflow: hidden;
      }

      .loader {
        width: 82rem;
        height: 75rem;

        .ui.centered.inline.loader.active,
        .ui.centered.inline.loader.visible {
          position: absolute;
          top: 50%;
          left: 50%;
        }
      }

      .search-container {
        margin-top: 3rem;
        position: relative;

        @media (max-width: 680px) {
          display: flex;
          flex-direction: column;
        }
        .search-bar {
          width: 100%;
          outline: none;
          background: #fff;
          border-radius: 5rem;
          height: 4rem;
          font-size: 1.4rem;
          padding: 0 2rem;
          border: 1px solid #d6d6d6;

          @media (max-width: 680px) {
            margin-bottom: 10px;
          }

          ::placeholder {
            font-size: 1.4rem;
            font-family: 'Gilroy-Medium';
          }
        }

        button {
          position: absolute;
          right: 0;
          z-index: 2;
          background: #389beb;
          padding: 1rem 7rem 1rem 3rem;
          outline: none;
          height: 4rem;
          border: none;
          border-radius: 5rem;
          color: #fff;
          font-family: 'Gilroy-Medium';
          font-size: 1.4rem;
          cursor: pointer;

          @media (max-width: 680px) {
            position: relative;
            padding: 0;
          }
        }

        img {
          position: absolute;
          right: 3%;
          top: 20%;
          z-index: 3;
          width: 2.5rem;
        }
      }

      @media (max-width: 680px) {
        .ant-table-pagination.ant-pagination {
          margin-top: 5rem;
          width: auto;
        }
      }

      .ant-tag-geekblue {
        color: #fff;
        background: var(--button-blue-color);
        padding: 0.5rem 1.5rem;
        font-weight: bold;
        border: none;
        border-radius: 0.8rem;
      }

      .ant-tag-green {
        color: #fff;
        background: var(--font-orange-color);
        padding: 0.5rem 1.5rem;
        font-weight: bold;
        border: none;
        border-radius: 0.8rem;
      }

      .ant-table-tbody > tr > td {
        vertical-align: middle;
      }
      .ant-table-tbody > tr > td a {
        font-weight: normal;
        font-size: 1.3rem;
        color: var(--bg-blue-color);
      }
      .ant-table-tbody > tr > td p {
        font-weight: normal;
        font-size: 1.3rem;
        color: var(--bg-blue-color);
      }
      .ant-table-thead > tr > th {
        background: transparent;
        padding: 0 16px;
      }

      .ant-space-item a.open {
        color: #fff;
        background: #25e687;
        padding: 0.9rem 1.5rem;
        border-radius: 5rem;
        white-space: nowrap;
      }

      .ant-table-wrapper {
        padding: 0 1rem;
        font-family: 'Gilroy-Bold';
      }
      .ant-table table {
        border-collapse: separate;
        border-spacing: 0px 15px;

        @media (max-width: 680px) {
          width: 100% !important;
        }
      }

      .ant-table-container {
        background: var(--bg-ice-color);

        &:before {
          @media (max-width: 680px) {
            display: none;
          }
        }

        .ant-table-thead {
          tr {
            td {
              text-align: center;
            }
            th:not(:first-child) {
              @media (max-width: 680px) {
                display: none !important;
              }
            }
          }
        }

        .ant-table-tbody {
          tr {
            background: #fff;

            td:first-child {
              border-top-left-radius: 50px;
              border-bottom-left-radius: 50px;
              height: 6rem;
              overflow: hidden;
              width: 50%;
              padding: 0 1rem 0 2rem;

              @media (max-width: 680px) {
                border-top-right-radius: 50px;
                border-bottom-right-radius: 50px;
              }
            }

            td:not(:first-child) {
              @media (max-width: 680px) {
                display: none !important;
              }
            }

            td:last-child {
              border-top-right-radius: 50px;
              border-bottom-right-radius: 50px;
              text-align: right;
            }
          }
        }
      }

      .ant-table-expanded-row-fixed {
        width: 100% !important;
      }
    }

    .button-all-courses {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
      .allCourses {
        padding: 1rem 1.5rem;
        border-radius: 5rem;
        color: #fff;
        font-size: 1.6rem;
        font-family: 'Gilroy-Bold';
        background: var(--font-orange-color);
      }
    }
  }
`;

export const Excelencia = styled.section`
  height: auto;
  padding-top: calc(12rem + 1vh);
  position: relative;

  @media (max-width: 680px) {
    padding-top: calc(3rem + 1vh);
  }

  .x {
    position: absolute;
    top: 7%;
    left: -3%;
    @media (max-width: 620px) {
      display: none;
    }
  }

  .dots {
    position: absolute;
    top: 7%;
    right: -10%;
    @media (max-width: 620px) {
      display: none;
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
        content: 'EXCELÊNCIA';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -75%);
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
        color: var(--font-orange-color);
      }
    }
  }

  .grupo-saber-description {
    padding-left: calc(7rem + 1vw);
    padding-right: calc(7rem + 1vw);
    margin: 6rem auto 5.5rem;

    @media (max-width: 680px) {
      padding-left: calc(2rem + 1vw);
      padding-right: calc(2rem + 1vw);
    }

    .image {
      margin-bottom: 3.5rem;

      img {
        width: 25rem;
      }
    }

    .text {
      position: relative;
      ::before {
        content: '';
        background-image: url(${dots});
        background-repeat: no-repeat;
        background-size: cover;
        width: 10rem;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-150%, 50%);
      }

      p {
        font-family: 'Gilroy-Regular';
        line-height: 1.6;
        font-size: 1.8rem;
        color: var(--font-description-color);

        @media (max-width: 680px) {
          font-size: 1.4rem;
        }
      }
      p:first-of-type {
        margin-bottom: calc(1.5rem + 1vw);
      }
    }

    a {
      color: var(--font-white-color);
      text-transform: uppercase;
      font-family: 'Gilroy-Bold';
      white-space: nowrap;
      font-size: 1rem;

      .button {
        margin-top: calc(2rem + 1vw);
        background: var(--button-blue-color);
        width: 10rem;
        margin-left: auto;
        margin-right: auto;
        padding: 0.5rem 1rem;
        border-radius: 100px;
        text-align: center;
        transition: all ease 350ms;

        :hover {
          background: #00bdd6;
        }
      }
    }
  }

  .grid-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-rows: 25rem;

    .grid-block {
      position: relative;
      text-align: center;

      .logo {
        height: 11rem;
      }

      :nth-child(2) {
        .logo {
          a {
            img {
              max-width: 20rem;
            }
          }
        }
      }

      :nth-child(3) {
        .logo {
          padding: 1rem 0;
          a {
            img {
              max-width: 14rem;
            }
          }
        }
      }

      :nth-child(4) {
        .logo {
          a {
            img {
              max-width: 10rem;
            }
          }
        }
      }

      ::before {
        content: '';
        position: absolute;
        width: 0.1rem;
        height: 25rem;
        background: var(--border-separator);
        left: 0;
        @media (max-width: 680px) {
          display: none;
        }
      }

      .logo {
        padding: 2.5rem 0;
        a {
          img {
            max-width: 12rem;
          }
        }
      }

      .text {
        font-family: 'Gilroy-Regular';
        line-height: 1.6;
        font-size: 1.4rem;
        height: 8rem;
        color: var(--font-blue-color);
        /* width: 20rem; */
        margin: 0 auto;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 2rem;

        span {
          font-family: 'Gilroy-Bold';
        }
      }

      a {
        color: var(--font-white-color);
        text-transform: uppercase;
        font-family: 'Gilroy-Bold';
        white-space: nowrap;
        font-size: 1rem;

        .button {
          margin-top: calc(1rem + 1vw);
          background: var(--button-blue-color);
          width: 10rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          text-align: center;
          margin: 0 auto;
          transition: all ease 350ms;

          :hover {
            background: #00bdd6;
          }
        }
      }
    }

    .grid-block:first-of-type::before {
      display: none;
    }
  }
`;

export const Tour = styled.section`
  height: auto;
  padding-top: calc(10rem + 1vh);

  .grid-container {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    height: fit-content;
    justify-content: center;
    padding: 10rem 10rem 0;
    @media (max-width: 680px) {
      flex-direction: column-reverse;
      padding: initial;
    }

    ::after {
      content: '';
      background-image: url(${pinkbg});
      transform: rotate(180deg);
      background-repeat: no-repeat;
      position: absolute;
      width: 100%;
      max-width: 100%;
      height: 100rem;
      top: 0;
      z-index: -1;
      @media (max-width: 680px) {
        top: initial;
      }
    }

    .video {
      width: 60%;
      height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 3;
      flex-grow: 2;
      flex-shrink: 2;
      overflow: hidden;
      iframe {
        border-radius: 15px;
        width: 70%;
        height: calc(70vw * 0.3);
      }
    }
    .text {
      width: 40%;
      max-width: 100%;
      position: relative;
      margin-top: 5rem;

      ::before {
        content: '';
        background-image: url(${dots});
        background-repeat: no-repeat;
        width: 21rem;
        height: 100%;
        position: absolute;
        left: -85%;
        top: 0;
        transform: translate(-100%, 70%);
      }

      ::after {
        content: '';
        background-image: url(${circle});
        background-repeat: no-repeat;
        width: 26rem;
        background-size: 25rem 16rem;
        height: 20rem;
        top: 69%;
        z-index: 1;
        right: 75%;
        position: absolute;
      }

      @media (max-width: 680px) {
        width: initial;
        margin-top: initial;
        margin: 5rem 0;
      }
      h2 {
        position: relative;
        font-family: 'Gilroy-Bold';
        color: var(--font-blue-color);
        font-size: var(--title-size);
        text-align: left;
        line-height: 1;
        padding-left: 4rem;
        @media (max-width: 680px) {
          font-size: 2.6rem;
          text-align: center;
          padding-left: 0;
        }

        ::before {
          content: 'TOUR';
          font-family: 'Gilroy-Heavy';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-70%, -79%);
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
          color: var(--font-orange-color);
        }
      }
    }
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      .video {
        width: 90%;
        height: 300px;
        margin: auto;
        iframe {
          border-radius: 15px;
          width: 100%;
          height: calc(90vw * 0.7);
        }
      }
      .text {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    padding-top: unset;
  }
`;

export const Depoimento = styled.section`
  height: auto;
  padding-top: calc(23rem + 1vh);

  @media (max-width: 680px) {
    padding-top: calc(12rem + 1vh);
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
      @media (max-width: 680px) {
        font-size: 2.6rem;
      }

      ::before {
        content: 'DEPOIMENTOS';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -75%);
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
        color: var(--font-orange-color);
      }
    }
  }

  .slider {
    background: var(--bg-pink-color);
    height: auto;
    position: relative;
    ::after {
      content: '';
      background-image: url(${pinkbg});
      position: absolute;
      width: 100%;
      max-width: 100%;
      top: -10%;
      height: 100rem;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
`;

export const Blog = styled.section`
  height: auto;
  padding-top: calc(30rem + 1vh);

  .title {
    position: relative;
    margin-bottom: 3.5rem;

    ::after {
      content: '';
      background-image: url(${triangle});
      background-repeat: no-repeat;
      width: 26rem;
      background-size: 26rem 21rem;
      height: 26rem;
      top: -50%;
      z-index: 1;
      right: 10%;
      transform: translate(0, -100%);
      position: absolute;
      @media (max-width: 620px) {
        right: 50%;
        top: -100%;
      }
    }

    ::before {
      content: '';
      background-image: url(${waves});
      background-repeat: no-repeat;
      width: 26rem;
      background-size: 26rem 21rem;
      height: 26rem;
      top: 0;
      z-index: 1;
      left: 10%;
      transform: translate(-80%, -50%);
      position: absolute;
      @media (max-width: 620px) {
        display: none;
      }
    }

    h2 {
      font-family: 'Gilroy-Bold';
      color: var(--font-blue-color);
      font-size: var(--title-size);
      text-align: center;
      line-height: 1;
      @media (max-width: 680px) {
        font-size: 2.6rem;
      }

      ::before {
        content: 'É BOM SABER!';
        font-family: 'Gilroy-Heavy';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -75%);
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
        color: var(--font-orange-color);
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

      :hover {
        background: #00bdd6;
      }
    }
  }

  .see-more {
    margin: 9rem auto 0 auto;
    padding: 1.4rem 2rem !important;
    width: 13rem !important;

    ::before {
      content: '';
      background-image: url(${dots});
      background-repeat: no-repeat;
      background-size: 44rem 16rem;
      width: 27rem;
      height: 20rem;
      position: absolute;
      left: -50%;
      top: 0;
      transform: translate(-250%, 0);
    }
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

    .block-grid {
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
    }
  }
`;
