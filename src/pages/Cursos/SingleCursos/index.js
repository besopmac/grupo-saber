import React, { useEffect, useState } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import ReactPlayer from 'react-player';

import { Loader } from 'semantic-ui-react';

import { Container } from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import ModalAntd from '../../../components/ModalAntd';

import api from '../../../services/api';

export default function SingleCursos(slug) {
  const [content, setContent] = useState();
  const [bonus, setBonus] = useState(false);
  const [galeria, setGaleria] = useState(false);
  const [titulo, setTitulo] = useState('');

  const getParam = slug.match.params.slug;

  useEffect(() => {
    const getContent = async () => {
      const { data } = await api.get(`curso/${getParam}`);
      setContent(data);

      if (data[0].bonus.titulo !== ' ') {
        setBonus(data[0].bonus);
      }
      if (data[0].galeria) {
        setGaleria(data[0].galeria);
      }
      setTitulo(data[0].titulo);
    };

    getContent();
  }, [getParam]);

  if (content === undefined) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Header />
        <Container>
          <div className="main-container">
            <div className="top-content">
              {!!content &&
                content.map((obj) =>
                  obj.imagem != null ? (
                    <img src={obj.imagem.url} alt={content.title} />
                  ) : (
                    <img
                      src={require('../../../assets/images/banner-single-cursos.jpg')}
                      alt={content.title}
                    />
                  )
                )}
              ;
              <div className="title">
                <h2>{titulo}</h2>
                <p>Cursos que fazem a diferença no futuro</p>
              </div>
            </div>
          </div>
          <div className="main-container short">
            <div className="container">
              <img
                className="x"
                src={require('../../../assets/images/blue-star.svg')}
                alt="x"
              />
              <div className="content-top">
                <div className="content-left">
                  <div className="content-1-top">
                    <div className="title">
                      <h2>
                        <span>Sobre o curso&nbsp;</span>
                        <br />
                        {!!content &&
                          content.map((obj) => obj.curso_mais_requisitado)}
                      </h2>
                    </div>
                    <div className="description bold">
                      {!!content && content.map((obj) => <p>{obj.sobre}</p>)}
                    </div>
                  </div>
                  <div className="content-2-bottom">
                    <div className="title">
                      <h2>
                        <span>O que você vai&nbsp;</span>
                        <br />
                        aprender:
                      </h2>
                    </div>
                    <div className="description">
                      {!!content &&
                        content.map(
                          (obj) =>
                            !!obj.o_que_voce_vai__dominar &&
                            obj.o_que_voce_vai__dominar.map((text, index) => (
                              <div className="content">
                                <span className="number"> • </span>
                                <span className="text">{text.item}</span>
                              </div>
                            ))
                        )}
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <div className="content-3-top">
                    {!!content &&
                      content.map((obj) =>
                        obj.video_do_curso ? (
                          <>
                            <div className="title">
                              <h2>
                                <span>Vídeo do&nbsp;</span>curso
                              </h2>
                            </div>
                            <div className="video">
                              <ReactPlayer
                                style={{ maxWidth: '100%' }}
                                url={obj.video_do_curso}
                              />
                            </div>
                          </>
                        ) : null
                      )}
                  </div>
                  <div className="content-4-bottom">
                    <div className="description">
                      <span className="bold">Duração:&nbsp;</span>
                      {!!content &&
                        content.map((obj) => (
                          <span>{obj.duracao_do_curso}</span>
                        ))}
                    </div>
                    <div className="description">
                      <span className="bold">Modalidade:&nbsp;</span>
                      {!!content &&
                        content.map((obj) => <span>{obj.modalidade}</span>)}
                    </div>
                    <div className="description">
                      <span className="bold">Formação:&nbsp;</span>
                      {!!content &&
                        content.map((obj) => <span>{obj.formacao}</span>)}
                    </div>
                  </div>
                  <ModalAntd titulo={titulo} assunto={"desconto"}/>
                </div>
              </div>
              {!!bonus && (
                <div className="content-bottom">
                  <div className="title">
                    <h2>
                      {bonus.map((obj) => (
                        <span>{obj.titulo}</span>
                      ))}
                      <br />
                      {bonus.map((obj) => obj.subtitulo)}
                    </h2>
                  </div>
                  <div className="description">
                    {bonus.map((obj) => (
                      <span>{obj.descricao}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {!!galeria && (
            <div className="main-container">
              <div className="estrutura">
                <div className="title">
                  <h2>
                    Imagens do <span>Curso</span>
                  </h2>
                </div>
                <div className="main-container short">
                  <SimpleReactLightbox>
                    <SRLWrapper>
                      <div className="grid-images">
                        {galeria.map((photo) => (
                          <img
                            key={photo.id}
                            src={photo.url}
                            alt={photo.title}
                          />
                        ))}
                      </div>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </div>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <div className="main-container short">
            {/* <div className="qualificacoes">
              <div className="title">
                <h2>
                  Tipos de <span>curso:</span>
                </h2>
              </div>
              <div className="main-container short">
                <div className="grid-qualificacao">
                  <div className="block">
                    <div className="title-qualificacao">
                      <h2>Graduação</h2>
                    </div>

                    <div className="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy.
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <div className="title-qualificacao">
                      <h2>Pós-Graduação</h2>
                    </div>

                    <div className="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy.
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <div className="title-qualificacao">
                      <h2>Doutorado</h2>
                    </div>

                    <div className="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy.
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <div className="title-qualificacao">
                      <h2>Profissionalizante</h2>
                    </div>

                    <div className="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy.
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <div className="title-qualificacao">
                      <h2>Tecnologo</h2>
                    </div>

                    <div className="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy.
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <div className="title-qualificacao">
                      <h2>MBA</h2>
                    </div>

                    <div className="description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <Footer padding={false} />
        </Container>
      </>
    );
  }
}
