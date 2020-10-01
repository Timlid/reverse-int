// ! REVERSE INT

module.exports = function reverse(n) {
    n += "";
    if (+n < 0) {
        return n.slice(1).split("").reverse().join("");
    } else {
        return n.split("").reverse().join("");
    }
};
