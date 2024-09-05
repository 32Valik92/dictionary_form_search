import React, {FC} from "react";

import styles from "./FooterComponent.module.css";


const FooterComponent: FC = () => {
   return (
      <footer className={styles.footer}>
         <div>
            <h1 className={styles.title}>Footer</h1>
         </div>
      </footer>
   );
};

export {FooterComponent};