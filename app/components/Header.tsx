export default function Header() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        padding: 12,
        backgroundColor: "#012a33",
        color: "white",
      }}
    >
      <h1
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 38,
        }}
      >
        <span>Tennis Partner Hub</span>

        <span>🎾</span>
      </h1>
    </div>
  );
}
