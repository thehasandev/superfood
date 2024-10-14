export function cropTextToWords(text: string, word = 20) {
  const words = text.split(" ");

  if (words.length > word) {
    return words.slice(0, word).join(" ") + "...";
  }

  return text;
}
