import Image from "next/image";
import Link from "next/link"
import Logo from "/public/images/logo.webp";
import Styles from "./header.module.scss";
import Button from "../button";


const Header = () => {
    return (
    <div className={Styles.container}>
        <div className={Styles.Logotipo}>
        <Image src={Logo} alt="Logo" width={150} height={100}/>
        </div>
        <div className={Styles.menu}>
            <Link href="/">Home</Link>
            <Link href="/">Case</Link>
            <Link href="/">Catálogo</Link>
            <Link href="/">Sobre nós</Link>
        </div>
        <div className={Styles.action}>        
        <Button title="Fale conosco" />
        </div>
    </div>
    );
}

export default Header