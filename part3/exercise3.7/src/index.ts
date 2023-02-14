import express from "express";

const app = express();

app.get("*", (req, res) => {
	res.send({
		msg: "hey",
		reqCode: Math.round(Math.random()*1000),
	});

	console.log(req.ip, req.url);
});

app.listen(8080, () => {
	console.log("listening on http://localhost:8080");
});
