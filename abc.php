<?php
require_once 'vendor/autoload.php'; // Include the Composer autoloader

use Twilio\Rest\Client;

// Your Twilio credentials from the Twilio Console
$account_sid = 'your_account_sid';
$auth_token = 'your_auth_token';
$twilio_number = 'your_twilio_phone_number';

// Get the POST data from JavaScript fetch
$data = json_decode(file_get_contents("php://input"));

$to = $data->to; // Recipient's phone number
$message = $data->message; // The message to be sent

// Initialize Twilio client
$client = new Client($account_sid, $auth_token);

try {
    // Send the SMS
    $client->messages->create(
        $to, // The recipient's phone number
        [
            'from' => $twilio_number, // Your Twilio number
            'body' => $message
        ]
    );
    // Send response back to the JavaScript
    echo json_encode(["success" => true, "message" => "SMS sent!"]);
} catch (Exception $e) {
    // If there's an error, return it
    echo json_encode(["success" => false, "error" => $e->getMessage()]);
}
?>
