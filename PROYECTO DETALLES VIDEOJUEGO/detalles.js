window.onload = () =>{


var buttonAbout = document.getElementById('aboutButton');
var buttonAdd = document.getElementById('addButton');
var buttonShare = document.getElementById('shareButton')

buttonAbout.addEventListener('click', ()=>{
    addStyleHidden()
})

buttonAdd.addEventListener('click', ()=>{
    addStyleHidden()
})

buttonShare.addEventListener('click', ()=>{
    addStyleHidden()
})

}

addStyleHidden = () =>{
    var botonPulsado = event.target.id
    var divAbout = document.getElementById('about')
    var divAdd = document.getElementById('addTo')
    var divShare = document.getElementById('share')
    if(botonPulsado == 'aboutButton'){
        divAdd.classList.add('hidden')
        divShare.classList.add('hidden')

        try{
            divAbout.classList.remove('hidden')
        }catch{
            console.log('never hidden')
        }


    }else if(botonPulsado == 'addButton'){
        divAbout.classList.add('hidden')
        divShare.classList.add('hidden')

        try{
            divAdd.classList.remove('hidden')
        }catch{
            console.log('never hidden')
        }

    }else if(botonPulsado == 'shareButton'){
        divAbout.classList.add('hidden')
        divAdd.classList.add('hidden')

        
        try{
            divShare.classList.remove('hidden')
        }catch{
            console.log('never hidden')
        }

    }
    
}
