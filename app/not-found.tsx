import React from "react";
import styles from "@/app/ui/not-found.module.css";
import stylePage from "@/app/ui/page.module.css";

const NotFound = () => {
  return (
    <div className={stylePage.container}>
      <div className={styles.notFoundContainer}>
        <div className={styles.message}>
          <div className={styles.messageError}>404</div>
          <div className={styles.messageText}>
            Ups.. No encontramos lo que buscas
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
