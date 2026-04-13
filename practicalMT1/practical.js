function calculat(){
let n = document.getElementById("subject").value;
let totalmarks = 0;
for(let i=1;i<=n;i++){
let marks = parseFloat (prompt("Enter marks for Subject " + i));
totalmarks = totalmarks + marks;
}
let average = totalmarks / n;
let grade;
let result;
if(average >= 90){
grade = "first class";
}
else if(average >= 75){
grade = "second class";
}
else if(average >= 60){
grade = "third class";
}
else {
grade = "fourth class";
}
if(average >= 40){
result = "PASS";
}
else{
result = "FAIL";
}
document.getElementById("result").innerHTML =
"Total Marks: " + totalmarks + "<br>" +
"Average Marks: " + average.toFixed(2) + "<br>" +
"Grade: " + grade + "<br>" +
"Result: " + result;
}