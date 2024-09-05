import React, {FC} from "react";

import styles from "./HeaderComponent.module.css";

const HeaderComponent: FC = () => {
   return (
      <header className={styles.header}>
         <div>
            <h1 className={styles.title}>Welcome to Words API</h1>
         </div>
      </header>
   );
};

export {HeaderComponent};
