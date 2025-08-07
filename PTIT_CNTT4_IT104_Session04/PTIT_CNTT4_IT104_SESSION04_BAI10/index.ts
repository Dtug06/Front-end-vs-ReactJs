type Student = {
  readonly studentId: string;
  name: string;
  email: string;
  hasCompleted: boolean;
  finalScore?: number; 
};
type Course = {
  courseId: string;
  title: string;
  instructor: string;
  students: Student[];
  isActive: boolean;
};
type CourseManager = {
  schoolName: string;
  year: number;
  courses: Course[];
};
function getCompletedStudents(course: Course): Student[] {
  return course.students.filter(student => student.hasCompleted);
}
function calculateAverageScore(course: Course): number | null {
  const scores = course.students
    .filter(student => typeof student.finalScore === 'number')
    .map(student => student.finalScore!);
  if (scores.length === 0) return null;
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}
function printCourseReport(manager: CourseManager): void {
  console.log(" Danh sách khóa học và thông tin học viên\n");

  for (const course of manager.courses) {
    const totalStudents = course.students.length;
    const completedStudents = getCompletedStudents(course).length;
    const averageScore = calculateAverageScore(course);

    console.log(`Khóa học: ${course.title}`);
    console.log(`Giảng viên: ${course.instructor}`);
    console.log(`Tổng học viên: ${totalStudents}`);
    console.log(`Hoàn thành: ${completedStudents} học viên`);
    console.log(`Trung bình điểm: ${averageScore !== null ? averageScore.toFixed(1) : 'N/A'}`);
    console.log(`Trạng thái: ${course.isActive ? 'ĐANG MỞ' : 'ĐÃ ĐÓNG'}\n`);
  }
}
const manager: CourseManager = {
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
