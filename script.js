alert("Xozir o`quvchilar ro`yhati chiqishni boshlaydi")

 let arr  =  [{Ism: "Ali", Yosh: 12, color: "red"},
             {Ism: "Laylo", Yosh: 13, color: "green"},
             {Ism: "Vali", Yosh: 14, color: "blue"},
             {Ism: "Olim", Yosh: 15, color: "yellow"},                
             {Ism: "Zarina", Yosh: 16, color: "pink"},
]
console.log(arr)


let div1 = document.getElementById("Div")

arr.forEach(
    (arr, index)=> {
       var card = document.createElement("div")
       card.classList.add("card")
       card.style.backgroundColor = arr.color

       card.innerText = "Ism: " + arr.Ism + " \n Yosh: " + arr.Yosh

       div1.appendChild(card)
    } 
)


