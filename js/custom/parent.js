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

// Exam Grades Button
$("#examGradesButton").click(function () {
    $("#pageTitleSection h1").text("Exam Geade");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Exam");
    $("#studentHeader, #attendanceView, #payment, #teachers, #examSchedule, #classesSchedule").hide();
    $("#examGrades").show();
});
// Exam schedule Button
$("#examScheduleButton").click(function () {
    $("#pageTitleSection h1").text("Exam Geade");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Exam");
    $("#studentHeader, #attendanceView, #payment, #teachers, #examGrades, #classesSchedule").hide();
    $("#examSchedule").show();
});

// payment Button
$("#paymentButton").click(function () {
    $("#pageTitleSection h1").text("Exam Geade");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Exam");
    $("#studentHeader, #attendanceView, #examGrades, #teachers, #examSchedule, #classesSchedule").hide();
    $("#payment").show();
});

// for the checkbox button ( pay online )
$(document).ready(function () {
    $("#onlinePayCheckbox").change(function () {
        if ($(this).prop("checked")) {
            $("#paymentOnlineForm .card").removeClass("bg-custom-light-gray");
        } else {
            $("#paymentOnlineForm .card").addClass("bg-custom-light-gray");
        }
    });
});