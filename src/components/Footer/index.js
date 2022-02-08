import React, { useEffect, useState } from 'react';
import { DatePicker, Select, ConfigProvider } from 'antd';
import 'moment/locale/pt-br';
import locale from 'antd/es/locale/pt_BR';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { notification } from 'antd';

import { Container } from './styles';
import ademail from '../../services/ademail';

export default function Footer(props) {
  const [cidades, setCidades] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [cidadeSelected, setCidadeSelected] = useState(null);
  const { Option } = Select;

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },

    validationSchema: Yup.object({
      nome: Yup.string().required('Campo nome é obrigatório'),
      email: Yup.string()
        .email('Informe um e-mail válido')
        .required('Campo e-mail é obrigatório'),
      telefone: Yup.string().required('Campo telefone é obrigatório'),
      mensagem: Yup.string().required('Campo mensagem é obrigatório'),
    }),

    onSubmit: async (values, { resetForm }) => {
      const body = `
                <p>Nome: ${values.nome}</p>
                <p>Data de Nascimento: ${dataNascimento}</p>
                <p>E-mail: ${values.email}</p>
                <p>Telefone: ${values.telefone}</p>
                <p>Cidade: ${cidadeSelected}</p>
                <p>Mensagem: ${values.mensagem}</p>
              `;

      const mail = {
        to: 'atendimento@gruposaber.com.br',
        from: values.email,
        as: values.nome,
        bcc: JSON.stringify(['web@agenciaade.com.br']),
        subject: 'Novo contato via site - Grupo Saber',
        message: body,
      };

      try {
        // Sucesso ao enviar
        await ademail.post('/email', mail);

        notification.success({
          message: 'Contato enviado com sucesso! 🚀',
          placement: 'bottomRight',
        });

        resetForm();
      } catch (error) {
        // Erro ao enviar

        notification.error({
          message: 'Não foi possivel enviar o contato! 😔',
          description: 'Verfique os campos e tente novamente mais tarde...',
          placement: 'bottomRight',
        });
      }
    },
  });

  const handleDataNascimento = (date, data_nascimento) => {
    setDataNascimento(data_nascimento);
  };

  const handleCidade = (val) => {
    setCidadeSelected(val);
  };

  useEffect(() => {
    const api = axios.create({
      baseURL:
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/microrregioes',
    });

    const getContent = async () => {
      const { data } = await api.get();
      setCidades(data);
    };

    getContent();
  }, []);

  return (
    <>
      <Container padding={props.padding} id="contato">
        <div className="title">
          <div id="goto-contato" className="background">
            <img
              src={require('../../assets/images/banner-footer.png')}
              alt="Banner"
            />
          </div>
          <h2 id="titulo-contato">
            Fale com a <span>gente</span>
          </h2>
        </div>
        <div className="container" id="contato-infos">
          <div className="info-icons">
            <div className="block-info">
              <div className="icon">
                <img src={require('../../assets/icons/pin.svg')} alt="Pin" />
              </div>
              <div className="title">
                <p>Endereço:</p>
              </div>
              <div className="address">
                <p>
                  <a
                    target="__blank"
                    rel="noopener noreferrer"
                    href="https://g.page/grupo-saber-educacional?share"
                  >
                    Rua Coronel Emilio Gomes, 362 - Irati - PR, 84500-054
                  </a>
                </p>
              </div>
            </div>
            <div className="block-info" id="form-contato">
              <div className="icon">
                <img
                  src={require('../../assets/icons/phone-footer.svg')}
                  alt="Phone"
                />
              </div>
              <div className="title">
                <p>Telefone:</p>
              </div>
              <div className="address">
                <p>
                  <a href="tel:+5542998701010">42 9 9870-1010</a> |{' '}
                  <a href="tel:+554234231010">3423-1010</a>
                </p>
              </div>
            </div>
            <div className="block-info">
              <div className="icon">
                <img
                  src={require('../../assets/icons/mail.svg')}
                  alt="E-mail"
                />
              </div>
              <div className="title">
                <p>E-MAIL:</p>
              </div>
              <div className="address">
                <p>
                  <a href="mailto:atendimento@gruposaber.com.br">
                    atendimento@gruposaber.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="text">
              <h3>Que tal um curso Gratuito?</h3>
              <p>
                Para te auxiliar na sua próxima entrevista de emprego, queremos
                te presentear com uma{' '}
                <span>
                  Bolsa de 100% de desconto no Curso de Empregabilidade On-line.
                </span>
              </p>
              <p>
                <span>Faça sua inscrição abaixo e</span> receba o acesso ao
                curso no seu e-mail
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="content">
                <div className="row-2-items">
                  <div className="item">
                    <label htmlFor="nome">Nome:</label>
                    <br />
                    <input
                      type="text"
                      name="nome"
                      value={formik.values.nome}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.nome && formik.errors.nome ? (
                      <span>{formik.errors.nome}</span>
                    ) : null}
                  </div>
                  <div className="item">
                    <label htmlFor="data_nascimento">Data de nascimento:</label>
                    <br />
                    <ConfigProvider locale={locale}>
                      <DatePicker
                        inputReadOnly
                        className="date-picker"
                        format="DD-MM-YYYY"
                        onChange={handleDataNascimento}
                      />
                    </ConfigProvider>
                  </div>
                </div>

                <div className="item">
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span>{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="row-2-items">
                  <div className="item">
                    <label htmlFor="telefone">Telefone:</label>
                    <br />
                    <InputMask
                      type="text"
                      name="telefone"
                      mask={'(99) 9 9999-9999'}
                      value={formik.values.telefone}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.telefone && formik.errors.telefone ? (
                      <span>{formik.errors.telefone}</span>
                    ) : null}
                  </div>
                  <div className="item">
                    <label htmlFor="cidade">Cidade:</label>
                    <Select className="select" onChange={handleCidade}>
                      {!!cidades &&
                        cidades.map((obj) => (
                          <Option key={obj.id} value={obj.nome}>
                            {obj.nome}
                          </Option>
                        ))}
                    </Select>
                  </div>
                </div>
                

                <div className="item">
                  <label htmlFor="mensagem">Mensagem:</label>
                  <br />
                  <textarea
                    type="text"
                    name="mensagem"
                    value={formik.values.mensagem}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.mensagem && formik.errors.mensagem ? (
                    <span>{formik.errors.mensagem}</span>
                  ) : null}
                </div>
              </div>
              <div className="submit-button">
                <button type="submit">
                  Quero meu <span>curso gratuito</span>
                </button>
              </div>
            </form>
          </div>

          <div className="sou-aluno">
            <p>Sou aluno:</p>

            <div className="links">
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://acessarcurso.com.br/?id=2109"
              >
                Saber On-line <span>|</span>
              </a>

              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://studeo.unicesumar.edu.br"
              >
                Studeo Unicesumar <span>|</span>
              </a>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://cyber.fisk.com.br:175/cyberfisknew/"
              >
                Cyber Fisk <span>|</span>
              </a>
              <a
                target="__blank"
                rel="noopener noreferrer"
                href="https://www.acessarcurso.com.br/certificado/verificar.php?id=2109"
              >
                Validar Certificados
              </a>
            </div>
          </div>
          <div className="horario-de-atendimento">
            <p>Horário de atendimento:</p>
            <div className="horarios">
              <p>
                Seg a Sex 8h às 22h <span>|</span>
              </p>
              <p>Sab 8h às 12h</p>
            </div>
          </div>
          <div className="social-networks">
            <p>Redes Sociais do Grupo Saber:</p>
            <div className="holder-social">
              <div className="social-block">
                <p>Centro de Ensino Saber</p>
                <a
                  href="https://instagram.com/CentroDeEnsinoSaber"
                  className="insta"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require('../../assets/icons/instagram.svg')}
                    alt=""
                  />
                </a>
                <a
                  href="https://fb.com/CentroDeEnsinoSaber"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <img
                    src={require('../../assets/icons/facebook-footer.svg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="social-block">
                <p>Unicesumar Irati</p>
                <a
                  href="https://instagram.com/UnicesumarIratiPR"
                  className="insta"
                  rel="noopener noreferrer"
                  target="__blank"
                >
                  <img
                    src={require('../../assets/icons/instagram.svg')}
                    alt=""
                  />
                </a>
                <a
                  href="https://fb.com/UnicesumarIratiPR"
                  target="__blank"
                  className="facebook"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require('../../assets/icons/facebook-footer.svg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="social-block">
                <p>Super Cérebro Irati</p>

                <a
                  href="https://instagram.com/SuperCerebroIrati"
                  target="__blank"
                  className="insta"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require('../../assets/icons/instagram.svg')}
                    alt=""
                  />
                </a>
                <a
                  href="https://fb.com/SuperCerebroIrati"
                  target="__blank"
                  className="facebook"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require('../../assets/icons/facebook-footer.svg')}
                    alt=""
                  />
                </a>
              </div>
              <div className="social-block">
                <p>Fisk Irati</p>

                <a
                  href="https://instagram.com/FiskIratiPR"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="insta"
                >
                  <img
                    src={require('../../assets/icons/instagram.svg')}
                    alt=""
                  />
                </a>
                <a
                  href="https://fb.com/FiskIratiPR"
                  target="__blank"
                  className="facebook"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require('../../assets/icons/facebook-footer.svg')}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="signature">
            <p>©2020 Grupo Saber. Todos os direitos reservados</p>
            {/* <p>
              Feito com
              <img src={require('../../assets/icons/blue_heart.svg')} alt="" />
              por <a href="https://www.agenciaade.com.br">agenciaade.com.br</a>
            </p> */}
          </div>
        </div>
      </Container>
    </>
  );
}
