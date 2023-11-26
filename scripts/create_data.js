#!/usr/bin/env bun
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.oskar.global");
await pb.admins.authWithPassword(process.env["PB_USER"], process.env["PB_PASSWORD"]);

// eslint-disable-next-line no-undef
const data = await Bun.file("data.csv").text();
const lines = data.split("\n");

for (let line of lines) {
    const [question, answer] = line.split(",");

    await pb.collection('cards').create({
        question,
        answer,
    });
}