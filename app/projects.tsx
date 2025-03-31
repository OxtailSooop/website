import { Entry, Table } from "./table";

// language colour
function Project({
	image,
	name,
	description,
	language,
	link,
}: {
	image?: string;
	name: string;
	description: string;
	language: string;
	link: string;
}) {
	return (
		<Entry
			image={image}
			title={name}
			description={description}
			titleLink={link}
		>
			<div className="mt-2 text-gray-500">
				<p className="text-sm inline text-orange-500 mr-3">
					{"🗣️ "} {language}
				</p>
				{/* use the full number here not truncated */}
				<h1 className="text-sm inline text-yellow-400">
					{"⭐ 69,420"} {/* stars */}
				</h1>
			</div>
		</Entry>
	);
}

// TODO: pull information from github using the pinned repos on profile (or most starred? most variety in complexity and/or language?)
// LoC?
// TODO: add a logo to each too.
// Include stack used in projects?
export function Projects() {
	return (
		<Table>
			<Project
				name={"Lorem Ipsum"}
				description={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non imperdiet lorem, at faucibus nisl. Cras malesuada, felis fusce."
				}
				language={"Rust"}
				link={"#"}
			/>
			<Project
				name={"Lorem Ipsum"}
				description={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non imperdiet lorem, at faucibus nisl. Cras malesuada, felis fusce."
				}
				language={"Rust"}
				link={"#"}
			/>
		</Table>
	);
}
