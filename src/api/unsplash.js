import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 81cab0f9c44ab22f8cf9204617e54446de00ea317ab6e6d6dc97a0505c2b35e8"
  }
});