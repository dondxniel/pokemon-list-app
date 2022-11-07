import { RefObject } from "react";

function Input({
	inputRef,
	placeholder = "",
}: {
	inputRef: RefObject<any>;
	placeholder?: string;
}) {
	return (
		<input
			className="w-full p-2 bg-black/40 rounded-lg"
			ref={inputRef}
			placeholder={placeholder}
		/>
	);
}

export default Input;
