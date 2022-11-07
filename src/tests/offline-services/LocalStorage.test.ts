import LocalStorageService from "../../services/offline/LocalStorage.service";

test("check if local storage getter works as expected", () => {
	LocalStorageService.setter("x", "y");
	expect(LocalStorageService.getter("x")).toBe("y");
	expect(LocalStorageService.getter("z")).toBe(false);
});

test("checking if local storage setter works as expected", () => {
	expect(LocalStorageService.setter("key", undefined)).toBe(undefined);
});
