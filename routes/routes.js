var appRouter = function (app) {

    app.get("/", function (req, res) {
        console.log(req.query);
        console.log(req.body);
        res.send({ status: "ok" });
    });

    app.post("/", function (req, res) {
        console.log(req.body);
        res.send("post");
    });

    app.post("/account", function (req, res) {
        if (!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({ "status": "error", "message": "missing a parameter" });
        } else {
            return res.send(req.body);
        }
    });

}

module.exports = appRouter;


