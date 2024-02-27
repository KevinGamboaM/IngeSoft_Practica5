function get_bisiesto(n) {
 if(n % 400 === 0){
     return "SI, es bisiesto";
 }else{
     return "No, es bisiesto"
 }
}
  
  export default get_bisiesto;