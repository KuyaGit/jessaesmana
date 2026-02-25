<?php
// Email validation and sanitization
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Set response header
header('Content-Type: text/html; charset=utf-8');

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data and sanitize
    $name = sanitize_input($_POST['name'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $subject = sanitize_input($_POST['subject'] ?? '');
    $service = sanitize_input($_POST['service'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');
    
    // Validate form data
    $errors = [];
    
    // Check if name is empty
    if (empty($name)) {
        $errors[] = "Name is required.";
    } elseif (strlen($name) < 2) {
        $errors[] = "Name must be at least 2 characters.";
    }
    
    // Check if email is valid
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }
    
    // Check if subject is empty
    if (empty($subject)) {
        $errors[] = "Subject is required.";
    } elseif (strlen($subject) < 3) {
        $errors[] = "Subject must be at least 3 characters.";
    }
    
    // Check if message is empty
    if (empty($message)) {
        $errors[] = "Message is required.";
    } elseif (strlen($message) < 10) {
        $errors[] = "Message must be at least 10 characters.";
    }
    
    // If there are errors, display them
    if (!empty($errors)) {
        echo '<div class="message error">';
        echo '<strong>Please fix the following errors:</strong><ul>';
        foreach ($errors as $error) {
            echo '<li>' . $error . '</li>';
        }
        echo '</ul></div>';
    } else {
        // All validations passed, process the form
        
        // Email configuration
        $to = "esmanajessa@gmail.com"; // Jessa Esmana's email
        $from = $email;
        $reply_to = $email;
        
        // Email subject
        $email_subject = "New Contact Form Submission: " . $subject;
        
        // Email body
        $email_body = "You have received a new message from your portfolio website.\n\n";
        $email_body .= "Name: " . $name . "\n";
        $email_body .= "Email: " . $email . "\n";
        $email_body .= "Subject: " . $subject . "\n";
        if (!empty($service)) {
            $email_body .= "Service Type: " . $service . "\n";
        }
        $email_body .= "Message:\n" . $message . "\n\n";
        $email_body .= "---\n";
        $email_body .= "This message was sent from your portfolio website contact form.";
        
        // Email headers
        $headers = "From: " . $from . "\r\n";
        $headers .= "Reply-To: " . $reply_to . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Send email
        if (mail($to, $email_subject, $email_body, $headers)) {
            // Success message
            echo '<div class="message success">';
            echo '<strong>✓ Success!</strong><br>';
            echo 'Your message has been sent successfully. I will get back to you soon!';
            echo '</div>';
            
            // Optional: Log the message to a file
            $log_file = "messages_log.txt";
            $log_entry = "\n---\n";
            $log_entry .= "Date: " . date('Y-m-d H:i:s') . "\n";
            $log_entry .= "Name: " . $name . "\n";
            $log_entry .= "Email: " . $email . "\n";
            $log_entry .= "Subject: " . $subject . "\n";
            $log_entry .= "Service: " . $service . "\n";
            $log_entry .= "Message: " . $message . "\n";
            
            // Uncomment below to enable logging
            // file_put_contents($log_file, $log_entry, FILE_APPEND);
            
        } else {
            // Error sending email
            echo '<div class="message error">';
            echo '<strong>Error!</strong><br>';
            echo 'Sorry, there was an error sending your message. Please try again later or contact me directly at esmanajessa@gmail.com';
            echo '</div>';
        }
    }
} else {
    // If form was not submitted via POST, show error
    echo '<div class="message error">Invalid request. Please use the contact form to send a message.</div>';
}
?>
