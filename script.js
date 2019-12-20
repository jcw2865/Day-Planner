$(document).ready(function () {

    // localStorage.getItem("input", JSON.parse(input));
    // var inputNine = localStorage.getItem("inputNine", JSON.parse(inputNine));
    var inputNine = localStorage.getItem("inputNine");
    $("#inputNine").val(JSON.parse(inputNine));

    var inputTen = localStorage.getItem("inputTen");
    $("#inputTen").val(JSON.parse(inputTen));

    var inputEleven = localStorage.getItem("inputEleven");
    $("#inputEleven").val(JSON.parse(inputEleven));

    var inputTwelve = localStorage.getItem("inputTwelve");
    $("#inputTwelve").val(JSON.parse(inputTwelve));

    var inputThirteen = localStorage.getItem("inputThirteen");
    $("#inputThirteen").val(JSON.parse(inputThirteen));

    var inputFourteen = localStorage.getItem("inputFourteen");
    $("#inputFourteen").val(JSON.parse(inputFourteen));

    var inputFifteen = localStorage.getItem("inputFifteen");
    $("#inputFifteen").val(JSON.parse(inputFifteen));

    var inputSixteen = localStorage.getItem("inputSixteen");
    $("#inputSixteen").val(JSON.parse(inputSixteen));

    var inputSeventeen = localStorage.getItem("inputSeventeen");
    $("#inputSeventeen").val(JSON.parse(inputSeventeen));

    var currentDay = $("#currentDay").text(moment());


    // BEGIN SAVE EVENTS

    // 0900 Save Event
    $("#buttonNine").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputNine = $("#inputNine").val();
        console.log(inputNine);

        localStorage.setItem("inputNine", JSON.stringify(inputNine));

    });

    // 1000 Save Event
    $("#buttonTen").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputTen = $("#inputTen").val();
        console.log(inputTen);

        localStorage.setItem("inputTen", JSON.stringify(inputTen));

    });

    // 1100 Save Event
    $("#buttonEleven").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputEleven = $("#inputEleven").val();
        console.log(inputEleven);

        localStorage.setItem("inputEleven", JSON.stringify(inputEleven));

    });

    // 1200 Save Event
    $("#buttonTwelve").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputTwelve = $("#inputTwelve").val();
        console.log(inputTwelve);

        localStorage.setItem("inputTwelve", JSON.stringify(inputTwelve));

    });

    // 1300 Save Event
    $("#buttonThirteen").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputThirteen = $("#inputThirteen").val();
        console.log(inputThirteen);

        localStorage.setItem("inputThirteen", JSON.stringify(inputThirteen));

    });

    // 1400 Save Event
    $("#buttonFourteen").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputFourteen = $("#inputFourteen").val();
        console.log(inputFourteen);

        localStorage.setItem("inputFourteen", JSON.stringify(inputFourteen));

    });

    // 1500 Save Event
    $("#buttonFifteen").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputFifteen = $("#inputFifteen").val();
        console.log(inputFifteen);

        localStorage.setItem("inputFifteen", JSON.stringify(inputFifteen));

    });

    // 1600 Save Event
    $("#buttonSixteen").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputSixteen = $("#inputSixteen").val();
        console.log(inputSixteen);

        localStorage.setItem("inputSixteen", JSON.stringify(inputSixteen));

    });

    // 1700 Save Event
    $("#buttonSeventeen").on("click", function (event) {
        // alert("Button Clicked!");
        event.preventDefault();
        var inputSeventeen = $("#inputSeventeen").val();
        console.log(inputSeventeen);

        localStorage.setItem("inputSeventeen", JSON.stringify(inputSeventeen));

    });

    // END SAVE EVENTS

});