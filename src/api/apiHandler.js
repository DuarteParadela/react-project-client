import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // getUserInfos() {
  //   return service
  //     .get("/users/me")
  //     .then((res) => res.data)
  //     .catch(errorHandler);
  // },

  removeUser(userId) {
    return service
      .delete(`api/users/${userId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(data) {
    return service
      .patch("/api/users", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createDemand(data) {
    return service
      .post("/api/demands", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Get all demands. FOR THE ADMIN
  getDemands() {
    return service
      .get("/api/demands")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  removeDemand(demandId) {
    return service
      .delete(`api/demands/${demandId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateDemand(demandId, data) {
    return service
      .patch(`api/demands/${demandId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getDemandsByUser() {
    return service
      .get(`api/demands/mydemands`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createHome(data) {
    return service
      .post("/api/homes", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  // Get all homes. FOR THE ADMIN
  getHomes() {
    return service
      .get("/api/homes")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getHomesByUser() {
    return service
      .get("/api/homes/myhomes")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  removeHome(homeId) {
    return service
      .delete(`api/homes/${homeId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUserHome(data) {
    return service
      .patch("api/homes/myhomes", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateHome(homeId, data) {
    return service
      .patch(`api/homes/${homeId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
