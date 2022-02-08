import styled from 'styled-components';

export const Filtro = styled.div`
  padding: 3rem 2rem;
  display: flex;

  @media (max-width: 680px) {
    display: inherit;
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

export const FiltroModalidade = styled.div`
  padding: 0 2rem;
  display: flex;

  @media (max-width: 680px) {
    display: inherit;
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
      width: fit-content;
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
  padding-bottom: calc(15rem + 1vh);

  .main-container {
    display: flex;
    flex-direction: column;

    .container-courses {
      height: auto;
      border-radius: 1.5rem;
      margin-top: 39rem;
      padding: 0 5rem 2rem 5rem;
      z-index: 5;
      width: 100%;
      background: var(--bg-ice-color);
      align-self: center;
      padding: 2rem 3rem;

      @media (max-width: 680px) {
        width: 100%;
        margin-top: 24rem;
        padding: 10px;
        overflow: hidden !important;
      }

      .loader {
        width: 120rem;
        height: 185rem;

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
          top: 8%;
          z-index: 3;
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

      .ant-table-placeholder {
        height: 172rem;
      }

      .ant-table-tbody > tr > td {
        vertical-align: middle;
      }

      .ant-table-tbody > tr > td a {
        font-weight: normal;
        color: var(--bg-blue-color);
      }

      .ant-table-tbody > tr > td p {
        font-weight: normal;
        font-size: 1.3rem;
        color: var(--bg-blue-color);
      }

      .ant-table-thead > tr > th {
        background: transparent;
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
        border-spacing: 0px 20px;
      }

      .ant-table-container {
        background: var(--bg-ice-color);

        .ant-table-thead {
          tr {
            td {
              text-align: center;
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
        @media (max-width: 680px) {
          font-size: 2.7rem;
        }
      }

      p:nth-child(2) {
        font-family: 'Gilroy-Regular';
        font-size: 2.8rem;
        margin-bottom: calc(2rem + 1vh);
        @media (max-width: 680px) {
          font-size: 1.8rem;
        }
      }
    }

    .logo-mini-banner {
      background: #fff;
      width: 50rem;
      height: 20rem;
      position: absolute;
      top: 100%;
      z-index: 10;
      left: 50%;
      border-radius: 1rem;
      transform: translate(-50%, -40%);

      @media (max-width: 680px) {
        width: 50%;
        height: 20rem;
        position: absolute;
        top: 150%;
        left: 50%;
      }

      .logo-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 1rem;
        background: var(--bg-blue-color);
        .title-cursos {
          position: relative;
          margin-bottom: 3.5rem;
          @media (max-width: 680px) {
            padding-top: 3rem;
          }
          h2 {
            font-family: 'Gilroy-Bold';
            color: var(--font-white-color);
            font-size: var(--title-size);
            text-align: center;
            line-height: 1;
            z-index: 3;
            position: relative;

            ::before {
              content: 'CURSO';
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
              color: var(--font-orange-color);
            }
          }
        }
      }
    }
  }

  .content-cursos {
    background: var(--bg-blue-color);
    height: auto;
    padding-bottom: calc(10rem + 1vh);
    margin-top: -1rem;
    position: relative;

    .studentsImage {
      width: 90rem;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translate(-50%, 0);

      @media (max-width: 620px) {
        display: none;
      }
    }
  }

  .ant-table-content {
    overflow: hidden !important;
  }
`;
