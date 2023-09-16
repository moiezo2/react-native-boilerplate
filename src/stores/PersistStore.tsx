import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const PersistStore = create(
  persist(
    (set, get : any) => ({
      onBoardingDone: false,
      _hasHydrated: false,
      setOnboardingStatus: (value : boolean) => set({ onBoardingDone: value}),
      setHasHydrated: (state : any) => {
        set({
          _hasHydrated: state
        });
      }
    }),
    {
      name: 'app-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage: () => (state : any) => {
        state.setHasHydrated(true)
      }
    }
  )
)