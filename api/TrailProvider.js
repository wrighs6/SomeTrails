class TrailProvider {
  constructor(source) {
    if (this.constructor == TrailProvider)
      throw new Error("Abstract class TrailProvider can't be instantiated");

    if (this.search == undefined)
      throw new Error("Method search must be implemented");

    if (this.find == undefined)
      throw new Error("Method get must be implemented");
  }
}

module.exports = TrailProvider;
