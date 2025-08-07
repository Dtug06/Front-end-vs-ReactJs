function getCompletedStudents(course) {
    return course.students.filter(function (student) { return student.hasCompleted; });
}
function calculateAverageScore(course) {
    var scores = course.students
        .filter(function (student) { return typeof student.finalScore === 'number'; })
        .map(function (student) { return student.finalScore; });
    if (scores.length === 0)
        return null;
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
function printCourseReport(manager) {
    console.log(" Danh sách khóa học và thông tin học viên\n");
    for (var _i = 0, _a = manager.courses; _i < _a.length; _i++) {
        var course = _a[_i];
        var totalStudents = course.students.length;
        var completedStudents = getCompletedStudents(course).length;
        var averageScore = calculateAverageScore(course);
        console.log("Kh\u00F3a h\u1ECDc: ".concat(course.title));
        console.log("Gi\u1EA3ng vi\u00EAn: ".concat(course.instructor));
        console.log("T\u1ED5ng h\u1ECDc vi\u00EAn: ".concat(totalStudents));
        console.log("Ho\u00E0n th\u00E0nh: ".concat(completedStudents, " h\u1ECDc vi\u00EAn"));
        console.log("Trung b\u00ECnh \u0111i\u1EC3m: ".concat(averageScore !== null ? averageScore.toFixed(1) : 'N/A'));
        console.log("Tr\u1EA1ng th\u00E1i: ".concat(course.isActive ? 'ĐANG MỞ' : 'ĐÃ ĐÓNG', "\n"));
    }
}
var manager = {
    schoolName: "Trường CNTT",
    year: 2025,
    courses: [
        {
            courseId: "C001",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                { studentId: "S1", name: "An", email: "an@example.com", hasCompleted: true, finalScore: 9 },
                { studentId: "S2", name: "Bình", email: "binh@example.com", hasCompleted: true, finalScore: 8 },
                { studentId: "S3", name: "Cường", email: "cuong@example.com", hasCompleted: false }
            ]
        },
        {
            courseId: "C002",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                { studentId: "S4", name: "Dương", email: "duong@example.com", hasCompleted: false },
                { studentId: "S5", name: "Hoa", email: "hoa@example.com", hasCompleted: false }
            ]
        }
    ]
};
printCourseReport(manager);
