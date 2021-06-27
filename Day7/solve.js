//---------------------------Task 1------------------------------------------
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  for(var key in student){
    console.log(key)
  };


  //-------------------------Task 2------------------------------------------
  var student = {
    name : "David Rayy", sclass : "VI", rollno : 12 };
    console.log(student);
    delete student.rollno;
    console.log(student);

    
    //--------------------------Task 3-----------------------------------------
    var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
    var a = [];
    for(var i in student){
  
    a.push(i);
  
    };
    console.log(a.length);


    //--------------------------Task 4------------------------------------
    var library = [ { 
        author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
        { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

        library.forEach((value) => {
        console.log(value.author);
        console.log(value.title);
        console.log(value.readingStatus);
        });


    //-------------------------------Task 5--------------------------------
    const volCylender = (h,r)=>{
        let vol=Math.PI*h*r*2
        return vol
      }
      let h=Number(prompt("height:?"));
      let r=Number(prompt("radius:?"));
      console.log(volCylender(h,r).toFixed(4));


      //-----------------------------Task 6----------------------------------
      var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

        // library.sort((a,b)=>a.libraryID.localeCompare(b.libraryID))
        library.sort((a,b)=>b.libraryID-a.libraryID)
        console.log(library);
      