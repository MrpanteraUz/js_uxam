const munuBtn = document.querySelector(".munuBtn")
const navigation_bar = document.querySelector(".navigation_bar")
const content = document.querySelector(".content")
const next = document.querySelector(".next")
const nav_menu = document.querySelector(".nav_menu")
const returns = document.querySelector(".return")
const roomboard = document.querySelector(".roomboard")
const roomb = document.querySelector("#roomb")
const btn_room = document.querySelector(".btn_room")
const creat_div = document.querySelector(".creat_div")
const otmena = document.querySelector(".otmena")
const plus = document.querySelector(".plus")
const main = document.querySelector("main")
const clock = document.querySelector(".clock")
const month = document.querySelector(".month")


// list one


localStorage.setItem("navbar", "mielse")

function navbar(){

      localStorage.getItem('navbar')
    munuBtn.addEventListener('click', ()=>{
        navigation_bar.style = `width:5% `
        munuBtn.style.display = "none"
        next.style.display = "block"
        nav_menu.style.display = "none"
        returns.style.display = "block"
        
    })




    
    next.addEventListener('click', ()=> {
        navigation_bar.style = `width:372px `
        next.style.display = "none"
        munuBtn.style.display = "block"
        nav_menu.style.display = "block"
        returns.style.display = "none"
    })

} 
navbar()



    roomb.addEventListener('click', ()=> {
        roomb.style.background = "#d0d4e0"
        content.style.display = "none"
        roomboard.style.display = "block"

    })
    function localData(){
        if(localStorage.getItem('munuBtn')){
            navigation_bar.style = `width:5% `
            munuBtn.style.display = "none"
            next.style.display = "block"
            nav_menu.style.display = "none"
            returns.style.display = "block"
        }
    }
    localData()

    btn_room.addEventListener('click', ()=>{
        creat_div.style.display = "block"
        main.style.height = "145vh"
        creat_div.style.boxShadow = " 0 0 1000000px #7E808A"
        btn_room.style = `margin-left:480px`
        btn_room.style = `margin-top:200px`
})
  


    //list two 

    setInterval(()=>{
        let time = new Date()
        let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        let second = time.getSeconds().toString().padStart(2,"0")
        let day = time.getDay()
        let months = time.getMonth()
        let years = time.getFullYear()
        clock.innerHTML = `${time.getHours()}:${minute}:${second}`
        month.innerHTML = `${day} : ${months} : ${years}`
    },1000)

    const cards_box = document.querySelector(".cards_box") 

    let cardsCreat = {
        
    }


    plus.addEventListener('click' , ()=> {
        creat_div.style.display = "none"
        function creatDiv(){
            const div = document.createElement("div")
            div.innerHTML = `
               <div class="new_card1">
                              <div class="card_user">
                                    <div style="background: #FFD600;" class="card_img">
                                          <h4 class="user_number">301</h4>
                                    </div>
                                    <div>
                                        <h5 style="color: #FFD600;">Забронирован</h5>
                                        <p style="font-size: 11px; padding: 4px;">Гости: 2</p>
                                   </div>
                                    <img style="width: 20px; height: 20px;" src="./images/galichka.svg" alt="">
                              </div>
                              <h5>Дата и время заезда:</h5>
                              <p style="font-size: 11px;">19.05.2020 - 15:00</p>
                          </div>

            `
           
            cards_box.appendChild(div)
            
        }
        
        creatDiv()
    })

    otmena.addEventListener('click', ()=>{
        creat_div.style.display = "none"
        main.style.height = "125vh"
        
    })


  

   
    let colors = ["red", "blue" , "yellow" , "dodgerblue" , "green"]
   
    function colorRandom() {
        let num = Math.floor(Math.random() * colors.length )
    
        return colors[num]
    
    }

    console.log(colors);

   
    
   