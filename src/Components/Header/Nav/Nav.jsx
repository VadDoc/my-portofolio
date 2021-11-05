import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
        <NavLink to="/home" activeClassName={styles.active}>Home</NavLink>
      </div>
      <div>
        <NavLink to="/skills" activeClassName={styles.active}>Skills</NavLink>
      </div>
      <div>
        <NavLink to="/projects" activeClassName={styles.active}>Projects</NavLink>
      </div>
      <div>
        <NavLink to="/contacts" activeClassName={styles.active}>Contacts</NavLink>
      </div>

      {/*<a href={'/'}>Main</a>*/}
      {/*<a href={'/'}>Main</a>*/}
      {/*<a href={'/'}>Main</a>*/}
      {/*<a href={'/'}>Main</a>*/}

    </div>
  )
}