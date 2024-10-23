<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$para = 'johnyvozon@gmail.com'; // Substitua por seu e-mail
$assunto = 'Mensagem de contato';

$cabecalho = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

mail($para, $assunto, $mensagem, $cabecalho);

echo 'Mensagem enviada com sucesso!';
header('Location: contato.html');
exit;
?>