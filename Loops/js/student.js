const students = [
  {name:"ana",scores:[85,90,88],present:true},
  {name:"cruz",scores:[70,75,72],present:false},
  {name:"sotangg",scores:[95,92,94],present:true},
  {name:"lee",scores:[60,65,70],present:true},
  {name:"Eli",scores:[88,85,90],present:true},
  {name:"paps",scores:[78,80,82],present:false},
  {name:"Emix",scores:[92,89,94],present:true},
  {name:"lyn",scores:[73,70,68],present:false},
  {name:"dos",scores:[81,84,79],present:true},
  {name:"leiah",scores:[96,98,97],present:true}
];

const avg = s => (s.reduce((a,b)=>a+b)/s.length).toFixed(2);

const render = list =>
  tableBody.innerHTML = list.map(s=>{
    const a = avg(s.scores);
    return `<tr>
      <td>${s.name}</td>
      ${s.scores.map(n=>`<td>${n}</td>`).join("")}
      <td>${a}</td>
      <td>${a>=75?"Passed":"Failed"}</td>
    </tr>`;
  }).join("");

const searchStudent = () =>
  render(students.filter(s=>s.name.toLowerCase().includes(search.value.toLowerCase())));

const filterPresent = p => render(students.filter(s=>s.present===p));
const filterPassed = p => render(students.filter(s=>p?avg(s.scores)>=75:avg(s.scores)<75));
const showAll = () => render(students);

render(students);
