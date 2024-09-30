import { userService } from '~/services/userService';
import type { IUserData } from "~/types/user";
export const useUserStore = defineStore({
    id: 'user-store',
    state: () => {
        return {
          users: null as null | IUserData[],
          selectedUser: null as null | IUserData,
        }
    },

   actions: {
    async searchUserById(id: string[]) {
        this.users = await userService.getUserById(id);
    },
    async searchUserByName(name: string[]) {
        this.users = await userService.getUserByName(name);
    },
    selectUser(id: number) {
        if (this.users) {
            this.selectedUser = this?.users.find((user: IUserData) => user.id === id) || null;
        }
    },
     setDefaultData() {
      this.users = null;
      this.selectedUser = null;
     }
   },

})