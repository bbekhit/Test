 var name = "jen"
 var name = "Peter" // can declare variable with same name

 let name = "jen"
 let name = "Peter" // can't do this with let
 name = "min"  //valid

 const name = "jen"
 const name = "peter" // invalid with const
 name = "min"  // invalid with const

 if(true){
     var firstName = "jen"
 }
 console.log(firstName) // valid and it will print as var does't have a block scope it has func scope