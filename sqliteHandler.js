import { SQLite } from "expo-sqlite";

function getCuisinePiece(cuisines) {
  const filtered = Object.entries(cuisines).filter(v => v[1] !== false).map(v => v[0]);
  let cuisinePiece = '';
  filtered.forEach((cuisine, i) => {
      cuisinePiece += 'cuisine = "' + cuisine + '"';
      if (i !== filtered.length - 1) {cuisinePiece += ' OR '}
    });
    cuisinePiece = '(' + cuisinePiece + ')';
  return cuisinePiece;
}

function getTagPiece(input) {
  const filtered = input.filter(el => el.length >= 3);
  let tagPiece = '';
  filtered.forEach((tag, i) => {
    tagPiece += 'tags like "%' + tag + '%"';
      if (i !== filtered.length - 1) {tagPiece += ' OR '} //currently it is set to look for any tag, not for their combination
    });
  tagPiece = '(' + tagPiece + ')';
  return tagPiece;
}

export function getDishByTags(setDishes, cuisines, tags) {
  const input = tags.split(' ');
  if (input.every(el => el.length < 3)) {
    setDishes([]);
    return; //if there were no tags longer than 3 symbols
  }
  const db = SQLite.openDatabase('recipes.sqlite3');
  
  let queryPiece;
  if (Object.values(cuisines).includes(false) && Object.values(cuisines).includes(true)) {
    const cuisinePiece = getCuisinePiece(cuisines);
    queryPiece = 'SELECT * FROM dishes WHERE ' + cuisinePiece + ' AND ';
  }
  else if (Object.values(cuisines).includes(true)) {
    queryPiece = 'SELECT * FROM dishes WHERE ';
  }
  else {
    setDishes([]);
    return; //if no cuisine was selected
  }
  let tagPiece = getTagPiece(input);
  let query = queryPiece + tagPiece;
  db.transaction(tx => {
    tx.executeSql(
      query,
      [],
      (_, { rows: { _array } }) => {
        let res = [];
        _array.forEach( el => res.push(
          '{"cuisine":' + '"' + el.cuisine + '", "dish":' + el.dish + ',"_id":' + '"' + el.id + '"}'
        )); //filtering out repeating results
        res = res.filter((v, i, a) => a.indexOf(v) === i).map(dish => {
          dish = JSON.parse(dish);
          return {cuisine: dish.cuisine, name: dish.dish.name, recipe: dish.dish.recipe, source: dish.dish.source, _id: dish._id};
        });
        setDishes(res);
      }
    );
  },
  error => console.log(error));
}

export function getRandomDish(setDish, cuisines) {
  const db = SQLite.openDatabase('recipes.sqlite3');

  if (Object.values(cuisines).includes(false) && Object.values(cuisines).includes(true)) {
    const cuisinePiece = getCuisinePiece(cuisines);
    const query = 'SELECT * FROM dishes WHERE ' + cuisinePiece + ' ORDER BY RANDOM() LIMIT 1';
    db.transaction(tx => {
      tx.executeSql(
        query,
        [],
        (_, { rows: { _array } }) => setDish({
          cuisine: _array[0].cuisine,
          name: JSON.parse(_array[0].dish).name,
          recipe: JSON.parse(_array[0].dish).recipe,
          source: JSON.parse(_array[0].dish).source,
          _id: _array[0].id
        })
      );
    },
    error => console.log(error));
  }
  else if (Object.values(cuisines).includes(true)) {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM dishes ORDER BY RANDOM() LIMIT 1',
        [],
        (_, { rows: { _array } }) => setDish({
          cuisine: _array[0].cuisine,
          name: JSON.parse(_array[0].dish).name,
          recipe: JSON.parse(_array[0].dish).recipe,
          source: JSON.parse(_array[0].dish).source,
          _id: _array[0].id
        })
      );
    },
    error => console.log(error));
  }
  //db._db.close(); //on deleting/upgrading the recipes db like adding new recipes and stuff, uncomment this line, call the function and then comment the line again, see https://github.com/expo/expo/issues/639
}
