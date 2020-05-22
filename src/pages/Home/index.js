import React from 'react';

// import { Container } from './styles';

function handleClick() {
  const h1 = document.querySelector('h1');
  h1.innerHTML = 'Bem Vindo!';
}

function Home() {
  return (
    <>
      <h1 data-testid="id-teste">Home Page</h1>
      <button data-testid="meu-botao" type="button" onClick={handleClick}>
        Click Me!
      </button>
    </>
  );
}

export default Home;
