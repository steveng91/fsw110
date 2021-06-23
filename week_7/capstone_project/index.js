var task =document.getElementById('task');
var description =document.getElementById('description');
var submit =document.getElementById('submit');
var submission =document.getElementById('submission');
var classTasks = [];

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(task.value && description.value){
        var pushTask ={
            taskName: task.value,
            taskDescription: description.value,
        };
        task.value = "";
        description.value = "";
        classTasks.push(pushTask);
        appendTaskToDom();
    }else{
        alert("Please enter task and task description");
    }
});

function appendTaskToDom(){
    submission.innerHTML="";

    for(let i=0; i < classTasks.length; i++){
        var taskDiv = document.createElement('div');
        taskDiv.setAttribute('class','primary');
        var div = document.createElement('div');
        div.setAttribute('class', 'secondary');
        var t = document.createElement('h3');
        t.textContent = "Task: " + classTasks[i].taskName;
        var d = document.createElement('h5');
        d.textContent = "task Description: " + classTasks[i].taskDescription;
        var btn = document.createElement('button');
        btn.textContent = "Task Complete"
        btn.setAttribute('class', 'complete');
        btn.setAttribute('data-value', [i]);
        var hr = document.createElement('hr')
        taskDiv.appendChild(div)
        div.appendChild(t)
        div.appendChild(d)
        div.appendChild(btn)

        submission.appendChild(div)
    }
}

document.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.matches('button') && e.target.getAttribute('id') !== 'submit'){
        var index = e.target.getAttribute('data-value');

        classTasks.splice(index, 1);
        appendTaskToDom();
    }
})