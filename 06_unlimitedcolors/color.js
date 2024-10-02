//generate a random color

let intervalid;

const randomColor = function(){
    const hexx= "012345789ABCDEF"
    let color='#'

    for(let i=0 ;i<6 ;i++){
     color += hexx[ parseInt(Math.random() * 16)]
    }
    return color;
};

document.querySelector('#start').addEventListener('click',function(e){
    //  intervalid = setInterval(changeBcolor,1000);

    //better codes
    if(!intervalid){
        intervalid = setInterval(changeBcolor,1000);

    }
    function changeBcolor (){
        document.body.style.backgroundColor =randomColor();
    }
    
})

document.querySelector('#stop').addEventListener('click',function(){

    clearInterval(intervalid);
    intervalid =null; //clearing the intervalid for cleaner code.
})