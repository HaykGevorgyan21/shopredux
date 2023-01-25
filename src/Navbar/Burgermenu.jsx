import styles from './Burgermenu.module.scss'
import { useState } from "react";
import { Link } from "react-router-dom";




const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.burgerMenu}>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={handleClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <Link to={'/'} >Home</Link>
    <Link to={'/Electronics'} >Electronics</Link>
    <Link to={'/Jewelery'} >Jewelery</Link>
    <Link to={'/Men'} >Men</Link>
    <Link to={'/Women'} >Women</Link>
    <Link className={styles["basket"]} to={'/Basket'}></Link>
      </nav>
    </div>
  );
}

export default BurgerMenu;


