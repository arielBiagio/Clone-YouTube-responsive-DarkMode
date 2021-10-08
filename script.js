const contenedor = document.querySelector('#contenedor')

document.querySelector('#boton-menu').addEventListener('click', ()=>{
   contenedor.classList.toggle('active') 
})

const comprobarAncho = () => {
    if(window.innerWidth<=768){
        contenedor.classList.remove('active')
    }else{
        contenedor.classList.add('active')
    }
}

comprobarAncho()

window.addEventListener('resize', () => {
    comprobarAncho()
})


//--------------Modo Oscuro-------------------------------------//

const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')


    //Guardamos el modo en localStorage.

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode','true')
    }else{
        localStorage.setItem('dark-mode','false')
    }
})

    //obtenemos el modo actual

    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.add('dark')
        btnSwitch.classList.add('active')
    }else{
        document.body.classList.remove('dark')
        btnSwitch.classList.remove('active')
    }