function addNewWeField() {
   // console.log("hello");
   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows",3);
   newNode.setAttribute("placeholder",'Enter here');

   let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton"); 
 

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField() {
    // console.log("hello");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
 
    let aqOb = document.getElementById("aq");
     let aqAddButtonOb = document.getElementById("aqAddButton"); 
  
 
     aqOb.insertBefore(newNode,aqAddButtonOb);
 }
 function addNewHBField() {
    // console.log("hello");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hobbyField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder",'Enter here');
 
    let hbOb = document.getElementById("hb");
     let HobbyAddButtonOb = document.getElementById("HobbyAddButton"); 
  
 
     hbOb.insertBefore(newNode,HobbyAddButtonOb);
 }
//console.log("hello");
//generating cv
function generateCV(){
    let namefield = document.getElementById("namefield").value;

    let namet1 = document.getElementById("namet1");
    namet1.innerHTML = namefield;
    document.getElementById("namet2").innerHTML = namefield;
    document.getElementById("emailt").innerHTML = document.getElementById("email").value;
    document.getElementById("addresst").innerHTML = document.getElementById("address").value;
    document.getElementById("contactt").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("l1t").innerHTML = document.getElementById("linked in").value;  
    document.getElementById("l2t").innerHTML = document.getElementById("Github").value;  
    document.getElementById("l3t").innerHTML = document.getElementById("other").value;  
    document.getElementById("objectivet").innerHTML = document.getElementById("objectivefield").value;  
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for(let e of wes)
    {
        str=str +"<li>"+ e.value;
    }
    document.getElementById("weT").innerHTML = str;  


    let aqs = document.getElementsByClassName("aqField");
    let ptr = "";
    for(let e of aqs)
    {
        ptr=ptr +"<li>"+ e.value;
    }
    document.getElementById("aqT").innerHTML = ptr;  


    let hbs = document.getElementsByClassName("hobbyField");
    let htr = "";
    for(let e of hbs)
    {
        htr=htr +"<li>"+ e.value;
    }
    document.getElementById("hbT").innerHTML = htr; 



    document.getElementById("cv-form").style.display="none";
   // document.getElementById("cv-template").style.display="block";

    //for img dp/logo.....
    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set img to template
    reader.onloadend = function(){
    document.getElementById("imgTemplate").src= reader.result;

    }
}  
function Printcv()
{
    window.print();
}
   

