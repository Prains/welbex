const FlexContainer = ({
  children,
  align = "center",
  justify = "center",
  gap = 0,
  flexDirection = "row",
}) => (
  <div
    style={{
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      gap,
      flexDirection: flexDirection,
    }}
  >
    {children}
  </div>
);

export default FlexContainer;
