function changeContent(page) {
  var contentDiv = document.getElementById('content');
  switch (page) {
    case 'home':
      contentDiv.innerHTML = `
        <img src="logo.png" alt="Heavy Soul logo" id="main-logo">
        <h2>Welcome to Heavy Soul!</h2>
        <p>
          This is the home page of the heaviest music hub on the web.
        </p>
        <p>
          Use the menu above to navigate between sections.
        </p>
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
    case 'Followers':
      contentDiv.innerHTML = `
        <h2>From Our Followers</h2>
        <p>
         Ens encanta rebre missatges dels nostres seguidors! Aquí teniu algunes de les últimes paraules d'ànim que hem rebut:
        </p>
        <ul>
          <li>"Gràcies per mantenir el metal viu!" – Max</li>
          <li>"Me encanta aquesta web." – Elena</li>
          <li>"Rock on forever!" – The Steel Clan</li>
        </ul>
      `;
      break;

    default:
      contentDiv.innerHTML = '<h2>Page not found!</h2>';
  }
}
