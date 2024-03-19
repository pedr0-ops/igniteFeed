import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function Sidebar() {

  return (
      <aside className={styles.sidebar}>
       <img 
       src='https://images.unsplash.com/photo-1690098520896-c47094fabc48?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       className={styles.cover}
       />
        <div className={styles.profile}>
          <Avatar src='https://avatars.githubusercontent.com/u/78046173?v=4'/>
          <strong>Pedro Henrique</strong>
          <span>Desenvolvedor Front-end</span>
        </div>

        <footer>
          <a href='#'>
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      
      </aside>
  );
}