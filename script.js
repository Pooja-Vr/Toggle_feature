// ADDING some logic to the toggle feature

const toggle = document.querySelector('#check');
console.log(toggle);

toggle.addEventListener('change', function(){
    if(toggle.checked){
        console.log("toggle checked");
        document.body.classList.add('dark-mode')
       
    } else{
        document.body.classList.remove('dark-mode');
        console.log("toggle unchecked");
    }

})


