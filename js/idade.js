//pegar elementos  do doc
const formPessoa = document.querySelector("#formulario-pessoa")
const divDados = document.querySelector("#div-dados")

formPessoa.addEventListener('submit').(evt) => {
evt.preventDefalt()

const dadosForm = new FormData(formPessoa)

const nome = dadosForm.get('nome')
const idade = dadosForm.get('idade')

let situacaoIdade = idade >= 18 ? `${nome}. é Maior de idade` : `${nome}, é menor de idade`
divDados.innerHTML = situacaoIdade


}