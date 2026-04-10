async function getDATA() {
    const response = await fetch(
      'http://localhost/api/student-list.php'  
    );
    const data = await response.json();
    console.log(data);
}

async function subitData(username, password) {
    const data =  {
        username: username,
        password: password,
    }
    const response =
    await fetch(
        'http://loacalhost/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();

        console.log(resData);
        if (!response.ok) {
            throw new Error(resData.message || 'Login failed');
        }
        return resData;
}