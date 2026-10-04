function checkAnswer(inputId) {
    const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();

    // List of all accepted answer variations (English & Arabic)
    const validAnswers = [
        // English variations
        "shinichi",
        "shinichi kudo",
        "kudo",
        
        // Arabic variations
        "سينشي",
        "سينشي كودو",
        "كودو",
    ];

    // Check if the user's input matches any valid answer
    if (validAnswers.includes(userAnswer)) {
        alert("Correct!");
    } else {
        alert("Incorrect, try again.");
    }
}
