function simulatePeterson(process) {
  let flag = [false, false];
  let turn = 0;

  flag[process] = true;
  turn = 1 - process;

  return {
    process,
    flag0: flag[0],
    flag1: flag[1],
    turn,
    message: `Process ${process} entered Critical Section`,
  };
}

module.exports = simulatePeterson;