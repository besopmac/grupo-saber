import React, { useEffect, useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import api from '../../services/api';

import { Container } from './styles';

export default function Responsive() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function getCursos() {
      await api.get(`/depoimentos`).then((response) => {
        setContent(response.data);
      });
    }
    getCursos();
  }, []);

  return (
    <Container>
      <Carousel
        arrows
        infinite
        dots
        itemWidth={350}
        animationSpeed={250}
        slidesPerPage={3}
        breakpoints={{
          640: {
            slidesPerPage: 1,
            arrows: false,
          },
          900: {
            slidesPerPage: 2,
            arrows: false,
          },
        }}
      >
        {!!content &&
          content.map((obj) => (
            <div key={obj.id} className="card">
              <p>{obj.acf.depoimento}</p>
              <div className="content">
                <div className="photo">
                  <img src={obj.acf.foto.url} alt="Woman" />
                </div>
                <div className="inner-content">
                  <p>{obj.title.rendered}</p>
                  <p>
                    <span>/ </span>
                    {obj.acf.curso}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </Container>
  );
}
