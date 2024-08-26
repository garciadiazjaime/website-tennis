export default function Footer() {
  return (
    <footer
      style={{
        opacity: 0.6,
        textAlign: "center",
        fontSize: 18,
        marginBottom: 40,
      }}
    >
      {new Date().getFullYear()} All rights reserved
    </footer>
  );
}
