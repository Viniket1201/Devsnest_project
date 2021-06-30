// task 1
function is_array(y){
    return Array.isArray(y);
}
console.log("w3school")
console.log(is_array("w3school"));
console.log(is_array([1,2,3,4]))
// task 2
function array_clone(y){
  let ans=[]
  for(let i=0;i<y.length;i++){
    ans.push(y[i]);
  }
  return ans;
}
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));

// task 3
function first(y,n=0){
  if(n<0){
    return [];
  }
  if(n===0){
    return y[0];
  }
  else{
    return y.slice(0,n);
  }

}
console.log(first([7,9,0,-2]));
console.log(first([],3));console.log(first([7,9,0,-2],3));console.log(first([7,9,0,-2],6));console.log(first([7,9,0,-2],-3));

//  task 4
 myColor = ["Red", "Green", "White", "Black"];
 let m = myColor.join(",");
 m.toString();
 console.log(m);
 
//  task 5
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

 arr1.sort();
 var count=1;
 var newcount;
 var precount=1;
 var ans;
 for(i=0;i<arr1.length;i++){
   if(arr1[i]==arr1[i+1]){
     count++;

   }else{
     newcount=count;
     count=1;
     if(newcount>precount){
       ans=arr1[i];
       precount=newcount;
      
     }

   }
 }
 console.log(ans)