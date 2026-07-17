$('#results').html(``);

// Function to return alphabetical characters
function alphabeticalCharactersOnly(str) {
    // Convert to lower case
    str = str.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const myIterator = Iterator.from(str);
    const filteredIterator = myIterator.filter((ch) => alphabet.includes(ch));
    let filteredStr = "";
    for (const ch of filteredIterator) {
        filteredStr += ch;
    }
    return filteredStr;
}

// Keyup event for text field
$('#mytext').on('keyup', () => {
    $('#results').html(``);
    const str = $('#mytext').val();
    $('#results').append(`You have entered ${str} <br>`);
    $('#results').append(`Letter${alphabeticalCharactersOnly(str).length === 1 ? "" : "s"} entered ${alphabeticalCharactersOnly(str)} <br>`);
});

// Click event for Clear button
$('#clearBtn').on('click', () => {
    $('#results').html(``);
});