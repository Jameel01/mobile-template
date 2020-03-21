// 产生8位数字、字母随机数
function randUtils(){
    let source = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let random = gPwd()
    return random;

    function gPwd(){
      let range = generatePassword(6, source);
      let lettval = generatePassword(1, letter);
      let numval = generatePassword(1, number);
      let pwd = lettval + numval + range;
      return pwd;
    };
    function generatePassword (length,resource){
      length = length || 32;
      let s = "";
      for(let i = 0;i < length; i++) {
        s += resource.charAt( Math.ceil(Math.random()*1000)%resource.length );
      }
      return s;
    };
}
export {
    randUtils
}