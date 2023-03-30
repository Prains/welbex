const FooterLink = ({ link, children }) => {
  return (
    <a
      href={link}
      className="inter"
      style={{
        fontWeight: "400",
      }}
    >
      {children}
    </a>
  );
};

export default FooterLink;
