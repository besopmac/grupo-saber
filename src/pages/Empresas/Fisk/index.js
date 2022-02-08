import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Loader } from 'semantic-ui-react';

import {
  Container,
  Intro,
  PossibilidadeDigitais,
  ModalidadeDeEnsino,
  TecnologiaFisk,
  WhyFisk,
  ParaQuem,
} from './styles';

import api from '../../../services/api';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import EmpresaTitle from '../../../components/EmpresaTitle';
import ReactPlayer from 'react-player';
import ModalAntd from '../../../components/ModalAntd';

export default function Fisk() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api.get('pages?slug=fisk').then((response) => setContent(response.data[0]));
  }, []);

  if (content === null) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
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
                className="lines-element"
                src={require('../../../assets/images/lines-fisk.svg')}
                alt=""
              />
              <img
                className="x-element"
                src={require('../../../assets/images/x-fisk.svg')}
                alt=""
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

        <div className="main-container">
          <PossibilidadeDigitais>
            <div className="title">
              <h2>
                Um mundo de&nbsp;<span>possibilidades digitais</span>
              </h2>
            </div>
            <div className="description">
              {!!content &&
                ReactHtmlParser(content.acf.possibilidades_digitais)}
            </div>

            <div className="column-content">
              {!!content &&
                content.acf.items.map((obj) => (
                  <div className="column-block">
                    <div className="content">
                      <div className="logo">
                        <div className="icon">
                          <img src={obj.icone.url} alt="" />
                        </div>
                        <p>{obj.titulo}</p>
                      </div>
                      <div className="text">
                        <p>{obj.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </PossibilidadeDigitais>
          <ModalidadeDeEnsino>
            <img
              className="right-elements"
              src={require('../../../assets/images/right-elements-fisk.svg')}
              alt=""
            />
            <img
              className="left-elements"
              src={require('../../../assets/images/left-elements-fisk.svg')}
              alt=""
            />

            <div className="title">
              <h2>
                Modalidades de&nbsp;<span>ensino</span>
              </h2>
            </div>
            <div className="main-container short">
              <div className="container-modalidades">
                <div className="content-left">
                  <h2>
                    Modalidade <span>regular</span>
                  </h2>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(
                        content.acf.modalidades.modalidade_regular
                      )}
                  </div>
                </div>
                <div className="content-right">
                  <div className="image">
                    <img
                      src={
                        !!content &&
                        content.acf.modalidades.imagem_modalidade_regular.url
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="container-modalidades">
                <div className="content-left">
                  <h2>
                    Modalidade <span>personal</span>
                  </h2>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(
                        content.acf.modalidades.modalidade_personal
                      )}
                  </div>
                </div>
                <div className="content-right">
                  <div className="image">
                    <img
                      src={
                        !!content &&
                        content.acf.modalidades.imagem_modalidade_personal.url
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="container-modalidades">
                <div className="content-left">
                  <h2>
                    Modalidade <span>VIP</span>
                  </h2>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(content.acf.modalidades.modalidade_vip)}
                  </div>
                </div>
                <div className="content-right">
                  <div className="image">
                    <img
                      src={
                        !!content &&
                        content.acf.modalidades.imagem_modalidade_vip.url
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalidadeDeEnsino>
          <TecnologiaFisk>
            <div className="title">
              <h2>
                Tecnologia&nbsp;<span>Fisk</span>
              </h2>
            </div>
            <div className="description">
              {!!content && ReactHtmlParser(content.acf.tecnologia_fisk)}
            </div>
          </TecnologiaFisk>
          <WhyFisk>
            <div className="title">
              <h2>Mas, por que Fisk?</h2>
            </div>

            <div className="main-container small">
              <div className="grid-whyfisk">
                {!!content &&
                  content.acf.por_que_fisk.map((obj) => (
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
          </WhyFisk>
          <ParaQuem>
            <div className="main-container short">
              <div className="grid">
                <div className="block">
                  <div className="image">
                    <img
                      src={require('../../../assets/images/kid-smiling.jpg')}
                      alt="Kid"
                    />
                  </div>
                  <div className="title">
                    <h2>
                      Inglês para
                      <br />
                      <span>Crianças</span>
                    </h2>
                  </div>
                  <div className="age">
                    <p>4 a 10 anos</p>
                  </div>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(content.acf.ingles_para_criancas)}
                  </div>
                </div>

                <div className="block">
                  <div className="image">
                    <img
                      src={require('../../../assets/images/woman-writing.jpg')}
                      alt="Kid"
                    />
                  </div>
                  <div className="title">
                    <h2>
                      Inglês para
                      <br />
                      <span>Adolescentes</span>
                    </h2>
                  </div>
                  <div className="age">
                    <p>acima de 11 anos</p>
                  </div>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(content.acf.ingles_para_adolescentes)}
                  </div>
                </div>

                <div className="block">
                  <div className="image">
                    <img
                      src={require('../../../assets/images/woman-looking-at-man.jpg')}
                      alt="Kid"
                    />
                  </div>
                  <div className="title">
                    <h2>
                      Inglês para
                      <br />
                      <span>Adultos</span>
                    </h2>
                  </div>
                  <div className="age">
                    <p>acima de 15 anos</p>
                  </div>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(content.acf.ingles_para_adultos)}
                  </div>
                </div>
              </div>
              <div className="agendar">
                <img
                  className="last-element"
                  src={require('../../../assets/images/last-element-red.svg')}
                  alt="Last Element"
                />
                <div className="title">
                  <h2>
                    Agende uma aula
                    <br />
                    experimental grátis
                  </h2>
                </div>
                <div className="button">
                  <ModalAntd
                    titulo="Inglês e Espanhol - Fisk"
                    label="aula grátis"
                    titulozao="Agende uma aula experimental grátis"
                    botao="Minha Aula Gratuita"
                    cor="#d71415"
                    assunto={"gratis"}
                  />
                </div>
              </div>
            </div>
          </ParaQuem>
        </div>
        <Footer padding={false} />
      </Container>
    );
  }
}
