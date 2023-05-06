const nextE1 = document.querySelector(".next")

const prevE1 = document.querySelector(".prev")

const imgsE1 = document.querySelectorAll("img")
const imgContainerE1 = document.querySelector(".image-container");

let currentImg = 1

let timeOut;

nextE1.addEventListener("click",()=>{
    currentImg++
    clearTimeout(timeOut)
    updateImg()
})

prevE1.addEventListener("click",()=>{
    currentImg--
    clearTimeout(timeOut)

    updateImg()
})
updateImg()

function updateImg(){
  if(currentImg > imgsE1.length){
    currentImg = 1
  }else if(currentImg < 1){
    currentImg = imgsE1.length;
  }
   imgContainerE1.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
   timeOut =  setTimeout(()=>{
    currentImg++
    updateImg()
   },3000)
}