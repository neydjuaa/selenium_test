const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
 

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();



  await driver.get("https://www.inami.fgov.be/fr");
  try {
    // Initialize the WebDriver session
   // driver = await new Builder().forBrowser("chrome").build();

  await driver.findElement(By.name("q")).sendKeys("Hello, World!", Key.RETURN);
    // Navigate to Google

    console.log("Opened Google.");

  // Wait for some time before quitting
  await driver.sleep(10000);
    // Find the search input element
    const searchInput = await driver.findElement(By.name("q"));

  // Quit the WebDriver session
  await driver.quit();
    // Enter text into the search input
    await searchInput.sendKeys("Hello, World!", Key.RETURN);

    console.log("Text entered into the search input.");

    // Wait for some time before quitting
    await driver.sleep(10000);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the WebDriver session
    if (driver) {
      await driver.quit();
      console.log("WebDriver session closed.");
    }
  }
}

test_case();