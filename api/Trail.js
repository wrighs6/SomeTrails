class Trail {
  constructor({ name, description, location, difficulty, distance, elevationGain, time, path, images }) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.difficulty = difficulty;
    this.distance = distance;
    this.elevationGain = elevationGain;
    this.time = time;
    this.path = path;
    this.images = images;
  }
}

module.exports = Trail;
