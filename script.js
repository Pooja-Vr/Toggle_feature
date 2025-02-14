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

//===================== Show the scroll-up icon when scrolling
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

//================== Smooth scroll to contact section
// document.querySelector('.contact-btn a').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
// });

// Show the menu links when the menu bar is clicked
// document.querySelector('.bar-button').addEventListener('click', function() {
//     this.classList.toggle('active');
//   });
  



