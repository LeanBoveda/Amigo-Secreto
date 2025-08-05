let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

function actualizarLista() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('¡Agrega al menos dos amigos!');
        return;
    }

    const copia = [...amigos];
    const resultado = [];

    amigos.forEach(amigo => {
        let indice;
        do {
            indice = Math.floor(Math.random() * copia.length);
        } while (copia[indice] === amigo && copia.length > 1);

        resultado.push(`${amigo} → ${copia[indice]}`);
        copia.splice(indice, 1);
    });

    document.getElementById('resultado').innerHTML = resultado.map(r => `<li>${r}</li>`).join('');
}
