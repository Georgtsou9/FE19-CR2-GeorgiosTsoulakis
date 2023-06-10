
// Objects Array
let tasks = [
    {
        name: "Groceries",
        description: "Milk, Bread, Apples, Shampoo",
        importance: 0,
        deadline: "25/06/2023",

       
    },
    {
        name: "Clean the house",
        description: "Bathroom, Bedroom, Floors ",
        importance: 3,
        deadline: "10/06/2023",

        

    },
    {
        name: "University Project",
        description: "Write a paper",
        importance: 2,
        deadline: "14/06/2023",


    },
    {
        name: "Doctor Apointment",
        description: "Call and make an appointment",
        importance: 5,
        deadline: "17/06/2023",

       

    },
    {
        name: "Repair",
        description: "Call the technician for the fridge",
        importance: 1,
        deadline: "15/06/2023",

        
    },
    {
        name: "Birthday Gift",
        description: "Buy a birthday gift for Niklas",
        importance: 4,
        deadline: "18/06/2023",

        

    },
]

// Printing out tasks form array Starts
let out = document.getElementById("grid");
let pointer;


for(let obj of tasks){
    pointer =tasks.indexOf(obj);
   
    
    out.innerHTML += 
    `<div class="col column-gap-1" id="col${pointer}">
    <div class="card " style="width: 18rem;">
      <img src="images/Card_Image.jpg" class="card-img-top" alt="Oops">
      <div class="card-body">
        <h5 class="card-title">${obj.name} </h5>
        <p class="card-text">${obj.description} </p>
      </div>
      <hr>
      <ul>
      
        <li>
          <div class="priorlist">
            <p><img class="priorimg" src="images/danger.png" alt=""> Priority Level: <div class="imp" id="imp${pointer}">${obj.importance} </div> </p>
            <div>
                <button type="button" class="btn btn-secondary  minus">-</button>
                <button type="button" class="btn btn-secondary plus">+</button>
            </div>
          </div> 
        </li>
        <li >Deadline: ${obj.deadline} </li>
      </ul>
      <hr>
      <div class="card-body mybtn">
        <button type="button" class="btn btn-success ">Done</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
     </div>
  </div>  `

   
  
  if(obj.importance < 2){
    document.getElementById(`imp${pointer}`).style.backgroundColor = "green";
   }else if (obj.importance < 4){
    document.getElementById(`imp${pointer}`).style.backgroundColor = "yellow";

   }else if (obj.importance <= 5){
    document.getElementById(`imp${pointer}`).style.backgroundColor= "red";

   }

console.log(obj);
}


// Printing out tasks form array Ends
let test = [];

for(let i=0; i<tasks.length; i++){
    test.push(tasks[i].importance);
}
let sorted = test.sort();


let index 
let indexArray =[];

for(let obj of sorted){
    let searchTerm = obj;
    
    for(var i = 0, len = tasks.length; i < len; i++) {
      if (tasks[i].importance === searchTerm) {
        index = i;
        indexArray.push(index);
        
        
        }
        
       

    }
    
   
}


let sortbtn = document.getElementById("sortbtn");

sortbtn.addEventListener("click", function(){
    for(let obj of indexArray){
       let bool = true;

        document.getElementById(`col${obj}`).style.display = "none";
        out.innerHTML +=`
        <div class="col column-gap-1" id="col${obj}">
        <div class="card " style="width: 18rem;">
          <img src="images/Card_Image.jpg" class="card-img-top" alt="Oops">
          <div class="card-body">
            <h5 class="card-title">${tasks[obj].name} </h5>
            <p class="card-text">${tasks[obj].description} </p>
          </div>
          <hr>
          <ul>
          
            <li>
              <div class="priorlist">
                <p><img class="priorimg" src="images/danger.png" alt=""> Priority Level: <div class="imp" id="imp${obj}">${tasks[obj].importance} </div> </p>
                <div>
                    <button type="button" class="btn btn-secondary  minus">-</button>
                    <button type="button" class="btn btn-secondary plus">+</button>
                </div>
              </div> 
            </li>
            <li >Deadline: ${tasks[obj].deadline} </li>
          </ul>
          <hr>
          <div class="card-body mybtn">
            <button type="button" class="btn btn-success ">Done</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
         </div>
      </div>
        `
        console.log(tasks[obj]);
        if(tasks[obj].importance < 2){
            document.getElementById(`imp${obj}`).style.backgroundColor = "green";
           }else if (tasks[obj].importance < 4){
            document.getElementById(`imp${obj}`).style.backgroundColor = "yellow";
        
           }else if (tasks[obj].importance <= 5){
            document.getElementById(`imp${obj}`).style.backgroundColor= "red";
        
           }
        
        
        
    }
})


// Priority Level   Starts
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("minus");
let value= 0;


// Plus button
for(let index in Array.from(plus)){

    plus[index].addEventListener("click", function(){
        if(tasks[index].importance <5){
          value = tasks[index].importance++ ;
          document.getElementsByClassName("imp")[index].innerHTML= tasks[index].importance;
       
       let impor = value +1;

       if(impor < 2){
        document.getElementById(`imp${index}`).style.backgroundColor = "green";
       }else if (impor < 4){
        document.getElementById(`imp${index}`).style.backgroundColor = "yellow";

       }else if (impor <= 5){
        document.getElementById(`imp${index}`).style.backgroundColor= "red";

       }

    }
    })
}

// Minus button
for(let index in Array.from(plus)){
    minus[index].addEventListener("click", function(){
        if(tasks[index].importance >0){
           value =tasks[index].importance--;
          document.getElementsByClassName("imp")[index].innerHTML= tasks[index].importance;
        
          let impor = value - 1;

          if(impor < 2){
            document.getElementById(`imp${index}`).style.backgroundColor = "green";
           }else if (impor < 4){
            document.getElementById(`imp${index}`).style.backgroundColor = "yellow";
    
           }else if (impor <= 5){
            document.getElementById(`imp${index}`).style.backgroundColor = "red";
    
           }
        
        }

    })
   
    
}




// Priority Level   Ends












