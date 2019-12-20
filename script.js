$(document).ready(function () {

    // BEGIN GLOBAL VARIABLES

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

    // END GLOBAL VARIABLES

    function updateTime() {
        // var currentDay = $("#currentDay").text(moment());
        var currentDay = $("#currentDay").text(moment().format('dddd, MMM Do YYYY'));
    }

    setInterval(updateTime, 1000);

    var currentTime = moment().format('HH');
    console.log(currentTime);

    // BEGIN COLOR CODE TIME VARIABLES
    // Color 9am
    var timeNine = moment('09:00 AM', 'hh:mm A').format('hh:mm A');
    var milNine = moment("09", "HH").format("HH");
    $("#timeNine").text(timeNine);

    if (milNine < currentTime) {
        $("#inputNine").css("background-color", "red")
    } else if (milNine === currentTime) {
        $("#inputNine").css("background-color", "gray");
    } else {
        $("#inputNine").css("background-color", "green");
    }

    // Color 10am
    var timeTen = moment('10:00 AM', 'hh:mm A').format('hh:mm A');
    var milTen = moment("10", "HH").format("HH");
    $("#timeTen").text(timeTen);

    if (milTen < currentTime) {
        $("#inputTen").css("background-color", "red")
    } else if (milTen === currentTime) {
        $("#inputTen").css("background-color", "gray");
    } else {
        $("#inputTen").css("background-color", "green");
    }

    // Color 11am
    var timeEleven = moment('11:00 AM', 'hh:mm A').format('hh:mm A');
    var milEleven = moment("11", "HH").format("HH");
    $("#timeEleven").text(timeEleven);

    if (milEleven < currentTime) {
        $("#inputEleven").css("background-color", "red")
    } else if (milEleven === currentTime) {
        $("#inputEleven").css("background-color", "gray");
    } else {
        $("#inputEleven").css("background-color", "green");
    }

    // Color 12pm
    var timeTwelve = moment('12:00 PM', 'hh:mm A').format('hh:mm A');
    var milTwelve = moment("12", "HH").format("HH");
    $("#timeTwelve").text(timeTwelve);

    if (milTwelve < currentTime) {
        $("#inputTwelve").css("background-color", "red")
    } else if (milTwelve === currentTime) {
        $("#inputTwelve").css("background-color", "gray");
    } else {
        $("#inputTwelve").css("background-color", "green");
    }

    // Color 1pm
    var timeThirteen = moment('01:00 PM', 'hh:mm A').format('hh:mm A');
    var milThirteen = moment("13", "HH").format("HH");
    $("#timeThirteen").text(timeThirteen);

    if (milThirteen < currentTime) {
        $("#inputThirteen").css("background-color", "red")
    } else if (milThirteen === currentTime) {
        $("#inputThirteen").css("background-color", "gray");
    } else {
        $("#inputThirteen").css("background-color", "green");
    }

    // Color 2pm
    var timeFourteen = moment('02:00 PM', 'hh:mm A').format('hh:mm A');
    var milFourteen = moment("14", "HH").format("HH");
    $("#timeFourteen").text(timeFourteen);

    if (milFourteen < currentTime) {
        $("#inputFourteen").css("background-color", "red")
    } else if (milFourteen === currentTime) {
        $("#inputFourteen").css("background-color", "gray");
    } else {
        $("#inputFourteen").css("background-color", "green");
    }

    // Color 3pm
    var timeFifteen = moment('03:00 PM', 'hh:mm A').format('hh:mm A');
    var milFifteen = moment("15", "HH").format("HH");
    $("#timeFifteen").text(timeFifteen);

    if (milFifteen < currentTime) {
        $("#inputFifteen").css("background-color", "red")
    } else if (milFifteen === currentTime) {
        $("#inputFifteen").css("background-color", "gray");
    } else {
        $("#inputFifteen").css("background-color", "green");
    }

    // Color 4pm
    var timeSixteen = moment('04:00 PM', 'hh:mm A').format('hh:mm A');
    var milSixteen = moment("16", "HH").format("HH");
    $("#timeSixteen").text(timeSixteen);

    if (milSixteen < currentTime) {
        $("#inputSixteen").css("background-color", "red");
    } else if (milSixteen === currentTime) {
        $("#inputSixteen").css("background-color", "gray");
    } else {
        $("#inputSixteen").css("background-color", "green");
    }

    // Color 5pm
    var timeSeventeen = moment('05:00 PM', 'hh:mm A').format('hh:mm A');
    var milSeventeen = moment("17", "HH").format("HH");
    $("#timeSeventeen").text(timeSeventeen);

    if (milSeventeen < currentTime) {
        $("#inputSeventeen").css("background-color", "red")
    } else if (milSeventeen === currentTime) {
        $("#inputSeventeen").css("background-color", "gray");
    } else {
        $("#inputSeventeen").css("background-color", "green");
    }

    // END COLOR CODE TIME VARIABLES


    // if (currentDay !== $("#timeNine").text) {
    //     $("#inputNine").css("background-color", "red");
    //     $("#inputNine").css("color", "white");
    // }


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