
function tri() {
    var inday = document.getElementById("inday").value;
    var inmonth = document.getElementById("inmonth").value;
    var inyear = document.getElementById("inyear").value;

    var now = new Date();

    var currentyear = now.getFullYear();
    var currentmonth = now.getMonth();
    var currentday = now.getDay();

    // console.log(inday);
    // console.log(inmonth);
    // console.log(inyear);
    var flag1 = 1, flag2 = 1, flag3 = 1;

    if (inday > 31 || inday < 0 || inday == '') {
        var x = document.getElementById("error1");
        x.style.display = "block";
    }
    else {
        var x = document.getElementById("error1");
        x.style.display = "none";
        flag1 = 0;
    }

    if (inmonth > 12 || inmonth < 0 || inmonth == '') {
        var x = document.getElementById("error2");
        x.style.display = "block";
    }
    else {
        var x = document.getElementById("error2");
        x.style.display = "none";
        flag2 = 0;
    }

    if (inyear > 2023 || inyear < 0 || inyear == '') {
        var x = document.getElementById("error3");
        x.style.display = "block";
    }
    else {
        var x = document.getElementById("error3");
        x.style.display = "none";
        flag3 = 0;
    }



    var year = currentyear - inyear;

    if (currentmonth >= inmonth)
        var month = currentmonth - inmonth;
    else {
        year--;
        var month = 12 + currentmonth - inmonth;
    }

    if (currentday >= inday)
        var day = currentday - inday;
    else {
        var day = 31 + currentday - inday;
        // month--;

        if (month < 0) {
            // console.log("asdf");
            month = 11;
            year--;
        }
    }
    if (flag1 == 0 && flag2 == 0 && flag3 == 0) {
        document.getElementById("1").innerHTML = day + "&nbsp;";
        document.getElementById("2").innerHTML = month + "&nbsp;";
        document.getElementById("3").innerHTML = year + "&nbsp;";
    }
    //     console.log(now);

    //     console.log(inday);
    //     console.log(inmonth);
    //     console.log(inyear);

    //     console.log(day);
    //     console.log(month);
    //     console.log(year);
}

