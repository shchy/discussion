import { reactive, ref } from "vue";
import { Category, Discussion } from "@/services/Models";
import apiService from "@/services/APIServiceDebug";

const categorys = ref([] as Category[]);
const discussions = ref([] as Discussion[]);

export default {
  data: reactive({ categorys, discussions }),

  async init(): Promise<void> {
    const cs = await apiService.getCategorys();
    categorys.value = cs;

    const ds = await apiService.getDiscussions();
    discussions.value = ds;
  },

  async vote(discussionID: string): Promise<void> {
    await apiService.vote(discussionID);
    const ds = await apiService.getDiscussions();
    discussions.value = ds;
  },
};
