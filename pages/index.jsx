import { Inter } from "next/font/google";
import Header from "@/components/header";
import Styles from "./Home.module.scss"
import Welcome from "@/components/Welcome";
import Features from "@/components/features";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

export default function Home() {
   return (
      <div className={Styles.container}>
         <header>
            <Header />
         </header>

         <main>
            <Welcome />
            {/* <Features /> */}
            {/* <Contato /> */}
         </main>

         <footer>
            {/* <Footer /> */}
         </footer>
      </div>
   );
}
