import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Custom calendar API");
});

// Dynamic route to handle calendar requests
app.get("/calendar/:id", (req, res) => {
  const calendarId = req.params.id;

  let response;

  switch (calendarId) {
    case "1":
      response = [
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
      ];
      break;
    case "2":
      response = [
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
      ];
      break;
    default:
      response = { error: "Calendar not found" };
  }

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
