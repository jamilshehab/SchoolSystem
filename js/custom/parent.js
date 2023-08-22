// when the page lunch 
$("#teachers, #classesSchedule, #examGrades, #examSchedule").hide();

// on click the teacher button on -(( THE LEFT NAV ))- the teacher section will appear and every thing will hide
$("#teachersButton").click(function () {
    $("#pageTitleSection h1").text("Teachers");
    $("#pageTitleSection ol li").text("Dashboard / Parent / teachers");
    $("#studentHeader, #attendanceView, #payment, #classesSchedule, #examGrades, #examSchedule").hide();
    $("#teachers").show();
});