import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 680px) {
    padding-top: 0;
  }

  .top-content {
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
    }

    .title {
      text-align: center;
      position: absolute;
      top: 54%;
      left: 50%;
      width: 100%;
      padding: 0 20rem;
      transform: translate(-50%, -50%);
      color: #fff;
      @media (max-width: 680px) {
        top: 64%;
        padding: 0;
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
      left: 50%;
      border-radius: 1rem;
      transform: translate(-50%, -40%);

      @media (max-width: 680px) {
        width: 50%;
        height: 20rem;
        z-index: 99;
        position: absolute;
        top: 150%;
        left: 50%;
      }

      .logo-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        img {
          max-width: 32rem;
          @media (max-width: 680px) {
            max-width: 14rem;
          }
        }
      }
    }
  }
`;
