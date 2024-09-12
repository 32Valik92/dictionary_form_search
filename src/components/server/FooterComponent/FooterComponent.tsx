import "./FooterComponent.css";
import "@/css/common.css";

import Image from "next/image";
import Link from "next/link";
import React, {FC} from "react";


const FooterComponent: FC = () => {
   return (
      <footer className={"footer mulish-mulish"}>
         <div className={"title"}>
                Produced by Strukalo Valentyn
            <div className={"icon-container"}>
               <Link href="https://portfolio-strukalo.vercel.app" target={"_blank"}>
                  <Image src="/icons/icon_portfolio.png" alt="portfolio" width={50} height={50}/>
               </Link>
            </div>
         </div>
         <div className={"contact-icons"}>
                Contact Me:
            <div className={"icon-container"}>
               <Link href="https://github.com/32Valik92" target={"_blank"} className={"about-me-link"}>
                  <Image src="/icons/icon_github.png" alt="github" width={50} height={50}/>
               </Link>
            </div>

            <div className={"icon-container"}>
               <Link href="https://www.instagram.com/strukkalo" target={"_blank"} className={"about-me-link"}>
                  <Image src="/icons/icon_instagram.png" alt="instagram" width={50} height={50}/>
               </Link>
            </div>

            <div className={"icon-container"}>
               <Link href="https://www.linkedin.com/in/valentyn-strukalo-07b747286" target={"_blank"}
                  className={"about-me-link"}>
                  <Image src="/icons/icon_linkedin.png" alt="linkedin" width={50} height={50}/>
               </Link>
            </div>

            <div className={"icon-container"}>
               <Link href="https://t.me/str_kl" target={"_blank"} className={"about-me-link"}>
                  <Image src="/icons/icon_telegram.png" alt="telegram" width={50} height={50}/>
               </Link>
            </div>

         </div>
      </footer>
   );
};

export {FooterComponent};