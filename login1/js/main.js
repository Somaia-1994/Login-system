let user=[]
user=JSON.parse(localStorage.getItem('user'))

let logInEmail=document.getElementById('signEmail')
let logInPass=document.getElementById('signPassword')



document.getElementById('login').addEventListener('click' , function(){
    if(logInEmail.value == '' || logInPass.value == ''){
        document.getElementById('message').innerHTML= '<p class = "text-success fs-1"> please Login first  </p>'
    }
    else{
        checkUser()
    }
})

function checkUser(){
    for(let i = 0; i<user.length; i++){
        if(logInEmail.value == user[i].email && logInPass.value == user[i].password){
            var x = user[i].name;
            localStorage.setItem('userName' , x);
            location.href="../home/home.html"
    
        }
            

    }

}