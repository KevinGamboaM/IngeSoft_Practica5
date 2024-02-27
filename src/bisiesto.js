function get_bisiesto(n) {
 if(n % 400 === 0){
     return "SI, es bisiesto";
 }else if(n % 100 === 0 && n % 400 != 0){
     return "No es bisiesto"
 }
}
  
  export default get_bisiesto;