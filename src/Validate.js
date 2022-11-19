const { ERROR } = require("./Constants");

class Validate {
  checkBridgeSize(size) {
    if (isNaN(size)) throw new Error(ERROR.IS_NAN);
    if (size < 3 || size > 20) throw new Error(ERROR.BRIDGE_SIZE);
  }

  checkMovingDirection(direction) {
    if (direction !== "U" || direction !== "D")
      throw new Error(ERROR.MOVING_DIRECTION);
  }
}

module.exports = { Validate };
