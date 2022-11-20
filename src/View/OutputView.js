const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, OUTPUT_MARK } = require("../Utils/Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printMsg(msg) {
    MissionUtils.Console.print(msg);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upperBridge, lowerBridge) {
    this.printMsg(OUTPUT_MARK.START + upperBridge.join(OUTPUT_MARK.DIVISION) + OUTPUT_MARK.END);
    this.printMsg(OUTPUT_MARK.START + lowerBridge.join(OUTPUT_MARK.DIVISION) + OUTPUT_MARK.END);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, attemptsCount) {
    this.printMsg(`${GAME_MESSAGE.SUCCESS_OR_FAIL}${isSuccess}`);
    this.printMsg(`${GAME_MESSAGE.TOTAL_ATTEMPTS_COUNT}${attemptsCount}`);

    MissionUtils.Console.close();
  },

  end() {
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
