<<<<<<< HEAD
const A="http://localhost/api";

loginForm.onsubmit=async e=>{
  e.preventDefault();
  try{
    await fetch(`${A}/login.php`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({username:username.value,password:password.value})
    }).then(r=>{if(!r.ok)throw r});
    loginSection.style.display="none";
    message.textContent="Login Successful!";
    message.style.color="green";
    fetch(`${A}/student-list.php`).then(r=>r.json()).then(d=>{
      studentTableBody.innerHTML=d.students.map(s=>`
        <tr><td>${s.student_id}</td><td>${s.first_name} ${s.last_name}</td>
        <td>${s.email}</td><td>${s.course}</td>
        <td>${s.year_level}</td><td>${s.enrollment_date}</td></tr>`).join("");
      studentSection.style.display="block";
    });
  }catch{
    message.textContent="Login failed";
    message.style.color="red";
  }
};

logoutBtn.onclick=()=>{
  studentSection.style.display="none";
  loginSection.style.display="block";
  loginForm.reset();message.textContent="";
};
=======
// ---------- FETCH STUDENTS ----------
async function fetchStudents() {
    try {
        const res = await fetch("http://localhost/api/student-list.php");
        const { success, students } = await res.json();
        if (success) renderStudentTable(students);
        else alert("Failed to load student data.");
    } catch (e) {
        console.error("Fetch error:", e);
    }
}

// ---------- RENDER TABLE ----------
function renderStudentTable(students) {
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = students.map(s => `
        <tr>
            <td>${s.student_id}</td>
            <td>${s.first_name} ${s.last_name}</td>
            <td>${s.email}</td>
            <td>${s.course}</td>
            <td>${s.year_level}</td>
            <td>${s.enrollment_date}</td>
        </tr>
    `).join("");

    document.getElementById("studentSection").style.display = "block";
}

// ---------- LOGIN ----------
async function login(username, password) {
    const res = await fetch("http://localhost/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
}

// ---------- EVENTS ----------
document.addEventListener("DOMContentLoaded", () => {
    const form = loginForm,
          msg = message,
          loginSec = loginSection,
          studentSec = studentSection;

    form.addEventListener("submit", async e => {
        e.preventDefault();
        try {
            await login(username.value, password.value);
            msg.textContent = "Login Successful!";
            msg.style.color = "green";
            loginSec.style.display = "none";
            fetchStudents();
        } catch (err) {
            msg.textContent = err.message;
            msg.style.color = "red";
        }
    });

    logoutBtn.onclick = () => {
        studentSec.style.display = "none";
        loginSec.style.display = "block";
        msg.textContent = "";
        form.reset();
    };
});
>>>>>>> c667fbf574de21e1cb3245462a6925bc5314bc92
