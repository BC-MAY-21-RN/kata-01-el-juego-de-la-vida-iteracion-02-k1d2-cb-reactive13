class Celula {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = false;
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
                this.celula[i, j] = new Celula(i, j);
            }
        }
    }

    setCelulaViva(x, y) {
        //console.log(x + " " + y)
        this.celula[x, y].life = true;
    }

    ciclo() {
        for (var i = 0; i < rows; i++){
            for (var j = 0; j < columns; j++){
                this.rules(i, j);
            }
        } 
    }

    rules(x, y) {
        var vecinos = 0;

        if (this.celula[x - 1, y].life == true)
            vecinos++;
        if (this.celula[x + 1, y].life == true)
            vecinos++;
        if (this.celula[x , y - 1].life == true)
            vecinos++;
        if (this.celula[x , y + 1].life == true)
            vecinos++;
        if (this.celula[x-1 , y - 1].life == true)
            vecinos++;
        if (this.celula[x-1 , y + 1].life == true)
            vecinos++;
        if (this.celula[x+1 , y - 1].life == true)
            vecinos++;
        if (this.celula[x+1 , y + 1].life == true)
            vecinos++;
        
        // <2 == muere
        // >3 == muere
        // 2y3 == nada
        // 3 == revive

        if (vecinos < 2 || vecinos > 3 )
            this.celula[x, y].life = false
        if(mundo.celula[x, y].life == false && vecinos == 3)
            this.celula[x, y].life = true
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

var rows = prompt("Numero de Filas");
var columns = prompt("Numero de Columnas");
var mundo = new Mundo(rows, columns);
mundo.inicio();

var n = prompt("Numero de celulas vivas");

var ciclos = prompt("Numero de ciclos");


for (var i = 0; i < n; i++)
    mundo.setCelulaViva(Math.floor(Math.random() * columns), Math.floor(Math.random() * rows));

console.log(mundo.toString())

for (var i = 1; i <= ciclos; i++){
    mundo.ciclo()
    console.log(mundo.toString())
}
