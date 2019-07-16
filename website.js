imgID = 1;

function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "400px";
}

function normalImg(x) {
    x.style.height = "70px";
    x.style.width = "70px";
}




function nextImg(){
  img = document.getElementById("projects");
	if (imgID == 1) {
    img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orlamammoth.jpg" width="500px" alt="Orla standing in front of a frozen lake and snow covered mountains in Mammoth."><br><br><button onclick="nextImg()">Next Image</button>';
imgID = 2;
	} else if (imgID== 2){
    img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orlabeach.jpg" width="350px" alt="Orla enjoying the beauty of the beach at Point Dume in Malibu."><br><br><button onclick="nextImg()">Next Image</button>';
    imgID = 3;
        } else if (imgID == 3){
    img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orlagarden.jpg" width="250px" alt="Orla smelling a rose in the gardens at the Huntington Library."><br><br><button onclick="nextImg()">Next Image</button>';
    imgID = 4;
        } else if (imgID == 4){
    img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orlarocks.jpg" width="500px" alt="Orla pictured with the the rocks in Red Rock Canyon."><br><br><button onclick="nextImg()">Next Image</button>';
    imgID = 5;
        } else if (imgID == 5){
img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orlaflowers.jpg" width="500px" alt="Orla posing with the beautiful flowers at the gardens in the Huntington Library."><br><br><button onclick="nextImg()">Next Image</button>';
    imgID = 6;
        } else if (imgID == 6){
img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orla.jpg" width="500px" alt="This is a picture of Orla She has blonde hair and blue eyes She is sitting in the gardens at the Huntington Library."><br><br><button onclick="nextImg()">Next Image</button>';
    imgID = 7;
        } else if (imgID == 7){
    img.innerHTML = '<h1>Welcome to the life of Orla Giffen:</h1><h2>Pictures of Orla:</h2><img id="Orla" src="orlamammoth.jpg" width="500px" alt="Orla standing in front of a frozen lake and snow covered mountains in Mammoth."><br><br><button onclick="nextImg()">Next Image</button>';
imgID = 2;         
}
}