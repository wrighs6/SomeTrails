class Trail {
  static pathLength(path) {
    const haversineDistance = ([lon1, lat1], [lon2, lat2]) => {
      const toRadian = angle => (Math.PI / 180) * angle;
      const distance = (a, b) => (Math.PI / 180) * (a - b);
      const RADIUS_OF_EARTH_IN_MILES = 3959;

      const dLat = distance(lat2, lat1);
      const dLon = distance(lon2, lon1);

      lat1 = toRadian(lat1);
      lat2 = toRadian(lat2);

      // Haversine Formula
      const a =
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
      const c = 2 * Math.asin(Math.sqrt(a));

      let finalDistance = RADIUS_OF_EARTH_IN_MILES * c;

      return finalDistance;
    };

    let sum = 0;

    for (let i = 0; i < path.length - 1; i++)
      sum += haversineDistance(path[i], path[i+1]);

    return sum;
  }

  constructor({ name, description, location, difficulty, distance, elevationGain, time, path, images }) {
    this.name = name;
    this.description = description;
    this.location = location;
    this.difficulty = difficulty;
    this.distance = Trail.pathLength(path);
    this.elevationGain = elevationGain;
    this.time = this.distance * 30;
    this.path = path;
    this.images = images;
  }
}

module.exports = Trail;
