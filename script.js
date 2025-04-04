let bilFirma = {
    firmaNavn: "Firma INC",
    antallAnsatte: 200,
    bilListe: ["Toyota", "BMV", "Honda"],
    betaltSkatt: 0,
    nettside: "nettside.no",
    function: function() {
        return this.bilListe
    }
}

document.writeln("Oppgave 1 "  + "<br/>");
document.writeln("Informasjon om vår firma: " 
    + "Vi er " + bilFirma.firmaNavn + "<br/>"
    + "Vi har " + bilFirma.antallAnsatte + " ansatte " + "<br/>"
    + "Våre biler: " + bilFirma.function().join(", ") + "<br/>"
    + "Vi betaler " + bilFirma.betaltSkatt + " kr i skatt" + "<br/>"
    + "Vår nettside er " + bilFirma.nettside + "<br/><br/>");

// Oppgave 2 
document.writeln("Oppgave 2 "  + "<br/>");
document.writeln("Den nye firmaen er: " + bilFirma.firmaNavn + "<br/><br/>")

//Oppgave 3 
bilFirma.bilListe.push("Tesla")
document.writeln("Oppgave 3 "  + "<br/>");
document.writeln("Vi har nå biltypene: " + bilFirma.bilListe.join(", ") + "<br/><br/>");

//Oppgave 4
bilFirma.bilListe.shift()
document.writeln("Oppgave 4 "  + "<br/>");
document.writeln("Våre biltyper nå... " + bilFirma.bilListe.join(", ") + "<br/><br/>")

//Oppgave 5 
document.writeln("Oppgave 5" + "<br/>")
delete bilFirma.nettside
document.writeln("Vår nettside er nå: " + bilFirma.nettside + "<br/><br/>")

//Oppgave 6
document.writeln("Oppgave 6" + "<br/>")
bilFirma.erÅpent = true
document.writeln("Er vår butikk åpent? " + bilFirma.erÅpent + "<br/><br/>")

//Oppgave 7
document.writeln("Oppgave 7" + "<br/>")
document.writeln("Våre biler: " + "<br/>")
for (let i = 0; i < bilFirma.bilListe.length; i++) {
    document.writeln(bilFirma.bilListe[i] + "<br/>")
}

document.writeln("<br/>")

//Oppgave 8
document.writeln("Oppgave 8" + "<br/>")
document.writeln("Vi har: " + Object.keys(bilFirma).length + " keys i objektet")

document.writeln("<br/><br/>")

//Oppgave 9 //Lage array av objekten, bruk forEach
firmaArray = Object.keys(bilFirma)

document.writeln("Oppgave 9" + "<br/>")
firmaArray.forEach(key => {
    document.writeln(`Navn: ${key} / Verdi: ${bilFirma[key]} <br/>`)
});

document.writeln("<br/><br/>")

//Oppgave 10

document.writeln("Oppgave 10 / Første element" + "<br/>")

function firstElement() {
    document.writeln(Object.entries(bilFirma)[0].join(" = "))
}

firstElement()

document.writeln("<br/><br/>")
//Oppgave 11

document.writeln("Oppgave 11 / Siste element" + "<br/>")

let bilfirmaLength = Object.entries(bilFirma).length
function lastElement() {
    document.writeln(Object.entries(bilFirma)[bilfirmaLength-1].join(" = "))
}

lastElement()

document.writeln("<br/><br/>")

//Oppgave 12

document.writeln("Oppgave 12 / Library" + "<br/>")

var library = [  
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead', 
        readingStatus: true 
    }, 
    {
        author: 'Steve Jobs', 
        title: 'Walter Isaacson', 
        readingStatus: false 
    }, 
    { 
        author: 'Suzanne Collins', 
        title:  'Mockingjay: The Final Book of The Hunger Games',  
        readingStatus: false 
    }]; 

library.forEach(book => {
    if (book.readingStatus == false) {
        document.writeln(`Jeg har ikke lest: ${book.title} <br/>`)
    }
});