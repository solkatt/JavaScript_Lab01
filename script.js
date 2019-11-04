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




    if (answer.value == 'start') {
        answer.value = '';
        questionBox.innerHTML = '<span class="text"> Det är en vacker morgon ovanpå sockervaddsmolnet, du har precis gnuggat sömnen ur ögonen när en magisk fräs uppenbarar sig.<br><br> "Här kommer jag med två gåvor!" Vill du ha en <span class="alternativ">potatis</span> eller en <span class="alternativ">gåta</span>?<br></span>'
    }

    // DET STORA POTATIS ÄVENTYRET

    if (answer.value == 'potatis') {
        answer.value = '';


        questionBox.innerHTML = '<span class="text">Du valde potatis! Mycket bra val!, joddlade fräsen. <br><br> Innan du tar en tugga vill jag att du ska veta, att om du går vilse, ropa bara <span class="alternativ">hem</span>. <br> <br>Vill du ta en <span class="alternativ">tugga</span> eller <span class="alternativ">slänga</span> potatisen?</span> ';


    }

    if (answer.value == 'tugga') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> TJOLLAHOPP!! Den här potatisen var full av teleporteringsjuice!<br> Du befinner dig nu på en åker. Det dundrar i horisonten, något stort är påväg. <br> Helt plötsligt står en stor gorillaliknande potatis framför dig. Den store Blå King Kongo. <br><br> Vad vill du göra? <br> <br> <span class="alternativ"> Fly</span>, kika i <span class="alternativ"> fickan </span>eller <span class="alternativ">fläkta</span>'

    }

    if (answer.value == 'slänga') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> Du slänger ut potatisen från sockervaddsmolnet och ser den försvinna. <br><br> Olyckligtvis är det en boomerang-potatis som kommer tillbaka i en väldig fart och träffar dig i huvudet :( </span>'

        // setInterval(function(){ alert('GAME OVER'); 
        //     ; }, 4000);

        setInterval(function () {
            alert('GAME OVER');
            window.location.reload(true);;
        }, 6000);


    }

    if (answer.value == 'fly') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> Du flyr snabbt som vinden. Lite för snabbt så du ser inte riktigt vart du är påväg. <br><br> KRASH! Du springer rakt in i en ladugård, i sån hastighet att den exploderar. <br><br> Kvar finns endast en <span class="alternativ"> färsk fesk</span> Vill du ta upp den? <br><br> <span class="alternativ"> Ja / Nej </span></span>'


    }

    if (answer.value == 'ja') {
        answer.value = '';
        items.push('fisk');

        alert('Du har nu en färsk fesk i fickan');
        questionBox.innerHTML = 'BRAAAK!! Nu har Den stora Blå King Kongo kommit ikapp.'

        console.log(items);
    }

    if (answer.value == 'fläkta') {
        answer.value = '';

        questionBox.innerHTML = '';
    }



    if (answer.value == 'fickan') {
        answer.value = '';

        for (let i = 0; i < items.length; i++) {
            if (items[i] == 'färsk fesk') {
                prompt('Du har nu en färsk fesk i fickan!')

                i

            } else {
                prompt('Du har bara ludd i fickan..')

            }

        }
    }

  








}



const animation = document.getElementById('#animation');



document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        // answer.style.backgroundColor = 'red';
        submit();

    }


}