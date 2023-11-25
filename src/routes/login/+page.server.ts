import {redirect} from '@sveltejs/kit'
import type {Actions} from './$types'
import {pb} from "$lib/pocketbase";
import {currentUser} from "$lib/stores/user";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData()) as {
      email: string
      password: string
    }

    try {
      const user = await pb
        .collection('users')
        .authWithPassword(data.email, data.password);

      currentUser.set(user.record);
      // currentUser.set(await pb.collection("users").getOne(user.record.id))

    } catch (e) {
      console.error(e)
      throw e
    }

    throw redirect(303, '/')
  },
}
