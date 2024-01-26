import { useState, useEffect, useRef } from "react";
import styles from "../styles/card.module.css";

function Card({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  // Close the card when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li ref={cardRef} className={styles.card}>
      <div onClick={toggleCard} className={styles.cardHeader}>{title}</div>
      <ul className={`${styles.cardContent} ${isOpen ? styles.show : ""}`}>
        {children}
      </ul>
    </li>
  );
}

export default Card;
