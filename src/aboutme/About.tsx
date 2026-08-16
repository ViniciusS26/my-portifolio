import './About.css'
import {ModificaNumerosMetricas} from '../home/Efects';
export default function About() {
    /* Fazer com que os numeros de projetos sejam exibidos de forma mais atraente, indo de 0 até 
    o valor de cada projeto */



    return (
        <div className="about" id="about">
            <h1>UM POUCO SOBRE MIM</h1>
            <div className="about-content">

                <div className="style-about">
                    <p>Sou um desenvolvedor web full stack Jr, com experiência em desenvolvimento de aplicações web utilizando tecnologias como ReactJS, FastAPI, Docker, Postgres e AWS.</p>
                    <p> Minha jornada no curso de Sistemas de Informação na Universidade Federal do Piauí, me ensinou muito sobre arquitetura de software e sobre o impacto que a tecnologia pode ter no mundo. Antes de migrar para o desenvolvimento, passei por mais de 2 anos em suporte técnico N2, o que moldou minha forma de pensar: analítica, estruturada e sempre com foco em resolver o problema na raiz.</p>
                    <p>Hoje, meu objetivo é evoluir como profissinalmente na área de tecnologia, aprendendo continuamente e contribuindo com projetos que realmente façam diferença. </p>
                </div>
                <div className="metrics-github">

                    <div className="stmetrics">
                        <div className="metrics">
                            <div className="contains-metrics">
                                <p className="metric-value"><ModificaNumerosMetricas valorFinal={3} velocidade={100} />+</p>
                                <p className="metric-label">Anos Estudando</p>
                            </div>
                        </div>
                        <div className="metrics">
                            <div className="contains-metrics">
                                <p className="metric-value"><ModificaNumerosMetricas valorFinal={16} velocidade={100} />+</p>
                                <p className="metric-label">Projetos no GitHub</p>
                            </div>
                        </div>
                    </div>

                
                    <div className="stmetrics">
                        <div className="metrics">
                            <div className="contains-metrics">
                                <p className="metric-value"><ModificaNumerosMetricas valorFinal={6} velocidade={100}/>+</p>
                                <p className="metric-label">Projetos Relevantes</p>
                            </div>
                        </div>
                        <div className="metrics">
                            <div className="contains-metrics">
                                <p className="metric-value"><ModificaNumerosMetricas valorFinal={2} velocidade={100} /> ANOS+</p>
                                <p className="metric-label">Experiência Profissional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}