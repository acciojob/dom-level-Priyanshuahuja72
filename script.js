//your JS code here. If required.
let ularray = document.getElementsByTagName("li");
console.log(ularray);
function findEle(ularray)
{
  for(let i = 0 ; i < ularray.length ; i++)
  {
   if (ularray[i].id == "level") {
      alert(`The level of the element is: ${i}`);
      break;
   }
  }
}
findEle(ularray);