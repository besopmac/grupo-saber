import styled from 'styled-components';

export const Container = styled.div`
  padding-top: calc(20rem + 1vh);
  height: auto;

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
        content: 'INSTAGRAM';
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
`;

export const InstagramHolder = styled.div`
  padding-top: calc(3rem + 1vw);

  .MuiGrid-grid-md-4 {
    flex-grow: initial;
    max-width: initial;
    flex-basis: initial;
  }

  .MuiGrid-grid-sm-6 {
    flex-grow: initial;
    max-width: initial;
    flex-basis: initial;
  }

  .MuiGrid-grid-xs-12 {
    flex-grow: initial;
    max-width: initial;
    flex-basis: initial;
  }

  .MuiGrid-grid-xs-12 {
    img {
      object-fit: cover;
    }

    :hover {
      filter: opacity(0.6);
    }
  }

  .MuiGrid-item {
    justify-self: center;
  }

  .MuiGrid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
  }
`;
