let height = undefined;

const checkUndefind = (checkVar) => checkVar ?? "Height is not defined";

let result = checkUndefind(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

