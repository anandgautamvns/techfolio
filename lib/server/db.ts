import fs from "fs";
import path from "path";

const DB_DIR = path.resolve(process.cwd(), "db");

export function readDb<T>(name: string): T {
  const file = path.join(DB_DIR, `${name}.json`);
  if (!fs.existsSync(file)) {
    throw new Error(`Collection "${name}" not found at ${file}`);
  }
  return JSON.parse(fs.readFileSync(file, "utf8")) as T;
}

export function writeDb<T>(name: string, data: T): void {
  const file = path.join(DB_DIR, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
}

export function nextId(arr: Array<{ id?: number }>): number {
  if (!arr.length) return 1;
  return Math.max(...arr.map((item) => item.id ?? 0)) + 1;
}
