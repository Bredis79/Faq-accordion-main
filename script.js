const iconPlus = document.querySelector(".icon-plus")
const iconMinus = document.querySelector(".icon-minus")

const paragraph = document.getElementsByTagName("p")
const h2 = document.getElementsByTagName("h2")


for (let i = 0 ; i < h2.length; i++) {
  
      h2[i].addEventListener('click' , function(e){
        //toggle paragraph
        this.parentNode.nextSibling.nextSibling.classList.toggle("visible")

        //show or hide icons 
        e.target.nextElementSibling.classList.toggle("hidden")
        e.target.nextElementSibling.nextElementSibling.classList.toggle("visible")
      }); 
}

