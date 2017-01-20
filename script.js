// Your JS goes here


function createDiv() {
  var board = document.createElement('div');

  document.body.append(board);

  board.className = "newDiv";

  //creates multiple divs within the board, and sets the width, height and floats left
  for (var i = 0; i <= 80; i++) {
    var innerDivs = document.createElement('div');
    Object.assign(innerDivs.style, {float: "left", width: "11.1%", paddingBottom: "11.1%" });

    //adds the colors random
    Object.assign(innerDivs.style, {background: '#'+Math.random().toString(16).substr(-6) });

    // appends divs to the parent board
    board.appendChild(innerDivs);

  }
  return boardDiv;
}

createDiv();
