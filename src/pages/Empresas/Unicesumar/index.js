import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Loader } from 'semantic-ui-react';

import {
  Container,
  Intro,
  Excelencia,
  CursosGraduacao,
  Diferenciais,
  CursosPosGraduacao,
} from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import EmpresaTitle from '../../../components/EmpresaTitle';

import api from '../../../services/api';
import ReactPlayer from 'react-player';

export default function Unicesumar() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api
      .get('pages?slug=unicesumar')
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
          {!!content.acf.indices_de_excelencia && (
            <div className="main-container">
              <Excelencia>
                <div className="title">
                  <h2>
                    Índices de&nbsp;<span>Excelência</span>
                  </h2>
                </div>
                {!!content && (
                  <div className="main-container small">
                    <div className="grid-excelencia">
                      {content.acf.indices_de_excelencia.map((obj) => (
                        <div className="block">
                          <div className="icon">
                            <img src={obj.icone.url} alt="Group" />
                          </div>

                          <div className="title-excelencia">
                            <h2>{obj.texto}</h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Excelencia>
            </div>
          )}
          <div className="main-container">
            <CursosGraduacao>
              <div className="main-container small">
                <div className="title">
                  <h2>
                    Cursos de&nbsp;<span>Graduação</span>
                  </h2>
                </div>
                <div className="description">
                  {!!content && ReactHtmlParser(content.acf.graduacao)}
                </div>
                <div className="button">
                  <a href="/cursos">
                    Conheça todos&nbsp;<span>os cursos</span>
                  </a>
                </div>
                {!!content.acf.diferenciais_graduacao && (
                  <Diferenciais paddingBottomHigher={true}>
                    <div className="title diferenciais">
                      <h2>
                        Nossos&nbsp;<span>Diferenciais</span>
                      </h2>
                    </div>
                    <div className="grid-diferenciais">
                      {content.acf.diferenciais_graduacao.map((obj) => (
                        <div className="block">
                          <div className="icon">
                            <img src={obj.icone.url} alt="Group" />
                          </div>

                          <div className="title-diferenciais">
                            <h2>{obj.texto}</h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Diferenciais>
                )}
              </div>
            </CursosGraduacao>
          </div>
          <div className="main-container">
            <CursosPosGraduacao>
              <div className="main-container small">
                <div className="title">
                  <h2>
                    Cursos de&nbsp;<span>Pós-graduação</span>
                  </h2>
                </div>
                <div className="description">
                  {!!content && ReactHtmlParser(content.acf.pos_graduacao)}
                </div>
                <div className="button">
                  <a href="/cursos">
                    Conheça todos&nbsp;<span>os cursos</span>
                  </a>
                </div>
                {!!content.acf.diferenciais_pos_graduacao && (
                  <Diferenciais paddingBottomHigher={false}>
                    <div className="title diferenciais">
                      <h2>
                        Nossos&nbsp;<span>Diferenciais</span>
                      </h2>
                    </div>
                    <div className="grid-diferenciais">
                      {content.acf.diferenciais_pos_graduacao.map((obj) => (
                        <div className="block">
                          <div className="icon">
                            <img src={obj.icone.url} alt="Group" />
                          </div>

                          <div className="title-diferenciais">
                            <h2>{obj.texto}</h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Diferenciais>
                )}
              </div>
            </CursosPosGraduacao>
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}
