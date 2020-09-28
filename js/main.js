$(function () {
    $('#download').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#dane-programisty').after(
                `Imię: ${data.imie} <br> Nazwisko: ${data.nazwisko} <br> Zawód: ${data.zawod} <br> Firma: ${data.firma}`);

        });
    });
});


//{"imie":"Piotr","nazwisko":"Szapiel","zawod":"Programista","firma":"Akademia 108"}