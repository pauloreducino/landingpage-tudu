import { Inter } from "next/font/google";
import Header from "@/components/header";
import Styles from "./Home.module.scss"
import Welcome from "@/components/Welcome";
import Features from "@/components/features";
import Contato from "@/components/contato";

export default function Home() {
 return (
 <div className={Styles.container}>
    <Header />
    <main>
    <Welcome />
    <Features />
    <Contato />
    </main>
 </div>
 );
}
