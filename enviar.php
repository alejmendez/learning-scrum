<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);

$name    = $dataObject->name;
$email   = $dataObject->email;
$message = $dataObject->message;

$destinatario = 'etd.spa@gmail.com';
$asunto = 'Contacto de ' . $name;
$cuerpo = '
<html>
    <head><meta charset="gb18030">
        <title>Contacto learningscrum.cl</title>
    </head>
    <body>
        <h1>Hola learningscrum!</h1>
        <p>
            La siguiente persona quiere contactarte:
        </p>
        <p>
            Nombre:  <b>' . $name . '</b><br />
            Email:   <b>' . $email . '</b><br />
            Mensaje: <b>' . $message . '</b>
        </p>
    </body>
</html>
';

//para el envio en formato HTML
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

//direccion del remitente
$headers .= "From: No responder <noreply@learningscrum.cl>\r\n";

//direccion de respuesta, si queremos que sea distinta que la del remitente
$headers .= "Reply-To: noreply@learningscrum.cl\r\n";

//ruta del mensaje desde origen a destino
$headers .= "Return-path: noreply@learningscrum.cl\r\n";

mail($destinatario, $asunto, $cuerpo, $headers);

echo '{ok: true}';