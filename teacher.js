const today = new Date();

document.getElementById("date").innerHTML =
today.getDate() + "/" +
(today.getMonth()+1) + "/" +
today.getFullYear();

function submitAttendance(){

    let totalPresent = 0;

    const checkboxes = document.querySelectorAll("tbody input");

    checkboxes.forEach(box=>{
        if(box.checked){
            totalPresent++;
        }
    });

    alert("Attendance Submitted!\nPresent Students: " + totalPresent);
}