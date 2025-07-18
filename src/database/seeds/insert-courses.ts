import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("courses").insert([
    { name: "CSS" },
    { name: "HTML" },
    { name: "Typescript" },
    { name: "React" },
    { name: "NextJS" },
    { name: "NodeJS" },
    { name: "ExpessJS" },
    { name: "MongoDB" },
    { name: "Mobile" },
  ]);
}
