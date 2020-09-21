const findKey = (obj, callBack) => {

  for (let elem in obj) {
    if (callBack(obj[elem])) {
      return elem;
    }
  }
};


module.exports = findKey;