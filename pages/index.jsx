import { Inter } from "next/font/google";
import Header from "@/components/header";
import Styles from "./Home.module.scss"
import Welcome from "@/components/Welcome";

export default function Home() {
 return (
 <div className={Styles.container}>
    <Header />
    <Welcome />
 </div>
 );
}
