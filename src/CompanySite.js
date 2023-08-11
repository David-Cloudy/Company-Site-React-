import styles from "./CompanySite.css";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const CompanySite = () => {
  return (
    <div className={styles.companySite}>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default CompanySite;
