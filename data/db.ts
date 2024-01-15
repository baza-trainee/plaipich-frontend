import fs from "fs/promises";

export const getMissionData = async () => {
  try {
    const data = await fs.readFile("data/mission.json");
    if (data) {
      return JSON.parse(data.toString());
    }
  } catch (error) {
    console.log(error);
  }
};
