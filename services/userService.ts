import type { IUserData } from "~/types/user";

const apiUrl: string = 'https://jsonplaceholder.typicode.com/users?';
export const userService = {

    async getUserById(id: string[]): Promise<IUserData[] | []> {
       return await $fetch(apiUrl, {
           params: {
             id: id,
           },
       })
    },

    async getUserByName(name: string[]): Promise<IUserData[] | []> {
        return await $fetch(apiUrl, {
            params: {
                name: name,
            },
        })
    },

};