import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Custom calendar API");
});

app.get("/calendar/1", (_, res) => {
  res.json([
    {
      id: 1,
      title: "Coffee with John",
      start: "2024-07-14",
      end: "2024-07-14",
    },
    {
      id: 2,
      title: "Ski trip",
      start: "2024-07-15",
      end: "2024-07-15",
    },
  ]);
});

app.get("/calendar/2", (_, res) => {
  res.json([
    {
      id: 3,
      title: "Coffee with John",
      start: "2024-08-04",
      end: "2024-08-04",
    },
    {
      id: 4,
      title: "Ski trip",
      start: "2024-08-04",
      end: "2024-08-06",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
