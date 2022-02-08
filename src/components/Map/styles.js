import styled from 'styled-components';

export const Container = styled.section`
  height: auto;
  padding-top: calc(15rem + 1vh);

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
        content: 'LOCALIZAÇÃO';
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

  .container {
    margin-top: calc(5rem + 1vh);
    display: flex;
    justify-content: center;
    position: relative;
  }

  /* ::before{
        content: 'Centro de Ensino Saber';
        position: absolute;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        align-items: center;
        font-family:'Gilroy-Bold';
        color: var(--font-blue-color);
        top:0;
        left:50%;
        transform: translate(-160%, 0);
        width: 30rem;
        height: 14rem;
        background: #fff;
    }

    ::after{
        content: 'Rua';
        position: absolute;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        align-items: center;
        font-family:'Gilroy-Medium';
        color: var(--font-blue-color);
        top:0;
        left:0;
        transform: translate(50%, 15%);
        width: 30rem;
        height: 14rem;
        background: transparent;
    } */
`;
