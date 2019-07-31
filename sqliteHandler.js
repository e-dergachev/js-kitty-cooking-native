import { SQLite } from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

function getCuisinePiece(cuisines) {
  const filtered = Object.entries(cuisines).filter(v => v[1] !== false).map(v => v[0]);
  let cuisinePiece = '';
  filtered.forEach((cuisine, i) => {
      cuisinePiece += 'cuisine = "' + cuisine + '"';
      if (i !== filtered.length - 1) {cuisinePiece += ' OR '}
    });
    cuisinePiece = '(' + cuisinePiece + ')';
  return 'SELECT * FROM dishes WHERE ' + cuisinePiece + ' ORDER BY RANDOM() LIMIT 1';
}

export function getDishByTags(setDish, cuisines, tags) {

}

export function getRandomDish(setDish, cuisines) {
  const db = SQLite.openDatabase('recipes.sqlite3');

  if (Object.values(cuisines).includes(false) && Object.values(cuisines).includes(true)) {
    const query = getCuisinePiece(cuisines);
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
}
