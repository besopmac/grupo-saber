import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 15rem;
  padding-bottom: 10rem;

  @media (max-width: 680px) {
    padding-bottom: 4rem;
    padding-top: 0;
  }

  .container-video {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    iframe {
      width: 110rem;
      height: 50rem;

      @media (max-width: 620px) {
        width: 100%;
      }
    }
  }

  .container-banners {
    width: 100%;
    .grid {
      padding: 0 2rem;
      .left-content {
        width: 50%;
        padding: 0 4rem;

        @media (max-width: 620px) {
          width: 100%;
          padding: 0 6rem;
        }

        p:first-of-type {
          font-size: 4rem;
          font-family: 'Gilroy-Bold';
          color: var(--bg-blue-color);
          margin-bottom: 1rem;
          line-height: 1.1;

          @media (min-width: 1280px) {
            width: 80%;
          }
        }

        p:last-of-type {
          font-size: 1.6rem;
          font-family: 'Gilroy-Medium';
          color: #a8a8a8;
          @media (min-width: 1280px) {
            width: 60%;
          }
        }
      }

      .right-content {
        position: relative;

        @media (max-width: 620px) {
          margin-top: 4rem;
        }

        .image {
          position: relative;
          z-index: 3;

          @media (max-width: 620px) {
            left: 12%;
          }
          img {
            border-radius: 50%;
            max-width: 50rem;
            width: 50rem;
            object-fit: cover;
            height: 50rem;

            @media (max-width: 620px) {
              width: 30rem;
              height: 30rem;
              max-width: 30rem;
            }
          }
        }
      }
    }

    .grid.left {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 620px) {
        display: flex;
        flex-direction: column;
        align-items: initial;
        justify-content: initial;
      }

      .left-content {
        .button {
          margin-top: 2rem;
          a {
            padding: 1rem 2rem;
            margin-top: 2rem;
            border-radius: 2rem;
            font-family: 'Gilroy-Heavy';
            text-transform: uppercase;
            color: #fff;
            background: var(--button-blue-color);
          }
        }
      }

      .right-content {
        .top-element {
          position: absolute;
          top: 0;
          z-index: 1;
          max-width: 110%;

          @media (max-width: 620px) {
            width: 59%;
            left: 16%;
          }
        }

        .bottom-element {
          position: absolute;
          bottom: 0;
          z-index: 4;
        }
      }
    }

    .grid.right {
      align-items: center;
      display: flex;
      justify-content: space-between;

      @media (max-width: 620px) {
        display: flex;
        flex-direction: column;
        align-items: initial;
        justify-content: initial;
      }

      .button {
        margin-top: 2rem;
        a {
          padding: 1rem 2rem;
          margin-top: 2rem;
          border-radius: 2rem;
          font-family: 'Gilroy-Heavy';
          text-transform: uppercase;
          color: #fff;
          background: var(--font-orange-color);
        }
      }

      .right-content {
        .top-element {
          position: absolute;
          top: 0;
          z-index: 1;
          @media (max-width: 620px) {
            width: 59%;
            left: 16%;
          }
        }
        .bottom-element {
          position: absolute;
          bottom: 0;
          z-index: 4;
        }
      }
    }
  }

  .BrainhubCarousel__container {
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
    background-color: var(--bg-ice-color);
    border-radius: 10rem;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot {
    background: none;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot:before {
    width: 9px;
    height: 9px;
    background: var(--font-blue-color);
    margin-top: 4rem;
  }
  img {
    max-width: 100%;
  }
`;
