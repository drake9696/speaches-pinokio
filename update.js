module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull",
        path: "app"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "uv sync",
        path: "app"
      }
    },
    {
      method: "notify",
      params: {
        html: "Speaches updated successfully!"
      }
    }
  ]
}
