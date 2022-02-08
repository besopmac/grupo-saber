import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import { Table, Tag, Space } from 'antd';

import { Container, Filtro, FilterCourses, FiltroModalidade } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Cursos() {
  const { CheckableTag } = Tag;

  const tagsFormacao = ['Curso Livre', 'Graduação', 'Pós-graduação'];

  const tagsModalidade = ['EAD', 'VIP', 'Regular'];

  // States
  const [selecionadasTagsFormacao, setSelecionadasTagsFormacao] = useState('');
  const [selecionadasTagsModalidade, setSelecionadasTagsModalidade] = useState(
    ''
  );

  const [loadingCursos, setLoadingCursos] = useState(false);
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
      title: 'Cursos',
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
      width: '20%',
    },
    {
      title: 'Duração',
      dataIndex: 'duracao_do_curso',
      key: 'duracao_do_curso',
      render: (text) => <p>{text}</p>,
      width: '10%',
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

  if (cursos === null) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Header />
        <Container>
          <div className="main-container">
            <div className="top-content">
              <img
                src={require('../../assets/images/people-group.jpg')}
                alt="Banner"
              />
              <div className="title">
                <h2>Cursos</h2>
                <p>Encontre o curso perfeito para você</p>
              </div>
              <div className="logo-mini-banner">
                <div className="logo-img">
                  <div className="title-cursos">
                    <h2>
                      Escolha{' '}
                      <span>
                        seu
                        <br /> curso:
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-cursos">
              <img
                className="studentsImage"
                src={require('../../assets/images/students.jpg')}
                alt=""
              />
              <FilterCourses>
                <div className="main-container short">
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
                      <button type="button" onClick={handlePesquisaCurso}>
                        Pesquisar
                      </button>
                      <img
                        src={require('../../assets/icons/lupa.svg')}
                        alt=""
                      />
                    </div>
                    <Filtro>
                      <div className="title-container">
                        <span className="title">Filtrar por formação:</span>
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
                            checked={
                              selecionadasTagsModalidade.indexOf(tag) > -1
                            }
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
                        pagination={{ pageSize: 20, showSizeChanger: false }}
                      />
                    )}
                  </div>
                </div>
              </FilterCourses>
            </div>
          </div>
          <Footer padding={false} />
        </Container>
      </>
    );
  }
}
