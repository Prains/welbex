import FlexContainer from "../FlexContainer/FlexContainer";
import FooterTitle from "./FooterTitle/FooterTitle";
import FooterLink from "./FooterLink/FooterLink";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <FlexContainer flexDirection="column" gap={10} align="start">
        <FooterTitle>о компании</FooterTitle>
        <FooterLink>Партнёрская программа</FooterLink>
        <FooterLink>Вакансии</FooterLink>
      </FlexContainer>
      <FlexContainer flexDirection="column" gap={10} align="start">
        <FooterTitle>меню</FooterTitle>
        <FooterLink>Расчёт стоимости</FooterLink>
        <FooterLink>Услуги</FooterLink>
        <FooterLink>Виджеты</FooterLink>
        <FooterLink>Интеграции</FooterLink>
        <FooterLink>Наши клиенты</FooterLink>
      </FlexContainer>
    </footer>
  );
};

export default Footer;
