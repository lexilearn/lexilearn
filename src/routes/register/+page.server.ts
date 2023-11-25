import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import {pb} from "$lib/pocketbase";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData()) as {
      email: string
      password: string
      passwordConfirm: string
    }

    try {
      await pb.collection('users').create(data)
      await pb
        .collection('users')
        .authWithPassword(data.email, data.password)
    } catch (e) {
      console.error(e)
      throw e
    }

    throw redirect(303, '/')
  },
}
