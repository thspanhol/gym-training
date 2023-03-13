import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import { Create, Title } from "../styles"

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
    <Create>
      <Title>Crie Seu <span>Treino!!</span></Title>
      <img src='/dumbbell.png' alt='dumbbell.png'></img>
      <label htmlFor='tre'>Criar novo treino: </label>
      <input type='text' id='tre' spellCheck="false" placeholder='Ex: Treino de Pernas' onChange={(e) => setNovoTreino(e.target.value)} value={novoTreino}/>
      <button onClick={() => {
        editWorkouts('create', {name: novoTreino, exercises: []});
        setNovoTreino('')
      }}>Criar</button>

      <label>Adicionar novo exercício: </label>
      <label htmlFor='exe'>Nome: </label>
      <input type='text' id='exe' spellCheck="false" placeholder='Ex: Cadeira Adutora' onChange={(e) => setExNome(e.target.value)} value={exNome}/>

      <label htmlFor='rep'>Repetições: </label>
      <input type='text' id='rep' spellCheck="false" placeholder='Ex: 3x12' onChange={(e) => setExRep(e.target.value)} value={exRep}/>

      <label htmlFor='car'>Carga: </label>
      <input type='text' id='car' spellCheck="false" placeholder='Ex: 30kg' onChange={(e) => setExCar(e.target.value)} value={exCar}/>

      <label htmlFor='ilu'>Ilustração: </label>
      <input type='text' id='ilu' spellCheck="false" placeholder='Link de uma Imagem' onChange={(e) => setExImg(e.target.value)} value={exImg}/>

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
    </Create>
  );
}

export default CreateTraining;