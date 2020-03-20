function myfunction(){
    var uname=document.getElementById("uname");
    var vitmail=document.getElementById("vitmail");
    var password=document.getElementById("password");
    var login=document.getElementById("login");
    
    
    complete();

    function complete() {
        if(!uname.value || !vitmail.value || !password.value)
        {
            alert("Please fill in all the fields");
        }
        else
        {
            validate();
        }
    }

    console.log(uname.value);

    function validate(){
        async function search(url,settings){
            const api_call= await fetch(url,settings);
            const data= await api_call.json();
            return data;
        }

        let url =`http://localhost:3000/login?uname=${uname}`;
        let settings={method:"GET"};
        search(url,settings).then((res) =>{
            console.log(res);
            if(uname.value===res.name && vitmail.value===res.mail && password.value===res.password)
            {
                alert('User successfully logged in');
            }
            else
            {
                alert('Login failed');
            }
        })
    }
}