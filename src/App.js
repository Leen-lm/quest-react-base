import './App.css';
import ParagrafoSinalizado from './components/paragrafos/paragrafo-estilizado';
import ParagrafoPadrao from './components/paragrafos/paragrafo-normal';
import ButtonLabel from './components/button/button';

function App() {
  return (
    <>
      <h1>Meus Parágrafos</h1>
      <ParagrafoSinalizado />
      <ParagrafoPadrao />
      <ButtonLabel label ='BOTAO DA ESQUERDA'/>
      <ButtonLabel label ='BOTAO DA DIREITA'/>
    </>
  );
}

export default App;
