import express from "./config/app.js";

const port = process.env.PORT || 3000;
express.listen(port, () => console.log(`Listening on port ${port} -> http://localhost:${port}`));