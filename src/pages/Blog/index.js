import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
// import { Helmet } from 'react-helmet';

import { Container } from './styles';

import { Pagination } from 'antd';

import Header from '../../components/Header';
import Map from '../../components/Map';
import Insta from '../../components/Instagram';
import Footer from '../../components/Footer';

import api from '../../services/api';

export default function Blog() {
  const [content, setContent] = useState();
  const [lastPost, setLastPost] = useState();
  const [pageContent, setPageContent] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    const getContent = async () => {
      const { data } = await api.get(`pages?slug=blog&page=1&per_page=9`);
      setPageContent(data);
    };

    getContent();
  }, []);

useEffect(() => {
  api.get("/posts").then(response => {
    setNumber(response.headers['x-wp-total']);
  })
})

  function paginate(page) {
    const getContent = async () => {
      const { data } = await api.get(`posts?_embed&page=${page}&per_page=9`);
      setContent(data);
    };

    getContent();
  }

  useEffect(() => {
    const getContent = async () => {
      const { data } = await api.get(`posts?_embed&offset=1&page=1&per_page=9`);
      setContent(data);
    };

    getContent();
  }, []);

  useEffect(() => {
    const getContent = async () => {
      const { data } = await api.get(`posts?_embed`);
      setLastPost(data[0]);
    };

    getContent();
  }, []);

  if (content === undefined) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Header />
        <Container>
          <div className="main-container">
            <div className="top-content">
              <img
                src={
                  !!pageContent &&
                  pageContent.map((imagem, index) => imagem.acf.imagem_capa.url)
                }
                alt="Banner"
              />
              <div className="title">
                <h2>
                  {!!pageContent &&
                    pageContent.map((title, index) => title.title.rendered)}
                </h2>

                <p>Último post</p>
              </div>
            </div>
            <div className="noticias">
              <img
                className="x"
                src={require('../../assets/images/blue-star.svg')}
                alt="x"
              />
              {!!lastPost && (
                <div className="block latest">
                  <div className="image">
                    <a href={`/ebomsaber/${lastPost.slug}`}>
                      <img
                        src={
                          lastPost._embedded['wp:featuredmedia'][0]
                            .media_details.sizes.full.source_url
                        }
                        alt="noticia"
                      />
                    </a>
                  </div>
                  {/* <div className="holder-type-noticia">
                    {!!lastPost &&
                      lastPost._embedded['wp:term'][0].map((data) => (
                        <a href={`/ebomsaber/categoria/${data.slug}`}>
                          <div className="type-noticia">
                            <p>{data.name}</p>
                          </div>
                        </a>
                      ))}
                  </div> */}
                  <div className="title-noticia latest-noticia">
                    <a href={`/ebomsaber/${lastPost.slug}`}>
                      <p>{lastPost.title.rendered}</p>
                    </a>
                  </div>
                  <a
                    className="holder-btn"
                    href={`/ebomsaber/${lastPost.slug}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="button">Continue Lendo</div>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="main-container small">
            <div className="grid-container">
              {!!content &&
                content.map((obj, index) => (
                  <div key={obj.id} className="block">
                    <a href={`/ebomsaber/${obj.slug}`}>
                      <div className="image">
                        <img
                          src={
                            obj._embedded['wp:featuredmedia'][0].media_details
                              .sizes.full.source_url
                          }
                          alt={index}
                        />
                      </div>
                    </a>
                    {/* <div className="holder-type-noticia">
                      {obj._embedded['wp:term'][0].map((data) => (
                        <a href={`/ebomsaber/categoria/${data.slug}`}>
                          <div className="type-noticia">
                            <p>{data.name}</p>
                          </div>
                        </a>
                      ))}
                    </div> */}
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
          </div>
          <Pagination
            defaultCurrent={1}
            total={number}
            pageSize={9}
            onChange={(page) => paginate(page)}
          />
          <Map />
          <Insta />
          <Footer padding />
        </Container>
      </>
    );
  }
}
