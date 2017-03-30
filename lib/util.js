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

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;
