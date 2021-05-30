const app = require("express")();

require("./startup/config")(app);
require("./startup/db")();
require("./startup/router")(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.info(`listening on port ${port}...`));
