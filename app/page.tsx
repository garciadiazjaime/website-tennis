import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Footer from "@/app/components/Footer";
import QRInit from "@/app/components/QRInit";

export default function Home() {
  return (
    <div>
      <Header />

      <Main>
        <section style={{ marginTop: 40 }}>
          <p style={{ fontSize: 38, textAlign: "center" }}>
            Looking for a tennis partner? Scan the QR code with your phone, and
            we&apos;ll help you find one!
          </p>

          <div style={{ maxWidth: 400, margin: "40px auto" }}>
            <QRInit />
          </div>
        </section>
      </Main>

      <Footer />
    </div>
  );
}
