import { SQLite } from "expo-sqlite";
import * as FileSystem from 'expo-file-system';

export function getDishByTags(tags, cuisines) {

}

export function getRandomDish(setDish, cuisines) {
    const db = SQLite.openDatabase('recipes.sqlite3');
    db.transaction(tx => {
        tx.executeSql(
          `SELECT * FROM dishes ORDER BY RANDOM() LIMIT 1`,
          [],
          (_, { rows: { _array } }) => setDish({
            cuisine: _array[0].cuisine,
            name: JSON.parse(_array[0].dish).name,
            recipe:JSON.parse(_array[0].dish).recipe,
            source: JSON.parse(_array[0].dish).source,
            _id: _array[0].id
          })
        );
      },
      error => console.log(error));
}
