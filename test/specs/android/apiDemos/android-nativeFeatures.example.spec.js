describe("Android native Feature Tests", () => {
	it.only("Access an Activity directly", async () => {
		//access actiivity
		await driver.startActivity(
			"io.appium.android.apis",
			"io.appium.android.apis.app.AlertDialogSamples"
		);

		// 3s pause to see
		await driver.pause(3000);

		// assert
		const alertDialogs = $('//*[@text="App/Alert Dialogs"]');
		await expect(alertDialogs).toExist();
	});

	it("Working with Dialog Boxes", async () => {
		const appOption = $("~App");
		const alertDialogs = $("~Alert Dialogs");
		const okCancelDialog = $("~OK Cancel dialog with a message");

		// access activity
		await appOption.click();
		await alertDialogs.click();
		await okCancelDialog.click();

		console.log("ALERT TEXT -->", await driver.getAlertText());

		await driver.dismissAlert(); // dismiss Alert
		await okCancelDialog.click();
		await driver.acceptAlert(); // accept Alert

		await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
	});

	it("Vertical scrolling", async () => {
		await $("~App").click();
		await $("~Activity").click();

		// scroll to the page end(not stable if element gets moved)
		// await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
		// await $('~Secure Surfaces').click();

		// scrollTextIntoView - more stable
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

		// assertion
		await expect($("~Secure Dialog")).toExist();
	});

	it("Horizontal Scrolling", async () => {
		await driver.startActivity(
			"io.appium.android.apis",
			"io.appium.android.apis.view.Gallery1"
		);

		// Horizontal scrolling
		await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()");
		await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()");

		await driver.pause(3000);
	});

	it.only("Example of date picker", async () => {
		// Context
		await driver.startActivity(
			"io.appium.android.apis",
			"io.appium.android.apis.view.DateWidgets1"
		);

		// Arrange
		const date = await $("~io.appium.android.apis:id/dateDisplay");
		const currentDate = date.getText();
		const changeDate = $("~change the date");
		const setDay = $('//android.view.View[@text="10"]');
		const setOk = $('//android.widget.Button[@text="OK"]');

		// Act
		await changeDate.click();
		await $("android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()");
		await setDay.click();
		await setOk.click();

		// Assert
		await expect(currentDate).not.toEqual(date);
	});
});
