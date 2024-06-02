class Discos {
    constructor() {
        this.albums = [];
        this.codigos = new Set();
    }

    codigoUnico(codigo) {
        return !this.codigos.has(codigo);
    }

    cargarPista() {
        let nombreDisco, autor, codigo, cargarOtraPista;

        // Capturar detalles del álbum una sola vez
        do {
            nombreDisco = prompt("Nombre del disco");
            if (!nombreDisco) {
                alert("El nombre del disco no puede estar vacío.");
            }
        } while (!nombreDisco);

        do {
            autor = prompt("Autor/banda del disco");
            if (!autor) {
                alert("El autor/banda del disco no puede estar vacío.");
            }
        } while (!autor);

        do {
            codigo = parseInt(prompt("Código del disco (único, entre 1 y 999)"));
            if (isNaN(codigo) || codigo < 1 || codigo > 999) {
                alert("El código debe ser un número entre 1 y 999.");
            } else if (!this.codigoUnico(codigo)) {
                alert("El código ya ha sido utilizado. Por favor, ingrese un código diferente.");
            }
        } while (isNaN(codigo) || codigo < 1 || codigo > 999 || !this.codigoUnico(codigo));

        this.codigos.add(codigo);

        // Crear un nuevo álbum
        let album = new Album(nombreDisco, autor, [], codigo);

        do {
            let nombrePista, duracion;

            do {
                nombrePista = prompt("Nombre de la pista");
                if (!nombrePista) {
                    alert("El nombre de la pista no puede estar vacío.");
                }
            } while (!nombrePista);

            do {
                duracion = parseInt(prompt("Duración de la pista en segundos (entre 0 y 7200)"));
                if (isNaN(duracion) || duracion < 0 || duracion > 7200) {
                    alert("La duración debe ser un número entre 0 y 7200 segundos.");
                }
            } while (isNaN(duracion) || duracion < 0 || duracion > 7200);

            let pista = new Pista(nombrePista, duracion);
            album.pistas.push(pista);

            cargarOtraPista = prompt("¿Desea cargar otra pista para este álbum? (s/n)").toLowerCase();
        } while (cargarOtraPista === 's');

        this.albums.push(album);
    }

    mostrarPistas(etiqueta) {
        let container = document.querySelector(etiqueta);
        container.innerHTML = "";
        this.albums.forEach((album) => {
            container.innerHTML += album.toHTML();
        });
    }
}