class Celula {
    constructor(life, x, y) {
        this.life = false;
        this.x = x;
        this.y = y;
    }
}

class Mundo {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.celula = [,];
    }

    inicio() {
        for (var i = 0; i < rows; i++){
            for (var j = 0; j < columns; j++){
                this.celula[i, j] = new Celula(false, i, j);
            }
        }
    }

    toString() {
        var output = "";

        for (var i = 0; i < rows; i++){
            for (var j = 0; j < columns; j++){
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

var rows = prompt("Numero de Filas");
var columns = prompt("Numero de Columnas");
var mundo = new Mundo(rows, columns);
mundo.inicio();

var n = prompt("Numero de celulas vivas");
for (var i = 0; i < n; i++){

    mundo.celula[Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)].life = true;
}

console.log(mundo.toString())