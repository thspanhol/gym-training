import './App.css';
import CreateTraining from './components/CreateTraining';
import ShowTraining from './components/ShowTraining'
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import { Background, GlobalStyle } from "./styles"

function App() {

  const { workouts } = useContext(AppContext);

  return (
    <Background>
      <GlobalStyle />
      <CreateTraining />
      {workouts !== '' && <ShowTraining />}
    </Background>
  );
}

export default App;
