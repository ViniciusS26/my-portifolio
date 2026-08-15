import {EfeitoDigitacao} from './Efects';
import './Home.css'

export default function Home() {
  const nome = "<Vinicius Nunes/>"
  return (

    
    <div className="home" id="home">
      <div className="home-content">
        <h1><EfeitoDigitacao texto={nome} /></h1>
        <p>Desenvolvedor Web Full Stack Jr</p>
        <div className="stack">
          <h6>Fastapi</h6>
          <h6>Pyhon</h6>
          <h6>ReactJS</h6>
          <h6>Docker</h6>
          <h6>Postgres</h6>
          <h6>AWS</h6>
      </div>
      </div>
      
    </div>
  );
}