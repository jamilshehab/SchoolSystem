// when the page lunch 
$("#teachers, #classesSchedule, #examGrades, #examSchedule").hide();

// on click the teacher button on -(( THE LEFT NAV ))- the teacher section will appear and every thing will hide
$("#teachersButton").click(function () {
    $("#pageTitleSection h1").text("Teachers");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Teachers");
    $("#studentHeader, #attendanceView, #payment, #classesSchedule, #examGrades, #examSchedule").hide();
    $("#teachers").show();
});

// Classes Button
$("#classesButton").click(function () {
    $("#pageTitleSection h1").text("Classes");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Classes");
    $("#studentHeader, #attendanceView, #payment, #teachers, #examGrades, #examSchedule").hide();
    $("#classesSchedule").show();
})

// Exam Grades
$("#examGrades").click(function () {
    $("#pageTitleSection h1").text("Exam Geade");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Exam");
    $("#studentHeader, #attendanceView, #payment, #teachers, #examSchedule, #classesSchedule").hide();
    $("#examGrades").show();
});