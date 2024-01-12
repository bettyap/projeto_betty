let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
  let txtNome = document.querySelector("#txtNome")

  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido!'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = ""
    nomeOk = true
  }
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = ''
    emailOk = true
  }
}

function mascaraTelefone(event) {
  let tecla = event.key;
  let telefone = event.target.value.replace(/\D+/g, "");

  if (/^[0-9]$/i.test(tecla)) {
    telefone = telefone + tecla;
    let tamanho = telefone.length;

    if (tamanho >= 12) {
      return false;
    }

    if (tamanho > 10) {
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (tamanho > 5) {
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (tamanho > 2) {
      telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      telefone = telefone.replace(/^(\d*)/, "($1");
    }

    event.target.value = telefone;
  }

  if (!["Backspace", "Delete"].includes(tecla)) {
    return false;
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >= 2) {
    txtAssunto.innerHTML = 'Digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'none'
  } else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!!')
  } else {
    alert('Preencha o formulário corretamente antes de Enviar!')
  }
}