import type { NextApiRequest, NextApiResponse } from "next";

// type ResponseData = {
//   id: number,
//   title: string,
//   date: string,
//   content: string
// }

export type Post = {
	id?: number;
	title: string;
	date: string;
	content: string;
	media: string[]; // base64 or id
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>,
) {
	if (req.method !== "POST") {
		res
			.status(404)
			.send("Failure: This API endpoint only supports POST requests");
		return;
	}

	if (
		typeof req.body.title !== "string" ||
		typeof req.body.date !== "string" ||
		typeof req.body.content !== "string" ||
		typeof req.body.media !== "object"
	) {
		res.status(404).send("Failure: Incorrect types or missing information");
	}

	const sql = new Bun.SQL({
		url: new URL("postgres://db:5432/blog"),
		password: "postgres",
	});

	const post: Post = {
		title: req.body.title,
		date: req.body.date,
		content: req.body.content,
		media: [],
	};

	// TODO: delete all images already put in on failure.
	for (let i = 0; i < req.body.media.length; i++) {
		const media: string = req.body.media[i];
		// TODO: Check if valid base64
		// if (!/^[a-z0-9+/=]+$/i.test(media)) {
		//   sql.close();
		//   res.status(404).send("Failure: Media must be base64 encoded.");
		// }
		const mediaOut =
			await sql`INSERT INTO media ${sql({ media: media })} RETURNING id`.catch(
				(e) => {
					console.log(`SQL Failure:\n${e}`);
					sql.close();
					res.status(404).send("Failure: idk");
				},
			);
		post.media.push(mediaOut);
	}

	if (post.media.length === 0) {
		post.media = null as unknown as string[];
	}

	const out = await sql`INSERT INTO posts ${sql(post)} RETURNING id`.catch(
		(e) => {
			console.log(`SQL Failure:\n${e}`);
			sql.close();
			res.status(404).send("Failure: idk");
		},
	);

	sql.close();
	res.status(200).send(out[0].id);
}
