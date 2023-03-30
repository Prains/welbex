import FlexContainer from "../FlexContainer/FlexContainer";
import styles from "./Header.module.scss";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import SocialIcon from "./SocialIcon/SocialIcon";
import wa from "../../images/whatsapp.svg";
import tg from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <FlexContainer gap={52}>
        <HeaderLogo>крупный интегратор CRM в Росcии и ещё 8 странах</HeaderLogo>
        <FlexContainer gap={30}>
          <HeaderLink>Услуги</HeaderLink>
          <HeaderLink>Виджеты</HeaderLink>
          <HeaderLink>Интеграции</HeaderLink>
          <HeaderLink>Кейсы</HeaderLink>
          <HeaderLink>Сертификаты</HeaderLink>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer gap={47}>
        <a href="tel:+7 555 555-55-55" className="inter">
          +7 555 555-55-55
        </a>
        <FlexContainer gap={30}>
          <SocialIcon link="/#" icon={tg} />
          <SocialIcon link="/#" icon={viber} />
          <SocialIcon link="/#" icon={wa} />
        </FlexContainer>
      </FlexContainer>
    </header>
  );
};

export default Header;
