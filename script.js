const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)


function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert('Você já adicionou essa data ❌')
    return
  }

  alert('Adicionado com sucesso ✔')
  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))  //salvar no storage
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // recupera o que salvou antes no storage pra posteriormente colocar na tela (nesse caso), ou devolve um objeto vazio para não dar erro

nlwSetup.setData(data)
nlwSetup.load()