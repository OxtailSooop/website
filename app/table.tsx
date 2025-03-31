import Image from "next/image";

export function Table({ children }: { children: React.ReactNode }) {
	return <div className="grid grid-cols-2 gap-2">{children}</div>;
}

export function Entry({
	image,
	title,
	description,
	children,
	titleLink,
}: {
	image?: string;
	title: string;
	description: string;
	children?: React.ReactNode;
	titleLink?: string;
}) {
	return (
		<div className="rounded-md bg-gray-950 p-4 shadow-2xl flex flex-col md:flex-row items-center md:items-start">
			{ShouldRenderImage({ image, title })}
			<div className="flex flex-col">
				<a href={titleLink}>
					<h1 className="text-lg font-bold text-center md:text-left underline">
						{title}
					</h1>
				</a>
				<p className="text-center md:text-left text-sm">{description}</p>
				{children}
			</div>
		</div>
	);
}

function ShouldRenderImage({
	image,
	title,
}: { image?: string; title: string }) {
	if (image !== undefined) {
		return <Image src={image} alt={title} className="size-24 md:mr-4" />;
	}
	return;
}
