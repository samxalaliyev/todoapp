const button = document.querySelector("#button");


button.addEventListener("click", ()=> {
    const input = document.querySelector("#add-task").value;
    
    if(input.trim() != ""){

        document.querySelector("#tasks").innerHTML += `<div id="task-items">
        <span>${input} </span>
        <button id="delete-btn">x</button>
        </div>`;
        document.querySelector("#add-task").value = "";

        const taskDelete = document.querySelectorAll("#delete-btn");
        for(let i=0; i<taskDelete.length; i++){
            taskDelete[i].onclick = function() {
                taskDelete[i].parentNode.remove();
            }
        }


    }else{
        alert("Mətn daxil edin")
    }

    
})