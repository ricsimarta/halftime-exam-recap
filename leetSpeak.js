function leetSpeak(text) {
  const upperCaseText = text.toUpperCase();
  let result = upperCaseText
    .replaceAll("O", "0")
    .replaceAll("I", "1")
    .replaceAll("L", "1")
    .replaceAll("Z", "2")
    .replaceAll("E", "3")
    .replaceAll("A", "4")
    .replaceAll("S", "5")
    .replaceAll("G", "6")
    .replaceAll("T", "7")
    .replaceAll("B", "8");

  return result;
}

module.exports = leetSpeak