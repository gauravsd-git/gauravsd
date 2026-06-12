export default function A_dot() {
  return (
    <div
      className="inter"
      style={{
        position: "absolute",
        bottom: 28,
        left: 44,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        color: "rgba(240,237,232,0.45)",
        letterSpacing: "0.04em",
      }}
    >
      <span
        className="status-dot"
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#5aff8a",
          boxShadow: "0 0 8px #5aff8a",
          flexShrink: 0,
        }}
      />
      Available for work
    </div>
  );
}