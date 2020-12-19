var data ='';
function loadFile(event) {
    var img = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
         for(let i=23;i<reader.result.length; i++){
             data = data + reader.result[i];
             
         }
    }
    reader.readAsDataURL(img);
}

function apiCall(){
    const container = document.getElementsByClassName('container2')[0];
    const image = document.createElement('h1')
    const button = document.createElement('button');
 // Creating a XHR object 
 let xhr = new XMLHttpRequest(); 
 let url = "http://localhost:5000/predict"; 

 // open a connection 
 xhr.open("POST", url, true); 

 // Set the request header i.e. which type of content you are sending 
 xhr.setRequestHeader("Content-Type", "application/json"); 

 // Create a state change callback 
 xhr.onreadystatechange = function () { 
     if (xhr.readyState === 4 && xhr.status === 200) { 

         // Print received data from server 
         let value = JSON.parse(this.response)
         console.log(value); 
         container.style.display="none";
         image.innerText=value['numberPlateVal'];
         button.innerText="Again";
         button.setAttribute("onclick","refreshPage()");
         document.querySelector("#x").appendChild(image);


     } 
 }; 

 // Converting JSON data to string 
 var data2 = JSON.stringify({ "image":data}); 

 // Sending data with the request 
 xhr.send(data2); 
}