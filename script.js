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
        createData();
    }
}



function createData(){
    // const tblBody = document.createElement("tbody");
    // myTable.appendChild(tblBody)
    var row = 0; //I have to sort out this problem why it is not working outside the function
    var myRow = myTable.insertRow(row);

    var cell1 = myRow.insertCell(0);
    var cell2 = myRow.insertCell(1);
    var cell3 = myRow.insertCell(2);
    var cell4 = myRow.insertCell(3);
    var cell5 = myRow.insertCell(4);
    var cell6 = myRow.insertCell(5);


    cell1.innerHTML = userName.value;
    cell2.innerHTML = email.value;
    cell3.innerHTML = phoneNumber.value;
    cell4.innerHTML = myCity.value;
    cell5.innerHTML = `<button onclick="editData(this)" style="display: block; padding: 10px 20px; border-radius: 5px; color: #fff; background-color: #000;">Edit</button>`;
    cell6.innerHTML = `<button onclick="deleteData(this)" style="display: block; padding: 10px 15px; border-radius: 5px; color: #fff; background-color: #000;">Delete</button>`;
    row++;
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
}

function deleteData(e){
    e.parentElement.parentElement.remove();
}


