import Image from "next/image";
import Styles from "./footer.module.scss"; 
import Logo from "/public/images/logo.webp";

const Footer = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.column}>
          <Image src={Logo} alt="logo tudu" width={150} height={100}/>
          <h5 className={Styles.title}>0800 800 800</h5>
          <p>comercial@agencia.com.br</p>
        </div>
        <div className={Styles.column}>
          <h5>MENU</h5>
          <p>Quem Somos</p>
          <p>Cases</p>
        </div>
        <div className={Styles.column}>
          <h5>CONTEÚDO</h5>
          <p>E-books</p>
          <p>Fórmulas prontas</p>
        </div>
        <div className={Styles.column}>
        <h5>SOCIAL</h5>
        <p>comercial@agencia.com.br</p>
        </div>
    </div>
  );
};

export default Footer;
