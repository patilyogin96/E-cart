// // let  final=  document.getElementById('final-price');
// var ship =document.getElementById('ship');
// // var final_sum = document.getElementById('final-sum')
// // console.log(final_sum.innerHTML)

// // final_sum.innerHTML = parseInt(final.innerHTML) + parseInt(ship.innerHTML) ;

// // // console.log(parseInt(final.innerHTML) )
// // // console.log(ship.innerHTML)
// // console.log(final_sum.innerHTML)

// var  final=  document.getElementById('final-price');
// var final_sum = document.getElementById('final-sum')

// function increaseNumber(text, itemprice){
//    var itemvalue = document.getElementById(text);
//    var itemprice = document.getElementById(itemprice);
// //    console.log(itemvalue.value)
// //    console.log(itemprice)
//    if(itemvalue.value>=5)
//    {
//        itemvalue.value=5;
//        alert("Cannot add more that 5 item")
//    }
//    else
//    {
//        itemvalue.value=parseInt(itemvalue.value)+1;
//        itemprice.innerHTML=parseInt(itemprice.innerHTML)+1000;
//        final.innerHTML=parseInt(final.innerHTML)+1000;

//    }

//    final_sum.innerHTML = parseInt(final.innerHTML)  + parseInt(ship.innerHTML) ;

// }

// const decreaseNumber=(text,itemprice) =>{
//     var itemval = document.getElementById(text);
//     var itemprice =document.getElementById(itemprice)
//     // console.log(itemval.value)
//     if(itemval.value<=0)
//     {
//         itemval.value=0;
//     }
//     else{
//         itemval.value=parseInt(itemval.value)-1;
//         itemprice.innerHTML=parseInt(itemprice.innerHTML)-1000;
//         final.innerHTML=parseInt(final.innerHTML)-1000;
//     }

//     console.log(itemprice.innerHTML)
//     final_sum.innerHTML = parseInt(final.innerHTML)  + parseInt(ship.innerHTML) ;

//     // final_sum.innerHTML = parseInt(final.innerHTML)  ;

// }

// const discountTwenty = () =>{
//     let cop = document.getElementById('dis');
//     console.log(cop.value);

//     if(cop.value == "YOGIN20")
//     {

//         final_sum.innerHTML = parseInt( final_sum.innerHTML - ((20/100)*(final_sum.innerHTML)));
//         document.getElementById("mybtn").disabled = true;
//         document.getElementById("dis").disabled = true;

//     }
//     else{
//         document.getElementById('for-invalid').innerText="Coupon Invalid!!";
//     }
// }

// revision of the code

var final = document.getElementById('final-price');
var ship = document.getElementById('ship');
var sum =document.getElementById('final-sum')

const increaseNumber = (quant, iprice) => {
  let quantity = document.getElementById(quant);
  let itemprice = document.getElementById(iprice);
  console.log(quantity.value);
  console.log(parseInt(itemprice.innerHTML));

  if (quantity.value >= 5) {
    alert("More than 5 items not allowed");
  } else {
    quantity.value++;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + parseInt(1000);
    final.innerHTML = parseInt(final.innerHTML)+1000;
    sum.innerHTML = parseInt(final.innerHTML)  + parseInt(ship.innerHTML) ;
    
  }
  
};

const decreaseNumber = (quant, iprice) => {
  let quantity = document.getElementById(quant);
  let itemprice = document.getElementById(iprice);
  console.log(quantity.value);
  console.log(itemprice.innerHTML);

  if (quantity.value <= 0) {
    quantity.value = 0;
    alert("Minimum one quanity required");
  } else {
    quantity.value--;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 1000;
    final.innerHTML= parseInt(final.innerHTML)-1000;
    // sum.innerHTML = final.innerHTML +ship.innerHTML;
    sum.innerHTML = parseInt(final.innerHTML)  + parseInt(ship.innerHTML) ;
  }
 
};
