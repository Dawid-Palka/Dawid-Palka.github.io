// Funkcja zmieniająca lokalizację na mapie na podstawie podanego miasta
function changeLocation(city) {
    var map = document.getElementById('map'); // Pobranie elementu mapy
    var locations = {
        lublin: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.4554773552672!2d22.546449012058936!3d51.247522571637475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225766a59823d7%3A0x63a4769e64a3db14!2splac%20Teatralny%2C%2020-036%20Lublin!5e0!3m2!1spl!2spl!4v1764107708974!5m2!1spl!2spl",
        gdansk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37196.68243151549!2d18.61646106884116!3d54.36064494163202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd730105062771%3A0x2d29a74b5656c36e!2sPrzestrze%C5%84%20Sztuki%20WL4%20Mleczny%20Piotr!5e0!3m2!1spl!2spl!4v1764108302497!5m2!1spl!2spl",
        pszczyna: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.141372667533!2d18.94114981198004!3d49.97120727138583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716bae955b901eb%3A0xd4ad5abc4c94c65f!2sPszczy%C5%84skie%20Centrum%20Kultury!5e0!3m2!1spl!2spl!4v1764108418418!5m2!1spl!2spl",
        chmurawwa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.1186678558497!2d21.03202035403944!3d52.25939010000341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc3e9318063f%3A0xa98ad7fd539de3b0!2sChmury!5e0!3m2!1spl!2spl!4v1764108532093!5m2!1spl!2spl",
        radionowyswiatwwa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2446.7654130432943!2d21.07851041211735!3d52.17495847185584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192db8091528bb%3A0xebdc6f323acbf665!2sRadio%20Nowy%20%C5%9Awiat!5e0!3m2!1spl!2spl!4v1764108595370!5m2!1spl!2spl",
        lodz:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.6751964180994!2d19.450550512092107!3d51.77554477175826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcad567014359%3A0x622d7cce58a87240!2zxYHDs2R6a2llIENlbnRydW0gV3lkYXJ6ZcWE!5e0!3m2!1spl!2spl!4v1764108694093!5m2!1spl!2spl",
    };
    map.src = locations[city]; // Ustawienie źródła mapy na podstawie wybranego miasta
}



function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
}




function wyslijFormularz() {

    // pobranie danych
    const imie = document.getElementById("imie").value;
    const email = document.getElementById("email").value;

    const udzial = document.querySelector('input[name="udzial"]:checked').value;

    const albumy = [];
    document.querySelectorAll('input[name="ulubione"]:checked')
        .forEach(cb => albumy.push(cb.value));

    const utwor = document.querySelector('select[name="ulubiony_utwor"]').value;
    const komentarz = document.getElementById("wiadomosc").value;

    // budowanie treści maila
    let body =
        "Imię: " + imie + "\n" +
        "Email: " + email + "\n" +
        "Udział w koncercie: " + udzial + "\n" +
        "Ulubione albumy: " + (albumy.length ? albumy.join(", ") : "brak") + "\n" +
        "Ulubiony utwór: " + utwor + "\n";

    if (komentarz.trim() !== "") {
        body += "Komentarz: " + komentarz + "\n";
    }

    // kodowanie do mailto
    const mailto =
        "mailto:s103015@pollub.edu.pl" +
        "?subject=" + encodeURIComponent("Formularz kontaktowy") +
        "&body=" + encodeURIComponent(body);

    // otwarcie klienta poczty
    window.location.href = mailto;

    // blokada domyślnego submit
    return false;
}
