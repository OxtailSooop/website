import BevyLogo from "./assets/bevy_logo.svg";
import BunLogo from "./assets/bun_logo.svg";
import DockerLogo from "./assets/docker_logo.svg";
import LinuxLogo from "./assets/linux_logo.svg";
import NextJSLogo from "./assets/nextjs_logo.svg";
import NixOSLogo from "./assets/nixos_logo.svg";
import RustLogo from "./assets/rust_logo.svg";
import { Entry, Table } from "./table";

export function Technology() {
	return (
		<Table>
			<Entry
				image={NixOSLogo}
				title={"NixOS"}
				description={
					"I once daily drove NixOS on my main laptop and have gained a surface level understanding of reproducable software using flakes and how to deploy a system configuration to a machine using the tools it provides."
				}
			/>
			<Entry
				image={LinuxLogo}
				title={"Linux + Arch Linux"}
				description={
					"I daily drive a distribution of Linux called Arch Linux and this has helped me garner invaluable experience and a deep understanding of Linux due to it's barebones nature."
				}
			/>
			<Entry
				image={NextJSLogo}
				title={"NextJS + TailwindCSS"}
				description={
					"I have a baseline knowledge of how to develop using NextJS and although I am not (or consider myself) a frontend developer I still managed to create this site."
				}
			/>
			<Entry
				image={DockerLogo}
				title={"Docker"}
				description={
					"I understand how to build images and deploy a service consisting of many of these images using docker compose, I also understand how to manage and maintain a docker instance."
				}
			/>
			<Entry
				image={BunLogo}
				title={"Bun"}
				description={
					"I am always open to embracing new and emerging technologies and Bun has proved to be a valuable tool in my arsenal for Javascript/Typescript development and has earned it's spot in my list of favourite tools to use as a developer."
				}
			/>
			<Entry
				image={RustLogo}
				title={"Rust"}
				description={"Rust is my preferred low-level language."}
			/>
			<Entry
				image={BevyLogo}
				title={"Bevy"}
				description={
					"I have a decent understanding of a Game Engine known as Bevy which is a new and emerging Game Engine built using the latest features of Rust and it captured my eye during the beginning of my Rust journey."
				}
			/>
		</Table>
	);
}
