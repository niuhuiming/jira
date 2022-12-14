// 使用json-server自定义API
module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "user01" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          user: {
            name: "user01",
          },
          token: "123",
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名或密码错误",
      });
    }
  }
  next();
};
