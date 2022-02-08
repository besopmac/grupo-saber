import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Blog from '../pages/Blog';
import SingleBlog from '../pages/Blog/SingleBlog';
import BlogCategoria from '../pages/Blog/BlogCategoria';
import BlogTag from '../pages/Blog/BlogTag';
import QuemSomos from '../pages/QuemSomos';
import SingleCursos from '../pages/Cursos/SingleCursos';
import Cursos from '../pages/Cursos';
import Unicesumar from '../pages/Empresas/Unicesumar';
import Fisk from '../pages/Empresas/Fisk';
import SuperCerebro from '../pages/Empresas/SuperCerebro';
import GrupoSaber from '../pages/Empresas/GrupoSaber';
import Oportunidades from '../pages/Oportunidades';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ebomsaber" exact component={Blog} />
      <Route path="/ebomsaber/:slug" exact component={SingleBlog} />
      <Route path="/ebomsaber/categoria/:slug" component={BlogCategoria} />
      <Route path="/ebomsaber/tag/:slug" component={BlogTag} />
      <Route path="/quem-somos" exact component={QuemSomos} />
      <Route path="/cursos/" exact component={Cursos} />
      <Route path="/cursos/:slug" component={SingleCursos} />
      <Route path="/unicesumar" exact component={Unicesumar} />
      <Route path="/fisk" exact component={Fisk} />
      <Route path="/super-cerebro" exact component={SuperCerebro} />
      <Route path="/centro-de-ensino-saber" exact component={GrupoSaber} />
      <Route path="/oportunidades" exact component={Oportunidades} />
    </Switch>
  );
}
