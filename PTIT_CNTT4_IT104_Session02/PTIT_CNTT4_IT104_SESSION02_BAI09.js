const student = {
  name: "Dev",
  age: 20,
  listMonhoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 },
  ],
};
function processStudent(student) {
  const { age, listMonhoc } = student;
  const totalScore = listMonhoc.reduce(
    (sum, subject) => sum + subject.score,
    0
  );
  const average = (totalScore / listMonhoc.length).toFixed(2);
  let rank = "";
  if (average >= 8.5) rank = " Học sinh giỏi";
  else if (average >= 7) rank = " Học sinh khá";
  else if (average >= 5) rank = " Học sinh trung bình";
  else rank = " Học sinh yếu";
  const best = listMonhoc.reduce((a, b) => (a.score > b.score ? a : b));
  const worst = listMonhoc.reduce((a, b) => (a.score < b.score ? a : b));
  console.log(`Tuổi: ${age}`);
  console.log(`\nĐiểm trung bình: ${average} → ${rank}`);
  console.log(`\nMôn học giỏi nhất:  ${best.subject} với điểm ${best.score}`);
  console.log(`Môn học yếu nhất:  ${worst.subject} với điểm ${worst.score}`);
}
processStudent(student);
