export default class LocalStorageService {
	static getArray(key: string) {
		if (key) {
			let item = localStorage.getItem(key)?.trim();
			if (item) return item?.split(",");
		}
		return false;
	}
	static getter(key: string) {
		if (key) {
			let item = localStorage.getItem(key)?.trim();
			if (item) return JSON.parse(item);
		}
		return false;
	}
	static setter(key: string, value: any) {
		value = JSON.stringify(value);
		if (key && value) localStorage.setItem(key, value);
	}
}
