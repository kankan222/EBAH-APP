let itemNames = document.querySelectorAll(`.nav-lists ul a span`);
let Icons = document.querySelectorAll(`.nav-lists ul a`);
let namue = document.querySelectorAll(`.namue`);
let nav = document.querySelector(`nav`);
let aside = document.querySelector(`aside`);
let ham = document.querySelector(`#ham`);


activate();
function activate(){
    Icons.forEach(function(icon){
        icon.addEventListener('click', ()=>{
            Icons.forEach(function(otherIcon){
                if(otherIcon !== icon){
                    otherIcon.classList.remove(`active`);
                }
            });
            icon.classList.toggle(`active`);
        });
    });
}

// HMABURGER
if(window.innerWidth < 930){
    aside.onclick = function(){
        aside.style.display = `none`;
    }
    ham.addEventListener("click", ()=>{
        aside.style.display = `block`;
        document.querySelector(`#thead`).style.opacity = `1`;
    })   
}
else{
    aside.style.display= `block`;
    ham.addEventListener("click", ()=>{
        document.querySelector(`#thead`).style.opacity = `1`;
        itemNames.forEach(item => {
            item.classList.toggle(`hide`);
        });
        activate();
        namue.forEach(nae=>{
            nae.classList.toggle(`hide`);
        })
        nav.classList.toggle(`width`);
        document.querySelector(`.main`).classList.toggle(`width`);
    })
}

//Search Icon

if(window.innerWidth < 780){
    function searchIcon(){
        document.querySelector(`.search`).style.display = 'block';
        document.querySelector(`.searchIcon`).style.display = `none`;  
    }
    document.querySelector(`.close`).onclick = function(){
        document.querySelector(`.search`).style.display = 'none';    
        document.querySelector(`.searchIcon`).style.display = `block`;   
    }
}


function openProfile(){
    document.querySelector(`.profile-log-out`).classList.toggle(`hide`);
}
