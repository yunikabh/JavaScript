const form = document.querySelector('form')

document.addEventListener("submit",function(e){
    e.preventDefault();
const height= parseInt(document.querySelector('#height').value)
const weight= parseInt(document.querySelector('#weight').value)
const result= document.querySelector('.results')
const weightresult =document.querySelector('.weightresult')

if( height === '' || height < 0 || isNaN(height)){
    result.innerHTML=`please give a valid height ${height}` ;
}
  else if( weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML=`please give a valid weight ${weight}`;
  }
    else{
    const bmi = (weight/((height * height)  /10000)).toFixed(2)
    //show the result
    result.innerHTML=`<span>${bmi}</span>`;
    
    console.log(result);
   
    //Checking the BMI category 
    
    if(bmi < 18.6){
            weightresult.innerHTML="<span>Under Weight</span>"
    
        }
    else if(bmi>= 18.6 && bmi<= 24.9){
            weightresult.innerHTML="<span>normal Weight</span>"
    }
            else if(bmi > 24.9){
        weightresult.innerHTML="<span>over Weight</span>"
    
    }
    }
})