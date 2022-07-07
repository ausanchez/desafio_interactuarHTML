class Tenistas {
    constructor (nombre, nacionalidad, ranking, grandSlams, triunfos, derrotas) {
        this.nombre = nombre
        this.nacionalidad = nacionalidad
        this.ranking = ranking
        this.grandSlams = grandSlams
        this.triunfos = triunfos
        this.derrotas = derrotas
    }
}


const tenistas = [new Tenistas("Agassi", "EEUU", 267, 2, 443, 22), new Tenistas("Songa", "Francia", 323, 4, 545, 123), new Tenistas("Coria", "Argentina", 577, 0, 34, 3), new Tenistas("Medvedev", "Rusia", 1, 1, 249, 109), new Tenistas("Nadal", "España", 4, 22, 1058, 202), new Tenistas("Federer", "Suiza", 97, 20, 1251, 275), new Tenistas("Schwartzman", "Argentina", 15, 0, 230, 180), new Tenistas("Kyrgios", "Australia", 40, 0, 184, 109), new Tenistas("Djokovich", "Serbia", 3, 20, 1005, 204)]


const jugadoresSeleccionados = []

let jugadorElegido = prompt("Ingrese el nombre del tenista que quiere invitar al torneo")

let jugadorEncontrado = tenistas.find (invitado => invitado.nombre === jugadorElegido)
if(jugadorEncontrado !=null) {
    jugadoresSeleccionados.push(jugadorEncontrado)
}

console.log(jugadoresSeleccionados)


//Interactuar con el DOM

const divPlayers = document.getElementById('divPlayers')

tenistas.forEach(tenista =>{
    divPlayers.innerHTML += `
        <div id="tenista${tenista.ranking}">
            <p>Nombre: ${tenista.nombre}</p>
            <p>Nacionalidad: ${tenista.nacionalidad}</p>
            <p class="estiloSlams">Grand Slams ganados: ${tenista.grandSlams}</p>
            <p>Triunfos: ${tenista.triunfos}</p>
            <p>Derrotas: ${tenista.derrotas}</p>
        </div>
    `
})


