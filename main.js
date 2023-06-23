try {


let myForm = document.getElementById('myForm');
let ul = document.getElementById('items');

//eventListners
myForm.addEventListener('submit',onSubmit);


//input values
let itemName = document.getElementById('itemname');
let itemDesc = document.getElementById('desc');
let itemPrice = document.getElementById('price');
let itemQuant = document.getElementById('quant');



let myObj = {
    iname: itemName.value,
    idesc: itemDesc.value,
    iprice: itemPrice.value,
    iquant: itemQuant.value
}


//event function
async function onSubmit(e){
    e.preventDefault();
    
    myObj.iname = itemName.value;
    myObj.idesc = itemDesc.value;
    myObj.iprice = itemPrice.value;
    myObj.iquant = itemQuant.value;
    //console.log(myObj)

    //adding to crud
    let post = await axios.post('https://crudcrud.com/api/949b233e1265463aa5bd6eb7ee550fbe/dukaan', myObj)
    displayData(post.data);

    //clearing the form
    myForm.reset()
}

// function to display data from crud
async function displayData(obj){
    // console.log(obj)
    let li = document.createElement('li');

    // li.id = obj._id;
    // li.innerHTML = obj.iname + '-----' + obj.idesc + '-----' + obj.iprice + '-----' + obj.iquant + '-----';
    let itname = document.createElement('label')
    itname.innerHTML = obj.iname;

    let itdesc = document.createElement('label')
    itdesc.innerHTML = obj.idesc;


    let itprice = document.createElement('label')
    itprice.innerHTML = obj.iprice;



    let itquant =  document.createElement('label')
    itquant.id = obj._id;
    itquant.innerHTML = obj.iquant;

    li.appendChild(itname)
    li.appendChild(itdesc)
    li.appendChild(itprice)
    li.appendChild(itquant)


    let but1 = document.createElement('input');
    but1.type = 'button';
    but1.value = 'Buy1';
    but1.className = 'btn';
    but1.id = 'buy1';
    li.appendChild(but1);

    //buy 1 button function
    but1.onclick = async function() {
               const but1put = await axios.put(`https://crudcrud.com/api/949b233e1265463aa5bd6eb7ee550fbe/dukaan/${obj._id}`, {
                  iname: obj.iname,
                  idesc: obj.idesc,
                  iprice: obj.iprice,
                  iquant: obj.iquant-1
            })

            // location.reload();
            
            document.getElementById(obj._id).innerHTML -=1
            
            
              
    }

    let but2 = document.createElement('input');
    but2.type = 'button';
    but2.value = 'Buy2';
    but2.className = 'btn';
    but2.id = 'buy2';
    li.appendChild(but2);

    //buy2 onclick function
    but2.onclick = async function() {
        // console.log(`https://crudcrud.com/api/fd7cfaae0cbc4ac79bee165522bc2512/dukaan/${obj._id}`);
        let but2put = await axios.put(`https://crudcrud.com/api/949b233e1265463aa5bd6eb7ee550fbe/dukaan/${obj._id}`, {
            iname: obj.iname,
            idesc: obj.idesc,
            iprice: obj.iprice,
            iquant: obj.iquant-2
        })
            
        // location.reload();
        document.getElementById(obj._id).innerHTML -=2
        
    }
    let but3 = document.createElement('input');
    but3.type = 'button';
    but3.value = 'Buy3';
    but3.className = 'btn';
    but3.id = 'buy1';
    li.appendChild(but3);

    //buy3 onclick function
    but3.onclick = async  function() {
        let but3put = await axios.put(`https://crudcrud.com/api/949b233e1265463aa5bd6eb7ee550fbe/dukaan/${obj._id}`, {
            iname: obj.iname,
            idesc: obj.idesc,
            iprice: obj.iprice,
            iquant: obj.iquant-3
        })
        // location.reload();
        document.getElementById(obj._id).innerHTML -=3
       
        
    }
    ul.appendChild(li);
}


 window.addEventListener("DOMContentLoaded",async () => {
    const pageLoad = await axios.get("https://crudcrud.com/api/949b233e1265463aa5bd6eb7ee550fbe/dukaan")

    //console.log(pageLoad)

    for(var i=0; i<pageLoad.data.length; i++){
        displayData(pageLoad.data[i]);
    }
       
})
}


catch(error) {
    console.log(error)
}