import css from "./Header.module.css";

function Header() {
  return (
    <div className={css.header}>
      <p className={css.logo}>AutoŚwiat</p>
      <nav>
        <ul className={css.nav_ul}>
          <li className={css.nav_li}>Główna</li>
          <li className={css.nav_li}>Galerja</li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
