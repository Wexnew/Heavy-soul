function changeContent(page) {
  var contentDiv = document.getElementById('content');
  switch (page) {
    case 'home':
      contentDiv.innerHTML = `
        <img src=
"https://agora.xtec.cat/iesvv/wp-content/uploads/usu1112/2025/02/40-anys-vinyes-velles-marro.png">
        <h2>
          Benvingut a la pàgina principal!
        </h2>
        <p>
          Aquesta és la pàgina principal.
        </p>
        <p>
          Explora les diferent seccions fent servir
          el menu.
        </p>
      `;
      break;
    case 'about':
      contentDiv.innerHTML = `
        <h2>Sobre </h2>
        <p>
          Està es la pàgina sobre la matèria. Apren
          més coses en un altre lloc.
        </p>
        <p>
          Ens agrada motivar-te a aprendre pel teu
          compte.
        </p>
      `;
      break;
    case 'contact':
      contentDiv.innerHTML =
        `<h2>Contacte</h2>
        <p>
          Escriu-nos si tens dubtes!
        </p>
        <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"
            placeholder="Your Name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"
            placeholder="Your Email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message"
              placeholder="Your Message"
              rows="4" required>
          </textarea>
        <button type="submit">Send Message</button>
        </form>`;
      break;


    default:
      contentDiv.innerHTML = '<h2>Page not found!</h2>';
  }
}
