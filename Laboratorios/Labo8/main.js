let btn_submit = document.querySelector('#submit_btn');
let carnet_field = document.querySelector('#carnet_field');
let schedule_field = document.querySelector('#schedule_field');
let late_switch = document.querySelector('#late_switch');

let table_body = document.querySelector('#table_body');

let addStudent =(carnet, schedule, late)=>{
    let new_row = document.createElement('tr');
    new_row.classList.add("table-active");

    let datetime = new Date();

    new_row.innerHTML = `
        <td>${carnet}</td>
        <td>${schedule}</td>   
        <td>${datetime.toLocaleDateString()}</td>
        <td>${late}</td>
        <td><input class="btn btn-danger" type="button" value="Eliminar" onclick="removeStudent(this)"></td>
        <td><input class="form-control" type="text" name="carnetConfirmacion" id="carnet_confirmacion"></td>
    `

    table_body.appendChild(new_row);
};

let parseLateBool=(value)=>{
    if(value)
    {
        return "Llegó tarde"
    }
    else
    {
        return "A tiempo"
    }
}

let carnet_regex = new RegExp("^[0-9]{8}$")

btn_submit.addEventListener('click',()=>{
    let carnet = carnet_field.value
    let schedule = schedule_field.options[schedule_field.selectedIndex].text
    let late = parseLateBool(late_switch.cheked)


    if(carnet_regex.test(carnet)){
        addStudent(carnet,schedule,late)              
    }else{
        alert("Formato de carnet inválido");
    }
    
});

carnet_field.addEventListener('keyup',(event)=>{
    if(event.keyCode==13){
        btn_submit.click();
    }
})

let removeStudent=(t)=>{ 
    let carnet_confirmacion = document.querySelectorAll('#carnet_confirmacion');
    var td = t.parentNode;
    var tr = td.parentNode;

    let referencia = tr.getElementsByTagName("td");
    
    let contexto = referencia[0].innerText;
   

    for (let i = 0; i < carnet_confirmacion.length; i++) {
        console.log(carnet_confirmacion[i].value);
        if (carnet_confirmacion[i].value==contexto) {
            var table = tr.parentNode;
            table.removeChild(tr);
        }  
    }   
}