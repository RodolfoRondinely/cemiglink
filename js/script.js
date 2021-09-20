const dc = (el)=>document.querySelector(el)

    

function msn (){

    let data = new Date
    
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    let horas = `${h}:${m}:${s}`
  
    dc('.center').innerHTML= `TELA SD/MP <br> ${horas} <br><br> Atente-se ao horário de envio, <br><br>a tela ficará vermelha quando for para envia-la
    `
    if (h ==6 && m <30 || h==10 && m <30|| h==14 && m <30 ||  h== 18 && m <30 || h==21 && m <30) {
        dc('.center').style.backgroundColor ="red"
        dc('.center').innerHTML=`
        <div class="tela">
            <h1>Enviar  Tela ${h}:${m}:${s} </h1>
               <h2> print da TELA SD/MP no grupo WhatsApp </h2>
               <button>
               <a href="https://192.168.124.20/painel_de_bordo/Account" target="blanck"> para enviar clique aqui

               </button>

         </div>
         `
        
    } else {
        dc('.center').style.backgroundColor ="rgba(17, 141, 17, 0.9)";
    }

   function alerta1() {
        if (h==06 && m==30 && s==1) {
            alert(`HORA DE ENVIAR A TELA ${horas}, proximo envio será entre 10:00 e 10:30 !`)
     
        }
    }
alerta1()


function alerta2() {
    if (h==10 && m==1 && s==1 ) {
        alert(`HORA DE ENVIAR A TELA ${horas}, proximo envio entre 14:00 3 14:30 !`)
    }
}
alerta2()


function alerta3() {
    if (h==14 && m==1 && s==1 ) {
        alert(`HORA DE ENVIAR A TELA ${horas}, proximo envio será entre 18:00 3 18:30 ! `)
    }
}
alerta3()
function alerta4() {
    if (h==23 && m==46 && s==30 ) {
        alert(`Boa noite, \n\nHORA DE ENVIAR A TELA ${horas},\nproximo envio será entre 21:00 3 21:30 ! `)
    }
}
alerta4()
 
//Alarme com som para envio de tela 

function alarme() {
    if (h==06 && m==29 && s==1 || h==10 && m==1 && s==1 ||h==14 && m==29 && s==1 || h==21 && m==1 && s==1 ) {
    let ad= document.querySelector('audio')
    ad.play()
}
}
//Chamando a funcao alarme
alarme()
}

// criando uma variavel timer que chamara a function msn de um em um segundo
let timer = setInterval(msn,1000)



//adiconando evento click na classe hidenn
document.querySelector('.hidenn').addEventListener("click", function() {


let esconder = document.querySelector("aside")

if (esconder.style.width=="300px") {
    esconder.style.width="0px"
    document.querySelector('.hidenn').style.backgroundColor="gray"
    
    document.querySelector('.boxmain').style.margin="auto"

    
} else {
    esconder.style.width="300px"
    document.querySelector('.hidenn').style.backgroundColor="rgba(17, 141, 17, 0.9)";

    document.querySelector('.boxmain').style.margin="auto 10px"

}


})

//mudando o estilo da classe hidenn ao clica-la
let t = document.querySelector('.hidenn img')

t.addEventListener("click", function() {
    
t.style.borderRadius=="0% 50% 50% 0%" ? t.style.borderRadius ="50% 0% 0% 50%":
    t.style.borderRadius="0% 50% 50% 0%"
})
