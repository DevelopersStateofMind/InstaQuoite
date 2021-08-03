import quotecalculator from "./routes/quotecalculator/quotecalculator";
import Footer from "./sectioning/footer/footer";
import Header from "./sectioning/header/header";
import Main from "./sectioning/main/main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
