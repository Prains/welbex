import styles from "./HeaderLogo.module.scss";
import logo from "../../../images/logo_welbex.svg";

const HeaderLogo = ({ children }) => {
  return (
    <div className={styles.headerlogo}>
      <img src={logo} alt="Логотип компании" />
      {children}
    </div>
  );
};

export default HeaderLogo;
