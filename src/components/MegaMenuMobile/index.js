import React, { useState, useEffect } from 'react';

import { Collapse } from 'antd';

import api from '../../services/api';

export default function MegaMenu(props) {
  const [content, setContent] = useState(null);

  const { Panel } = Collapse;

  useEffect(() => {
    api.get(`menu/${props.id}`).then((response) => {
      setContent(response.data.menu);
    });
  }, [props.id]);

  return (
    <Collapse defaultActiveKey={['1']}>
      {!!content &&
        content.map((obj, index) => (
          <Panel header={obj.label} key={Math.random()}>
            {obj.items.map((link, index2) => {
              return React.createElement(
                'a',
                {
                  className: 'link-mobile',
                  href: `http:/gruposaber.com.br/cursos/${link.slug}`,
                  key: link.id,
                },
                link.titulo
              );
            })}
          </Panel>
        ))}
    </Collapse>
  );
}
