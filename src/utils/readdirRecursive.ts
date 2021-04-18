import fs from "fs";
import path from "path";

export const readdirRecursive = async (
  parentdir: string,
  extensions: Array<string> = [],
  files: Array<string> = []
) => {
  const dirents = await fs.promises.readdir(parentdir, { withFileTypes: true });
  const dirs = [];
  for (const dirent of dirents) {
    if (dirent.isDirectory()) dirs.push(path.join(parentdir, dirent.name));
    if (dirent.isFile()) files.push(path.join(parentdir, dirent.name));
  }
  for (const dir of dirs) {
    files = await readdirRecursive(dir, extensions, files);
  }
  files = files.filter((p) => extensions.includes(path.extname(p)));
  return Promise.resolve(files);
};
