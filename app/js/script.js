const buttonHamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")
const main = document.querySelector("main");
const keepForModal = document.querySelectorAll(".hide")
const mybutton = document.querySelectorAll(".button");
const cancelModal = document.querySelector(".cancel-img");
const modal = document.querySelector('.modal');
const radioButton1 = document.querySelector('#radio1');
const radioButton2 = document.querySelector('#radio2');
const radioVisible1 = document.querySelector('.isvissible1');
const radioVisible2 = document.querySelector('.isvissible2');
const modalReward = document.querySelectorAll('.btn');
const modalComplete = document.querySelector('.modal-complete');
const modalCompleteButton = document.querySelector('.btn-close');

buttonHamburger.addEventListener('click', toggleHamburger);

//for buton to open modal
mybutton.forEach((items)=>{
    items.addEventListener('click', openModal)
})
cancelModal.addEventListener('click', function(){
    modal.classList.remove('fade-in');
    modal.classList.add('fade-out');
    keepForModal.forEach((item)=>{
        item.style.visibility = "visible";

    });
})

//to check on radio buttons
radioButton1.addEventListener('click', function(){
      radioVisible2.style.display = 'none';
    radioVisible1.style.display = 'block';

})
radioButton2.addEventListener('click', function(){
    radioVisible1.style.display = 'none';
    radioVisible2.style.display = 'block';
 })
 // for the modal complete page
 modalReward.forEach((items)=>{
     items.addEventListener('click', openModalComplete);
    
 })

 // for modal complete to close
 modalCompleteButton.addEventListener('click', function(){
    body = window.location.reload();
     

 })
// to close and open the hamburger menu
function toggleHamburger(e){
    console.log('me')
    if(header.classList.contains('open')){ //close hamburger menu
        body.classList.remove('noscroll');
        main.style.opacity = 1;
        header.classList.remove('open');
        fadeElems.forEach(function(items){
            items.classList.remove('fade-in')
            items.classList.add('fade-out');
        })
       
        

    }else{
        body.classList.add('noscroll');
        header.classList.add('open');   //open hamburger menu
        main.style.opacity = 0.5;
        fadeElems.forEach(function(items){
            items.classList.remove('fade-out');
            items.classList.add('fade-in')
        })
       
    }
};

//to work on opening modal
function openModal(e){
    modal.classList.remove('fade-out');
   modal.classList.add('fade-in');
   keepForModal.forEach((item)=>{
    item.style.visibility = "hidden";
});

}

//open modalCompleted
function openModalComplete(e){
    modalComplete.classList.add('fade-in');
    radioVisible2.style.display = 'none';
    radioVisible1.style.display = 'none';
    disablebutton()
}
function disablebutton(){
    // mybutton.forEach((item)=>{
    //     item.disabled = true;
    // })
      body.classList.add('noscroll');
      document.querySelector('.modal_main-page').style.opacity= 0.5;
    

}