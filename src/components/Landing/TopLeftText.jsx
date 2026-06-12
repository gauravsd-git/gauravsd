export default function TopLeftText() {
  return (
    <div
      className="inter"
      style={{
        position: "absolute",
        top: 36,
        left: 44,
        zIndex: 10,
        fontSize: 13,
        fontWeight: 300,
        lineHeight: 1.65,
      }}
    >
      <strong style={{ fontWeight: 500, display: "block" }}>
        Hii, I am Gaurav Vishwakarma
      </strong>
      A full stack java developer &amp; web designer
    </div>
  );
}