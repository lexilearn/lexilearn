import {redirect} from '@sveltejs/kit'
import type {Actions} from './$types'
import {pb} from "$lib/pocketbase";
import {currentUser} from "$lib/stores/user";

export const actions: Actions = {
    default: async ({ request }) => {
        const inputData = await request.formData()
        const mail = inputData.get("email") as string
        const password = inputData.get("password") as string

        try {
            const user = await pb
                .collection('users')
                .authWithPassword(mail, password);

            currentUser.set(user.record);
        } catch (e) {
            console.error(e)
            throw e
        }

        throw redirect(303, '/')
    },
}
