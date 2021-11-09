//==================STRINGS================//
// 1
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
function last(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return str
    .split(" ")
    .sort((a, b) =>
      alphabet.indexOf(a[a.length - 1]) > alphabet.indexOf(b[b.length - 1])
        ? 1
        : -1
    );
}
// console.log(`ret1`, last("lastb adyc goooda boba a"));
// console.log(`ret2`, last("wesjw pesny xfhmy dlpvow"));
// console.log(`last("sjw esny fhmy vow")`, last("sjw esny fhmy vow"));
