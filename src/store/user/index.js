import * as firebase from "firebase";
console.log(firebase);

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");

      const credentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);

      const token = await credentials.user.uid
      console.log(credentials);
      console.log(token);
      if (token) {
        const user = firebase.auth().currentUser;
        if (user !== null) {
          await user.updateProfile({ displayName: 'invitado' }) 
        }

        firebase
          .firestore()
          .collection("users")
          .doc(token)
          .set({
            name: "",
            age: "CA",
            contry: "USA",
          })
          .then(() => {
            commit("setLoading", false);
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }

      
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
        });
    },
    signUserInGoogle({ commit }) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user) => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL,
      });
    },
    resetPasswordWithEmail({ commit }, payload) {
      const { email } = payload;
      commit("setLoading", true);
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          commit("setLoading", false);
          console.log("Email Sent");
        })
        .catch((error) => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
