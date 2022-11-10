let myForm = document.getElementById("myform");
let userName = document.getElementById("userName");
let email = document.getElementById("userEmail");
let phoneNumber = document.getElementById("phoneNumber");
let myCity = document.getElementById("userCity");
let mymessage = document.getElementById("msg");
let myTable = document.getElementById("myTable").getElementsByTagName("tbody")[0];
// let myTable = document.getElementById("myTable");


myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();

})


function formValidation(){
    if(userName.value ==="" || email.value ==="" || phoneNumber.value ==="" || myCity.value ==="")
    {
        console.log("can not be blanked")
        mymessage.innerHTML = "Please give your all information";
    }
    else{
        mymessage.innerHTML = "";
        // acceptData();
        accecptMyCrud();
    }
}

let myCrud = [];

let accecptMyCrud = () =>{
    myCrud.push({
        username : userName.value,
        email : email.value,
        phone_number : phoneNumber.value,
        city : myCity.value
    });
    localStorage.setItem("mycrud", JSON.stringify(myCrud));
    // console.log(myCrud);
    createData();
}

function createData(){
    // const tblBody = document.createElement("tbody");
    // myTable.appendChild(tblBody)
    // myCrud.map((x,y)=>{
    //     return 
    // });
    // var row = 0;         myTable="";
    // var x = myTable.row.length;
    // while(--x){
    //     myTable.deleteData(x);
    // }
    myTable.innerHTML = "";
    myCrud.map((x,y) =>{
       return ( myTable.innerHTML+= `
       <tr id = ${y}>
        <td>${x.username}</td>
        <td>${x.email}</td>
        <td>${x.phone_number}</td>
        <td>${x.city}</td>
        <td><button onclick="editData(this)" style="display: block; padding: 10px 20px; border-radius: 5px; color: #fff; background-color: #000;">Edit</button></td>
        <td><button onclick="deleteData(this)" style="display: block; padding: 10px 15px; border-radius: 5px; color: #fff; background-color: #000;">Delete</button></td>
        </tr>
       `);
    });
    
    // for(i=0;i<myCrud.length;i++){ 
    //     // var row = 0; 
    //     var myRow = myTable.insertRow();
        
        
    //     var cell1 = myRow.insertCell();
    //     var cell2 = myRow.insertCell();
    //     var cell3 = myRow.insertCell();
    //     var cell4 = myRow.insertCell();
    //     var cell5 = myRow.insertCell();
    //     var cell6 = myRow.insertCell();
    //     // var rowindex = myRow.setAttribute("id",i);
    //     // console.log(rowindex)
    //     cell1.innerHTML = myCrud[i].username;
    //     cell2.innerHTML = myCrud[i].email;
    //     cell3.innerHTML = myCrud[i].phone_number;
    //     cell4.innerHTML = myCrud[i].city;
    //     cell5.innerHTML = `<button onclick="editData(this)" style="display: block; padding: 10px 20px; border-radius: 5px; color: #fff; background-color: #000;">Edit</button>`;
    //     cell6.innerHTML = `<button onclick="deleteData(this)" style="display: block; padding: 10px 15px; border-radius: 5px; color: #fff; background-color: #000;">Delete</button>`;
    //     // row++;
    // }
    // row++;
    resetForm();
}

function resetForm()
{
    userName.value = "";
    email.value = "";
    phoneNumber.value = "";
    myCity.value = "";
}

function editData(e){
    userName.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    email.value = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    phoneNumber.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    myCity.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
    deleteData(e);
}

function deleteData(e){
    e.parentElement.parentElement.remove();
    myCrud.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem("mycrud", JSON.stringify(myCrud));
}


(()=>{
    myCrud = JSON.parse(localStorage.getItem("mycrud"));
    createData();
    console.log(myCrud);
})();