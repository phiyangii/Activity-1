<html>
<body>

<h2>JavaScript Array.forEach()</h2>
<p>Ma. Sophia M. Copat BSIT 3</p>

<p id="demo"></p>

<script>
const numbers = [22, 2, 1, 10, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"
}
</script>

</body>
</html>

