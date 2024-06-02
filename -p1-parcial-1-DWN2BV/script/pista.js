class Album {
  constructor(nombre, autor, pistas, codigo) {
      this.nombre = nombre;
      this.autor = autor;
      this.pistas = pistas;
      this.codigo = codigo;
  }

  toHTML() {
      let pistasHTML = this.pistas.map(pista => pista.toHTML()).join('');
      return `<div class="card" style="width: 18rem; margin: 10px;">
                <img src="img/image.png" class="card-img-top w-25 mx-auto d-block pt-2" alt="disco-vinilo">
                <div class="card-body">
                  <h5 class="card-title">${this.nombre}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${this.autor}</h6>
                  <p class="card-text">Código: ${this.codigo}</p>
                  ${pistasHTML}
                </div>
              </div>`;
  }
}

class Pista {
  constructor(nombre, duracion) {
      this.nombre = nombre;
      this.duracion = duracion;
  }

  toHTML() {
      let minutos = Math.floor(this.duracion / 60);
      let segundos = this.duracion % 60;
      let duracionFormatted = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
      let highlight = this.duracion > 180 ? 'style="color: red;"' : '';
      return `<p class="card-text" ${highlight}>Pista: ${this.nombre}, Duración: ${duracionFormatted}</p>`;
  }
}