import React from 'react';
import images from '../../constants/images';

import './Card.css';

export const Card = (props) => {
  return (
    <div className="content__card">
      {props.data
        ? props.data.map((item) => (
            <div key={`${item.name.replace(/ /g, '_')}`}>
              {' '}
              <div
                className="card-img"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}></div>
              <div className="card-text">
                <h3>{item.name}</h3>
                {item.isFilling && <p>Recheio(s): {item.filling}.</p>}
              </div>
            </div>
          ))
        : 'Loading...'}
    </div>
  );
};
