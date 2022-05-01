import { NFTStorage, File } from "nft.storage";
import fs from "fs";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE5MGYxQUZhOTZiMGY5MWNDODlEZDg0MjYyODQwOTRlM2RhMjdiQTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MTM3OTEzNzY3MCwibmFtZSI6IkVSQzcyMSBUZXN0In0.rua1-ibzryeWTKO_JfwlPu-RBxCZ7rZggw9BUqPY1Kk";
const client = new NFTStorage({ token: apiKey });

const metadata = await client.store({
  name: "likelion",
  description: "likelion logo",
  image: new File(
    [fs.readFileSync("./likelion_Logo.png")],
    "likelion_Logo.png",
    {
      type: "image/png",
    }
  ),
  attributes: [
    { trait_type: "skin", value: "flash" },
    {
      trait_type: "face",
      value: "frightened",
    },
  ],
});

console.log(metadata.url);
