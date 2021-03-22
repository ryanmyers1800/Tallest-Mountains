let html = ' ';

for ( let i = 0; i < mountains.length; i++ ) {
    let mount = mountains[i];
    html += `
    <h2>${mount.name}</h2>
    <h3>Mountain Range:${mount.Range}</h3>
    <h3>Elevation:${mount.Elevation}</h3>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);