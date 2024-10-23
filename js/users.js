const loginForm2 = document.getElementById('login-form-2');
const users = JSON.parse(localStorage.getItem('users')) || [];

loginForm2.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username-2').value;
  const password = document.getElementById('password-2').value;

  const user = users.find((user) => user.username === username);

  if (!user) {
    alert('Usuário não existe!');
    return;
  }

  if (user.senha !== password) {
    alert('Senha incorreta!');
    return;
  }

  // Cria um token de autenticação
  const token = Math.random().toString(36).substr(2);
  localStorage.setItem('token', token);

  // Redireciona para a página principal
  window.location.href = 'usuariolog.html';
});

