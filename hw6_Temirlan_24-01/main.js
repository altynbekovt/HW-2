
function reverseStrings() {
   
    const input = document.getElementById("input").value;
    const strings = input.split(".");
    const output = document.getElementById("output");
 
    output.innerHTML = "";
    
    const reversedStrings = strings.reverse();
 
    reversedStrings.forEach(function(string) {
      const li = document.createElement("li");
      li.textContent = string.split("").reverse().join("");
      output.appendChild(li);
    });
  }