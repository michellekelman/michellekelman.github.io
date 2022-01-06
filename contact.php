<?php
    if($_GET) {
        $email_to = "michelle.r.kelman@gmail.com";
        $email_subject = "Personal Website Contact Form";

        $username = $_GET['username'];
        $useremail = $_GET['useremail'];
        $userreason = $_GET['userreason'];
        $usermessage = $_GET['usermessage'];

        $email_message .= "Name: " . $username . "\n";
        $email_message .= "Email: " . $useremail . "\n";
        $email_message .= "Reason: " . $userreason . "\n";
        $email_message .= "Message: " . $usermessage . "\n";

        mail($email_to, $email_subject, $email_message);
    }
?>