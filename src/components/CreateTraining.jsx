import '../App.css';

function CreateTraining() {
  return (
    <div className='create'>
      <label for='tre'>Criar novo treino: </label>
      <input type='text' id='tre' />
      <button>Criar</button>

      <label>Adicionar novo exercício: </label>
      <label for='exe'>Nome: </label>
      <input type='text' id='exe' />

      <label for='rep'>Repetições: </label>
      <input type='text' id='rep' />

      <label for='ilu'>Ilustração: </label>
      <input type='text' id='ilu' />

      <label for='treinos'>Adicionar ao Treino: </label>
      <select id="treinos" name="treinos">
		    <option value="A">A</option>
		    <option value="B">B</option>
		    <option value="C">C</option>
    	</select>
      <button>Adicionar</button>
    </div>
  );
}

export default CreateTraining;