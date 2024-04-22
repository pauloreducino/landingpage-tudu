import Link from "next/link";
import Image from "next/image";
import Styles from "./footer.module.scss"; 
import Logo from "/public/images/logo.webp";
import IconInstagram from "/public/images/icon-instagram.svg";
import IconFacebook from "/public/images/icon-facebook.svg";
import IconLinkedin from "/public/images/icon-linkedin.svg";
import IconYoutube from "/public/images/icon-youtube.svg";

const Footer = () => {
  return (
    <div className={Styles.container}>
        <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
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
        <div className={`${Styles.column} ${Styles.alignRight}`}>
        <h5>SOCIAL</h5>
        <div className={Styles.icons}>
        <Link href="/">
          <Image src={IconInstagram} alt="Icon" />
        </Link>
        <Link href="/">
          <Image src={IconFacebook} alt="Icon" />
        </Link>  
        <Link href="/">
          <Image src={IconLinkedin} alt="Icon" />
        </Link>  
        <Link href="/">
          <Image src={IconYoutube} alt="Icon" />
        </Link>   
        </div>       
        </div>
        <div className={Styles.allRightReserved}>© 2023 | Tudu Phooto Serviços e Comércio LTDA – 17.836.901/0001-10
        </div>
    </div>
  );
};

export default Footer;
