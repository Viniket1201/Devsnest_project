var book_seat = "0";
var remaining_seat = "36";
var booked = document.querySelector(".book");
var remaining = document.querySelector(".unbook");
remaining.innerHTML = remaining_seat;
booked.innerHTML = book_seat;


const main = document.querySelector(".main");
main.addEventListener("click",(e)=>{
    var cls = e.target.className;
   
    // alert(booked);

    
    if(cls == "unclick"){
        e.target.classList = "click";
        book_seat = parseInt(book_seat) + 1;
        remaining_seat = parseInt(remaining_seat) - 1;
        // remaining.innerHTML = remaining_seat;
        // booked.innerHTML = book_seat;
    }if(cls == "click"){
        e.target.classList = "unclick";
        book_seat = parseInt(book_seat) - 1;
        remaining_seat = parseInt(remaining_seat) + 1;

    } 
    remaining.innerHTML = remaining_seat;
    booked.innerHTML = book_seat;
   
});

