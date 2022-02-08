import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Loader } from 'semantic-ui-react';

import { Container } from './styles';

import api from '../../services/api';

import EmpresaTitle from '../../components/EmpresaTitle';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReactPlayer from 'react-player';

export default function QuemSomos() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api
      .get('pages?slug=quem-somos')
      .then((response) => setContent(response.data[0]));
  }, []);

  if (content === null) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Header />
        <Container>
          <EmpresaTitle
            imageUrl={!!content && content.acf.banner_principal.url}
            title={!!content && content.title.rendered}
            slogan={!!content && content.acf.subtitulo}
            logo={!!content && content.acf.logo.url}
          />
          <div className="main-container short">
            {!!content && (
              <div className="grid-top-content empresas">
                <img
                  className="x"
                  src={require('../../assets/images/blue-star.svg')}
                  alt="x"
                />
                <div className="description">
                  <h2>
                    Nascemos para&nbsp;
                    <span>
                      fazer <br />a diferença{' '}
                    </span>
                  </h2>
                  {ReactHtmlParser(content.acf.secao_1.texto_da_esquerda)}
                </div>
                <div className="description2">
                  <img
                    className="element-top-video"
                    src={require('../../assets/images/element-video-quem-somos.svg')}
                    alt=""
                  />
                  <div className="video">
                    <ReactPlayer
                      style={{ maxWidth: '100%' }}
                      url={content?.acf?.secao_1.video}
                    />
                  </div>
                  {ReactHtmlParser(content.acf.secao_1.texto_da_direita)}
                </div>
              </div>
            )}

            {!!content && (
              <div className="grid-valores">
                <div className="block">
                  <div className="icon">
                    <img src={content.acf.missao.icone} alt="Group" />
                  </div>

                  <div className="title missao">
                    <h2>Missão</h2>
                  </div>

                  <div className="description">
                    <p>{content.acf.missao.descricao}</p>
                  </div>
                </div>
                <div className="block">
                  <div className="icon">
                    <img src={content.acf.visao.icone} alt="Group" />
                  </div>

                  <div className="title visao">
                    <h2>Visão</h2>
                  </div>

                  <div className="description">
                    <p>{content.acf.visao.descricao}</p>
                  </div>
                </div>
                <div className="block">
                  <div className="icon">
                    <img src={content.acf.valores.icone} alt="Group" />
                  </div>

                  <div className="title valores">
                    <h2>Valores</h2>
                  </div>

                  <div className="description">
                    <p>{ReactHtmlParser(content.acf.valores.descricao)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="main-container">
            <div className="estrutura">
              <img
                className="element-estrutura"
                src={require('../../assets/images/estrutura-quem-somos.svg')}
                alt="Element"
              />
              <div className="title">
                <h2>
                  Nossa <span>Estrutura</span>
                </h2>
              </div>
              <div className="main-container short">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <div className="grid-images">
                      {!!content &&
                        content.acf.nossa_estrutura.map((element) => (
                          <img
                            className="photos__"
                            key={element.id}
                            src={element.url}
                            alt={element.title}
                          />
                        ))}
                    </div>
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </div>
          </div>
          <Footer padding={false} />
        </Container>
      </>
    );
  }
}
