export const dateMixin = {
  methods: {
    sinceDate(v: number) {
      const now = new Date();
      const days = Math.floor((now.valueOf() - v) / (1000 * 3600 * 24));
      return `${days}日前`;
    }
  }
}