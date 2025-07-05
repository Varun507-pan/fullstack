import React from 'react';
import { data } from '../restApi.json';

const Menu = () => {
  const vibeItems = data?.[0]?.products;

  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR</h1>
          <p>"Outfits that flirt for you."</p>
        </div>

        <div className="dishes_container">
          {Array.isArray(vibeItems) ? (
            vibeItems.map(element => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))
          ) : (
            <p>Loading popular outfits...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
