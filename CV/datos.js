window.onload = () => {
  datosP = document.getElementById("personalData");
  work = document.getElementById("work");
  acadm = document.getElementById("academics");
  others = document.getElementById("others");
  
  

  work.addEventListener("click", () => {
    TextoCabecer = work.innerText
    openModal(TextoCabecer);
  });
  acadm.addEventListener("click", () => {
    TextoCabecer = acadm.innerText
    openModal(TextoCabecer);
  });
  others.addEventListener("click", () => {
    TextoCabecer = others.innerText
    openModal(TextoCabecer);
  });
  datosP.addEventListener("click", () => {
    TextoCabecer = datosP.innerText
    openModal(TextoCabecer);
  });
};

openModal = (TextoCabecer) => {
  modal = document.createElement("div");
  modal.classList.add("modal");
  bodyDoc = document.querySelector("body");
  bodyDoc.appendChild(modal);

  headerModal = document.createElement("div");
  headerModal.classList.add("modal-header");
  modal.appendChild(headerModal);

  titleModal = document.createElement("h3");
  titleModal.classList.add("title");
  titleModal.innerText = TextoCabecer;
  headerModal.appendChild(titleModal);

  buttonClose = document.createElement("button");
  buttonClose.innerText = "X";
  buttonClose.classList.add("modal-header");
  buttonClose.classList.add("close-button");

  headerModal.appendChild(buttonClose);

  if(TextoCabecer == 'Datos Personales'){
      Nom = document.createElement('p')
      Nom.innerText = 'Nombre Completo: Mikel Azqueta Alzuaz'
      Nom.classList.add('modal-body')

      dateB = document.createElement('p')
      dateB.innerText = 'Fecha Nacimiento: 09.05.1991'
      dateB.classList.add('modal-body')

      Resi = document.createElement('p')
      Resi.innerText = 'Residencia: Pamplona - Madrid'
      Resi.classList.add('modal-body')

      email = document.createElement('p')
      email.innerText = 'Email: azquetamikel@gmail.com'
      email.classList.add('modal-body')
      
      linkInd = document.createElement('Img')
      linkInd.src = './linkedin.png'
      linkInd.classList.add('modal-body')

      modal.appendChild(Nom)
      modal.appendChild(dateB)
      modal.appendChild(Resi)
      modal.appendChild(email)
      modal.appendChild(linkInd)
  } else if(TextoCabecer == 'Formación'){

    BootCamp = document.createElement('p')
    BootCamp.innerText = 'BootCamp (Oct. 2021 - Marzo 2022): Programación Front-End (JAVASCRIPT-ANGULAR-REACT- CSS - HTML)'
    BootCamp.classList.add('modal-body')
    modal.appendChild(BootCamp)


    Master = document.createElement('p')
    Master.innerText = 'Master (Sep. 2017 - Mayo 2018): Consultoria SAP HXM/FI + Programación ABAP'
    Master.classList.add('modal-body')
    modal.appendChild(Master)

    Carrera = document.createElement('p')
    Carrera.innerText = 'Doble Grado (Sep. 2012 - Junio 2016): ADE + Economía Internacional'
    Carrera.classList.add('modal-body')
    modal.appendChild(Carrera)

    Diplomatura = document.createElement('p')
    Diplomatura.innerText = 'Diplomatura (Sep. 2009 - Junio 2012): Ciencias Empresariales'
    Diplomatura.classList.add('modal-body')
    modal.appendChild(Diplomatura)
  } else if(TextoCabecer == 'Experiencia Laboral'){

    Oreka = document.createElement('p')
    Oreka.innerText = 'Oreka I.T (Marz. 2018 - Actualidad): Consultor SAP HXM'
    Oreka.classList.add('modal-body')
    modal.appendChild(Oreka)


    DTT = document.createElement('p')
    DTT.innerText = 'Deloitte (Feb. 2016 - Sep. 2017): Auditoria de Cuentas'
    DTT.classList.add('modal-body')
    modal.appendChild(DTT)


  }else{
    Erasmus = document.createElement('p')
    Erasmus.innerText = 'Programa Erasmus - Dublin (Sep. 2012 - Agos. 2012)'
    Erasmus.classList.add('modal-body')
    modal.appendChild(Erasmus)


    advance = document.createElement('p')
    advance.innerText = 'Advance (Agosto 2014): CAE Certificate in Advanced English - C1'
    advance.classList.add('modal-body')
    modal.appendChild(advance)

   langu = document.createElement('p')
   langu.innerText = 'Lenguajes Programación : ABAP / JS / CSS-SCSS / SAPUI5 / HTML'
   langu.classList.add('modal-body')
   modal.appendChild(langu)


  }

  buttonClose.addEventListener("click", () => {
    modal.remove();
  });
};
