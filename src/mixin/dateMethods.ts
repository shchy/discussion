export const dateMixin = {
  methods: {
    sinceDate(v: Date) {
      const now = new Date();
      const days = Math.floor((now.valueOf() - v.valueOf()) / (1000 * 3600 * 24));
      return `${days}日前`;
    }
  }
}