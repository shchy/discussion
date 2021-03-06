import { inject, InjectionKey, reactive } from "vue";

export interface IAuthUser {
  displayName: string;
  photoURL: string;
}

const dummyUser: IAuthUser = {
  displayName: "ゲスト",
  photoURL: "",
};

const authStore = () => {
  console.log("init authStore");
  const state = reactive({
    isLoggedin: false,
    displayName: "ゲスト",
    photoURL: "",
  });
  const setUser = (user: IAuthUser | null) => {
    state.isLoggedin = !!user;
    user = user ?? dummyUser;
    if (user) {
      state.displayName = user.displayName ?? "";
      state.photoURL = user.photoURL ?? "";
    }
  };
  const signin = () => {
    // TODO サーバ接続
    setUser(dummyUser);
  };
  const signout = () => setUser(null);
  const updateUser = (input: IAuthUser) => {
    setUser(input);
  };

  return {
    state,
    setUser,
    signin,
    signout,
    updateUser,
  };
};

export default authStore;

export type AuthStore = ReturnType<typeof authStore>;

export const authStoreKey: InjectionKey<AuthStore> = Symbol("authStore");

export const useAuthStore = () => {
  const store = inject(authStoreKey);
  if (!store) {
    throw new Error(`${authStoreKey} is not provided`);
  }
  return store;
};
