import axios, { AxiosInstance } from 'axios';
import { User, Category, Discussion } from "@/services/Models";

const baseURL = 'https://api.github.com';
export default {
  getCategorys(): Promise<Category[]> {
    return this.getClient().get("/categorys");
  },
  getDiscussions(): Promise<Discussion[]> {
    return this.getClient().get(`/discussions/`);
  },
  vote(discussionID: string): Promise<void> {
    return this.getClient().post(`/discussions/${discussionID}/vote/`);
  },
  login(id: string, password: string): Promise<User> {
    return this.getClient().post("/login", { id, password });
  },
  getClient(): AxiosInstance {
    return axios.create({
      baseURL: `${baseURL}`,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
};