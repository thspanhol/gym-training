import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [workouts, setWorkouts] = useState([
        {name: 'Treino A', exercises: [ {ex: 'Exercício', rep: '3x12', img: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif'}, {ex: 'Exercício', rep: '3x12', img: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif'}, {ex: 'Exercício', rep: '3x12', img: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Cable-Crossover.gif'}, ]}
    ]);

    const editWorkouts = () => {
        setWorkouts()
    };

    return (
    <AppContext.Provider value={{ workouts, editWorkouts }}>
        {children}
    </AppContext.Provider>
    );
}