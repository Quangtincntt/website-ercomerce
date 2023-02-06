import Header from "../DefaultLayouts/Header";
import Footer from "./Footer";

function FooterLayouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default FooterLayouts;
