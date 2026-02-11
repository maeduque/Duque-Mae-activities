
const students = [
  { name: "Ladybie", scores: [85, 90, 88], present: true },
  { name: "princess", scores: [70, 75, 72], present: false },
  { name: "neneng", scores: [95, 92, 94], present: true },
  { name: "yunalee", scores: [60, 65, 70], present: true },
  { name: "Eliza", scores: [88, 85, 90], present: true },
  { name: "hannah", scores: [78, 80, 82], present: false },
  { name: "Emi", scores: [92, 89, 94], present: true },
  { name: "Harlyn", scores: [73, 70, 68], present: false },
  { name: "Uno", scores: [81, 84, 79], present: true },
  { name: "alleiah", scores: [96, 98, 97], present: true }
];

function average(scores) {
  return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
}

function remarks(avg) {
  return avg >= 75 ? "Passed" : "Failed";
}

function render(data) {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach(s => {
    const avg = average(s.scores);

    tbody.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.scores[0]}</td>
        <td>${s.scores[1]}</td>
        <td>${s.scores[2]}</td>
        <td>${avg}</td>
        <td>${remarks(avg)}</td>
      </tr>
    `;
  });
}

function searchStudent() {
  const value = document.getElementById("search").value.toLowerCase();
  render(students.filter(s => s.name.toLowerCase().includes(value)));
}

function filterPresent(isPresent) {
  render(students.filter(s => s.present === isPresent));
}

function filterPassed(isPassed) {
  render(students.filter(s => {
    const avg = average(s.scores);
    return isPassed ? avg >= 75 : avg < 75;
  }));
}

function showAll() {
  render(students);
}

/* Show all students on page load */
render(students);