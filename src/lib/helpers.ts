import PocketBase from 'pocketbase'
// @ts-ignore deez nuts
import * as process from "node:process";
import type {OAuth2Provider} from "$lib/types/types";


const DB_URL = "https://pocketbase.oskar.global"
export async function connectDbAsAdmin(): Promise<PocketBase> {
  const db = new PocketBase(DB_URL)
  await db.admins.authWithPassword(process.env["PB_USER"], process.env["PB_PASSWORD"])

  if (db.authStore.isValid) {
    console.log("Connected to PocketBase")
    return db
  } else {
    throw new Error("Could not connect to PocketBase")
  }
}

/**
 * Authenticate with PocketBase as a user.
 * Important: Please redirect to https://yourdomain.com/api/oauth2-redirect
 * @param provider
 */
export async function connectDbAsUser(provider: OAuth2Provider): Promise<PocketBase> {
  const db = new PocketBase(DB_URL)
  await db.collection("users").authWithOAuth2({
    provider: provider,
  })
  if (db.authStore.isValid) {
    console.log("Connected to PocketBase")
    return db
  } else {
    throw new Error("Could not connect to PocketBase")
  }
}





