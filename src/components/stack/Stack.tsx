export interface StackProps {
  children: React.ReactNode;
  spacing?: number;
  direction?: "row" | "column";
  wrap?: boolean;
}
function Stack({ children, direction, spacing, wrap }: StackProps) {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: direction ? direction : "row",
    gap: spacing ? `${spacing * 0.25}rem` : "0",
    flexWrap: wrap ? "wrap" : "nowrap",
  };
  return <div style={style}>{children}</div>;
}

export default Stack;
