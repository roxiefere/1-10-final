//Sleep In
function sleep_in(x,y) {
    if(x == true && y == false){
        return y;
    }
    if(x == false && y == false){
        return true;
    }
    if(x == true && y == true) {
        return x;
    }
    if(x == false && y == true) {
        return y;
    }
}

//Monkey Trouble
function monkey_trouble(x,y) {
    if(x == false && y == false){
        return true;
    }
    if(x == true && y == true) {
        return x;
    }
    if(x == true && y == false) {
        return y;
    }
    if(x == false && y == true) {
        return x;
    }
}

//String Times
function string_times(x,y) {
    var sum = "";
    for(var i = 0; i < y; i++) {
        sum += x;
    }
    return sum
}

//Front Times
function front_times(x,y) {
    var sum = "";
    var front = x.substring(0, 3);
    for(var i = 0; i < y; i++){
        sum += front;
    }
    return sum;
}

//String Bits
function string_bits(x) {
    var sum = "";
    for(var i = 0; i < x.length; i+=2){
        sum += x[i];
    }
    return sum;
}

//Caught Speeding
function caughtSpeeding(x, y){
    if (x == 65 && y == true){
        return 0;
    }
    if (x == 85 && y == true){
        return 1;
    }
    if(x <= 60){
        return 0;
    }
    if(61 <= x && x <= 80){
        return 1;
    }
    if(x > 80){
        return 2;
    }
}

//Fizz Buzz
function fizz_buzz(x){
    var sum = "";
    if (x % 3 != 0 && x % 5 != 0) {
        return sum += x + "!";
    }
    if (x % 3 == 0 && x % 5 == 0) {
        return "FizzBuzz";
    }
    if (x % 3 == 0) {
        return "Fizz";
    }
    if (x % 5 == 0) {
        return "Buzz";
    }
}

//Tea Party
function teaParty(x, y){
    if(x < 5 || y < 5){
        return 0;
    }
    if(y >= (2 * x) || x >= (2 * y)){
        return 2;
    }
    if(x >= 5 && y >= 5){
        return 1;
    }
}

//Black Jack
function blackjack(x, y){
    if(x > 21 && y > 21){
        return 0;
    }
    if (x > 21){
        return y;
    }
    if(y > 21){
        return x;
    }
    if((21 - x) < (21 - y)){
        return x;
    }
    if((21 - y) < (21 - x)){
        return y;
    }
}

//Lone Sum
function loneSum(a, b, c){
    if(a == b && b == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }
    if(c == a){
        return b;
    }
    if(a != b && b != c && c != a){
        return a += b += c;
    }
}




//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}