// // // // PLACE load ASCI IMAGE

let userData = []

const startBtn = document.querySelector('#startBtn')
startBtn.onclick = function () {
    if (confirm('Start') == true) {
        userData.push(prompt('Ange ditt namn:', ['Waldemar Pupp']));
        console.log(userData)
    }
};




const userAnswer = document.getElementById('answer');

const info = document.querySelector('#info h2');




// QUESTION BOX - INFO, ALTERNATIV, FRÅGOR





//Ryggsäck Items -- features = spara, slänga och använda items
let items = [];
// // // // Tidigare Val


// UPPDATERA QUESTIONBOX
function updateText() {}





function submit() {
    answer.value = answer.value.toLowerCase();
    // alert(answer.value);



    // DET STORA POTATIS ÄVENTYRET

    if (answer.value == 'potatis') {
        answer.value = '';


        questionBox.innerHTML = '<span class="text">Du valde potatis! Mycket bra val!, joddlade jordfräsen. <br><br> Innan du tar en tugga vill jag att du ska veta, att om du går vilse, ropa bara <span class="alternativ">hem</span>. <br> <br>Vill du ta en <span class="alternativ">tugga</span> eller <span class="alternativ">slänga</span> potatisen?</span> ';


    }

    if (answer.value == 'tugga') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> TJOLLAHOPP!! Det var en teleporteringspotatis! <br> Du befinner dig nu på en åker. Det dundrar i horisonten, något stort är påväg. <br> Helt plötsligt står en stor gorillaliknande potatis framför dig. Den store Blå King Kongo. <br><br> Vad vill du göra? <br> <br> <span class="alternativ"> Fly </span> eller <span class="alternativ">Fläkta</span>'

    }


    if (answer.value == 'fly') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> Du flyr snabbt som vinden. Lite för snabbt så du ser inte riktigt vart du är påväg. <br><br> KRASH! Du springer rakt in i en ladugård, i sån hastighet att den exploderar. <br><br> Kvar finns endast en <span class="alternativ"> potatisskalare</span> och ett paket <span class="alternativ">vispgrädde</span> </span>'


    }

    if (answer.value == 'skalare') {
        answer.value = '';
        items.push('potatisskalare');

        questionBox.innerHTML = 'Detta funkar'

        console.log(items);
    }







    if (answer.value == 'ryggsäck') {
        questionBox.innerHTML = '<span class="text">Föremål i fickan:</span><br><br>' + items;
    }


}



const animation = document.getElementById('#animation');



document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        // answer.style.backgroundColor = 'red';
        submit();

    }


}