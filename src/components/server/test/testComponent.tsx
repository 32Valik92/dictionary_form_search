import React, {FC} from "react";

import styles from "./testComponent.module.css";

const TestComponent: FC = async () => {
   await new Promise(resolve => setTimeout(resolve, 3000));
   return (
      <header className={styles.header}>
         <div>
            <h1 className={styles.title}>Welcome to Words API</h1>
         </div>
      </header>
   );
};

export {TestComponent};
