<?php
$name = $_POST['firstName'];
$number = $_POST['telephoneNumber'];

$name = htmlspecialchars($name);
$number = htmlspecialchars($number);

$name = urldecode($name);
$number = urldecode($number);

if(mail("blanchard-2021@mail.ru", "Заявка с сайта", "Имя: " . $name . "\nНомер телефона: " . $number)) {
    echo 'true';
}
