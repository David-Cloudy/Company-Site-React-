import styles from "./CompanySite.css";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";

function CompanySite() {
  return (
    <>
      <Navigation />
      <header className="App-header"></header>
      <Main />
      <footer className="App-footer"></footer>
    </>
  );
}

export default CompanySite;
