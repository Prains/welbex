const Socialicon = ({ link, icon }) => {
  return (
    <a
      href={link}
      style={{
        display: "flex",
        alignItems: "center",
        jusifyContent: "center",
      }}
    >
      <img src={icon} alt="Иконка социальной сети" />
    </a>
  );
};

export default Socialicon;
