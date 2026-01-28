import Image from "next/image";
import BlueSkyIcon from "./assets/bluesky_logo.svg";
import GithubIcon from "./assets/github_logo.svg";

export function Header() {
	return (
		<header className="flex flex-col sm:flex-row bg-gray-950 rounded-md p-4 shadow-2xl items-center">
			<img
				alt=""
				className="shadow-2xl rounded-full size-64 mr-0 sm:mr-4 mb-4 md:mb-0"
				src="https://avatars.githubusercontent.com/u/85770544?v=4"
			/>
			<div className="flex flex-col text-center sm:text-left">
				<div className="grow mb-2">
					<h1 className="text-4xl font-bold">OxtailSooop</h1>
					<p>
						I am a Software Developer who is open to developing other skills in
						the pursuit of knowledge.
						<br />I am currently studying Engineering and Computer Science for
						my GCSEs in England.
					</p>
				</div>
				<div className="flex gap-4 justify-center sm:justify-start">
					<Social
						image={GithubIcon}
						link={"https://github.com/OxtailSooop"}
						dict={"Github"}
					/>
				</div>
			</div>
		</header>
	);
}

function Social({
	image,
	classAdd,
	link,
	dict,
}: { image: string; classAdd?: string; link: string; dict: string }) {
	return (
		<a href={link}>
			<Image
				priority
				className={`shadow-2xl size-8 ${classAdd}`}
				src={image}
				alt={dict}
			/>
		</a>
	);
}
