import styles from './Header.module.css';
import logo from '../../assets/ignite_logo.svg';


function Header() {

  return (
    <header className={styles.header}>
      <img src={logo} alt="Ignite UI Logo" />

      <strong>Feed</strong>
    </header>
  );
}

export default Header;