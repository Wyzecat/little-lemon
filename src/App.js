import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <meta name="og:title" content="Little Lemon" />
      <meta name="description" content="The online home for the Little Lemon restaurant." />
      <meta name="og:description" content="Little Lemon restaurant website" />
      <meta name="og:image" content="./images/logo.png" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
