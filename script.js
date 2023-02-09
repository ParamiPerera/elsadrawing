var images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"

];

var i = 0;
function nextslide() { 
 
   if(i == 6)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
  i++;
 
}

