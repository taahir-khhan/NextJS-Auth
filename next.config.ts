module.exports = {
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};
