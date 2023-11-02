const container = document.createElement('div');
container.setAttribute('id', 'container');

for (i = 0; i < 16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}