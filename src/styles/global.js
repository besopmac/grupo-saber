import { createGlobalStyle } from 'styled-components';
import GilroyBold from '../assets/fonts/Gilroy/Gilroy-Bold.ttf';
import GilroyMedium from '../assets/fonts/Gilroy/Gilroy-Medium.ttf';
import GilroyLight from '../assets/fonts/Gilroy/Gilroy-Light.ttf';
import GilroyThin from '../assets/fonts/Gilroy/Gilroy-Thin.ttf';
import GilroyHeavy from '../assets/fonts/Gilroy/Gilroy-Heavy.ttf';
import GilroyRegular from '../assets/fonts/Gilroy/Gilroy-Regular.ttf';

import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';

export default createGlobalStyle`

@font-face{
    font-family:'Gilroy-Heavy';
    src: url(${GilroyHeavy}) format('truetype');
}

@font-face{
    font-family:'Gilroy-Bold';
    src: url(${GilroyBold}) format('truetype');
}
@font-face{
    font-family:'Gilroy-Medium';
    src: url(${GilroyMedium}) format('truetype');
}
@font-face{
    font-family:'Gilroy-Light';
    src: url(${GilroyLight}) format('truetype');
}
@font-face{
    font-family:'Gilroy-Regular';
    src: url(${GilroyRegular}) format('truetype');
}
@font-face{
    font-family:'Gilroy-Thin';
    src: url(${GilroyThin}) format('truetype');
}

  :root{
    --font-header-color: #A9B1C1;
    --font-orange-color: #FD8023;
    --font-blue-color: #064578;
    --font-white-color: #fff;
    --font-grey-color: #707070;
    --font-description-color: #323E4A;
    --font-grey-color-slider: #A5A09B;
    --font-blockquote-color: #9CA7B2;
    --border-separator: #D8D8D8;
    --border-separator-noticia: #D3D7E0;
    
    --fisk-color-red: #D71415;
    
    --bg-blue-color: #064578;
    --bg-ice-color: #F2F4F8;
    --bg-white-color: #fff;
    --bg-pink-color: #F5F1ED;
  
    --button-blue-color: #22CDE4;
    --button-green-color: #09E398;

    --title-size: 4rem;
    --title-size-short: 3rem;

 
    font-size: 10px;

    @media (max-width: 680px){
      --title-size: 2.6rem;

  }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    scroll-behavior: smooth;

    @media (max-width: 620px){
      overflow-x: hidden;
    }
    
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a, li{
    text-decoration: none;
    list-style: none;
  }


  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-weight: normal;
	/* font: inherit; */
	vertical-align: baseline;
  
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: inherit;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
    margin-bottom: 0;
    color: inherit;
  }

  #megamenu-cursos-livres.open{
    display: grid;
  }

  #megamenu-pos-graduacao.open{
    display: grid;
  }

  #megamenu-graduacao.open{
    display: grid;
  }
  
  .main-container{
    max-width: 100%;
    margin: 0 auto;
    @media (max-width: 680px) {
        padding: 0;
    }
  }

  .main-container.small{
    max-width: 109rem;
    padding: 0 2rem;
    margin: 0 auto;
  }

  .main-container.short{
    max-width: 129rem;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;

    @media (max-width: 680px){
      padding: 0 2rem;

  }
  }

  .ant-modal-root {

    .ant-modal{
      width: 650px;
    }
    .ant-modal-content{
      border-radius: 2rem;
    }
    .ant-modal-body {
      padding: 40px;
      .form-container {
        .text {
          text-align: center;
          margin-bottom: 4rem;

          h3 {
            font-family: 'Gilroy-Bold';
            color: var(--font-orange-color);
            font-size: 2rem;
          }

          p:first-of-type {
            margin-top: 1rem;
            font-family: 'Gilroy-Regular';
            color: var(--font-grey-color);
            font-size: 1.3rem;
            line-height: 1.5;

            span {
              color: var(--font-white-color);
              background: var(--font-orange-color);
              padding: 0.2rem 1rem;
            }
          }

          p:last-of-type {
            color: var(--font-grey-color);
            font-size: 1.3rem;
            margin-top: 0;
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
.ant-select{
  width: 100%;
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
         
        }
        .submit-button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 3rem;
          button {
            background: #09e398;
            color: #fff;
            padding: 1rem 2rem;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            border-radius: 5rem;
            font-family: 'Gilroy-Medium';
            font-size: 1.6rem;

            span {
              font-family: 'Gilroy-Bold';
            }
          }
        }
        
      }
    }

    .ant-modal-footer{
      display: none;
    }
  }


  .float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;

  :hover{
    color: #fafafa;
  }
}

.my-float{
	margin-top:16px;
}

.fas.fa-chevron-right{
  transition: all ease 200ms;
  color: var(--font-header-color);
  margin-left: 1rem;
}

.fas.fa-chevron-right.active{
  transform: rotate(90deg);
}

.megamenu-mobile-1.open{
  .ant-collapse{
  display: inherit;
}

}

.megamenu-mobile-1{
.ant-collapse{
  display: none;
}
}

.megamenu-mobile-2.open{
  .ant-collapse{
  display: inherit;
}
}

.megamenu-mobile-2{
.ant-collapse{
  display: none;
}
}

.megamenu-mobile-3.open{
  .ant-collapse{
  display: inherit;
}
}

.megamenu-mobile-3{
.ant-collapse{
  display: none;
}
}

.ant-collapse-content > .ant-collapse-content-box{
  display: flex;
  flex-direction: column;

  .link-mobile{
    color: #064578;
  }
}

.ui.centered.inline.loader.active, .ui.centered.inline.loader.visible{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}

.ant-pagination-item{
  @media (max-width: 680px){
    min-width: 24px;
    height: 24px;
    line-height: 24px;
  }
}

.ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next{
  @media (max-width: 680px){
    min-width: 24px;
    height: 24px;
    line-height: 24px;
  }
}

.ant-table-pagination.ant-pagination {
  @media (max-width: 680px){
    margin: 3rem auto;
    width: 37rem;

  }
}

.ant-table-pagination-right{
  @media (max-width: 680px){
   float: none;

  }
}

#SRLLightbox{
  > div {
    div:nth-child(4){
      div:nth-child(1){
        > div{
          img{
            max-height: initial;
            width: 80%;

            @media(max-width: 680px){
              width: 100%;
            }
          }
        }
      }
    }
  }
  .SRLImage{
    width: 100%;
  }
}

`;
