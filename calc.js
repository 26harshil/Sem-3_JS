function display(a) {
   const displayInput = document.getElementById("display");
   const currentValue = displayInput.value;

   if (a === "=") {
       try {
           const result = eval(currentValue);
           displayInput.value = result;
       } catch (error) {
           displayInput.value = "Error";
       }
   } else if (a === "C") {
       displayInput.value = "";
   }  else {
       displayInput.value += a;
   }
}