var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlr');
var res = document.getElementById('res');

var player = "x";
var stat = {
    'x': 0,
    'o': 0,
    'd': 0
}

var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for (var i = 1; i <= 9; i++) {
	area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (var i = 0; i < cell.length; i++) {
	cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {
	var data = [];

	if (!this.innerHTML) {
		res.innerHTML = "";
		this.innerHTML = player;
	} else {return}

    for (var i = 0; i < cell.length; i++) {
    	if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
    	stat[player] += 1;
    	res.innerHTML = "Win - " + player;
    	restart();
    } else {
    	var draw = true;
    	for (var i = 0; i < cell.length; i++) {
    		if (cell[i].innerHTML == '') {
    			draw = false;
    		}
    	}
    	if (draw) {
    		stat.d += 1;
    		res.innerHTML = "Draw";
    		restart();
    	}
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i = 0; i < winIndex.length; i++) {
        var win = true;

        for(var j in winIndex[i]) {

            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart() {
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('stat-x').innerHTML = stat.x;
    document.getElementById('stat-o').innerHTML = stat.o;
    document.getElementById('stat-d').innerHTML = stat.d;
}