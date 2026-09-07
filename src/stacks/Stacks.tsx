import './Stacks.css';

export default function Stacks() {
  return (
    <div className="container-stacks"> 
        <h1>MINHAS STACKS DE DESENVOLVIMENTO</h1>
        <div className="stacks">
            <div className="stacks-list">
                <div className="container-text">
                    <h2>Front-End</h2>
                </div>
                <div className="container-stacks-all">
                    <div className="lists">
                        <h6>HTML</h6>
                        <h6>CSS</h6>
                        <h6>JavaScript</h6>
                        <h6>React</h6>
                    </div>

                    <div className="lists">
                        <h6>TypeScript</h6>
                        <h6>Vue.js</h6>
                        <h6>Figma</h6>
                    </div>
                    
                </div>
            </div>
            <div className="stacks-list">
                <div className="container-text">
                    <h2>Back-End</h2>
                </div>
                <div className="container-stacks-all">
                    <div className="lists">
                        <h6>Node.js</h6>
                        <h6>Python</h6>
                        <h6>MySQL</h6>
                    </div>
                    
                    <div className="lists">
                        <h6>PostgreSQL</h6>
                        <h6>FastAPI</h6>
                        <h6>Django</h6>
                    </div>
                </div>
            </div>
            <div className="stacks-list">
                <div className="container-text">
                    <h2>DevOps</h2>
                </div>
                <div className="container-stacks-all">
                    <div className="lists">
                        <h6>Docker</h6>
                        <h6>Linux</h6>
                        <h6>AWS EC2</h6>
                    </div>
                    
                    <div className="lists">
                        <h6>CI/CD</h6>
                        <h6>GIT</h6>
                        <h6>Github</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
                    
}