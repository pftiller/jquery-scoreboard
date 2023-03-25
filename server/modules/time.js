var time = {
  seconds: 0,
};

function getTime() {
  return time;
}
function remainingTime(newTime) {
  time.seconds = parseInt(newTime.seconds);
  console.log("time is", newTime.seconds);
  return time;
}

module.exports = {
  getTime: getTime,
  remainingTime: remainingTime,
};
