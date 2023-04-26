

const PRECISION = 10_000;

const exRate = {
  'USD':78, 
  'EUR':85.6, 
  'RUB':1, 
};                                                                      

const amountInput = document.getElementById('amount');                   
const amountOutput = document.getElementById('convertedAmount');        
const currencyFromSelect = document.getElementById('currencyFrom');      
const currencyToSelect = document.getElementById('currencyTo');           

  
function convertAmount() {          
  const amount = amountInput.value;                                
  const currencyFrom = currencyFromSelect.value;
  const currencyTo = currencyToSelect.value;

  if (currencyFrom === currencyTo){                                    
    amountOutput.value = amount;
    return;                                                    
  }
  
  if (currencyFrom != 'RUB') {                                          
    const conversion = amount * exRate[currencyFrom];                             
    amountOutput.value = Math.round((conversion / exRate[currencyTo]) * PRECISION) / PRECISION;           
    } else if (currencyTo != 'RUB') {                                         
    const conversion = amount / exRate[currencyTo];                            
    amountOutput.value = Math.round((conversion / exRate[currencyFrom]) * PRECISION) / PRECISION;   

    var serializable = function (formId) {
        var form = document.getElementById(formId);
    
    
        var result = {};
        var elements = Array.from(form.getElementsByTagName('*'));
        var data = elements.filter(function(element){
            return element.hasAttribute('serialize');
        }).map(function(element){
            if (!element.name) {
                throw new Error ('set name attribute to element! ' 
                + element.nodeName + (element.id.length ? ' (with id ' + element.id + ') ' : ' (with className ' + element.className + ')')
                );
            }
            return element.name  + ':' + element.value;
        }).forEach(function(element) {
            var key = element.trim().split(':')[0];
            var value = element.trim().split(':')[1];
            result[key] = value || null;
        });
    
        return JSON.stringify(result);
    }
    
  }
}