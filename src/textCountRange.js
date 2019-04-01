// 计算文字字数，汉字两个字符，英文1个字符
function textCountRange(str){
    let countf = str.replace(/[^\x00-\xff]/g, "oo").length / 2;
    return countf
}
module.exports = textCountRange