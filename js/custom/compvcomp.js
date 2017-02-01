var board3,
    game = new Chess();

var makeRandomMove = function() {
    var possibleMoves = game.moves();

    // exit if the game is over
    if (game.game_over() === true ||
        game.in_draw() === true ||
        possibleMoves.length === 0) return;

    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    board3.position(game.fen());

    window.setTimeout(makeRandomMove, 500);
};

board3 = ChessBoard('board3', 'start');

window.setTimeout(makeRandomMove, 500);