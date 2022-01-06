<?php
    if($_POST) {
        $email_to = "michelle.r.kelman@gmail.com";
        $email_subject = "Personal Website Contact Form";

        $username = $_POST['username'];
        $useremail = $_POST['useremail'];
        $userreason = $_POST['userreason'];
        $usermessage = $_POST['usermessage'];

        $email_message .= "Name: " . $username . "\n";
        $email_message .= "Email: " . $useremail . "\n";
        $email_message .= "Reason: " . $userreason . "\n";
        $email_message .= "Message: " . $usermessage . "\n";

        mail($email_to, $email_subject, $email_message);
    }
?>