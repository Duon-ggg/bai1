const http = require("http");

const hostname = "127.0.0.1"; // Định nghĩa hostname

// Tạo server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8"); // Thêm charset=utf-8
  res.end("Hello, world!\n Xin chào từ server Node.js của tôi!");
});

// Lắng nghe trên cổng 3000
const PORT = 3000;
server.listen(PORT, hostname, () => {
  console.log(`Server đang chạy tại http://${hostname}:${PORT}/`);
});
