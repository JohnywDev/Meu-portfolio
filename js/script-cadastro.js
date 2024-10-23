const cadastroForm = document.getElementById('cadastro-form');
const users = JSON.parse(localStorage.getItem('users')) || [];

cadastroForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  if (senha !== confirmarSenha) {
    alert('Senhas não conferem!');
    return;
  }

  const userExist = users.find((user) => user.username === username);

  if (userExist) {
    alert('Usuário já existe!');
    return;
  }

  const user = {
    nome,
    sobrenome,
    email,
    username,
    senha,
  };

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Usuário cadastrado com sucesso!');
  window.location.href = 'login.html';
  
});

const username = localStorage.getItem('username');
  document.getElementById('boas-vindas').innerHTML = `Bem-vindo, ${username}!`;