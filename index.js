const crypto = require("crypto");

const hash1 = crypto
  .createHmac("sha256", "salt")
  .update("I love cupcakes")
  .digest("hex");
console.log("hash1:", hash1);
// Prints: c0515815599605f4fb111b8eddc23e8fc3984cd2682710adea0ea7218125bac3

//* Symbol을 salt로 사용할 수 있는지 test. 사용 못함..
//* ERR_INVALID_ARG_TYPE 에러 발생
//* Symbol("salt").toString은 "Symbal("salt")"로 나옴.
const hash2 = crypto
  .createHmac("sha256", Symbol("salt").toString())
  .update("I love cupcakes")
  .digest("hex");
console.log("hash2:", hash2);
// Prints: 8938b34f151e9e035db1c96ef680dc75381a95ba1fc9e0f6be9103777554ee47

const hash3 = crypto
  .createHmac("sha256", `Symbol(salt)`)
  .update("I love cupcakes")
  .digest("hex");
console.log("hash3:", hash3);
// Prints: 8938b34f151e9e035db1c96ef680dc75381a95ba1fc9e0f6be9103777554ee47
