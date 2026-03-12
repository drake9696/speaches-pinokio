module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "rm -rf app"
      }
    },
    {
      method: "notify",
      params: {
        html: "Speaches has been reset. You can now reinstall."
      }
    }
  ]
}
