function chaineReverse(mot) {

  var motretourne = "";

  for 
  	(var z = mot.length - 1; z >= 0; z--) 
  {

      motretourne += mot[z];
  }

  return motretourne
}
console.log(motretourneReverse('DM Tech'));
