export default function VignetteGrain() {
  return (
    <div
      className="grain-vignette"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}