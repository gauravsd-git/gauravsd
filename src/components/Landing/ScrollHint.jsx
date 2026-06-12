export default function ScrollHint() {
  return (
    <div
      className="inter"
      style={{
        position: "absolute",
        top: "50%",
        right: 44,
        zIndex: 10,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        color: "rgba(240,237,232,0.4)",
        fontSize: 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        writingMode: "vertical-rl",
      }}
    >
      scroll
      <span
        className="scroll-line"
        style={{
          display: "block",
          width: 1,
          height: 48,
          background: "linear-gradient(to bottom, rgba(240,237,232,0.4), transparent)",
        }}
      />
    </div>
  );
}