import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
// import { Helmet } from 'react-helmet';

import { Container } from './styles';

import Header from '../../../components/Header';
import Map from '../../../components/Map';
import Insta from '../../../components/Instagram';
import Footer from '../../../components/Footer';

import api from '../../../services/api';

export default function BlogCategoria(slug) {
  const [content, setContent] = useState();
  const [blogContent, setBlogContent] = useState();
  const [postId, setPostId] = useState();

  const getParam = slug.match.params.slug;

  useEffect(() => {
    const getContent = async () => {
      const { data } = await api.get(`categories?slug=${getParam}`);
      setContent(data[0]);
      setPostId(data[0].id);
    };

    getContent();
  }, [getParam]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await api.get(`posts?_embed&categories=${postId}`);
      setBlogContent(data);
    };

    getPosts();
  }, [postId]);

  if (blogContent === undefined) {
    return <Loader size="large" active inline="centered" />;
  } else {
    return (
      <>
        <Header />
        <Container>
          <div className="main-container">
            <div className="top-content">
              <img
                src={require('../../../assets/images/banner-blog.jpg')}
                alt="Banner"
              />
              <div className="title">
                <h2>{!!content && content.name}</h2>
                <p>Noticías que fazem a diferença</p>
              </div>
            </div>
            <div className="noticias">
              <img
                className="x"
                src={require('../../../assets/images/blue-star.svg')}
                alt="x"
              />
            </div>
          </div>
          <div className="main-container small">
            <div className="grid-container">
              {!!blogContent &&
                blogContent.map((obj) => (
                  <div key={obj.id} className="block">
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
                    <div className="holder-type-noticia">
                      {obj._embedded['wp:term'][0].map((data) => (
                        <a href={`/ebomsaber/categoria/${data.slug}`}>
                          <div className="type-noticia">
                            <p>{data.name}</p>
                          </div>
                        </a>
                      ))}
                    </div>
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
          <Map />
          <Insta />
          <Footer padding />
        </Container>
      </>
    );
  }
}
