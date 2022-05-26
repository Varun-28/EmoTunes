import "./App.css";
import { useTheme } from "./Context/theme-context";
import { Navbar, Footer, EmoTunesRoutes } from "./components/Components";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App flex flex-col min-h-screen"
      style={{
        backgroundColor: theme.mode.bgColor,
        color: theme.mode.primaryColor,
      }}
    >
      <div className="header">
        <Navbar />
      </div>
      <div className="main flex-grow">
        <EmoTunesRoutes />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
