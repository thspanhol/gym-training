import CreateTraining from './components/CreateTraining';
import ShowTraining from './components/ShowTraining'
import NoTraining from './components/NoTraining'
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import { Background, GlobalStyle } from "./styles"

function App() {

  const { workouts } = useContext(AppContext);

  return (
    <Background>
      <GlobalStyle />
      <CreateTraining />
      {workouts !== '' ? <ShowTraining /> : <NoTraining /> }
    </Background>
  );
}

export default App;
