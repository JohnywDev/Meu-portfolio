const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
        // Enviar mensagem para o e-mail usando API ou servidor
        fetch('/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                mensagem
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
        
        // Limpar formulário
        form.reset();
    } else {
        alert('Preencha todos os campos!');
    }
});
