import { User, Category, Discussion } from "@/services/Models";

const categorys = Array.from(Array(10).keys()).map(
  (n) =>
    new Category({
      id: n.toString(),
      name: `Category${n}`,
    })
);
const discussions = categorys.flatMap((category) =>
  Array.from(Array(10).keys()).map(
    (n) =>
      new Discussion({
        id: `${category.id}-${n}`,
        title: `title${n}`,
        vote: n,
        content: `content${n}`,
        categoryID: category.id,
        categoryName: category.name,
        createUserName: `user${n}`,
        created: new Date(Date.now() - 1000 * 60 * 60 * 24 * n).valueOf(),
      })
  )
);

const deepCopy = <T extends unknown>(v: T[], f: (obj: T) => T): T[] => {
  const json = JSON.stringify(v);
  const copy = (JSON.parse(json) as Array<T>).map((x) => f(x));
  return copy;
};

export default {
  getCategorys(): Promise<Category[]> {
    console.log("getCategorys");
    return this.toPromise(deepCopy(categorys, (x) => new Category(x)));
  },
  getDiscussions(): Promise<Discussion[]> {
    console.log("getDiscussions");
    return this.toPromise(deepCopy(discussions, (x) => new Discussion(x)));
  },
  vote(discussionID: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const discussion = discussions.find((x) => x.id == discussionID);
      if (discussion === undefined) {
        return reject("not found");
      }
      discussion.vote += 1;
      resolve();
    });
  },
  login(id: string, password: string): Promise<User> {
    console.log(`login id=${id} pass=${password}`);
    return this.toPromise(
      new User({
        id: "user00",
        name: "username00",
      })
    );
  },

  toPromise<T>(v: T): Promise<T> {
    return new Promise((resolve) => {
      return resolve(v);
    });
  },
};
