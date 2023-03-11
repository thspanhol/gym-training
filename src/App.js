import './App.css';
import CreateTraining from './components/CreateTraining';
import ShowTraining from './components/ShowTraining'
import { useContext } from "react"
import { AppContext } from "./context/AppContext"

function App() {

  const { workouts } = useContext(AppContext);

  return (
    <div className='app'>
      <CreateTraining />
      {workouts !== '' && <ShowTraining />}
    </div>
  );
}

export default App;
