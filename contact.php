<?php
    if($_POST) {
        $email_to = "michelle.r.kelman@gmail.com";
        $email_subject = "Personal Website Contact Form";

        $name = $_POST['name'];
        $email = $_POST['email'];
        $reason = $_POST['reason'];
        $message = $_POST['message'];

        $email_message .= "Name: " . $name . "\n";
        $email_message .= "Email: " . $email . "\n";
        $email_message .= "Reason: " . $reason . "\n";
        $email_message .= "Message: " . $message . "\n";

        mail($email_to, $email_subject, $email_message);
    }
?>