import EditNoteScreen from "../../../screenObjects/android/edit-note.screen";

describe('Delete Note', () => {
    before("Create a note", async () => {
        // Setup
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV shows", "Supernatural\nBreakingBad\nGotham");
        await driver.back();
    });

    it('Delete a note & check the note in trash can', async () => {
        // Arrange
        const note = await EditNoteScreen.firstNote.getText();

        // Act
        await EditNoteScreen.firstNote.click();
        await EditNoteScreen.moreIcon.click();
        await EditNoteScreen.deleteIcon.click();
        await driver.acceptAlert();
        await EditNoteScreen.navIcon.click();
        await EditNoteScreen.trashCanItem.click();

        // Assert
        const trashCanItem = await EditNoteScreen.firstNote;
        await expect(trashCanItem).toHaveText(note);
    });
})
