import React from 'react';
import { caraousels } from '../utils/links';

const Caraousel = () => {
  const [active, setActive] = React.useState(0);

  return (
    <section className="main-container container-caraousel">
      <ul>
        {caraousels.map((caraousel, index) => {
          return (
            <li className={`${active === index ? 'flex' : `absolute translate-x-full `}`} key={caraousel.id}>
              <div className="w-full lg:w-1/2 flex flex-col gap-2 ">
                <h3>{caraousel.h3}</h3>
                <h2>{caraousel.h2}</h2>
                <p>{caraousel.paragraph}</p>
              </div>

              <div className="w-full lg:w-1/2  flex self-end justify-center lg:justify-end items-center">
                <img src={caraousel.img} alt={caraousel.name} className="w-52 lg:w-96 " />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="dots-container">
        {caraousels.map((_, index) => {
          return <button key={index} className={`${index === active ? 'bg-primaryPink' : 'bg-bgPrimaryProducts'} `} onClick={() => setActive(index)}></button>;
        })}
      </div>
    </section>
  );
};

export default Caraousel;
