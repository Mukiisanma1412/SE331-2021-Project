import axios from "axios";
const token = localStorage.getItem("token");

const apiClient = axios.create({
  baseURL: "http://52.230.104.188:8999",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
// const imgApiClient = axios.create({
//   baseURL: process.env.VUE_APP_BACKEND_URL,
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//   }
// })

export default {
  // ! GET

  getEventLists(perPage, page) {
    return apiClient.get("/drugs?_limit=" + perPage + "&_page=" + page);
  },
  getEventList() {
    return apiClient.get("/drugs");
  },
  getEvent(id) {
    return apiClient.get("/drugs/" + id);
  },
  searchEvenIdByName(name) {
    const drug = apiClient.get("/drugs?_name=" + name);
    return drug.id;
  },

  // ! POST
  addEvent(info) {
    return apiClient.post("/drugs", {
      name: info.name,
      description: info.description,
      shortDesc: info.shortDesc,
      howToTake: info.howToTake,
      imgUrl: info.imgUrl[0],
    });
  },
  uploadImageToFireBase(file) {
    let formData = new FormData();
    formData.append("file", file);
    return apiClient.post("/uploadFile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // ! DELETE
  deleteEvent(id) {
    try {
      return apiClient.delete("/drugs/" + id);
    } catch (error) {
      console.log(error);
      console.log(token);
    }
  },

  // ! PUT
  updateEvent(id, info) {
    try {
      return apiClient.put("/drugs/" + id, {
        name: info.name,
        description: info.description,
        shortDesc: info.shortDesc,
        howToTake: info.howToTake,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
