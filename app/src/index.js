import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Aldo';

const Jsx = () => {
  return(
    <>
      <h1>Hola {name}</h1>
    </>
  );
};

root.render(<Jsx/>);


