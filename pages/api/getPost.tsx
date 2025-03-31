import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
	title: string;
	date: string;
	content: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData | string>,
) {
	if (req.method !== "GET") {
		res.status(404).send("This is a GET API endpoint.");
		return;
	}

	const postId: number = Number(req.query.id);

	const sql = new Bun.SQL({
		url: new URL("postgres://db:5432/blog"),
		password: "postgres",
	});

	const post =
		await sql`SELECT * FROM posts WHERE id = ${postId} LIMIT 1`.catch((e) => {
			console.log(`SQL Failure:\n${e}`);
			res.status(404).send("failure");
		});

	res.status(200).json(post[0]);
}
