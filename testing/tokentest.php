<?php
if (isset($_GET['token'])) {
    $token = $_GET['token'];
    $command = escapeshellcmd('python3 /usr/www/solomonwood/public/hcon/botsetup.py $token');
    $output = shell_exec($command);
    echo $output;
} else {
    echo "You like traps, don't you?";
}
?>