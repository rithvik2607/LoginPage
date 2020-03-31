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

        let url =`http://6804ba9a.ngrok.io/login?uname=${uname.value}`;
        let settings={method:"GET"};
        search(url,settings).then((res) =>{
            console.log(res[0]);
            try{
                if(uname.value===res[0].uname && vitmail.value===res[0].mail && password.value===res[0].password)
                {
                    alert('User successfully logged in');
                }
                else
                {
                    alert('Login failed');
                }
            }
            catch{
                alert('Login failed');
            }
        })
    }
}