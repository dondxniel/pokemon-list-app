import { Link } from "react-router-dom";

function NavLink({ link, label }: { link: string; label: string }) {
	return (
		<Link to={link}>
			<div className="px-9 py-1 bg-black dark:bg-white rounded-full text-white dark:text-black md:text-base text-xs text-center">
				{label}
			</div>
		</Link>
	);
}

export default NavLink;
