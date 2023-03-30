const HeaderLink = ({ link, children }) => {
  return (
    <a href={link} className="inter">
      {children}
    </a>
  );
};

export default HeaderLink;
