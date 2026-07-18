document.getElementById("addStudent").onclick = function () {
    alert("Add Student Page");
    // window.location.href = "addStudent.html";
};

document.getElementById("addTeacher").onclick = function () {
    alert("Add Teacher Page");
    // window.location.href = "addTeacher.html";
};

document.getElementById("viewAttendance").onclick = function () {
    alert("View Attendance Page");
    // window.location.href = "attendance.html";
};

document.getElementById("report").onclick = function () {
    alert("Generate Report Page");
    // window.location.href = "report.html";
};

document.getElementById("logout").onclick = function (event) {
    event.preventDefault();

    if(confirm("Are you sure you want to logout?")){
        window.location.href = "index.html";
    }
};