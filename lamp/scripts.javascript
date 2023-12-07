// script.js

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var product = document.getElementById('product').value;
    var rating = document.getElementById('rating').value;
    var feedback = document.getElementById('feedback').value;

    // Perform the necessary steps to submit the feedback data
    // This could include an AJAX request to a server-side script

    console.log('Product:', product);
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
});