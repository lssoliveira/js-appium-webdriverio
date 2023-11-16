describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        // Arrange
        const appOption = await $('~App');
        
        // Act
        await appOption.click();

        // Assert
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('FInd element by class name', async () => {
        // Arrange & Act
        const className = await $('android.widget.TextView');

        // Assert
        await expect(className).toHaveText("API Demos")
    });

    it('FInd elements by Xpath', async () => {
        // xPath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        // byResourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // byText
        await $('//android.widget.TextView[@text="Command two"]').click();

        // Assert
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });
});