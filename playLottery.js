// var playLottery = function() {
//
//     var numberOfCandidates = 2;
//
//     var randomNumber = Math.floor(Math.random() * numberOfCandidates + 1);
//
//     //alert(randomNumber);
//     var student1 = "Mohammad";
//     var student2 = "Rami";
//     if (randomNumber == 1) {
//         document.getElementById("lotteryResult").innerHTML = "The woner is : <h1>" + student1 + "</h1> the number is " + randomNumber;
//         document.getElementById("lotteryResult").style.color = "red";
//     } else {
//         document.getElementById("lotteryResult").innerHTML = "The woner is : <h1>" + student2 + "</h1> the number is " + randomNumber;
//         document.getElementById("lotteryResult").style.color = "green";
//     }
// }
//
// function getPrimes(max) {
//     var multiplies = [],
//         i, j, primes = [];
//     for (i = 2; i <= max; i++) {
//         if (!multiplies[i]) {
//             primes.push(i);
//             for (j = i * 2; j <= max; j += i) {
//                 multiplies[j] = true;
//             }
//         }
//     }
//     return primes;
// }
//
// var j = getPrimes(30);
// alert(j);

var students = [];


var addStudent = function() {
    var newStudent = prompt("Enter A student Name");
    students.unshift(newStudent); //students.push(newStudent);

}

var showStudent = function() {

    document.getElementById("lotteryResult").innerHTML = "The Students Are : <h1>" + students + "</h1>";
    document.getElementById("lotteryResult").style.color = "green";

}


var numbers = [7, 5, 7, 6, 4, 1, 2, 3, 4, 5, 5, 8989];

numbers.sort();
var maximum = Math.max.apply(Math, numbers);
alert(numbers + " Max equal to " + maximum);
