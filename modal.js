window.onload = () =>{
spanForModal = document.getElementById('span')
spanForModal.addEventListener('click', () =>{
    openModal()
})
}

let modal
openModal = () =>{
   if(modal !==undefined){
       modal.remove()
   }

   modal = document.createElement('div')
   modal.classList.add('modal')
   bodyDoc = document.querySelector('body')
   bodyDoc.appendChild(modal)

   headerModal = document.createElement('div')
   headerModal.classList.add('modal-header')
   modal.appendChild(headerModal)

   titleModal = document.createElement("h3");
   titleModal.classList.add("title");
   titleModal.innerText = 'Mikel Azqueta Alzuaz'
   headerModal.appendChild(titleModal)

   buttonClose = document.createElement("button");
  buttonClose.innerText = "X";
  buttonClose.classList.add("modal-header");
  buttonClose.classList.add("close-button");

  headerModal.appendChild(buttonClose);

  

   telef = document.createElement('p')
  telef.innerText = 'Telf. 628 90 27 80'
  telef.classList.add('modal-body')
  modal.appendChild(telef)
  
  email = document.createElement('p')
  email.innerText = 'Email: azquetamikel@gmail.com'
  email.classList.add('modal-body')
  modal.appendChild(email)
 
  buttonClose.addEventListener("click", () => {
    modal.remove();
  })


}