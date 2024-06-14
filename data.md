# SomeTrails Data Plan

- **Trail Name**: The official name of the trail, a short string.
- **Trail Description**: A detailed description of the trail, possibly several paragraphs.
- **Location**: The name of the park, preserve, or other area that contains the trail. 
- **Difficulty Level**: A score from 1 to 5, where 1 is easiest.
- **Distance**: Total length of the trail, in miles.
- **Elevation Gain**: The total ascent over the course of the trail, in feet.
- **Max Elevation**: The elevation of the highest point along the trail, in feet.
- **Time to Complete**: Estimated time it takes to hike the trail.
- **Tags**: A list of short strings such as "scenic", "pet friendly", "swimming", etc.
- **Path**: A GeoJSON LineString representing the path taken by someone hiking the trail. The first point is the start, and the last point is the end.
- **Pictures**: A list of URLs to pictures from the trail that can be retrieved by the client. 
