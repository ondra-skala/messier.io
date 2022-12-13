var m1="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/crab-nebula-mosaic.jpg?itok=DNaRmPtc" ;
var m13="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Messier_13.jpg/1200px-Messier_13.jpg"  ;
var m16="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/hubble_birthofstars_0.jpg?itok=V2crHtH0" ;
var m31="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1200px-Andromeda_Galaxy_%28with_h-alpha%29.jpg";
var m33="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/heic1901a.jpg?itok=YLJUZyay" ;
var m42="http://cs.astronomy.com/cfs-file.ashx/__key/telligent-evolution-components-attachments/13-59-00-00-00-48-84-46/m42_2D00_HLRGB_5F00_def.jpg"  ;
var m51="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m51-and-companion_0.jpg?itok=OPfxPWWf" ;
var m57= "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/ring-nebula-full_jpg.jpg?itok=yRmKArDB";
var m64= "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/black-eye-galaxy-print.jpg?itok=SCrP4eMa" ;
var m45="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/1200px-Pleiades_large.jpg"  ;
var m81="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m81-print.jpg?itok=cQ8vTd7C"  ;
var m82="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m82.jpg?itok=vhoNInCP"  ;
var m87="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m87-full_jpg.jpg?itok=XqvbUq_t"  ;
var m8="http://www.horolezec.cz/upload/gallery/galery/gal_2436/astro/velke/normal_Laguna_Mazin.jpg"  ;
var m20="https://www.astro.cz/images/cam/2016_05/obr/2016_2q_05_06.jpg"  ;
var m104="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/sombrero-galaxy.jpg?itok=0bph5fym"  ;
var m97= "https://upload.wikimedia.org/wikipedia/commons/1/10/The_Owl_Nebula_M97_Goran_Nilsson_%26_The_Liverpool_Telescope.jpg" ;
var m101= "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m101.jpg?itok=CDlepVkh";



const imageArray = [["m1","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/crab-nebula-mosaic.jpg?itok=DNaRmPtc"],
["m13","https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Messier_13.jpg/1200px-Messier_13.jpg"],
["m16","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/hubble_birthofstars_0.jpg?itok=V2crHtH0"],
["m31","https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1200px-Andromeda_Galaxy_%28with_h-alpha%29.jpg"]
["m33","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/heic1901a.jpg?itok=YLJUZyay"],
["m42","http://cs.astronomy.com/cfs-file.ashx/__key/telligent-evolution-components-attachments/13-59-00-00-00-48-84-46/m42_2D00_HLRGB_5F00_def.jpg"],
["m51","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m51-and-companion_0.jpg?itok=OPfxPWWf"],
["m57","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/ring-nebula-full_jpg.jpg?itok=yRmKArDB"],
["m64","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/black-eye-galaxy-print.jpg?itok=SCrP4eMa"],
["m45","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/1200px-Pleiades_large.jpg"],
["m81","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m81-print.jpg?itok=cQ8vTd7C"],
["m82","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m82.jpg?itok=vhoNInCP"],
["m87","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m87-full_jpg.jpg?itok=XqvbUq_t"],
["m8","http://www.horolezec.cz/upload/gallery/galery/gal_2436/astro/velke/normal_Laguna_Mazin.jpg"],
["m20","https://www.astro.cz/images/cam/2016_05/obr/2016_2q_05_06.jpg"],
["m104","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/sombrero-galaxy.jpg?itok=0bph5fym"],
["m97","https://upload.wikimedia.org/wikipedia/commons/1/10/The_Owl_Nebula_M97_Goran_Nilsson_%26_The_Liverpool_Telescope.jpg"],
["m101","https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m101.jpg?itok=CDlepVkh"]
];




const image = document.querySelector("img");


var pozice = 0;
var num = 0;

function generateRandomPicture(array){
  var randomNum = Math.floor(Math.random() * array.length);
  listik = array[randomNum];
  image.setAttribute("src", listik[1]);
  return randomNum;
}

function myFunction() {
  

  const image = document.querySelector("img");

  const num = generateRandomPicture(imageArray);
  window.onload = () => num;
  pozice = imageArray[num];

  
}


function check(){
  let text;
  let x = document.getElementById("numb").value;
  if (x === pozice[0]) {
    text = "✅";
    document.getElementById("demo").innerHTML = text;
    myFunction();
  } 
  else{
    text = "🚫";
    document.getElementById("demo").innerHTML = text;
  }
  
}

function idk(){
  alert(pozice[0])
}
