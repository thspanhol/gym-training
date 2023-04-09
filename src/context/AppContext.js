import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState("");

  const editWorkouts = (option, data) => {
    if (option === "create") {
      setWorkouts([...workouts, data]);
    } else {
      const index =
        workouts.length === 1
          ? 0
          : workouts.findIndex((i) => i.name === option);
      const edit = workouts[index];
      edit.exercises = [...edit.exercises, data];
      setWorkouts(
        workouts.length === 1
          ? [edit]
          : [...workouts.filter((f) => f.name !== option), edit]
      );
    }
  };

  return (
    <AppContext.Provider value={{ workouts, editWorkouts }}>
      {children}
    </AppContext.Provider>
  );
};
