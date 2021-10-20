import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Fzq7sJhY-dsRr4Sta247Afgb4rDMwL8n-f-rbV--Wzg",
  },
});

export default unsplash;
