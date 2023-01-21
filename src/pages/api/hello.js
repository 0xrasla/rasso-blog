// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require("fs");
const grayMatter = require("gray-matter");

export default function handler(req, res) {
  const blogsFolder = "src\\pages\\blogs";

  const blogs = fs.readdirSync(blogsFolder);

  const blogsData = blogs.map((blog) => {
    return {
      blog: grayMatter(fs.readFileSync(`${blogsFolder}\\${blog}`, "utf8")),
    };
  });

  res.status(200).json(blogsData);
}
