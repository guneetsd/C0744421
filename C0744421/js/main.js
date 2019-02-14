
function addNumbers(countUpTo) {
    sum = 0;
    for (i = 0; i < countUpTo; i++) {
        sum += i;
    }
    return sum;

}
var input = prompt("Input your Number!");
document.write(addNumbers(input));