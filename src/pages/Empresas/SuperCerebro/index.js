import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Loader } from 'semantic-ui-react';

import {
  Container,
  MainContent,
  DesenvolvimentoCognitivo,
  DesenvolvimentoSocioemocional,
  SecondContent,
} from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import EmpresaTitle from '../../../components/EmpresaTitle';

import api from '../../../services/api';
import ReactPlayer from 'react-player';
import ModalAntd from '../../../components/ModalAntd';

export default function SuperCerebro() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api
      .get('pages?slug=super-cerebro')
      .then((response) => setContent(response.data[0]));
  }, [content]);

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
        <MainContent>
          <div className="main-container short">
            <img
              className="x"
              src={require('../../../assets/icons/x.svg')}
              alt="x"
            />
            <div className="container-intro">
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
            <DesenvolvimentoCognitivo>
              <div className="title">
                <h2>
                  Desenvolvimento&nbsp;<span>Cognitivo</span>
                </h2>
              </div>
              <div className="icons">
                {content.acf.icones_desenvolvimento_cognitivo.map((icone) => (
                  <img src={icone.icone.sizes.medium} alt="icon" />
                ))}
              </div>
              <div className="description">
                {!!content &&
                  ReactHtmlParser(content.acf.desenvolvimento_cognitivo)}
              </div>
              <div className="image1">
                <img
                  src={
                    !!content &&
                    content.acf.imagem_desenvolvimento_cognitivo.url
                  }
                  alt="Imagem"
                />
              </div>
            </DesenvolvimentoCognitivo>
            <DesenvolvimentoSocioemocional>
              {/* <img
                className="third-elements"
                src={require('../../../assets/images/third-elements-sc.svg')}
                alt="Third Elements"
              /> */}
              <div className="title">
                <h2>
                  Desenvolvimento&nbsp;<span>Socioemocional</span>
                </h2>
              </div>
              <div className="icons">
                <img
                  src={require('../../../assets/icons/super_cerebro/lideranca.svg')}
                  alt="icon"
                />
                <img
                  src={require('../../../assets/icons/super_cerebro/sociabilidade.svg')}
                  alt="icon"
                />
                <img
                  src={require('../../../assets/icons/super_cerebro/cooperativismo.svg')}
                  alt="icon"
                />
                <img
                  src={require('../../../assets/icons/super_cerebro/estrategia.svg')}
                  alt="icon"
                />
              </div>
              <div className="container-jogos fatherOfAll">
                <div className="content-left">
                  <h2>
                    Jogos de
                    <br />
                    <span>tabuleiro</span>
                  </h2>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(
                        content.acf.jogos.jogos_de_tabuleiro.conteudo
                      )}
                  </div>
                </div>
                <div className="imagem">
                  <img
                    src={content.acf.jogos.jogos_de_tabuleiro.imagem.sizes.large}
                    alt=""
                  />
                </div>
                <div className="content-left">
                  <h2>
                    Jogos
                    <br />
                    <span>individuais</span>
                  </h2>
                  <div className="description">
                    {!!content &&
                      ReactHtmlParser(
                        content.acf.jogos.jogos_individuais.conteudo
                      )}
                  </div>
                </div>
                <div className="imagem">
                  <img
                    src={content.acf.jogos.jogos_individuais.imagem_em_destaque.sizes.large}
                    alt=""
                  />
                </div>
              </div>
            </DesenvolvimentoSocioemocional>
          </div>
        </MainContent>
        <SecondContent>
          <div className="main-container short">
            <div className="title">
              <h2>
                Pra quem é<br />
                indicado?
              </h2>
            </div>
            {!!content && (
              <div className="column-container">
                <div className="block">
                  <img
                    className="lines-sc"
                    src={require('../../../assets/images/lines-sc.svg')}
                    alt="Lines"
                  />
                  <img
                    src={content.acf.pra_quem_e_indicado.imagem_criancas.url}
                    alt=""
                  />
                  <div className="texts">
                    <h2>Crianças</h2>
                    {ReactHtmlParser(content.acf.pra_quem_e_indicado.criancas)}
                  </div>
                </div>
                <div className="block">
                  <img
                    className="lines-sc"
                    src={require('../../../assets/images/lines-sc.svg')}
                    alt="Lines"
                  />
                  <img
                    src={content.acf.pra_quem_e_indicado.imagem_jovens.url}
                    alt=""
                  />
                  <div className="texts">
                    <h2>Jovens</h2>
                    {ReactHtmlParser(content.acf.pra_quem_e_indicado.jovens)}
                  </div>
                </div>
                <div className="block">
                  <img
                    className="lines-sc"
                    src={require('../../../assets/images/lines-sc.svg')}
                    alt="Lines"
                  />
                  <img
                    src={content.acf.pra_quem_e_indicado.imagem_adultos.url}
                    alt=""
                  />
                  <div className="texts">
                    <h2>Adultos</h2>
                    {ReactHtmlParser(content.acf.pra_quem_e_indicado.adultos)}
                  </div>
                </div>
                <div className="block">
                  <img
                    className="lines-sc"
                    src={require('../../../assets/images/lines-sc.svg')}
                    alt="Lines"
                  />
                  <img
                    src={
                      content.acf.pra_quem_e_indicado.imagem_melhor_idade.url
                    }
                    alt=""
                  />
                  <div className="texts">
                    <h2>Melhor Idade</h2>
                    {ReactHtmlParser(
                      content.acf.pra_quem_e_indicado.melhor_idade
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="agendar">
              <img
                className="last-element"
                src={require('../../../assets/images/last-element.svg')}
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
                  titulo="Super Cérebro"
                  label="aula grátis"
                  titulozao="Agende uma aula experimental grátis"
                  botao="Minha Aula Gratuita"
                  assunto={"gratis"}
                />
              </div>
            </div>
          </div>
        </SecondContent>
        <Footer padding={true} />
      </Container>
    );
  }
}
