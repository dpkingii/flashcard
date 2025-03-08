const flashcards = [
    
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {

    
    curCard = document.getElementById('card-content')
    if (showingTerm){
        curCard.textContent = flashcards[currentIndex].term
    }else{
        curCard.textContent = flashcards[currentIndex].definition
    }

}

// The rest of the code you will write is apart of event listeners

document.getElementById('flashcard').addEventListener('click', function() {
    if(showingTerm){
        showingTerm = false
    }else{
        showingTerm = true
    }
    displayCard();
})

document.getElementById('prev-btn').addEventListener('click', function() {
    if(currentIndex != 0){
        currentIndex--
        showingTerm = true;
        displayCard();
    }
    
})
document.getElementById('next-btn').addEventListener('click', function() {
    if(currentIndex < flashcards.length-1){
        currentIndex++
        showingTerm = true;
        displayCard();
    }
    
})


document.getElementById('add-card-btn').addEventListener('click', function() {
    let myTerm = document.getElementById('new-term').value;
    let myDefinition = document.getElementById('new-definition').value;
    if(myTerm == '' || myDefinition == ''){ 
        return
    }
    
    flashcards.push({
        term: myTerm,
        definition: myDefinition
    })

    document.getElementById('new-term').value = '';
    document.getElementById('new-definition').value = '';
    
    displayCard()
})




// This line will display the card when the page is refreshed
window.onload = displayCard;
