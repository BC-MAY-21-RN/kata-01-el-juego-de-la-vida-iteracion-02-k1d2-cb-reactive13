class Celula {
    constructor(life, x, y) {
        this.life = false;
        this.x = x;
        this.y = y;
    }
}

class Mundo {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.celula = [,];
    }

    inicio() {
        for (var i = 0; i < columns; i++){
            for (var j = 0; j < rows; j++){
                this.celula[i, j] = new Celula(false, i, j);
            }
        }
    }

    toString() {
        var output = "";

        for (var i = 0; i < columns; i++){
            for (var j = 0; j < rows; j++){
                if (this.celula[i, j].life == true)
                    output += '*'
                else
                    output += '.'
            }
            output += '\n'
        }
        return output;
    }
}
function rules() {
    
}

var columns = prompt("Numero de columnas");
var rows = prompt("Numero de filas");
var mundo = new Mundo(columns, rows);
mundo.inicio();

var n = prompt("Numero de celulas vivas");
for (var i = 0; i < n; i++){

    mundo.celula[Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)].life = true;
}

console.log(mundo.toString())