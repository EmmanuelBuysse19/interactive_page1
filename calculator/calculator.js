let selection = "rad";
     
const insert = (num) => {
    let text = document.form.textinput.value;
    document.form.textinput.value = text + num;
}

const clean = () => {
    document.form.textinput.value = "";
}
     
const calculate = () => {
    let text = document.form.textinput.value;
    document.form.textinput.value = eval(text);
}
     
const back = () => {
     let text = document.form.textinput.value;
     document.form.textinput.value = text.substring(0,text.length-1);
}
     
const calc_sin =() => {
     let text = document.form.textinput.value;
     if (selection == "rad"){
       document.form.textinput.value = Math.sin(text);
     } else if (selection == "deg"){
       document.form.textinput.value = Math.sin(text * (Math.PI / 180));
     }
   }
     
const calc_cos = () => {
   let text = document.form.textinput.value;
   if (selection == "rad"){
     document.form.textinput.value = Math.cos(text);
   } else if (selection == "deg"){
     document.form.textinput.value = Math.cos(text * (Math.PI / 180));
   }
 }
     
const calc_tan = () => {
   let text = document.form.textinput.value;
   if (selection == "rad"){
     document.form.textinput.value = Math.tan(text);
   } else if (selection == "deg"){
     document.form.textinput.value = Math.tan(text * (Math.PI / 180));
   }
 }
 
 const calc_sqrt = () => {
 let text = document.form.textinput.value;
 document.form.textinput.value = Math.sqrt(text);
 }
 
 const calc_percent = () => {
 let text = document.form.textinput.value;
 document.form.textinput.value = text/100;
 }
 
 const change_label_selection = () => {
   let label = document.getElementById("info");
   label.innerHTML = "<b>"+selection.toUpperCase()+"</b>";
 }
 
 let calc_deg = () => {
   let element = document.getElementById("deg");
   element.style = "border: solid red";
   let element2 = document.getElementById("rad");
   element2.style = "border solid";
   
   selection = "deg";
   change_label_selection()
 }
 
 const calc_rad = () => {
   let element2 = document.getElementById("rad");
   element2.style = "border: solid red";
   let element = document.getElementById("deg");
   element.style = "border: solid";
   
   selection = "rad";
   change_label_selection()
 }
 
 const calc_log = () => {
    let text = document.form.textinput.value;
    document.form.textinput.value = Math.log(text);
 }
 
 const calc_exp = () => {
    let text = document.form.textinput.value;
    document.form.textinput.value = Math.exp(text);
 }