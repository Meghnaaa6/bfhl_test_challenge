const express = require("express");
const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();

app.use(express.json());
app.use("/bfhl", bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
