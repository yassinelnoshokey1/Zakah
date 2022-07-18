
    let currency = document.querySelector(".num");
    let zresult=document.querySelector(".res-zakah");
    function get_Data(){
        if (currency.value !=""){
            let result = currency.value * 0.025;
            zresult.innerHTML="قيمة الزكاه = " + result ;
        }
    }
