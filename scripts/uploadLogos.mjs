import { ConvexHttpClient } from "convex/browser";
import fs from "fs";
import path from "path";

const client = new ConvexHttpClient(process.env.VITE_CONVEX_URL);

async function uploadFile(filePath) {
  const content = fs.readFileSync(filePath);
  const type = filePath.endsWith(".png") ? "image/png" : "image/jpeg";
  
  const uploadUrl = await client.mutation("integrations:generateUploadUrl");

  const result = await fetch(uploadUrl, {
    method: "POST",
    headers: { "Content-Type": type },
    body: content,
  });
  
  const { storageId } = await result.json();
  return storageId;
}

async function main() {
  console.log("Fetching integrations...");
  const integrations = await client.query("integrations:get");
  
  const filesToUpload = [
    { slug: "swiggy", file: "public/swiggy.png" },
    { slug: "zomato", file: "public/zomato.png" },
    { slug: "ondc", file: "public/ondc.png" },
  ];

  for (const { slug, file } of filesToUpload) {
    const integration = integrations.find(it => it.slug === slug);
    if (!integration) {
      console.log(`Integration ${slug} not found in DB.`);
      continue;
    }
    
    if (fs.existsSync(file)) {
      console.log(`Uploading ${file}...`);
      const storageId = await uploadFile(file);
      console.log(`Uploaded ${file}, got storageId: ${storageId}`);
      
      console.log(`Updating ${slug} integration...`);
      await client.mutation("integrations:update", {
        id: integration._id,
        imageStorageId: storageId,
      });
      console.log(`Updated ${slug}.`);
    } else {
      console.log(`File ${file} does not exist.`);
    }
  }
  console.log("Done!");
}

main().catch(console.error);
