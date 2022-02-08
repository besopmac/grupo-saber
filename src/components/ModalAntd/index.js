import React, { useState, useEffect } from 'react';
import 'moment/locale/pt-br';
import locale from 'antd/es/locale/pt_BR';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { notification } from 'antd';
// import api from "../../services/api";

import { Modal, Select, DatePicker, ConfigProvider } from 'antd';

// services
import ademail from '../../services/ademail';
import mapa from '../../services/mapa';

export default function ModalAntd(props) {
  // console.log(props);

  const [modalVisible, SetModalVisible] = useState(false);
  const [cidades, setCidades] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [subject, setSubject] = useState(null);
  const [cidadeSelected, setCidadeSelected] = useState(null);
  const [titulo, setTitulo] = useState(null);

  const showModal = () => {
    SetModalVisible(true);
  };

  const cancelModal = () => {
    SetModalVisible(false);
  };

  const { Option } = Select;
  useEffect(() => {
    const assunto = props.assunto;
    if (assunto === 'gratis') {
      setSubject(' Aula experimental grátis - Grupo Saber');
    } else if (assunto === 'desconto') {
      setSubject(' Bolsa de desconto - Grupo Saber');
    } else {
      setSubject('Novo contato via site - Grupo Saber');
    }
    setTitulo(props.titulo);
  }, [props, titulo]);

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
    },

    validationSchema: Yup.object({
      nome: Yup.string().required('Campo nome é obrigatório'),
      email: Yup.string()
        .email('Informe um e-mail válido')
        .required('Campo e-mail é obrigatório'),
      telefone: Yup.string().required('Campo telefone é obrigatório'),
    }),

    onSubmit: async (values, { resetForm }) => {
      const body = `
        <p>Nome: ${values.nome}</p>
        <p>Data de Nascimento: ${dataNascimento}</p>
        <p>E-mail: ${values.email}</p>
        <p>Telefone: ${values.telefone}</p>
        <p>Cidade: ${cidadeSelected}</p>
        <p>Curso: ${titulo} <p>
      `;
      // console.log(body);
      
      const mail = {
        to: 'atendimento@gruposaber.com.br',
        from: values.email,
        as: values.nome,
        bcc: JSON.stringify(['web@agenciaade.com.br']),
        subject: subject,
        message: body,
      };

      console.log(mail);

      try {
        // Sucesso ao enviar
        await ademail.post('/email', mail);
        notification.success({
          message: 'Contato enviado com sucesso! 🚀',
          placement: 'bottomRight',
        });
        SetModalVisible(false);
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
    const getContent = async () => {
      const { data } = await mapa.get();
      setCidades(data);
    };

    getContent();
  }, []);

  return (
    <div className="button">
      <button onClick={showModal}>
        Quero uma <span>{props.label ? props.label : 'Bolsa de Desconto'}</span>
      </button>
      <Modal visible={modalVisible} onCancel={cancelModal}>
        <div className="form-container">
          <div className="text">
            <h3 style={{ color: props.cor ? props.cor : '#FD8023' }}>
              {props.titulozao ? props.titulozao : 'Faça sua pré-inscrição'}
            </h3>
            <p>Preencha os dados para o curso de</p>
            <p>{props.titulo}</p>
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
                  <label>Data de nascimento:</label>
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
                <label htmlFor="email">E-mail:</label>
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
                  <label htmlFor="">Cidade:</label>
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
            </div>
            <div className="submit-button">
              <button type="submit">
                Quero{' '}
                <span>
                  {props.botao ? props.botao : 'fazer minha inscrição'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
