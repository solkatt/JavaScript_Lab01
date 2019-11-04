// // // // PLACE load ASCI IMAGE

let userData = []






const userAnswer = document.getElementById('answer');

const info = document.querySelector('#info h2');
let snorkelSound = new Audio('/sound/sax.mp3');
snorkelSound.loop = false;




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
        questionBox.innerHTML = '<span class="text"> Det är en vacker morgon ovanpå sockervaddsmolnet, du har precis gnuggat sömnen ur ögonen när en magisk fräs uppenbarar sig.<br><br> "Här kommer jag med två gåvor!" Vill du ha en <span class="alternativ">snorkel</span> eller en <span class="alternativ">potatis</span>?<br></span>'
    }

    // DET STORA POTATIS ÄVENTYRET

    if (answer.value == 'potatis') {
        answer.value = '';


        questionBox.innerHTML = '<span class="text">Du valde potatis! Mycket bra val!, joddlade fräsen. <br><br><br> <br>Vill du ta en <span class="alternativ">tugga</span> eller <span class="alternativ">slänga</span> potatisen?</span> ';


    }

    if (answer.value == 'tugga') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> TJOLLAHOPP!! Den här potatisen var full av teleporteringsjuice!<br> Du befinner dig nu på en åker. Det dundrar i horisonten, något stort är påväg. <br> Helt plötsligt står en stor gorillaliknande potatis framför dig. Den store Blå King Kongo. <br><br> Vad vill du göra? <br> <br> <span class="alternativ"> Fly </span>eller <span class="alternativ">fläkta</span>'

    }

    if (answer.value == 'slänga') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> Du slänger ut potatisen från sockervaddsmolnet och ser den försvinna. <br><br> Olyckligtvis är det en boomerang-potatis som kommer tillbaka i en väldig fart och träffar dig i huvudet :( </span>'


        setInterval(function () {
            alert('GAME OVER');
            window.location.reload(true);;
        }, 6000);


    }

    if (answer.value == 'fly') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> Du flyr snabbt som vinden. Lite för snabbt så du ser inte riktigt vart du är påväg. <br><br> KRASH! Du springer rakt in i en ladugård, i sån hastighet att den exploderar. <br><br> Kvar finns endast en färsk fesk Vill du ta upp den? <br><br> <span class="alternativ"> Ja / Nej </span></span>'


    }

    if (answer.value == 'ja') {
        answer.value = '';
        items.push('fisk');

        alert('Du har nu en färsk fesk i fickan');
        questionBox.innerHTML = '<span class="text">BRAAAK!! Nu har Den stora Blå King Kongo kommit ikapp.  Han slungar dig upp tillbaka till sockervaddsmolnet!</span><span class="text"> Tillbaka på sockervaddsmolnet! Vill du prova <span class="alternativ">snorkel?</span></span>'




    }


    if (answer.value == 'nej') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text">BRAAAK!! Nu har Den stora Blå King Kongo kommit ikapp. Han slungar dig upp tillbaka till sockervaddsmolnet!</span>'

        setInterval(function () {
            questionBox.innerHTML = '<span class="text"> Tillbaka på sockervaddsmolnet! Vill du prova <span class="alternativ">snorkel?</span></span>'
        }, 6000);
    }

    if (answer.value == 'fläkta') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text"> Du fläktar med armarna och flyger upp till sockervaddsmolnet. <br><br>Tillbaka på sockervaddsmolnet! Vill du prova <span class="alternativ">snorkel?</span></span>';
    }



    if (answer.value == 'fickan') {
        answer.value = '';

        for (let i = 0; i < items.length; i++) {
            if (items[i] == 'fisk') {
                prompt('Du har nu en färsk fesk i fickan!')



            } else {
                prompt('Du har bara ludd i denna fickan..')

            }

        }
    }




    // SNORKEL ÄVENTYRET
    if (answer.value == 'snorkel') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text">GRATTIS! En alldelles egen snorkel! <br><br> Vill du <span class="alternativ">blåsa</span> eller <span class="alternativ">andas </span>i den? </span>'
    }


    if (answer.value == 'blåsa') {
        answer.value = '';

        snorkelSound.play();

        questionBox.innerHTML = '<span class="text">Det magiska ljudet som kom ur snorkel innehöll en såpass hög dos av jazz att du somnade. </span>'



        setInterval(function () {
            alert('GAME OVER');
            window.location.reload(true);;
        }, 6000);


    }

    if (answer.value == 'andas') {
        answer.value = '';

        questionBox.innerHTML = '<span class="text">VIPPS! Snorkeln var förtrollad! <br><br> Du befinner dig nu i en undervattenträdgård! <br><br> En bläckfisk smyger sig upp och frågar: <br><br> Har du nån <span class="alternativ">färsk fesk?</span></span>'
    }
    if (answer.value == 'färsk fesk') {
        answer.value = '';

        for (let i = 0; i < items.length; i++) {
            if (items[i] == 'fisk') {

                questionBox.innerHTML = ' TACK FÖR FESKEN! DU VANN!'
                setInterval(function () {
                    alert('YOU WON!');
                    window.location.reload(true);;
                }, 6000);

            }
        }
        questionBox.innerHTML = '<span class="text">Du har ingen fesk!, bubblar bläckfisken och kastar dig tillbaka till sockervaddsmolnet!</span> <br><br><span class="text"> Tillbaka på sockervaddsmolnet! Vill du prova <span class="alternativ">potatis?</span></span>'


    }



}



























// ENTER TRYCK

document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        // answer.style.backgroundColor = 'red';
        submit();

    }


}