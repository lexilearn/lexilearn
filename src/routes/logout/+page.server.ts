import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import {pb} from "$lib/pocketbase";

export const actions: Actions = {
  default: async () => {
    pb.authStore.clear();
    throw redirect(303, '/');
  },
}
