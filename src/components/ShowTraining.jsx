import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { List, Training, Exercise, NameTraning } from "../styles";

function ShowTraining() {
  const { workouts } = useContext(AppContext);

  return (
    <List>
      {workouts.map((t) => {
        return (
          <Training key={t.name}>
            <NameTraning>{t.name}</NameTraning>
            {t.exercises.map((e) => {
              return (
                <Exercise key={e.ex}>
                  <h3>{` ${e.ex} | N.Rep: ${e.rep} | Carga: ${e.car}`}</h3>
                  <img src={e.img} alt={e.ex} />
                </Exercise>
              );
            })}
          </Training>
        );
      })}
    </List>
  );
}

export default ShowTraining;
