import AddNoteScreen from "../../../screenObjects/android/add-note.screen";

describe("Add Notes", () => {
    before("Skip tutorial", async () => {
        // Setup
        await AddNoteScreen.skiptBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    });

    it("Check added notes", async () => {
        // Arrange
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();

        // Act
        await AddNoteScreen.noteHeading.addValue("Fav Anime List");
        await AddNoteScreen.noteBody.addValue("Naruto\nAOT\nDemonSlayer");
        await AddNoteScreen.saveNote();

        // Assert
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nAOT\nDemonSlayer");
    });
});
