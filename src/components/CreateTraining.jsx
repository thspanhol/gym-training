import '../App.css';
import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"

function CreateTraining() {

  const { editWorkouts, workouts } = useContext(AppContext);

  const [novoTreino, setNovoTreino] = useState('');
  const [exNome, setExNome] = useState('');
  const [exRep, setExRep] = useState('');
  const [exCar, setExCar] = useState('');
  const [exImg, setExImg] = useState('');
  const [selecionado, setSelecionado] = useState('');

  useEffect(() => {
    if (workouts !== ''){
      setSelecionado(workouts[0].name)
    }
  }, [workouts]);

  return (
    <div className='create'>
      <label htmlFor='tre'>Criar novo treino: </label>
      <input type='text' id='tre' onChange={(e) => setNovoTreino(e.target.value)} value={novoTreino}/>
      <button onClick={() => {
        editWorkouts('create', {name: novoTreino, exercises: []});
        setNovoTreino('')
      }}>Criar</button>

      <label>Adicionar novo exercício: </label>
      <label htmlFor='exe'>Nome: </label>
      <input type='text' id='exe' onChange={(e) => setExNome(e.target.value)} value={exNome}/>

      <label htmlFor='rep'>Repetições: </label>
      <input type='text' id='rep' onChange={(e) => setExRep(e.target.value)} value={exRep}/>

      <label htmlFor='car'>Carga: </label>
      <input type='text' id='car' onChange={(e) => setExCar(e.target.value)} value={exCar}/>

      <label htmlFor='ilu'>Ilustração: </label>
      <input type='text' id='ilu' onChange={(e) => setExImg(e.target.value)} value={exImg}/>

      <label htmlFor='treinos'>Adicionar ao Treino: </label>
      <select id="treinos" name="treinos" onChange={(e) => setSelecionado(e.target.value)} value={selecionado}>
        {workouts !== '' && workouts.sort(( x, y ) => {
          const a = x.name.toUpperCase();
          const b = y.name.toUpperCase();
          return a === b ? 0 : a > b ? 1 : -1;
        }).map((t) => <option key={t.name} value={t.name}>{t.name}</option>)}
    	</select>
      <button onClick={() => {
        editWorkouts(selecionado, {ex: exNome, rep: exRep, car: exCar, img: exImg})
        setExNome('');
        setExRep('');
        setExCar('');
        setExImg('');
      }}>Adicionar</button>
    </div>
  );
}

export default CreateTraining;