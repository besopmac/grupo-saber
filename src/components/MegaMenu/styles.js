import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  position: absolute;
  background: var(--bg-blue-color);
  left: 0;
  width: fit-content;
  top: 95%;
  z-index: 10;
  border-radius: 1.5rem;
  display: none;
  grid-template-columns: 30% 70%;
  gap: 0 3rem;
  padding: 5rem 7rem;
  width: 100%;

  .area-size {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .left-content {
    .title-cursos {
      position: relative;
      margin-bottom: 3.5rem;
      @media (max-width: 680px) {
        padding-top: 3rem;
        padding-left: 3rem;
      }
      h2 {
        font-family: 'Gilroy-Bold';
        color: var(--font-white-color);
        font-size: 3.5rem;
        text-align: left;
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
          font-size: 7rem;
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

    .image {
      img {
        max-width: 100%;
        border-radius: 1.5rem;
      }
    }
  }

  .menu {
    width: 100%;
    position: relative;

    .blue-pipe {
      position: absolute;
      left: 30.59%;
      top: 9%;
      height: 90%;
      width: 0.1rem;
      background: var(--button-blue-color);
    }
    .blue-pipe-2 {
      position: absolute;
      left: 67.3%;
      top: 9%;
      height: 90%;
      width: 0.1rem;
      background: var(--button-blue-color);
    }
    .white-pipe {
      position: absolute;
      left: 25.5%;
      top: 4%;
      height: 100%;
      width: 0.1rem;
      filter: opacity(0.3);
      background: #fff;
    }

    .orange-pipe {
      position: absolute;
      left: 0;
      top: 9%;
      height: 90%;
      width: 0.1rem;
      background: var(--font-orange-color);
    }

    .titles {
      position: relative;
      ::before {
        content: 'Categorias';
        position: absolute;
        font-family: 'Gilroy-Bold';
        text-transform: uppercase;
        left: 0;
        color: #fff;
      }
      ::after {
        content: 'Cursos';
        position: absolute;
        font-family: 'Gilroy-Bold';
        text-transform: uppercase;
        right: -30rem;
        color: #fff;
      }
    }

    > div {
      width: 100%;
      margin-top: 4rem;
      position: relative;
      height: 45rem;

      ul {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 45rem;
        min-width: 21rem;
        width: 21rem;
        overflow-y: auto;
        overflow-x: hidden;

        li {
          font-family: 'Gilroy-Regular';
          color: #fff;
          margin-left: 1rem;
          cursor: pointer;
          padding: 0.7rem;
          text-transform: uppercase;
          font-size: 1.3rem;
          margin-top: 0.5rem;
        }
      }
      > div {
        max-height: 45rem;
        overflow: auto;
        width: 100%;
        padding-left: 4rem;

        div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 4rem;

          a {
            font-family: 'Gilroy-Regular';
            padding: 0.7rem;
            color: #fff;
            margin-left: 1rem;
            text-transform: uppercase;
            margin-top: 0.5rem;
            :hover {
              background: var(--button-blue-color);
              border-radius: 0.5rem;
              font-family: 'Gilroy-Bold';
            }
          }
        }
      }
    }
  }
`;
