const AddNoteScreen = require("./add-note.screen").default;

class EditNoteScreen {

    // ----- Elements -----
    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
    get moreIcon() {
        return $('~More');
    }
    get deleteIcon() {
        return $('//*[@text="Delete"]');
    }
    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }
    get trashCanItem() {
        return $('//*[@text="Trash Can"]');
    }

    // ----- Methods -----
    async skipTutorial() {
        await AddNoteScreen.skiptBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        await AddNoteScreen.noteHeading.addValue(noteHeading);
        await AddNoteScreen.noteBody.addValue(noteBody);
        await AddNoteScreen.saveNote();
    }
}

export default new EditNoteScreen();