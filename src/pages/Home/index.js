import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Table, Tag, Space } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import { Loader } from 'semantic-ui-react';


// API
import api from '../../services/api';

import {
  Container,
  Excelencia,
  Tour,
  Depoimento,
  Blog,
  FilterCourses,
  Filtro,
  FiltroModalidade,
} from './styles';

import Header from '../../components/Header';
import Map from '../../components/Map';
import Insta from '../../components/Instagram';
import Footer from '../../components/Footer';
import SliderDepoimento from '../../components/SliderDepoimento';
import SliderBanners from '../../components/SliderBanners';

export default function Home() {
  const { CheckableTag } = Tag;

  const tagsFormacao = ['Curso Livre', 'Graduação', 'Pós-graduação'];

  const tagsModalidade = ['EAD', 'VIP', 'Regular'];

  // States
  const [selecionadasTagsFormacao, setSelecionadasTagsFormacao] = useState('');
  const [selecionadasTagsModalidade, setSelecionadasTagsModalidade] = useState(
    ''
  );

  const [content, setContent] = useState(null);
  const [banners, setBanners] = useState(null);
  const [loadingCursos, setLoadingCursos] = useState(false);
  const [contentBlog, setContentBlog] = useState(null);
  const [nomeDoCuso, setNomeDoCuso] = useState('');
  const [cursos, setCursos] = useState(null);
  const [rota, setRota] = useState({
    formacao: '',
    modalidade: '',
  });

  function createLoaderCursos() {
    return (
      <div className="loader">
        <Loader size="large" active inline="centered" />
      </div>
    );
  }

  /**
   * Callback input nome do curso
   */
  function handleChangeNome(e) {
    setNomeDoCuso(e.target.value);
  }

  /**
   * Pesquisar o curso pelo nome digitado
   */
  function handlePesquisaCurso(e) {
    setLoadingCursos(true);

    // Realizar consulta
    api
      .get('/busca', {
        params: {
          formacao: selecionadasTagsFormacao,
          modalidade: selecionadasTagsModalidade,
          nome: nomeDoCuso,
        },
      })
      .then((response) => {
        setCursos(response.data);
      })
      .catch(function (error) {
        setCursos('');
      });
    setTimeout(() => {
      setLoadingCursos(false);
    }, 500);
  }

  /**
   * Função de callback da formação
   */
  const handleChangeFormacao = (tag, checked) => {
    setLoadingCursos(true);
    // Array filtrando as tags ativas
    const nextSelectedTags = checked
      ? [...selecionadasTagsFormacao, tag]
      : selecionadasTagsFormacao.filter((t) => t !== tag);
    setSelecionadasTagsFormacao(nextSelectedTags);

    // Setando no estado
    setRota({
      formacao: nextSelectedTags,
      modalidade: rota.modalidade,
    });

    api
      .get('/busca', {
        params: {
          formacao: nextSelectedTags,
          modalidade: rota.modalidade,
          nome: nomeDoCuso,
        },
      })
      .then((response) => {
        setCursos(response.data);
      })
      .catch(function (error) {
        setCursos('');
      });
    setTimeout(() => {
      setLoadingCursos(false);
    }, 500);
  };

  /**
   * Callback da tags de Modalidade
   */
  const handleChangeModalidade = (tag, checked) => {
    setLoadingCursos(true);

    // Array filtrando as tags ativas
    const nextSelectedTags = checked
      ? [...selecionadasTagsModalidade, tag]
      : selecionadasTagsModalidade.filter((t) => t !== tag);
    setSelecionadasTagsModalidade(nextSelectedTags);

    // Setando no estado
    setRota({
      formacao: rota.formacao,
      modalidade: nextSelectedTags,
    });

    api
      .get('/busca', {
        params: {
          formacao: rota.formacao,
          modalidade: nextSelectedTags,
          nome: nomeDoCuso,
        },
      })
      .then((response) => {
        setCursos(response.data);
      })
      .catch(function (error) {
        setCursos('');
      });

    setTimeout(() => {
      setLoadingCursos(false);
    }, 500);
  };

  const columns = [
    {
      title: 'Curso',
      dataIndex: 'curso',
      key: 'curso',
      render: (text, record) => <a href={`/cursos/${record.status}`}>{text}</a>,
      width: '30%',
    },
    {
      title: 'Modalidade',
      key: 'modalidade',
      dataIndex: 'modalidade',
      render: (modalidade) => (
        <>
          {modalidade.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      width: '10%',
    },

    {
      title: 'Formação',
      dataIndex: 'formacao',
      key: 'formacao',
      render: (text) => <p>{text}</p>,
      width: '10%',
    },
    {
      title: 'Duração',
      dataIndex: 'duracao_do_curso',
      key: 'duracao_do_curso',
      render: (text) => <p>{text}</p>,
      width: '20%',
    },

    {
      title: 'Status',
      key: 'status',
      render: (text, record) => (
        <Space size="middle">
          <a className="open" href={`/cursos/${record.status}`}>
            Inscrições Abertas
          </a>
        </Space>
      ),
      width: '30%',
    },
  ];

  useEffect(() => {
    async function getCursos() {
      await api.get(`/busca`).then((response) => {
        setCursos(response.data);
      });
    }
    getCursos();
  }, []);

  useEffect(() => {
    const getBlogContent = async () => {
      const { data } = await api.get('posts?_embed&per_page=3');
      setContentBlog(data);
    };
    getBlogContent();
  }, []);

  useEffect(() => {
    api.get('pages?slug=home').then((response) => setContent(response.data[0]));
  }, []);

  useEffect(() => {
    const getBanners = async () => {
      const { data } = await api.get('banners');
      setBanners(data);
    };
    getBanners();
  }, []);

  // Dados dos cursos
  const data =
    !!cursos &&
    cursos.map((dado, index) => ({
      key: dado.ID,
      curso: dado.title,
      formacao: dado.formacao,
      modalidade: [dado.modalidade],
      duracao_do_curso: dado.duracao_do_curso,
      status: dado.slug,
    }));

  if (banners === null) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Helmet>
          <title>Grupo Saber</title>
          <meta
            name="description"
            content="O Grupo Saber é um grupo educacional de Irati-PR que reúne 4 das melhores instituições de Ensino do Brasil, oferecendo a você um mundo de oportunidades em um só lugar."
          />
          <meta
            name="keywords"
            content="grupo, saber, educacao, irati, ead, estudo, faculdade, graduação"
          />
          <meta
            property="og:image"
            content={process.env.PUBLIC_URL + '/screenshot.png'}
          />
        </Helmet>
        <Container>
          <Header></Header>

          <SliderBanners data={banners} />

          <FilterCourses>
            <div className="main-container short">
              <div className="title">
                <h2>
                  Escolha{' '}
                  <span>
                    seu
                    <br /> curso:
                  </span>
                </h2>
              </div>

              <div className="holder">
                <div className="image">
                  <img
                    src={require('../../assets/images/woman-smiling-looking-down.jpg')}
                    alt="Woman"
                  />
                </div>
                <div className="image right">
                  <img
                    src={require('../../assets/images/woman-smiling-looking-down.jpg')}
                    alt="Woman"
                  />
                </div>
              </div>

              <div className="container-courses">
                <div className="search-container">
                  <input
                    type="text"
                    name="search"
                    placeholder="Busque pelo nome do curso"
                    className="search-bar"
                    onChange={handleChangeNome}
                    value={nomeDoCuso}
                  />
                  <button
                    style={{ cursor: 'pointer' }}
                    type="button"
                    onClick={handlePesquisaCurso}
                  >
                    Pesquisar
                  </button>
                  <img
                    style={{ cursor: 'pointer' }}
                    onClick={handlePesquisaCurso}
                    src={require('../../assets/icons/lupa.svg')}
                    alt=""
                  />
                </div>
                <Filtro>
                  <div className="title-container">
                    <span className="title-filter">Filtrar por formação:</span>
                  </div>
                  <div className="tags-container">
                    {tagsFormacao.map((tag) => (
                      <CheckableTag
                        className="tags"
                        key={tag}
                        checked={selecionadasTagsFormacao.indexOf(tag) > -1}
                        onChange={(checked) =>
                          handleChangeFormacao(tag, checked)
                        }
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                  </div>
                </Filtro>

                <FiltroModalidade>
                  <div className="title-container">
                    <span className="title">Filtrar por modalidade:</span>
                  </div>
                  <div className="tags-container">
                    {tagsModalidade.map((tag) => (
                      <CheckableTag
                        className="tags"
                        key={tag}
                        checked={selecionadasTagsModalidade.indexOf(tag) > -1}
                        onChange={(checked) =>
                          handleChangeModalidade(tag, checked)
                        }
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                  </div>
                </FiltroModalidade>

                {loadingCursos ? (
                  createLoaderCursos()
                ) : (
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 800 }}
                    pagination={{ pageSize: 8, showSizeChanger: false }}
                  />
                )}

                <div className="button-all-courses">
                  <a href="/cursos" className="allCourses">
                    Todos os cursos
                  </a>
                </div>
              </div>
            </div>
          </FilterCourses>
          <Excelencia>
            <img
              className="x"
              src={require('../../assets/icons/x.svg')}
              alt="x"
            />

            <img
              className="dots"
              src={require('../../assets/images/dots.svg')}
              alt="dots"
            />

            <div className="title">
              <h2>
                Excelência{' '}
                <span>
                  em <br /> Educação:
                </span>
              </h2>
            </div>

            <div className="main-container short">
              <div className="grupo-saber-description">
                <div className="image">
                  <img
                    src={require('../../assets/images/logo.svg')}
                    alt="Logo"
                  />
                </div>
                <div className="text">
                  {!!content &&
                    ReactHtmlParser(content.acf.excelencia_em_ensino)}
                </div>
                <a href="/quem-somos">
                  <div className="button">Saiba mais</div>
                </a>
              </div>
              <div className="grid-container">
                <div className="grid-block">
                  <div className="logo">
                    <a href="/centro-de-ensino-saber">
                      <img
                        src={require('../../assets/images/CentroEnsinoSaber_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text">
                    <span>Especializado em</span> Qualificação Profissional em
                    diversas áreas.
                  </div>
                  <a
                    href="/centro-de-ensino-saber"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="button">Saiba mais</div>
                  </a>
                </div>
                <div className="grid-block">
                  <div className="logo">
                    <a href="/unicesumar">
                      <img
                        src={require('../../assets/images/Unicesumar_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text">
                    <span>Referência</span> nacional em Graduação e
                    Pós-Graduação.
                  </div>
                  <a
                    href="/unicesumar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="button">Saiba mais</div>
                  </a>
                </div>
                <div className="grid-block">
                  <div className="logo">
                    <a href="/super-cerebro">
                      <img
                        src={require('../../assets/images/SuperCérebro_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text">
                    <span>Inovadora metodologia</span> de ensino com o conceito
                    de academia para o cérebro.
                  </div>
                  <a
                    href="/super-cerebro"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="button">Saiba mais</div>
                  </a>
                </div>
                <div className="grid-block">
                  <div className="logo">
                    <a href="/fisk">
                      <img
                        src={require('../../assets/images/Fisk_Logo.svg')}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text">
                    <span>Inglês e Espanhol</span> com um método exclusivo que
                    não para de evoluir.
                  </div>
                  <a href="/fisk" rel="noopener noreferrer" target="_blank">
                    <div className="button">Saiba mais</div>
                  </a>
                </div>
              </div>
            </div>
          </Excelencia>
          <Tour>
            <div className="grid-container">
              <div className="video">
                {/* <ReactPlayer
                  url={content?.acf?.link_video}
                /> */}
                <iframe
                  width="100%"
                  height="100%"
                  src={content?.acf?.link_video}
                  frameBorder="0"
                  title="video"
                ></iframe>
              </div>
              <div className="text">
                <h2>
                  Faça um{' '}
                  <span>
                    tour
                    <br />
                    pelo Grupo Saber
                  </span>
                </h2>
              </div>
            </div>
          </Tour>
          <Depoimento>
            <div className="title">
              <h2>
                Saiba o que{' '}
                <span>
                  nossos alunos <br /> dizem sobre nós:
                </span>
              </h2>
            </div>
            <div className="slider">
              <div className="main-container short">
                <SliderDepoimento />
              </div>
            </div>
          </Depoimento>
          <Blog>
            <div className="title">
              <h2>
                Últimas notícias{' '}
                <span>
                  do <br /> nosso blog
                </span>
              </h2>
            </div>
            <div className="main-container short">
              <div className="grid-container">
                {!!contentBlog &&
                  contentBlog.map((obj) => (
                    <div key={obj.id} className="block-grid">
                      <a href={`/ebomsaber/${obj.slug}`}>
                        <div className="image">
                          <img
                            src={
                              obj._embedded['wp:featuredmedia'][0].media_details
                                .sizes.full.source_url
                            }
                            alt="noticia"
                          />
                        </div>
                      </a>
                      <div className="title-noticia">
                        <a href={`/ebomsaber/${obj.slug}`}>
                          <p>{obj.title.rendered}</p>
                        </a>
                      </div>
                      <a
                        className="holder-btn"
                        href={`/ebomsaber/${obj.slug}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="button">Continue Lendo</div>
                      </a>
                    </div>
                  ))}
              </div>
              <a className="holder-btn" href="/ebomsaber">
                <div className="button see-more">Ver mais notícias</div>
              </a>
            </div>
          </Blog>
          <Map />
          <Insta />
          <Footer padding />
        </Container>
      </>
    );
  }
}
