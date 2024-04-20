import { Inter } from "next/font/google";
import Header from "@/components/header";
import Styles from "./Home.module.scss"
import Welcome from "@/components/Welcome";
import Features from "@/components/features";

export default function Home() {
 return (
 <div className={Styles.container}>
    <Header />
    <Welcome />
    <Features />
 </div>
 );
}
