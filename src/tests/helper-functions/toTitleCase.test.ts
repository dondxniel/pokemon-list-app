import toTitleCase from "../../helpers/toTitleCase";

test("check if function converts properly to title case.", () => {
	const result = toTitleCase("john doe");
	expect(!!result[0].match(/^[A-Z]*$/)).toBe(true);
});
