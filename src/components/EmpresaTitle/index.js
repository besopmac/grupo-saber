import React from 'react';

import { Container } from './styles';

export default function EmpresaTitle(props) {
  return (
    <>
      <Container>
        <div className="main-container">
          <div className="top-content">
            <img src={props.imageUrl} alt="Banner" />
            <div className="title">
              <h2>{props.title}</h2>
              <p>{props.slogan}</p>
            </div>
            <div className="logo-mini-banner">
              <div className="logo-img">
                <img src={props.logo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
