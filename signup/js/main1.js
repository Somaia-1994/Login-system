let signUpName= document.getElementById('signName')
let signUpEmail=document.getElementById('signEmail')
let signUpPassword=document.getElementById('signPassword')

let user=[]

if(localStorage.getItem('user')!= null){
    user = json.parse(localStorage.getItem('user'))
}else
{
    user=[]
}


function add(){
    if(signUpName.value == '' || signUpEmail.value =='' || signUpPassword.value== '')
    {
        alert('please rgestier first')
    }else{
        let obj={
            name:signUpName.value,
            email:signUpEmail.value,
            password:signUpPassword.value
        }
        user.push(obj);
        
        document.getElementById('message').innerHTML='<p class = "text-success fs-1"> success </p>  '
        localStorage.setItem('user', JSON.stringify(user))
        location.href='../login1/index.html'
         
       
     

    }
}

