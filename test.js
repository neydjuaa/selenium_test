const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
  // Création d'un driver pour Firefox
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    // Ouvrir une page web
    await driver.get('https://www.example.com');

    // Attendre que le titre de la page soit affiché
    await driver.wait(until.titleIs('Example Domain'), 10000);

    // Trouver un élément de la page par son ID et afficher son texte
    const element = await driver.findElement(By.tagName('h1'));
    const text = await element.getText();
    console.log('Texte de l\'élément :', text);
  } finally {
    // Fermer le navigateur à la fin du test
    await driver.quit();
  }
}

example();

