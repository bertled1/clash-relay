import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  const token = process.env.CLASH_API_TOKEN;
  const clanTag = "%239JRJCL8Q"; // Replace with your clan tag
  const url = `https://api.clashroyale.com/v1/clans/${clanTag}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Relay running on port 3000"));
