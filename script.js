function changeContent(page) {
  var contentDiv = document.getElementById('content');
  switch (page) {
    case 'home':
      contentDiv.innerHTML = `
        <img src="heavy.png" alt="Heavy Soul">
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
        <h2>Latest News</h2>
        <ul>
          <li>New album drop from The Dark Riders</li>
          <li>Summer Steel Festival announces 2026 lineup</li>
          <li>Exclusive interview with vocalist Raven Black</li>
        </ul>
      `;
      break;
    case 'followers':
      contentDiv.innerHTML = `
        <h2>From Our Followers</h2>
        <p>
          We love hearing from you! Here are some messages and photos sent in by our fans.
        </p>
        <ul>
          <li>"Thanks for keeping the scene alive!" – Max</li>
          <li>"Your site is pure fire." – Elena</li>
          <li>"Rock on forever!" – The Steel Clan</li>
        </ul>
      `;
      break;

    default:
      contentDiv.innerHTML = '<h2>Page not found!</h2>';
  }
}
