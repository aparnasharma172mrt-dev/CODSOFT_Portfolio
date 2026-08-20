// Loader
window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader");

    setTimeout(()=>{
        loader.style.opacity="0";

        setTimeout( ()=>{
             
            loader.style.display="none";
        },800);


    },1000);
});


// navigation
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".right");
const navLinks = document.querySelectorAll(".right ul li a");

menuIcon.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {

    link.addEventListener("click",()=>{
        navMenu.classList.remove("active");
    });
    
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
     let current = "";

     sections.forEach(section=>{

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id");
        }
     });
     navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") == "#" + current){
            link.classList.add("active");
        }
     });
});

// contact form
const form = document.querySelector("#contactForm");

form.addEventListener("submit",(e)=>{
     e.preventDefault();


     let name = document.querySelector("#name").value.trim();
     let email = document.querySelector("#email").value.trim();
     let subject = document.querySelector("#subject").value.trim();
     let message = document.querySelector("#message").value.trim();

     document.querySelector("#nameError").innerHTML="";
     document.querySelector("#emailError").innerHTML="";
     document.querySelector("#subjectError").innerHTML="";
     document.querySelector("#messageError").innerHTML="";


     if(name===""){
        document.querySelector("#nameError").innerHTML="Please enter your name"
     }

     if(email===""){
         document.querySelector("#emailError").innerHTML="Please enter your email"

     }
      if(subject===""){
         document.querySelector("#subjectError").innerHTML="Please enter your subject"

     }
      if(message===""){
         document.querySelector("#messageError").innerHTML="Please enter your message"

     }
     if(name!=="" && email!=="" && subject!=="" && message!==""){
        alert("Message sent successfully!");
        form.reset();
     }
});

// Back to Top Button

const topBtn = document.querySelector("#top-btn");

window.addEventListener("scroll",()=>{
     if(window.scrollY > 300){
        topBtn.style.display="flex";
     }else{
        topBtn.style.display="none";
    
     }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
         top:0,
         behavior:"smooth"
    });
});