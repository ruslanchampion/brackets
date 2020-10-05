module.exports = function check(str, bracketsConfig) {
  let regexp = /(\()(\))|(\[)(\])|(\{)(\})|(\|)(\|)|(1)(2)|(3)(4)|(5)(6)|(7)(7)|(8)(8)/;
  while (str.search(regexp)!=-1) {
    str = str.replace(regexp, '');
  }
  return (str=='') ? true : false;
}
