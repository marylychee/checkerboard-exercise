// Your JS goes here


function createDiv() {
  var board = document.createElement('div');

  document.body.append(board);

  board.className = "newDiv";

  //creates multiple divs within the board, and sets the width, height and floats left
  for (var i = 0; i <= 80; i++) {
    var innerDivs = document.createElement('div');
    Object.assign(innerDivs.style, {float: "left", width: "11.1%", paddingBottom: "11.1%" });

    //adds the colors red and black in alternate
    if (i % 2 === 0 ){
      Object.assign(innerDivs.style, {background: "red"});
    } else {
      Object.assign(innerDivs.style, {background: "black"});
    }

    // appends divs to the parent board
    board.appendChild(innerDivs);

  }
  return boardDiv;
}

createDiv();
