function display(val){
 let ans  = document.getElementById("txt");
 ans.value += val;
}
function ans(){
     let ans = document.getElementById("txt");
    ans.value = eval(ans.value);
}
function rst(){
    let ans = document.getElementById("txt");
    ans.value="";
}