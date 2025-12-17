import fs from "fs/promises";

async function getPeopleList() {
  try {
    const url = await fetch("https://spies-test-server.vercel.app/people");
    const res = await url.json();
    const data = JSON.stringify(res);

    await fs.writeFile("PEOPLE.json", data, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
    });
  } catch {
    console.error("error user not find");
  }
}


async function getCallRecords() {
  try {
    const url = await fetch(
      "https://spies-test-server.vercel.app/transcriptions"
    );
    const res = await url.json();
    const data = JSON.stringify(res);

    await fs.writeFile("TRANSCRIPTIONS.json", data, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
    });
  } catch {
    console.error("error user not find");
  }
}


