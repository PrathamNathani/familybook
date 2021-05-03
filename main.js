var image = [
    "dad.jpg",
    "clipart-mom-cartoon-3.jpg",
    "cute-boy-cartoon-vector-1539760.jpg",
    "298-2980192_grandpa-clipart-animated-grandfather-clipart.png",
    "grandmother-clipart-2.png",
  ];
  var names=["Father","Mom","Pratham","Grandfather","Grandmother"];
  var i =0;
  function nextslide() {
    
    if (i==5)
      {
        i=0;
      }
    
      document.getElementById("name").innerHTML=names[i];
      document.getElementById("album").src=image[i];
    i++;
  
  }
