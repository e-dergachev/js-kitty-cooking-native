An interactive cookbook app, an attempt to rewrite my JS Kitty Cooking web app from React to React Native, it uses sqlite as its database. 

The database itself and the entries that are used to populate it aren't included into this repository. To use populateDB.js script the entries should follow the following pattern:

    [{
        name: "Soft Boiled Eggs", 
        tags: "soft boiled eggs ",
        recipe: "Cover the eggs with cold water in a saucepan, place over the fire, and when the water comes to the boiling point the eggs are perfectly cooked; remove at once and serve.",
        source: "The Golden Age Cook Book, by Henrietta Latham Dwight, 1898",
        cuisine: "General"
    }, ...]

The "tags" key-value pair is used to designate the tags to look for the requested dishes, "cuisine" is used to designate the cuisine category of the entry, the rest is used to format the output.

The app was created with Create React Native App, it's a managed Expo project, so it follows the usual commands - 'npm start' to run it in the development mode, 'npm eject' to eject from the managed workflow and the usual expo build commands.

Below are some app screenshots:

The default appearance:

![Default Appearance](/screenshots/default_appearance.png)

The appearance with folded search bar:

![Folded Searchbar Appearance](/screenshots/folded_searchbar_appearance.png)

Looking for a dish by tags:

![Looking For A Dish By Tags](/screenshots/looking_for_a_dish_by_tags.png)

Selecting cuisines:

![Cuisine Selection](/screenshots/cuisine_selection.png)
