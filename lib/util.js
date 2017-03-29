const Util = {

  dir (vector) {
    const norm = Util.norm(vector);
    return Util.scale(vector, 1 / norm);
  },

  dist (pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },

  norm (vector) {
    return Util.dist([0,0], vector);
  },

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  wrap (coordinate, max) {
    if (coordinate < 0) {
      return max - (coordinate % max);
    } else if (coordinate > max) {
      return coordinate % max;
    } else {
      return coordinate;
    }
  }
};

module.exports = Util;
