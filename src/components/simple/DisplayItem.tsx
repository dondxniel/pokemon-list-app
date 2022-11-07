function DisplayItem({
	item,
	label,
}: {
	item: string | string[];
	label: string;
}) {
	if (!Array.isArray(item))
		return (
			<div className="my-3">
				<div className="border-b pl-5">{item}</div>
				<div className="text-xs text-gray-400">{label}</div>
			</div>
		);
	return (
		<div className="my-3">
			<div className="border-b pl-5">
				{item.map((item, i, arr) => {
					let append = i === arr.length - 1 ? "." : ", ";
					return item + append;
				})}
			</div>
			<div className="text-xs text-gray-400">{label}</div>
		</div>
	);
}

export default DisplayItem;
