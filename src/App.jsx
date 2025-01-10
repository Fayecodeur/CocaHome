import "./App.css";
import Content from "./components/Content.jsx";
import ToggleLang from "./components/ToggleLang.jsx";
import ContextProvider from "./context/langContex.jsx";
function App() {
  return (
    <>
      <ContextProvider>
        <ToggleLang />
        <Content />
      </ContextProvider>
    </>
  );
}

export default App;
