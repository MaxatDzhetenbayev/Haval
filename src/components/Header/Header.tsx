import styles from './Header.module.css'
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="logo.png" alt="Логотип" />
      <section className={styles.header_content}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li><Link to="#">Модели</Link></li>
            <li><Link to="#">Новости</Link></li>
            <li><Link to="#">Владельцам</Link></li>
            <li><Link to="#">Покупателям</Link></li>
            <li><Link to="#">Контакты</Link></li>
          </ul>
        </nav>
        <section className={styles.header_lang}>
          <p>kz</p>
        </section>
      </section>
    </header>
  );
};
