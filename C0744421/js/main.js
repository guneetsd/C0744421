
/*function addNumbers(countUpTo) {
    sum = 0;
    for (i = 0; i < countUpTo; i++) {
        sum += i;
    }
    return sum;

}
var input = prompt("Input your Number!");
document.write(addNumbers(input));

var rows = prompt("How many rows for your multiplicatio table?");
var cols = prompt("How many columns for your multiplicatio table?");
if (rows == "" || rows == null)
    rows = 10;
if (cols == "" || cols == null)
    cols = 10;
createTable(rows, cols);
function createTable(rows, cols) {

    var j = 1;
    var output = "<table border ='1' width='500' cellspacing='0' cellpadding ='5'>";
    for (i = 1; i <= rows; i++) {
        output = output + "<tr>"
        while (j <= cols) {
            output = output + "<td>" + (i * j) + "</td>";
            j = j + 1;
        }

        output = output + "</tr>"
        j = 1;

    }

    output = output + "</table>";
    document.write(output);

}*/
function trigger() {
    document.getElementById("hover").addEventListener("mouseover", popup);
    function popup() {
        alert("welcome to my webpage!!");
    }

}
