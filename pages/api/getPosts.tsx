import type { NextApiRequest, NextApiResponse } from "next";

const pageSize = 25;

type ResponseData = [
	{
		title: string;
		date: string;
	},
];

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData | string>,
) {
	if (req.method !== "GET") {
		res.status(404).send("This is a GET API endpoint.");
		return;
	}

	const page: number = Number(req.query.page);

	const sql = new Bun.SQL({
		url: new URL("postgres://db:5432/blog"),
		password: "postgres",
	});

	const max = page * pageSize + 1;

	// TODO: add description and ensure the id is from latest to oldest
	const posts =
		await sql`SELECT BOTTOM ${pageSize} * FROM (SELECT * FROM ( SELECT id, title, date FROM posts ORDER BY id DESC ) res LIMIT ${max}) res2`.catch(
			(e) => {
				console.log(`SQL Failure:\n${e}`);
				res.status(404).send("failure");
			},
		);

	res.status(200).json(posts);
}
