import { User, Category, Discussion } from "@/services/Models";

const categorys = Array.from(Array(10).keys()).map(n => new Category({
  id: n.toString(),
  name: `Category${n}`,
}));
const discussions = categorys.flatMap(category => Array.from(Array(10).keys()).map(n => new Discussion({
  id: n.toString(),
  title: `title${n}`,
  content: `content${n}`,
  categoryName: category.name,
})));

export default {

  getCategorys(): Promise<Category[]> {
    console.log("getCategorys");
    return this.toPromise(categorys);
  },
  getDiscussions(categoryID: string): Promise<Discussion[]> {
    console.log("getDiscussions");
    const category = categorys.find(c => c.id == categoryID);
    return this.toPromise(discussions.filter(x => x.categoryName == category?.name));
  },
  getAllDiscussions(): Promise<Discussion[]> {
    console.log("getAllDiscussions");
    return this.toPromise(discussions);
  },
  login(id: string, password: string): Promise<User> {
    console.log("login");
    return this.toPromise(new User({
      id: "user00",
      name: "username00",
    }));
  },

  toPromise<T>(v: T): Promise<T> {
    return new Promise((resolve, reject) => {
      return resolve(v);
    });
  }
};