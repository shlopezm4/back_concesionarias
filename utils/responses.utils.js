exports.error = (msg = "") => {
  return {
    valid: false,
    msg
  };
};

exports.success = (data = {}, msg) => {
  return {
    valid: true,
    msg,
    data
  };
};
