//1- || &&
alert( null || 2 || undefined ) // || convert values to boolean then returns first true value
alert( null || 2 || undefined )
alert( null || 0 || undefined )
alert( alert(1) || 2 || alert(3) )
alert( 1 && null && 2 );
alert( alert(1) && alert(2) )
alert( null || 2 && 3 || 4 )
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert( name ); // selects "John" – the first truthy value

//2-