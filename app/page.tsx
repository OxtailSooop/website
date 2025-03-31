import { Header } from "./header";
import { Projects } from "./projects";
import { Technology } from "./technology";

export default function App() {
	return (
		<main className="lg:w-3/4 2xl:w-1/2 mx-auto p-2 pt-4 pb-4">
			<div className="mb-4">
				<h1 className="bg-gray-950 rounded-md p-2 mb-2 shadow-2xl">
					{"$ whoami"}
				</h1>
				<Header />
			</div>

			<div className="mb-4">
				<h1 className="bg-gray-950 rounded-md p-2 mb-2 shadow-2xl">
					{"$ ls Projects/"}
				</h1>
				<Projects />
			</div>

			<div>
				<h1 className="bg-gray-950 rounded-md p-2 mb-2 shadow-2xl">
					{"$ ls Experience/"}
				</h1>
				<Technology />
			</div>
		</main>
	);
}
