<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //от кого письмо
    $mail->setFrom('yegor.dyakovskiy@aiesec.net', 'Yegor');
    //кому отправить
    $mail->addAddress('yegor.dyakovskiy@aiesec.net');
    //тема письма
    $mail->Subject = 'Хай, заявка!';
    

    //рука
    $hand = "Правая";
    if($_POST['hand'] == "left"){
        $hand = "Левая";
    }

    //тело письма
    $body = '<h1>Заявка</h1>';

    $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>'


    $mail->Body = $body;

    if (!$mail->send()){
        $message = 'Ошибка'
    } else {
        $message = 'Данные отправлены'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response)
?>