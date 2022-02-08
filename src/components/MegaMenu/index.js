import React, { useState, useEffect } from 'react';

import ReactMegaMenu from 'react-mega-menu';
import api from '../../services/api';

import { Container } from './styles';

export default function MegaMenu(props) {
  const [content, setContent] = useState([{}]);

  useEffect(() => {
    api.get(`menu/${props.id}`).then((response) => {
      let array = response.data.menu.map((obj, index) => {
        return {
          label: obj.label,
          key: Math.random(),
          items: [
            obj.items.map((links, index2) => {
              return React.createElement(
                'a',
                {
                  className: 'link',
                  href: `http://gruposaber.com.br/cursos/${links.slug}`,
                  key: Math.random(),
                },
                links.titulo
              );
            }),
          ],
        };
      });

      setContent(array);
    });
  }, [props.id]);

  useEffect(() => {
    const cursosLivres = document.querySelector('.cursos-livre');
    const megamenu = document.getElementById('megamenu-cursos-livres');
    if (cursosLivres != null) {
      cursosLivres.addEventListener('mouseover', () => {
        megamenu.classList.add('open');
        cursosLivres.classList.add('active');
      });
      cursosLivres.addEventListener('mouseout', () => {
        megamenu.classList.remove('open');
        cursosLivres.classList.remove('active');
      });
      megamenu.addEventListener('mouseover', () => {
        megamenu.classList.add('open');
        cursosLivres.classList.add('active');
      });
      megamenu.addEventListener('mouseout', () => {
        megamenu.classList.remove('open');
        cursosLivres.classList.remove('active');
      });
    }

    const graduacao = document.querySelector('.graduacao');
    const megamenu2 = document.getElementById('megamenu-graduacao');
    if (graduacao != null) {
      graduacao.addEventListener('mouseover', () => {
        megamenu2.classList.add('open');
        graduacao.classList.add('active');
      });
      graduacao.addEventListener('mouseout', () => {
        megamenu2.classList.remove('open');
        graduacao.classList.remove('active');
      });
      megamenu2.addEventListener('mouseover', () => {
        megamenu2.classList.add('open');
        graduacao.classList.add('active');
      });
      megamenu2.addEventListener('mouseout', () => {
        megamenu2.classList.remove('open');
        graduacao.classList.remove('active');
      });
    }

    const posGraduacao = document.querySelector('.pos-graduacao');
    const megamenu3 = document.getElementById('megamenu-pos-graduacao');
    if (posGraduacao != null) {
      posGraduacao.addEventListener('mouseover', () => {
        megamenu3.classList.add('open');
        posGraduacao.classList.add('active');
      });
      posGraduacao.addEventListener('mouseout', () => {
        megamenu3.classList.remove('open');
        posGraduacao.classList.remove('active');
      });
      megamenu3.addEventListener('mouseover', () => {
        megamenu3.classList.add('open');
        posGraduacao.classList.add('active');
      });
      megamenu3.addEventListener('mouseout', () => {
        megamenu3.classList.remove('open');
        posGraduacao.classList.remove('active');
      });
    }
  }, []);

  return (
    <Container id={props.class}>
      <div className="left-content">
        <div className="title-cursos">
          <h2>
            Escolha{' '}
            <span>
              seu
              <br /> curso:
            </span>
          </h2>
        </div>
        <div className="image">
          <img src={props.image} alt="" />
        </div>
      </div>

      <div className="menu">
        <span className="blue-pipe"></span>
        <span className="blue-pipe-2"></span>
        <span className="white-pipe"></span>
        <span className="orange-pipe"></span>
        <span className="titles"></span>
        <ReactMegaMenu
          tolerance={50} // optional, defaults to 100
          styleConfig={{
            menuItemSelectedProps: {
              style: {
                borderRadius: '0.5rem',
                background: 'var(--font-orange-color)',
                fontFamily: 'Gilroy-Bold',
              },
            },
          }}
          direction={'RIGHT'} // optional, defaults to "RIGHT", takes in "RIGHT" || "LEFT"
          data={content} // array of data to be rendered
        />
      </div>
    </Container>
  );
}
