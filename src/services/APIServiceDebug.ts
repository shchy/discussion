import { User, Category, Discussion } from "@/services/Models";

const categorys = Array.from(Array(10).keys()).map(
  (n) =>
    new Category({
      id: n.toString(),
      name: `Category${n}`,
    })
);
const discussions = categorys.flatMap(category => Array.from(Array(10).keys()).map(n => new Discussion({
  id: `${category.id}-${n}`,
  title: `title${n}`,
  vote: n,
  content: `content${n}`,
  categoryID: category.id,
  categoryName: category.name,
  createUserName: `user${n}`,
  created: new Date(Date.now() - (1000 * 60 * 60 * 24) * n).valueOf(),
})));

export default {

  getCategorys(): Promise<Category[]> {
    console.log("getCategorys");
    const json = JSON.stringify(categorys);
    const copy = (JSON.parse(json) as Array<any>).map(x => new Category(x));
    return this.toPromise(copy);
  },
  getDiscussions(): Promise<Discussion[]> {
    console.log("getDiscussions");
    const json = JSON.stringify(discussions);
    const copy = (JSON.parse(json) as Array<any>).map(x => new Discussion(x));
    return this.toPromise(copy);
  },
  vote(discussionID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const discussion = discussions.find(x => x.id == discussionID);
      if (discussion === undefined) {
        return reject("not found");
      }
      discussion.vote += 1;
      resolve();
    });
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