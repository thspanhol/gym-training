import '../App.css';
import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext"

function App() {

  const { workouts } = useContext(AppContext);

  useEffect(() => console.log(workouts), []);

  return (
    <div className='show'>

      {
          workouts.map((t) => {
            return(
              <div className='training' key={t.name}>
        <h1>{t.name}</h1>

        {t.exercises.map((e) => {
          return(
            <div className='exercise' key={e.ex}>
          <h3>{`Nome do Exercício: ${e.ex} | N.Rep: ${e.rep} | Carga: ${e.car}`}</h3>
          <img src={e.img} alt={e.ex}/>
        </div>
          )
        })}

      </div>
            )
          })
        }

    </div>
  );
}

export default App;
