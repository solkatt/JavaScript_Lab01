# JavaScript Lab I

Målet med detta projekt är att skapa en interaktiv upplevelse med hjälp av HTML, CSS och JavaScript. 

Användaren får vid varje händelse två val som leder till olika vägar. Vissa val för berättelsen framåt medans vissa val leder till *Game Over*. 


## Metoder

### HTML
#### Exempel på kod

Upplevelsen förmedlas via text, där händelser, dialoger och val presenteras. 

```
<div id="questionBox">
    <p class="text" id="info">
        <span class="text">Här visas information om handling och val. 
    </p>
</div>
```

Användaren interagerar med hjälp av en input av typen text.
Där användaren får skriva in vilket val de vill göra samt trycka på *Submit-knappen* eller Enter-tangenten. 

```
<div id="answerBox">
    <input type="text" id="answer"/> 
    <button onclick="submit();" >Submit</button>

</div>
```

### JavaScript
#### Exempel på kod

Interaktionen fungerar med hjälp av ett stort gäng *if statements*. 
 
```
if (answer.value == 'Användarens svar') {
        answer.value = '';
        questionBox.innerHTML = '<span class="text">Texten uppdateras beroende på svar </span>'
    }
```

Vid vissa tilffällen fördröjs uppdateringen, t.ex. när man vinner/förlorar eller flera uppdateringar av text ska ske efter varandra.

```
        setTimeout(function () {
            alert('GAME OVER');
            window.location.reload(true);;
        }, 6000);
    }
```

För att göra det möjligt för användaren att *submitta* sitt svar med Enter-tangenten skrevs följande kod.

```
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        submit();
    }
}
```

## Avgränsingar

Ambitionen var från början att göra det möjligt för användaren att plocka upp flera objekt och spara dem i en digital ryggsäck, för att sedan kunna använda dem vid olika tillfällen. I nuläget finns ett objekt möjligt att plocka upp, som sparas i en *array*. 

Planen var också att visa olika bilder ut genom spelet, men dessa två *feautures* är tyvärr inte klara. Därför finns det spår av dem i koden.

## Länkar

[GitHub Repo](https://github.com/solkatt/JavaScript_Lab01.git)


[Demo](https://solkatt.github.io/JavaScript_Lab01/)

