describe("Android Elements Tests", () => {
    it("Find element by accessibility id", async () => {
        // by accessibility-id
        const appOption = await $("~App");

        // Act
        await appOption.click();

        // Assert
        const actionBar = await $("~Action Bar");
        await expect(actionBar).toBeExisting();
    });

    it("Find elements by class name", async () => {
        // by class
        const className = await $("android.widget.TextView");

        // Assert
        await expect(className).toHaveText("API Demos");
    });

    it("Find elements by Xpath", async () => {
        // xPath - (//className[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // by text
        // await $('//*[@text="Command two"]').click();
        await $('//android.widget.TextView[@text="Command two"]').click();

        // Assert
        const textAssertion = await $("//android.widget.TextView");
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it("Find elements by UIAutomator", async () => {
        // by TextContains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it("Find multiple elements", async () => {
        const expectedList = [
            "API Demos",
            "Access'ibility",
            "Accessibility",
            "Animation",
            "App",
            "Content",
            "Graphics",
            "Media",
            "NFC",
            "OS",
            "Preference",
            "Text",
            "Views",
        ];
        const actuaList = [];

        // find multiple elements by class
        const textList = await $$("android.widget.TextView");

        // loop through them
        for (const element of textList) {
            actuaList.push(await element.getText());
        }

        // assert list
        await expect(expectedList).toEqual(actuaList);
    });

    it("Input text", async () => {
        // Arrange
        const viewsOption = $("~Views"); // accessibility-id
        const autoComplete = $('//*[@text="Auto Complete"]'); // text
        const screenTop = $('//*[@content-desc="1. Screen Top"]'); // content-desc
        const inputCountry = $("android.widget.EditText"); // class

        // act
        await viewsOption.click();
        await autoComplete.click();
        await screenTop.click();
        await inputCountry.addValue("Brazil");

        // Assert
        await expect(inputCountry).toHaveText("Brazil");
    });
});
