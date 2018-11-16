import path from "path";
module.exports = app => {
    app.route("/")        
        .get((req, res) => {
            const env = app.get("environment");
            const ViewBag= {
                title: "Enviroweather",
                env
            }
            res.render("home", ViewBag);
        });

};
