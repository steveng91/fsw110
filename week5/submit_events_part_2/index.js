const form = document.myForm
 form.addEventListener('submit',(event)=>{
     event.reset()
 })
function displayAlert() {
    var fname = form.fname.value; 
    var lname = form.lname.value;
    var age = form.age.value;
    var question1 = form.decision.value;
    var question2 = []
    for (let i = 0; i < form.owned.length; i++){
        if(form.owned[i].checked){
            question2.push(form.owned[i].value)
        }
    }
    var question3 = form.sat.value;

    alert('First Name: ' + fname + '\n Last Name: ' + lname + '\n Age:' + age + "\n past owner: " + question1 + "\n type owned: " + question2  + "\n experience: "+ question3);
    document.getElementByName('myForm');
}