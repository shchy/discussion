import { IAuthUser } from "@/stores/auth";

export class User implements IAuthUser {
  get displayName(): string {
    return this.name;
  }
  photoURL = "";
  id = "";
  name = "";
  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}

export class Category {
  id = "";
  name = "";
  constructor(init?: Partial<Category>) {
    Object.assign(this, init);
  }
}
export class Discussion {
  id = "";
  title = "";
  vote = 0;
  content = "";
  createUserName = "";
  created = new Date();
  categoryName = "";
  constructor(init?: Partial<Discussion>) {
    Object.assign(this, init);
  }
}