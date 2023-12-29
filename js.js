const maincontainer = document.querySelector("#main-container")
const cursor = document.querySelector("#cursor")

cursor.addEventListener('mouseover', ()=> {
    maincontainer.style.boxShadow = "1rem 1rem"
    console.log("마우스오버")
})
cursor.addEventListener('mouseleave', ()=> {
    maincontainer.style.boxShadow = "0.5rem 0.5rem"
    console.log("마우스리브")
})
