import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
  .use(staticPlugin({
    assets: "public",
    prefix: "/"
  }))
  .listen(3000);

console.log("🦊 Anime Guess App running at http://localhost:3000");
