function score() {
    var korean = document.getElementById("korean").value;
    var mat = document.getElementById("mat").value;
    var eng = document.getElementById("eng").value;
    var avg = 0;

    korean = parseInt(korean);
    mat = parseInt(mat);
    eng = parseInt(eng);

    var result = document.getElementById("result");

    avg = (korean + mat + eng) / 3;

    if (korean >= 90) {
        document.getElementById("result1").innerHTML = "국어 등급: A";
    } else if (korean >= 80 && korean <= 89) {
        document.getElementById("result1").innerHTML = "국어 등급: B";
    } else if (korean >= 70 && korean <= 79) {
        document.getElementById("result1").innerHTML = "국어 등급: C";
    } else if (korean <= 60) {
        document.getElementById("result1").innerHTML = "국어 등급: F";
    }

    if (mat >= 90) {
        document.getElementById("result2").innerHTML = "수학 등급: A";
    } else if (mat >= 80 && mat <= 89) {
        document.getElementById("result2").innerHTML = "수학 등급: B";
    } else if (mat >= 70 && mat <= 79) {
        document.getElementById("result2").innerHTML = "수학 등급: C";
    } else if (mat <= 60) {
        document.getElementById("result2").innerHTML = "수학 등급: F";
    }

    if (eng >= 90) {
        document.getElementById("result3").innerHTML = "영어 등급: A";
    } else if (eng >= 80 && eng <= 89) {
        document.getElementById("result3").innerHTML = "영어 등급: B";
    } else if (eng >= 70 && eng <= 79) {
        document.getElementById("result3").innerHTML = "영어 등급: C";
    } else if (eng <= 60) {
        document.getElementById("result3").innerHTML = "영어 등급: F";
    }

    if (avg >= 90) {
        document.getElementById("result4").innerHTML = "평균: A";
    } else if (avg >= 80 && avg <= 89) {
        document.getElementById("result4").innerHTML = "평균: B";
    } else if (avg >= 70 && avg <= 79) {
        document.getElementById("result4").innerHTML = "평균: C";
    } else if (avg <= 60) {
        document.getElementById("result4").innerHTML = "평균: F";
    }
}

// function getNum(id){
//     return parseInt(document.getElementById(id).value);
// }

// function result(){
//     var korean=getNum("korean");
//     var mat=getNum("mat");
//     var eng=getNum("eng");
//     var result=document.getElementById("result");

//     var avg = (korean+mat+eng) / 3;
//     korean = "국어 : " +grade(korean);
//     mat= "수학 :" +grade(mat);
//     eng= "영어 :" + grade(eng);
//     avg =  "평균 : " + grade(avg);

//     result.innerHTML = korean+"<br>"+mat+"<br>"+eng+"<br>"+avg;
// }

// function grade(score){
//     if(score>=90) return "A등급";
//     else if(score>=80) return "B등급";
//     else if(score>=70) return "C등급";
//     else return "F등급";
// }