import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { Loader } from 'semantic-ui-react';

import {
  Container,
  Intro,
  Qualificacoes,
  TurmaRegular,
  TurmaVip,
  TurmaOnline,
} from './styles';

import Header from '../../../components/Header';
import EmpresaTitle from '../../../components/EmpresaTitle';
import Footer from '../../../components/Footer';

import api from '../../../services/api';
import ReactPlayer from 'react-player';

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api
      .get('pages?slug=centro-de-ensino-saber')
      .then((response) => setContent(response.data[0]));
  }, []);

  if (content === null) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Container>
          <Header />
          <EmpresaTitle
            imageUrl={!!content && content.acf.banner_principal.url}
            title={!!content && content.title.rendered}
            slogan={!!content && content.acf.subtitulo}
            logo={!!content && content.acf.logo.url}
          />
          <Intro>
            <div className="main-container short">
              <div className="container-intro">
                <img
                  className="x"
                  src={require('../../../assets/images/blue-star.svg')}
                  alt="x"
                />
                {!!content && (
                  <div className="content-left">
                    <h2>
                      {content.acf.secao_1.titulo}
                      <br />
                      <span>{content.acf.secao_1.subtitulo}</span>
                    </h2>
                    <div className="description">
                      {ReactHtmlParser(content.acf.secao_1.texto)}
                    </div>
                  </div>
                )}
                <div className="content-right">
                  <img
                    className="element-above-video"
                    src={require('../../../assets/images/element-above-video.svg')}
                    alt="element"
                  />
                  <div className="video">
                    <ReactPlayer
                      style={{ maxWidth: '100%' }}
                      url={content?.acf?.secao_1.video}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Intro>
          <div className="main-container">
            <div className="qualificacoes">
              <div className="title">
                <h2>
                  Nossos <span>Diferenciais</span>
                </h2>
              </div>
              {!!content && (
                <div className="main-container small">
                  <div className="grid-qualificacao">
                    {content.acf.qualificacoes.map((obj) => (
                      <div className="block">
                        <div className="icon">
                          <img src={obj.icone.url} alt="Group" />
                        </div>

                        <div className="title-qualificacao">
                          <h2>{obj.titulo}</h2>
                        </div>

                        <div className="description">
                          <p>{obj.descricao}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <Qualificacoes>
            <div className="main-container">
              <div className="title">
                <h2>Metodologias</h2>
              </div>
              <p className="below-title-qualificacoes">
                {!!content && content.acf.metodologia}
              </p>

              {!!content && (
                <TurmaRegular>
                  <div className="main-container short">
                    <div className="container-intro">
                      <img
                        className="blue-element-gs"
                        src={require('../../../assets/images/blue-element-gs.svg')}
                        alt=""
                      />
                      <div className="content-left">
                        <h2>
                          {' '}
                          Turma
                          <span>&nbsp;Regular</span>
                        </h2>
                        <div className="description">
                          {ReactHtmlParser(content.acf.turma_regular.descricao)}
                        </div>
                        <div className="button">
                          <a href="/cursos">
                            Conheça todos&nbsp;<span>os cursos</span>
                          </a>
                        </div>
                      </div>
                      <div className="content-right">
                        <div className="image">
                          <img
                            src={content.acf.turma_regular.imagem.url}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {!!content.acf.turma_regular.galeria && (
                      <div className="image-gallery">
                        <SimpleReactLightbox>
                          <SRLWrapper>
                            <div className="grid-images">
                              {content.acf.turma_regular.galeria.map(
                                (element) => (
                                  <img
                                    key={element.id}
                                    src={element.url}
                                    alt={element.title}
                                  />
                                )
                              )}
                            </div>
                          </SRLWrapper>
                        </SimpleReactLightbox>
                      </div>
                    )}
                  </div>
                </TurmaRegular>
              )}

              {!!content && (
                <TurmaVip>
                  <div className="main-container short">
                    <div className="container-intro">
                      <img
                        className="orange-element-gs"
                        src={require('../../../assets/images/orange-element-gs.svg')}
                        alt=""
                      />
                      <div className="content-left">
                        <h2>
                          {' '}
                          Aulas
                          <span>&nbsp;VIP</span>
                        </h2>
                        <div className="description">
                          {ReactHtmlParser(content.acf.turma_vip.descricao)}
                        </div>
                        <div className="button">
                          <a href="/cursos">
                            Conheça todos&nbsp;<span>os cursos</span>
                          </a>
                        </div>
                      </div>
                      <div className="content-right">
                        <div className="image">
                          <img src={content.acf.turma_vip.imagem.url} alt="" />
                        </div>
                      </div>
                    </div>
                    {!!content.acf.turma_vip.galeria && (
                      <div className="image-gallery">
                        <SimpleReactLightbox>
                          <SRLWrapper>
                            <div className="grid-images">
                              {content.acf.turma_vip.galeria.map((element) => (
                                <img
                                  key={element.id}
                                  src={element.url}
                                  alt={element.title}
                                />
                              ))}
                            </div>
                          </SRLWrapper>
                        </SimpleReactLightbox>
                      </div>
                    )}
                  </div>
                </TurmaVip>
              )}

              {!!content && (
                <TurmaOnline>
                  <div className="main-container short">
                    <div className="container-intro">
                      <img
                        className="red-element-gs"
                        src={require('../../../assets/images/red-element-gs.svg')}
                        alt=""
                      />
                      <div className="content-left">
                        <h2>
                          {' '}
                          Aulas
                          <span>&nbsp;On-Line</span>
                        </h2>
                        <div className="description">
                          {ReactHtmlParser(content.acf.turma_online.descricao)}
                        </div>
                        <div className="button">
                          <a href="/cursos">
                            Conheça todos&nbsp;<span>os cursos</span>
                          </a>
                        </div>
                      </div>
                      <div className="content-right">
                        <div className="image">
                          <img
                            src={content.acf.turma_online.imagem.url}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {!!content.acf.turma_online.galeria && (
                      <div className="image-gallery">
                        <SimpleReactLightbox>
                          <SRLWrapper>
                            <div className="grid-images">
                              {content.acf.turma_online.galeria.map(
                                (element) => (
                                  <img
                                    key={element.id}
                                    src={element.url}
                                    alt={element.title}
                                  />
                                )
                              )}
                            </div>
                          </SRLWrapper>
                        </SimpleReactLightbox>
                      </div>
                    )}
                  </div>
                </TurmaOnline>
              )}
            </div>
          </Qualificacoes>
          <Footer padding={false} />
        </Container>
      </>
    );
  }
}
