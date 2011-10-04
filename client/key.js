// Add some keybindings.
//
// Bindings from: pvilchez@github
//
// Shift+N   : Creates a new card and clears the text for you.
// Shift+=   : Creates a new column and clears the title for you.
// Shift+-   : Deletes the newest column.
// Shift+A   : Changes the theme to 'bigcards'
// Shift+Z   : Changes the theme to 'smallcards'
//
// Bindings from: borinsky@github
//
// Shift+Y	 : Creates a new YELLOW card and clears the text for you. 
// Shift+G	 : Creates a new GREEN card and clears the text for you.
// Shift+B	 : Creates a new BLUE and clears the text for you.
// Shift+W	 : Creates a new WHITE card and clears the text for you.
//
// todo: Shift+C     : Create a new CODER_CARD - CODERCARD is a Card for a CODER 
//				       so you can see who is doing the Job
//				
// 
$(document).ready(function () {
    $(document.documentElement).keyup(function (event) {
        var direction = null;

        //Shift+N: Creates a new card and clears the text for you.
        if (event.keyCode == '78' && event.shiftKey){
            var rotation = Math.random() * 10 - 5; //add a bit of random rotation (+/- 10deg)
            uniqueID = Math.round(Math.random()*99999999);
            createCard('card' + uniqueID, '', 58, 460, rotation, randomCardColour());

            //If using the keyboard shortcut, automatically focus on the textbox
            $("#card" + uniqueID + ' .content').dblclick();
        }

        //Shift+Y: Creates a new YELLOW card and clears the text for you.
        if (event.keyCode == '89' && event.shiftKey){
            var rotation = Math.random() * 10 - 5; //add a bit of random rotation (+/- 10deg)
            uniqueID = Math.round(Math.random()*99999999);
            createCard('card' + uniqueID, '', 58, 460, rotation, 'yellow' );

            //If using the keyboard shortcut, automatically focus on the textbox
            $("#card" + uniqueID + ' .content').dblclick();
        }

        //Shift+G: Creates a new GREEN card and clears the text for you.
        if (event.keyCode == '71' && event.shiftKey){
            var rotation = Math.random() * 10 - 5; //add a bit of random rotation (+/- 10deg)
            uniqueID = Math.round(Math.random()*99999999);
            createCard('card' + uniqueID, '', 58, 460, rotation, 'green' );

            //If using the keyboard shortcut, automatically focus on the textbox
            $("#card" + uniqueID + ' .content').dblclick();
        }

        //Shift+B: Creates a new BLUE card and clears the text for you.
        if (event.keyCode == '66' && event.shiftKey){
            var rotation = Math.random() * 10 - 5; //add a bit of random rotation (+/- 10deg)
            uniqueID = Math.round(Math.random()*99999999);
            createCard('card' + uniqueID, '', 58, 460, rotation, 'blue' );

            //If using the keyboard shortcut, automatically focus on the textbox
            $("#card" + uniqueID + ' .content').dblclick();
        }


        //Shift+W: Creates a new WHITE card and clears the text for you.
        if (event.keyCode == '87' && event.shiftKey){
            var rotation = Math.random() * 10 - 5; //add a bit of random rotation (+/- 10deg)
            uniqueID = Math.round(Math.random()*99999999);
            createCard('card' + uniqueID, '', 58, 460, rotation, 'white' );

            //If using the keyboard shortcut, automatically focus on the textbox
            $("#card" + uniqueID + ' .content').dblclick();
        }


        //Shift+=: Creates a new column and clears the title for you.
        //Works in Chrome/Safari; Doesn't work in FF4 (all osx)
        else if (event.keyCode == 187 && event.shiftKey) {
            createColumn('New');

            //If using the keyboard shortcut, automatically focus on the textbox
            $('.col:last h2').dblclick();
            return false;
        }

        //Shift+-: Deletes the newest column.
        //Works in Chrome/Safari; Doesn't work in FF4 (all osx)
        else if (event.keyCode == 189 && event.shiftKey) {
            deleteColumn();
            return false;
        }

        //Shift+A: Changes the theme to 'bigcards'
        else if (event.keyCode == 65 && event.shiftKey) {
            changeThemeTo('bigcards');
            sendAction('changeTheme', "bigcards");
        }

        //Shift+Z: Changes the theme to 'smallcards'
        else if (event.keyCode == 90 && event.shiftKey) {
            changeThemeTo('smallcards');
            sendAction('changeTheme', "smallcards");
        }

        //Tab: Saves the title/text in the active field.
        //Produces a bit of flicker at the previous/next element.
        //I _really_ wanted Shift+ESC for this...
        else if (event.keyCode == 9){
            $("*:focus").blur();
        }
    });
});
