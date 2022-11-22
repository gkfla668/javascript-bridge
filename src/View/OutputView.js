const MissionUtils = require("@woowacourse/mission-utils");
const { OUTPUT_MARK, RESULT } = require("../Utils/Constants");

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
  printMap(playerUpperBridgeState, playerLowerBridgeState) {
    this.printMsg(
      OUTPUT_MARK.START +
        playerUpperBridgeState.join(OUTPUT_MARK.DIVISION) +
        OUTPUT_MARK.END
    );
    this.printMsg(
      OUTPUT_MARK.START +
        playerLowerBridgeState.join(OUTPUT_MARK.DIVISION) +
        OUTPUT_MARK.END
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result) {
    this.printMsg(`\n${RESULT.IS_SUCCESS}: ${result.get(RESULT.IS_SUCCESS)}`);
    this.printMsg(
      `${RESULT.TOTAL_ATTEMPTS_COUNT}: ${result.get(
        RESULT.TOTAL_ATTEMPTS_COUNT
      )}`
    );
  },

  end() {
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
