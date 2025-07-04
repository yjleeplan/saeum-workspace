import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface SignInInfoInterface {
  userId: number;
  email: string;
  startTime: number;
  endTime: number;
  token: string;
}

type State = {
  isLogged: boolean;
  userInfo: SignInInfoInterface | null;
};

type Actions = {
  onLogin: (payload: SignInInfoInterface) => void;
  onLogout: () => void;
};

export const initialState: State = {
  isLogged: false,
  userInfo: null,
};

export const useAuthStore = create<State & Actions>()(
  immer(
    devtools(
      persist(
        (_set) => ({
          ...initialState,
          onLogin: (payload: SignInInfoInterface) => {
            _set(() => ({
              ...initialState,
              isLogged: true,
              userInfo: { ...payload },
            }));
          },
          onLogout: () => {
            _set(() => ({
              ...initialState,
            }));
          },
        }),
        {
          name: 'saeum-workspace-store',
          storage: createJSONStorage(() => localStorage),
        },
      ),
    ),
  ),
);
