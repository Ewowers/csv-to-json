import csvToJson from "convert-csv-to-json";
let path = "./s.csv"; //пусть к файлу
const parse = (path) => csvToJson.getJsonFromCsv(path); // возвращает json
console.log(parse(path)); //итог
