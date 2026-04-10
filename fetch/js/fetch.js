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
