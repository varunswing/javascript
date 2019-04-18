document.querySelector('.btn').addEventListener('click', onClick);

function onClick(e){
   // console.log('clicked');
    
    let val;

    val = e;

    // //Event target elements
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp;

    //Coordinate event relative to the window
    val = e.clientY;
    val = e.clientX;

    //Coordinate event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
    
}