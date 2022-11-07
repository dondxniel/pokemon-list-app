export default function toTitleCase(word: string) {
	if (typeof word === "string") {
		let dupWord: string | string[] = word.split("");
		dupWord[0] = dupWord[0].toUpperCase();
		dupWord = dupWord.join("");
		return dupWord;
	}
	return word;
}
