const light = document.getElementById("light-mode");
const night = document.getElementById("dark-mode");
const allButton = document.getElementsByName("button")
const navbar = document.getElementById("nvb");
const firstBox = document.getElementById("frstbox");
const secondBox = document.getElementById("secondbox");
const thirdBox = document.getElementById("thirdbox")
const lastBox = document.getElementById("listn");


night.addEventListener("click",function(){
    document.body.style.backgroundColor = 'black';
    navbar.style.backgroundColor = 'gray';
    firstBox.style.backgroundColor = 'rgb(223, 21, 21)';
    secondBox.style.backgroundColor = 'rgb(227, 227, 26)';
    thirdBox.style.backgroundColor = 'rgb(30, 172, 30)';
    lastBox.style.backgroundColor = 'rgb(20, 50, 200)'
});


light.addEventListener("click",function(){
    document.body.style.backgroundColor = 'white';
    navbar.style.backgroundColor = 'lightgreen';
    firstBox.style.backgroundColor = 'red';
    secondBox.style.backgroundColor = 'yellow';
    thirdBox.style.backgroundColor = 'green';
    lastBox.style.backgroundColor = 'blue';
});

// rgb(223, 21, 21)
// accesing elements
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const addBtn = document.getElementById("btn");

// counter for creating li id
counter = 0;

// adding event listener to addBtn
addBtn.addEventListener("click", function(){
    if(form.Task.value.length > 0){
        // creating elements
        const li = document.createElement("li");

        const task = document.createElement("span");
        task.textContent = form.Task.value;

        const editBtn = document.createElement("i")
        editBtn.classList = 'bx bxs-pencil';

        const deleteBtn = document.createElement("i");
        deleteBtn.classList = 'bx bxs-trash-alt';

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        li.id = `task-${counter}`;
        counter++;

        // appending elements
        li.appendChild(checkBox);
        li.appendChild(task);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li)


        form.Task.value = "";

        // creating functions----

        // delete function
        function deleteTask(id){
            const li = document.getElementById(id);
            ul.removeChild(li);
        }

        // edit function
        function editTask(id){
            const li = document.getElementById(id);
            const span = li.children[1];

            const save = document.createElement("i");
            save.classList = 'bx bxs-down-arrow-alt'

            const input = document.createElement("input");
            input.value = span.textContent;
            li.replaceChild(input, span);
            li.replaceChild(save, editBtn);

            function saveChanges() {
                span.textContent = input.value;
                li.replaceChild(span, input);
                li.replaceChild(editBtn, save);
            }

            save.addEventListener("click", function(){
                saveChanges();
            })
        }
        
        // check function
        function checked(id) {
            const li = document.getElementById(id);
            li.children[1].style.textDecoration = "line-through";
            li.children[1].style.color = "#aaa";
        }

        // add event listeners to buttons 
        deleteBtn.addEventListener("click", function(){
            deleteTask(li.id);
        })

        editBtn.addEventListener("click", function(){
            editTask(li.id);
        })

        checkBox.addEventListener("click", function(){
            checked(li.id);
        })
    }
})
