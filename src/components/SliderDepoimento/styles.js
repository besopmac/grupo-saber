import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .BrainhubCarousel__dots .BrainhubCarousel__dot:before {
    width: 9px;
    height: 9px;
    margin-top: 4rem;
    background: var(--font-blue-color);
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot {
    background: none;
  }

  .BrainhubCarousel__arrows span {
    border-color: var(--font-blue-color);
  }

  .BrainhubCarousel__arrowRight:hover,
  .BrainhubCarousel__arrowLeft:hover {
    background-color: #cccccc;
  }

  .BrainhubCarousel__arrowRight,
  .BrainhubCarousel__arrowLeft {
    background-color: #fff;
    border-radius: 10rem;
  }

  .BrainhubCarousel__arrowRight {
    position: absolute;
    right: 4rem;
    top: 50%;
    transform: translateY(-100%);
  }

  .BrainhubCarousel__arrowLeft {
    position: absolute;
    left: 4rem;
    top: 50%;
    transform: translateY(-100%);
  }

  .BrainhubCarousel__container {
    width: 83%;
    margin: 7rem auto 0;

    @media (max-width: 680px) {
      width: 100%;
    }
  }

  .card {
    background: var(--font-white-color);
    border-radius: 1.5rem;
    height: 32rem;
    width: 32rem;
    padding: 1rem 2rem;
    /* box-shadow: 10px 10px 16px -2px rgba(0,0,0,0.09);
-webkit-box-shadow: 10px 10px 16px -2px rgba(0,0,0,0.09);
-moz-box-shadow: 10px 10px 16px -2px rgba(0,0,0,0.09); */
    > p {
      font-family: 'GIlroy-Regular';
      font-size: 1.6rem;
      line-height: 1.6;
      color: var(--font-blue-color);
      padding: 0 2rem;
      margin-top: 3.5rem;
      height: 50%;
    }

    .content {
      display: flex;
      margin-top: 3.5rem;
      /* justify-content: center; */

      .photo {
        img {
          border-radius: 10rem;
          max-width: 7rem;
        }
      }

      .inner-content {
        margin: 1rem 2rem 0;
        p:nth-child(1) {
          font-family: 'GIlroy-Bold';
          font-size: 1.4rem;
          line-height: 1.6;
          color: var(--font-blue-color);
        }
        p:nth-child(2) {
          font-family: 'GIlroy-Regular';
          font-size: 1.4rem;
          line-height: 1.6;
          color: var(--font-grey-color-slider);
        }
      }
    }
  }
`;
