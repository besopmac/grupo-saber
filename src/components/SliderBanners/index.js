import React, { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ReactHtmlParser from 'react-html-parser';

import { Container } from './styles';

// import api from '../../services/api';

export default function SlideBanners(props) {
  const [banners] = useState(props.data);

  return (
    <Container>
      <div className="main-container short">
        <Carousel
          stopAutoPlayOnHover
          autoPlay={3000}
          dots
          arrows
          infinite
          animationSpeed={250}
          breakpoints={{
            640: {
              slidesPerPage: 1,
              arrows: false,
              itemWidth: 450,
              centered: true,
            },
          }}
        >
          {banners.banners.map((data, index) => {
            if (data.acf_fc_layout === 'video') {
              return (
                <div key={Math.random()} className="container-video">
                  {ReactHtmlParser(data.embed_do_youtube)}
                </div>
              );
            } else {
              const val = index % 2;
              let bool;

              if (val === 0) bool = true;
              else bool = false;

              return bool ? (
                <div key={Math.random()} className="container-banners">
                  <div className="grid right">
                    <div className="left-content">
                      <p>{data.titulo}</p>
                      <p>{data.descricao}</p>
                      <div className="button">
                        <a href={data.url_do_botao.url}>{data.texto_botao}</a>
                      </div>
                    </div>
                    <div className="right-content">
                      <img
                        className="top-element"
                        src={require('../../assets/images/top-element-orange.svg')}
                        alt="Top Element"
                      />
                      <div className="image">
                        <img src={data.imagem} alt="" />
                      </div>
                      <img
                        className="bottom-element"
                        src={require('../../assets/images/bottom-banner-orange.svg')}
                        alt="Bottom Element"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div key={Math.random()} className="container-banners">
                  <div className="grid left">
                    <div className="left-content">
                      <p>{data.titulo}</p>
                      <p>{data.descricao}</p>
                      <div className="button">
                        <a href={data.url_do_botao.url}>{data.texto_botao}</a>
                      </div>
                    </div>
                    <div className="right-content">
                      <img
                        className="top-element"
                        src={require('../../assets/images/blue-element.svg')}
                        alt="Top Element"
                      />
                      <div className="image">
                        <img src={data.imagem} alt="" />
                      </div>
                      <img
                        className="bottom-element"
                        src={require('../../assets/images/bottom-element-blue.svg')}
                        alt="Top Element"
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </Carousel>
      </div>
    </Container>
  );
}
