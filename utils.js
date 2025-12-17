import fs from "fs/promises";

export async function searchPeopleByName(name) {
  let data;
  try {
    data = await fs.readFile("PEOPLE.json", "utf8");
    const jsonData = JSON.parse(data);

    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].name == name) {
        return jsonData[i];
      }
    }
  } catch {
    console.error("the file not load");
  }
}

export async function searchPeopleByAge(age) {
  let data;
  try {
    data = await fs.readFile("PEOPLE.json", "utf8");
    const jsonData = JSON.parse(data);

    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].age == age) {
        return jsonData[i];
      }
    }
  } catch {
    console.error("the file not load");
  }
}

export async function dangerousPeople() {
  let data;
  try {
    data = await fs.readFile("TRANSCRIPTIONS.json", "utf8");
    const jsonData = JSON.parse(data);
    let count = 0;

    for (let i = 0; i < jsonData.length; i++) {
      const current = jsonData[i];
      for (let index = 0; index < current.content.length; index++) {
        if (
          current.content.includes("death") ||
          current.content.includes("knife") ||
          current.content.includes("bomb") ||
          current.content.includes("atteck")
        ) {
          current.content.slice(index);
          count += 1;
        }
      }
    }
  } catch {}
}
//     jsonData[i].content.slice(index);
//   }
//   if (jsonData[i].content.indexOf("knife")) {
//     let index2 = jsonData[i].content.indexOf("knife");
//     count += 1;
//     jsonData[i].content.splice(index2);
//   }
//   if (jsonData[i].content.includes("bomb")) {
//     let index3 = jsonData[i].content.indexOf("bomb");
//     count += 1;
//     jsonData[i].content.splice(index3);
//   }
//   if (jsonData[i].content.includes("death")) {
//     let index4 = jsonData[i].content.indexOf("attack");
//     count += 1;
//     jsonData[i].content.splice(index4);
//     }
//     console.log(`danger level: ${count}`);
//     count = 0

// if (jsonData[i].content.includes("death")) {

//     count += 1;
//   }
//   if (jsonData[i].content.includes("knife")) {
//     count += 1;
//   }
//   if (jsonData[i].content.includes("bomb")) {
//     count += 1;
//   }
//   if (jsonData[i].content.includes("attack")) {
//     count += 1;
//   }
//   console.log(`danger level: ${count}`);
//     count = 0;
//     const age = jsonData[i].age
//     const content =

console.log(await dangerousPeople());
