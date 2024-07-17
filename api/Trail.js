class Trail {
  constructor({ name, description, location, difficulty, path, images }) {
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

    let distance = 0;
    let elevationGain = 0;
    let elevationMax = 0;

    for (let i = 0; i < path.length; i++) {
      if (i+1 < path.length) {
        distance += haversineDistance(path[i], path[i+1]);
        const change = path[i+1][2] - path[i][2];
        if (change > 0)
          elevationGain += change;
      }
      if (path[i][2] > elevationMax)
        elevationMax = path[i][2];
    }

    elevationGain *= 3.280839895;
    elevationMax *= 3.280839895;

    this.name = name;
    this.description = description;
    this.location = location;
    this.difficulty = difficulty;
    this.distance = distance;
    this.elevationGain = elevationGain;
    this.maximumElevation = elevationMax;
    this.time = distance * 30;
    this.path = path;
    this.images = images;
  }
}

module.exports = Trail;
