export function HeaderBar() {
	return (
		<header className="bg-gray-950 flex flex-row justify-center">
			<a href="/">
				<h1 className="p-4 font-bold">About Me</h1>
			</a>
			{
				// <a href="/blog">
				// 	<h1 className="p-4 font-bold">Blog</h1>
				// </a>
			}
		</header>
	);
}
