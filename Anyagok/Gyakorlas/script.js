document.addEventListener("DOMContentLoaded", function() {
    const rendszamInput = document.getElementById("rendszam");
    const gyartoInput = document.getElementById("gyarto");
    const tipusInput = document.getElementById("tipus");
    const forgalmiInput = document.getElementById("forgalmi");
    const felvitel = document.querySelector(".btn-success");
    const torzs = document.getElementById("torzs");

    felvitel.addEventListener("click", function() {
        const rendszam = rendszamInput.value;
        const gyarto = gyartoInput.value;
        const tipus = tipusInput.value;
        const forgalmi = forgalmiInput.value;

        if (rendszam && gyarto && tipus && forgalmi) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${rendszam}</td>
                <td>${gyarto}</td>
                <td>${tipus}</td>
                <td>${forgalmi}</td>
            `;

            torzs.appendChild(row);

            // Az űrlap mezők ürítése a sikeres felvitel után
            rendszamInput.value = "";
            gyartoInput.value = "";
            tipusInput.value = "";
            forgalmiInput.value = "";
        } else {
            alert("Kérlek, tölts ki minden mezőt!");
        }
    });
});

//Magyarázat a ChatGPT szerint:
/*

document.addEventListener("DOMContentLoaded", function() {
    // Amikor a teljes HTML dokumentum betöltődött, futtatjuk a kódot.

    const rendszamInput = document.getElementById("rendszam");
    // Kiválasztjuk a "rendszam" input mezőt és elmentjük egy változóba.

    const gyartoInput = document.getElementById("gyarto");
    // Kiválasztjuk a "gyarto" input mezőt és elmentjük egy változóba.

    const tipusInput = document.getElementById("tipus");
    // Kiválasztjuk a "tipus" input mezőt és elmentjük egy változóba.

    const forgalmiInput = document.getElementById("forgalmi");
    // Kiválasztjuk a "forgalmi" input mezőt és elmentjük egy változóba.

    const felvitelButton = document.querySelector(".btn-success");
    // Kiválasztjuk a "Felvitel" gombot a "btn-success" osztály alapján.

    const torzs = document.getElementById("torzs");
    // Kiválasztjuk a táblázat törzsét (tbody) a későbbi sorok hozzáadásához.

    felvitelButton.addEventListener("click", function() {
        // Eseményfigyelőt hozunk létre, ami akkor fut le, amikor a "Felvitel" gombra kattintanak.

        const rendszam = rendszamInput.value;
        // A rendszám mező értékét elmentjük a "rendszam" változóba.

        const gyarto = gyartoInput.value;
        // A gyártó mező értékét elmentjük a "gyarto" változóba.

        const tipus = tipusInput.value;
        // A típus mező értékét elmentjük a "tipus" változóba.

        const forgalmi = forgalmiInput.value;
        // A forgalmi mező (dátum) értékét elmentjük a "forgalmi" változóba.

        if (rendszam && gyarto && tipus && forgalmi) {
            // Ellenőrizzük, hogy minden mező ki van-e töltve (nem üres).

            const row = document.createElement("tr");
            // Létrehozunk egy új "tr" elemet, amely a táblázat egy új sora lesz.

            row.innerHTML = `
                <td>${rendszam}</td>
                <td>${gyarto}</td>
                <td>${tipus}</td>
                <td>${forgalmi}</td>
            `;
            // A létrehozott sor belsejét kitöltjük a mezőkben megadott adatokkal, cellánként ("td").

            torzs.appendChild(row);
            // Az újonnan létrehozott sort hozzáadjuk a táblázat törzséhez (tbody).

            // Az űrlap mezők kiürítése, hogy a következő bejegyzésnél újra üresek legyenek.
            rendszamInput.value = "";
            gyartoInput.value = "";
            tipusInput.value = "";
            forgalmiInput.value = "";
        } else {
            // Ha bármelyik mező üres, figyelmeztetjük a felhasználót, hogy töltse ki az összes mezőt.
            alert("Kérlek, tölts ki minden mezőt!");
        }
    });
});

Magyarázat a kulcspontokhoz:
1. DOMContentLoaded: Ez biztosítja, hogy a JavaScript akkor fusson, amikor a HTML teljesen betöltődött.
2. Element selection (getElementById, querySelector): Kiválasztjuk az űrlap mezőit és a gombot, hogy velük dolgozzunk.
3. Event listener: Létrehozunk egy eseményfigyelőt, amely reagál a gomb lenyomására.
4. InnerHTML használata: Az újonnan létrehozott sor HTML szerkezetét itt adjuk meg, a megfelelő mezőkből származó adatokkal.
5. Mezők kiürítése: Az űrlap mezői minden sikeres felvitel után kiürülnek.
6. Ellenőrzés: Ha bármelyik mező üres, egy üzenet jelenik meg figyelmeztetésként.

*/ 

//UNIT tesztek

function teszt1() {
    var tesztNev = "H1 tartalma 'Járművek felvitele' ";

    try {
        if (document.querySelector("h1").innerHTML == "Járművek felvitele") {  // == operátor kell
            return [tesztNev, "Sikeres"];
        } else {
            return [tesztNev, "Sikertelen"];
        }
    } catch (error) {
        return [tesztNev, "HIBA"];
    }
}

function teszt2(){
    var tesztNev = "Első input 'text' típus";

    var input = document.querySelector("input");
    try{
        if (input.type == "text") {
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt3(){
    var tesztNev = "Negyedik input 'date' típus";

    var input = document.querySelectorAll("input")[3];
    try{
        if (input.type == "date") {
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function teszt4(){
    var tesztNev = "Első div class 'container'";

    try {
        var div = document.querySelectorAll("div")[0];
        if (div.classList.contains("container")) {
            return [tesztNev, "Sikeres"];
        } else {
            return [tesztNev, "Sikertelen"];  
        }
    } catch (error) {
        return [tesztNev, "HIBA"];
    }
    
}

function teszt5() {
    var tesztNev = "Harmadik 'th' tartalma Típus ";

    try {
        if (document.querySelectorAll("th")[2].innerHTML == "Típus") {  // == operátor kell
            return [tesztNev, "Sikeres"];
        } else {
            return [tesztNev, "Sikertelen"];
        }
    } catch (error) {
        return [tesztNev, "HIBA"];
    }
}

//====================================================================
function trKeszito(tomb){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(tomb[0]));
    td2.appendChild(document.createTextNode(tomb[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("torzsTeszt").appendChild(tr);
}

//=======================================================================

trKeszito(teszt1());
trKeszito(teszt2());
trKeszito(teszt3());
trKeszito(teszt4());
trKeszito(teszt5());