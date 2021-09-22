//Defining global variables
var sections =document.querySelectorAll("section");
var nav_menu =document.getElementById('navbar__list');


//Creating the nav items
function navList(){
    for(elem of sections){
        var section_id=elem.id;
        var section_name=elem.dataset.nav;
        var list=document.createElement('li')
        //Adding the menu__link style to the items
        list.innerHTML=`<a  class="menu__link" href="#${section_id}">${section_name}</a>`
        nav_menu.appendChild(list);
    }


}

/*
Using IntersectionObserverApi to check if the section is in the viewport
If it is add "your-active-class" to the section
else remove it
*/

const options ={
    rootMargin:'100px',
    //Assigning threshold value to 100% (1) to make sure that the section is fully view in the viewport
    threshold:'1'
}
const observer = new IntersectionObserver( function (entries,observer){
    
    entries.forEach(entry =>{
       if(entry.isIntersecting){
          entry.target.classList.add("your-active-class");
       } else{
        entry.target.classList.remove("your-active-class")

       }
    })
},

options)


for (section of sections){
    observer.observe(section)

}


// build the nav
navList()






