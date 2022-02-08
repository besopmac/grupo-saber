import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
// import { Helmet } from 'react-helmet';

import ReactHtmlParser from 'react-html-parser';

import { Container } from './styles';

import Header from '../../../components/Header';
import Map from '../../../components/Map';
import Insta from '../../../components/Instagram';
import Footer from '../../../components/Footer';

import api from '../../../services/api';

export default function SingleBlog(slug) {
  const [content, setContent] = useState();
  const [contentBlog, setContentBlog] = useState(null);

  const getParam = slug.match.params.slug;

  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f495cbe39953858';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const getContent = async () => {
      const { data } = await api.get(`posts?slug=${getParam}&_embed`);
      setContent(data[0]);
    };

    getContent();
  }, [getParam]);

  useEffect(() => {
    const getBlogContent = async () => {
      const { data } = await api.get('posts?_embed&per_page=3');
      setContentBlog(data);
    };
    getBlogContent();
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
                src={content.acf.capa ? content.acf.capa.sizes.large : require('../../../assets/images/banner-single-blog.jpg')}
                alt="Banner"
              />
              <div className="title">
                <h2>Blog</h2>
                <p>Noticías que fazem a diferença</p>
              </div>
            </div>
            <img
              className="x"
              src={require('../../../assets/images/blue-star.svg')}
              alt="x"
            />
            <div className="main-container short">
              {!!content && (
                <div className="container-noticia">
                  <div className="content-left">
                    {/* <div className="holder-type-noticia">
                      {content._embedded['wp:term'][0].map((data) => (
                        <a href={`/ebomsaber/categoria/${data.slug}`}>
                          <div className="type-noticia">
                            <p>{data.name}</p>
                          </div>
                        </a>
                      ))}
                    </div> */}
                    <div className="title-noticia">
                      <p>{content.title.rendered}</p>
                    </div>
                    <div className="image">
                      <img
                        src={
                          content._embedded['wp:featuredmedia'][0].media_details
                            .sizes.full.source_url
                        }
                        alt="noticia"
                      />
                    </div>
                    <div className="text-content">
                      {ReactHtmlParser(content.content.rendered)}
                    </div>
                  </div>
                  <div className="content-right">
                    <div className="categorias">
                      <h2>Categorias</h2>
                      <div className="types-column">
                        {!!content &&
                          content._embedded['wp:term'][0].map((data) => (
                            <a href={`/ebomsaber/categoria/${data.slug}`}>
                              <div className="type-noticia bigger">
                                <p>{data.name}</p>
                              </div>
                            </a>
                          ))}
                      </div>
                    </div>
                    <div className="tags">
                      <h2>Tags</h2>
                      <div className="content">
                        {!!content &&
                          content._embedded['wp:term'][1].map((data) => (
                            <a href={`/ebomsaber/tag/${data.slug}`}>
                              <p>#{data.name}</p>
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="related-posts">
                <h2 className="title-related-posts">Posts Relacionados:</h2>
                <div className="grid-container">
                  {!!contentBlog &&
                    contentBlog.map((obj) => (
                      <div key={obj.id} className="block">
                        <a href={`/ebomsaber/${obj.slug}`}>
                          <div className="image">
                            <img
                              src={
                                obj._embedded['wp:featuredmedia'][0]
                                  .media_details.sizes.full.source_url
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
                <a className="holder-btn" href="/ebomsaber">
                  <div className="button see-more">Ver mais notícias</div>
                </a>
              </div>
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
