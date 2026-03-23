// Carrusel dels àlbums
document.getElementById('albums-prev')?.addEventListener('click', () => {
  // Carrusel de navegació
});

document.getElementById('albums-next')?.addEventListener('click', () => {
  // Carrusel de navegació
});

// Carrusel de les cançons
document.getElementById('songs-prev')?.addEventListener('click', () => {
  // Carrusel de navegació
});

document.getElementById('songs-next')?.addEventListener('click', () => {
  // Carrusel de navegació
});

function changeContent(page) {
  var contentDiv = document.getElementById('content');
  switch (page) {
    case 'home':
      contentDiv.innerHTML = `
        <h2>Benvingut a Heavy Soul!</h2>
        <p>Consulta les últimes notícies i articles del món de la música metal.</p>
        <p>Utilitza el menú superior per navegar entre seccions.</p>
      `;
      break;
    case 'news':
      contentDiv.innerHTML = `
        <h2>Últimes notícies</h2>
        <ul>
          <li>Nou àlbum de Metallica</li>
          <li>Summer Steel Festival anuncia les bandes de 2026</li>
          <li>ENtrevista exclusiva amb el guitarrista de Iron Maiden</li>
        </ul>
      `;
      break;
    case 'followers':
      contentDiv.innerHTML = `
        <h2>Dels Nostres Seguidors</h2>
        <p>
         Ens encanta rebre missatges dels nostres seguidors! Aquí teniu algunes de les últimes paraules d'ànim que hem rebut:
        </p>
        <ul>
          <li>"Gràcies per mantenir el metal viu!" – Max</li>
          <li>"M'encanta aquesta web." – Elena</li>
          <li>"Rock for ever!" – The Steel Clan</li>
        </ul>
      `;
      break;
    case 'contact':
      contentDiv.innerHTML = `
        <h2>Contacte</h2>
        <p>Vols posar-te en contacte amb nosaltres? Aquí et deixem les nostres dades de contacte:</p>
        <ul>
          <li><strong>Correu electrònic:</strong> info@heavysoul.com</li>
          <li><strong>Telèfon:</strong> +34 912 345 678</li>
          <li><strong>Adreça:</strong> Av. De l'Onze de setembre, Montornés, Espanya</li>
        </ul>
        <p>També ens pots trobar a les nostres xarxes socials:</p>
        <ul>
          <li><strong>Instagram:</strong> @heavysoulmusic</li>
          <li><strong>Facebook:</strong> Heavy Soul Official</li>
          <li><strong>Twitter:</strong> @heavysoul_es</li>
        </ul>
        <p>No dubtis a escriure'ns, ¡ens encanta escoltar els nostres fans!</p>
      `;
      break;

    default:
      contentDiv.innerHTML = '<h2>Pàgina no trobada!</h2>';
  }
}
