import './App.css'
import { ProviderContext } from "./context/context";
import MainApp from "./components/MainApp";

function App() {

  return (
    <ProviderContext>
      <MainApp />
    </ProviderContext>
  )
}

export default App
