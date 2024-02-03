const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

//variabel looping
let i

//Piring
let piring = []
let isiPiring = []

//Variabel Gizi
let protein = []
let vitamin = []
let lemak = []

//Variabel cek gizi
let isProtein
let isVitamin
let isLemak

//Variabel total gizi
let totalProtein
let totalVitamin
let totalLemak

//Tampil di HTML GIZI
let dataProtein
let dataVitamin
let dataLemak

//Variabel cek isi piring
let isPiring1 = false
let isPiring2 = false
let isPiring3 = false

//Variabel input
let input1 = parseInt(document.getElementById("input1").value) 
let input2 = parseInt(document.getElementById("input2").value) 
let input3 = parseInt(document.getElementById("input3").value) 
let inputData = []

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); 
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter); 
  elem.addEventListener("dragover", dragOver); 
  elem.addEventListener("dragleave", dragLeave); 
  elem.addEventListener("drop", drop); 
});


function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); 
}

//Events fired on the drop target

function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); // Prevent default to allow drop
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function dropData(draggableElementData){
  
}

function drop(event) {
  event.preventDefault(); // This is in order to prevent the browser default handling of the data
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
  const droppableElementData = event.target.getAttribute("data-draggable-id");

  if (droppableElementData === "piring1"){
    if (isPiring1 === false){
        isiPiring[0] = draggableElementData
        isPiring1 = true
        const draggableElement = document.getElementById(draggableElementData);
        event.target.classList.add("dropped");
        // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
        
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        
        event.target.insertAdjacentHTML("afterbegin", `<img id="${draggableElementData}Drop" src="../gambar/${draggableElementData}.png"  width="60px" draggable="false">`);

    }

  }else if (droppableElementData === "piring2"){
    if (isPiring2 === false){
      isiPiring[1] = draggableElementData
      isPiring2 = true
      const draggableElement = document.getElementById(draggableElementData);
      event.target.classList.add("dropped");
      // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
      
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      
      event.target.insertAdjacentHTML("afterbegin", `<img id="${draggableElementData}Drop" src="../gambar/${draggableElementData}.png"  width="60px" draggable="false">`);

  }
  }else if (droppableElementData === "piring3"){
    if (isPiring3 === false){
      isiPiring[2] = draggableElementData
      isPiring3 = true
      const draggableElement = document.getElementById(draggableElementData);
      event.target.classList.add("dropped");
      // event.target.style.backgroundColor = draggableElement.style.color; // This approach works only for inline styles. A more general approach would be the following: 
      
      draggableElement.classList.add("dragged");
      draggableElement.setAttribute("draggable", "false");
      
      event.target.insertAdjacentHTML("afterbegin", `<img id="${draggableElementData}Drop" src="../gambar/${draggableElementData}.png"  width="60px" draggable="false">`);

    }
  }


};

function cekPiring(droppableElementID){
  if (droppableElementID === "piring1_id"){
    isiPiring[0] = ""
    isPiring1 = false
  } else if (droppableElementID === "piring2_id"){
    isiPiring[1] = ""
    isPiring2 = false
  }else if (droppableElementID === "piring3_id"){
    isiPiring[2] = ""
    isPiring3 = false
  }
}

//Menghapus ITEM
function hapusItem(droppableId) {
  const droppableElement = document.querySelector(`[data-draggable-id="${droppableId}"]`);
  const droppableElementID = droppableElement.id
  console.log(droppableElementID)
  const draggableIcon = droppableElement.firstElementChild;
  if (draggableIcon.id === "ayamGorengDrop"){
      var tess = document.getElementById("ayamGoreng")
      tess.draggable = true
      tess.classList.remove("dragged")
      cekPiring(droppableElementID)
      console.log("cek piring 1")
  }else if (draggableIcon.id === "ikanGorengDrop"){
    var tess = document.getElementById("ikanGoreng")
    tess.draggable = true
    tess.classList.remove("dragged")
    cekPiring(droppableElementID)
    console.log("cek piring 2")
  }else if (draggableIcon.id === "tempeGorengDrop"){
    var tess = document.getElementById("tempeGoreng")
    tess.draggable = true
    tess.classList.remove("dragged")
    cekPiring(droppableElementID)
  };

  // Hapus elemen anak (icon) dari elemen drop
  droppableElement.removeChild(draggableIcon);

  // Reset atribut draggable dan kelas "dropped" dari elemen drop
  droppableElement.classList.remove("dropped");
}




//Button hitung gizi
function hitung(){
    
    //set mula2 nilai gizi 0
    for(i=0; i<3; i++){
      protein[i] = 0
      vitamin[i] = 0
      lemak[i] = 0 
    }
  let inputData = []

    inputData[0] = parseInt(document.getElementById("input1").value)
    inputData[1] = parseInt(document.getElementById("input2").value)
    inputData[2] = parseInt(document.getElementById("input3").value) 

    console.log("input 1 : " + inputData[0] * 10)
    console.log("tipe 1 : " + typeof(inputData[0]))
    console.log("input 2 : " + inputData[1] * 10)
    console.log("tipe 2 : " + typeof(inputData[1]))
    console.log("input 3 : " + inputData[2])
    console.log("tipe 3 : " + typeof(inputData[2]))
    

    for(i=0; i<3; i++){
        if (isiPiring[i] === "ayamGoreng"){
            protein[i] = inputData[i] * 10
            isProtein = true
            console.log(i)
            console.log("protein =" + protein[i])
            console.log("data input =" + inputData[i])
            
        }else if (isiPiring[i] === "ikanGoreng"){
            protein[i] = inputData[i] * 20
            isProtein = true
            vitamin[i] = (inputData[i]) * 30
            isVitamin = true
            console.log(i)
            console.log("protein =" + protein[i])
            console.log("vitamin : " + vitamin[i])
            console.log("data input =" + inputData[i])

        }else if (isiPiring[i] === "tempeGoreng"){
            protein[i] = inputData[i] * 40
            isProtein = true
            vitamin[i] = inputData[i] * 50
            isVitamin = true
            lemak[i] = inputData[i] *60
            isLemak = true
            console.log(i)
            console.log("protein =" + protein[i])
            console.log("vitamin : " + vitamin[i])
            console.log("lemak : " + lemak[i])
            console.log("data input =" + inputData[i])

        };
    }

    if (isProtein === true){
        totalProtein = protein[0] + protein[1] + protein[2]
        dataProtein = document.getElementById("totalProtein");
        dataProtein.innerHTML = "Protein : " + totalProtein;
    }
    if (isVitamin === true){
        totalVitamin = vitamin[0] + vitamin[1] + vitamin[2]
        dataVitamin = document.getElementById("totalVitamin");
        dataVitamin.innerHTML = "Vitamin : " + totalVitamin;
    }
    if (isLemak === true){
        totalLemak = lemak[0] + lemak[1] + lemak[2]
        dataLemak = document.getElementById("totalLemak");
        dataLemak.innerHTML = "Lemak : " + totalLemak;
    }

    console.log(totalProtein)
    console.log(totalVitamin)
    console.log(totalLemak)

}