$('#results').html(``);

// Function to return alphabetical characters
function alphabetCharactersOnly(str) {
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
    $('#results').append(`Letter${alphabetCharactersOnly(str).length === 1 ? "" : "s"} entered ${alphabetCharactersOnly(str)} <br>`);
});

// Click event for Clear button
$('#clearBtn').on('click', () => {
    $('#results').html(``);
});