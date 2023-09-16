import { create } from 'zustand'
import { getUser } from '../api/fakeApiUser'

export const useUserStore = create((set) => ({
  users: {
    loading : undefined,
    data : []
  },
  getUsers: async () => {
    set((state : any) => ({ users: { data : [] , loading :  true}}))
    const response = await getUser();
    set((state : any) => ({ users: { data : response.data , loading :  false}}))
},
  removeAllUsers: () => set({ users: [] }),
}))