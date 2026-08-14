import { MdOutlineFileDownload } from "react-icons/md";
import logo from '../assets/logo.png'
import './Header.css'
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className='logo-vns' src={logo} alt="Logo do Vinicius" />
      </div>

      <div className="menuEndBtn">
        <div className="menu">
            <ul>
            <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#stack">Stack</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </div>
        <div className="btnDownloadProfile">
            <a href="#download" download>
            Baixar Currículo
            </a>
            <div className="icon">
                <MdOutlineFileDownload size={20} />
            </div>
        </div>        
      </div>

      
    </header>
  );
}