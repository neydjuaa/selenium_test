//const { defaultInstance } = require("chromedriver");
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.bing.com");
    try {
        // Initialize WebDriver session
        driver = await new Builder().forBrowser("chrome").build();

        await driver.findElement(By.id("sb_form_q")).sendKeys("Hello, World!", Key.RETURN);
        // Navigate to google

        console.log("Opened Google.");

        // Wait for some time before quitting
        await driver.sleep(10000);
        // Find the search input element
        const searchInput = await driver.findElement(By.id("sb_form_q"));

        // Quit the WebDriver session
        await driver.quit();
        // Enter text into the search input
        await searchInput.sendKeys("Hello, World!", Key.RETURN);

        console.log("Text entered into the search input.");

        // Wait for some time before quitting
        await driver.sleep(10000);
    } catch (error) {
        console.error("An error occured:", error);
    } finally {
        // Close the WebDriver session
        if (driver) {
            await driver.quit();
            console.log("WebDriver session closed.");
        }
    }
}

test_case();