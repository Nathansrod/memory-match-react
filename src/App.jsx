import "./App.css";
import Board from "./components/Board.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import GameContextProvider from "./store/game-context.jsx";

function App() {
  return (
    <GameContextProvider>
      <section>
        <Header />
        <Menu />
        <Board/>
      </section>
      <Footer />
    </GameContextProvider>
  );
}

export default App;
