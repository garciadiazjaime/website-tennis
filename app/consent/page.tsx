import Header from "@/app/components/Header";
import Main from "@/app/components/Main";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Main>
        <section style={{ margin: "100px 0" }}>
          <h2>Consent Agreement</h2>
          <div style={{ marginTop: 100, fontSize: 24 }}>
            I agree to receive marketing and transactional communications from
            Tennis Partner Hub via SMS. I understand I can opt-out at any time
            by following the unsubscribe instructions provided in the
            communication.
          </div>
        </section>
      </Main>

      <Footer />
    </div>
  );
}
