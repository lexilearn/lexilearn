import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import { SvelteKitAuth } from "@auth/sveltekit";
import PocketbaseAdapter from "$lib/auth";
import { pb } from "$lib/helpers";
import { redirect } from "@sveltejs/kit";
import GitHub from "@auth/core/providers/github";
import { PB_USER, PB_PASSWORD, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "$env/static/private";

const checkAuthorization: Handle = async ({ event, resolve }) => {
    if (!event.url.pathname.startsWith("/auth")) {
        const session = await event.locals.getSession();
        if (!session) throw redirect(303, "/auth/login");
    }

    return resolve(event);
};

export const handle: Handle = sequence(
    SvelteKitAuth({
        adapter: PocketbaseAdapter(pb, {
            username: PB_USER,
            password: PB_PASSWORD
        }),
        providers: [
            GitHub({
                clientId: GITHUB_CLIENT_ID,
                clientSecret: GITHUB_CLIENT_SECRET
            })
        ]
    }),
    checkAuthorization
);
