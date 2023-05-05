
function tri() {
    var inday = document.getElementById("inday").value;
    var inmonth = document.getElementById("inmonth").value;
    var inyear = document.getElementById("inyear").value;
    
    var now = new Date();
    
    var currentyear = now.getFullYear();  
    var currentmonth = now.getMonth();  
    var currentday = now.getDay();

    // console.log(currentday);
    // console.log(currentmonth);
    // console.log(currentyear);

    var year = currentyear-inyear;
    
    if(currentmonth>=inmonth)
        var month = currentmonth-inmonth;
    else{
        year--;
        var month = 12+currentmonth-inmonth;
    }

    if(currentday>=inday)
        var day = currentday-inday;
    else{
        var day = 31+currentday-inday;
        // month--;

        if(month<0){
            // console.log("asdf");
            month=11;
            year--;
        }
    }
    // month++;
    document.getElementById("1").innerHTML= day + "&nbsp;";
    document.getElementById("2").innerHTML= month + "&nbsp;";
    document.getElementById("3").innerHTML= year + "&nbsp;";
    
//     console.log(now);

//     console.log(inday);
//     console.log(inmonth);
//     console.log(inyear);

//     console.log(day);
//     console.log(month);
//     console.log(year);
}

