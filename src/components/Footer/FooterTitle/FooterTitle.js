const FooterTitle = ({ children }) => {
  return (
    <h4
      className="inter"
      style={{
        fontWeight: "700",
        fontSize: "14",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        margin: "0",
        marginBottom: "10px",
        color: "#656566",
      }}
    >
      {children}
    </h4>
  );
};

export default FooterTitle;
