import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';

import {
  Container,
  Formulario,
  Vagas,
  UnformInput,
  StyledUnformMaskedInput,
} from './styles';

import * as Yup from 'yup';

import api from '../../services/api';

import axios from 'axios';

import EmpresaTitle from '../../components/EmpresaTitle';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function QuemSomos() {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [hasSent, setHasSent] = useState(null);
  const [formError, setFormError] = useState(null);
  const [formMessage, setFormMessage] = useState('Cadastrar');
  // const [isRgExtended, setIsRgExtended] = useState(null);

  const schema = Yup.object().shape({
    Nome: Yup.string().required('Campo nome é obrigatório'),
    Email: Yup.string()
      .email('Informe um email válido')
      .required('Campo email é obrigatório'),
    Areadeinteresse: Yup.string().required(
      'Campo área de interesse é obrigatório'
    ),
    Telefone: Yup.string().required('Campo telefone é obrigatório'),
    CEP: Yup.string().required('Campo CEP é obrigatório'),
    Rua: Yup.string().required('Campo rua é obrigatório'),
    Numero: Yup.string().required('Campo numero é obrigatório'),
    Bairro: Yup.string().required('Campo bairro é obrigatório'),
    Cidade: Yup.string().required('Campo cidade é obrigatório'),
    UF: Yup.string().required('Campo UF é obrigatório'),
    RG: Yup.string().required('Campo RG é obrigatório'),
    CPF: Yup.string().required('Campo CPF é 0brigatório'),
    DataNascimento: Yup.string().required(
      'Campo data de nascimento é obrigatório'
    ),
  });

  const handleSubmit = async (_data) => {
    const queryString = require('query-string');
    const parsedData = queryString.stringify(_data);
    setIsLoading(true);

    const baseUrl =
      'https://script.google.com/macros/s/AKfycbxbk5nQ9APy4xCxCWsHiBgEaar7MRfYdB12ErmX2Z0R8wgoCSk/exec?' +
      parsedData;
    try {
      await axios
        .get(baseUrl)
        .then(() => {
          setIsLoading(false);
          setHasSent(true);
          setFormMessage('Cadastrado com sucesso!');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setFormError(true);
      setFormMessage('Algo deu errado. Atualize a página e tente novamente.');
    }
  };

  useEffect(() => {
    api
      .get('pages?slug=quem-somos')
      .then((response) => setContent(response.data[0]));
  }, []);

  const dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  const phoneMask = [
    '(',
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  const cpfMask = [
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  if (content === null) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Header />
        <Container>
          <EmpresaTitle
            imageUrl={!!content && content.acf.banner_principal.url}
            title="As melhores chances para você entrar no mercado de trabalho."
            logo={!!content && content.acf.logo.url}
          />
          <div className="main-container short">
            <Vagas>
              <Container>
                <h2>
                  Cadastre seus dados e receba oportunidades de emprego baseadas
                  no seu perfil.
                </h2>
                <Formulario onSubmit={handleSubmit} schema={schema}>
                  <div className="row row1">
                    <div className="inputField">
                      <UnformInput name="Nome" placeholder="Nome Completo" />
                    </div>
                    <div className="inputField">
                      <StyledUnformMaskedInput
                        name="Telefone"
                        mask={phoneMask}
                        guide={false}
                        type="tel"
                        placeholder="Telefone"
                      />
                    </div>

                    <div className="inputField">
                      <UnformInput name="Email" placeholder="E-mail" />
                    </div>

                    <div className="inputField">
                      <UnformInput
                        name="Areadeinteresse"
                        placeholder="Área de interesse"
                      />
                    </div>
                  </div>

                  <div className="row row2">
                    <div className="inputField">
                      <StyledUnformMaskedInput
                        name="CEP"
                        mask={cepMask}
                        guide={false}
                        type="tel"
                        placeholder="CEP"
                      />
                    </div>
                    <div className="inputField">
                      <UnformInput name="Rua" placeholder="Rua" />
                    </div>
                    <div className="inputField">
                      <UnformInput name="Numero" placeholder="Nº" />
                    </div>
                    <div className="inputField">
                      <UnformInput name="Bairro" placeholder="Bairro" />
                    </div>
                  </div>

                  <div className="row row3">
                    <div className="inputField">
                      <UnformInput name="Cidade" placeholder="Cidade" />
                    </div>

                    <div className="inputField">
                      <UnformInput name="UF" placeholder="UF" />
                    </div>

                    <div className="inputField">
                      <UnformInput name="RG" type="text" placeholder="RG" />
                    </div>

                    <div className="inputField">
                      <StyledUnformMaskedInput
                        name="CPF"
                        mask={cpfMask}
                        guide={false}
                        type="tel"
                        placeholder="CPF"
                      />
                    </div>

                    <div className="inputField inputField--data">
                      <StyledUnformMaskedInput
                        name="DataNascimento"
                        mask={dateMask}
                        guide={false}
                        type="text"
                        placeholder="Data de Nascimento"
                      />
                    </div>
                  </div>

                  <button
                    disabled={hasSent}
                    className={`btnSubmit ${formError ? 'error' : ''} ${
                      hasSent ? 'sent' : ''
                    }`}
                    type="submit"
                    // disabled={isSubmitting}
                  >
                    {isLoading ? (
                      <i className="fas fa-spinner" />
                    ) : (
                      <>{formMessage}</>
                    )}
                  </button>
                </Formulario>
              </Container>
            </Vagas>
          </div>
          <Footer padding={false} />
        </Container>
      </>
    );
  }
}
