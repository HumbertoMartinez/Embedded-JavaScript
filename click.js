//declare samecolor() here
function samecolor(){
  const doc = document;
  let color ="#009900";
  let section = doc.querySelectorAll("#samecolor div");
  for(let h=0;h<section.length;h++){
    section[h].style.backgroundColor=color;
  }
  section[0].stlyle.opacity= 0.4;
  section[1].stlyle.opacity= 0.2;
  section[2].stlyle.opacity= 0.1;
  section[3].stlyle.opacity= 0.3;
}
//declare diffcolor() here
function diffcolor(){
  const doc = document;
  let div = doc.querySelectorAll("#diffcolor div");
  //div.style.backgroundColor =
}