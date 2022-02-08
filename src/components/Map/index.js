import React from 'react';

import { Container } from './styles';

export default function Map() {
  return (
    <Container>
      <div className="title">
        <h2>
          Estamos localizados{' '}
          <span>
            bem <br />
            no centro de Irati
          </span>
        </h2>
      </div>
      <div className="main-container short">
        <div className="container">
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3366.951620770753!2d-50.64793319343836!3d-25.466554367044832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17dcead908fe2015!2sGrupo%20Saber%20Educacional!5e0!3m2!1spt-BR!2sbr!4v1601753476613!5m2!1spt-BR!2sbr"
            width="100%"
            height="540"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
