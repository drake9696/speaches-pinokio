module.exports = {
  run: [
    // Clone the Speaches repo
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/speaches-ai/speaches app"
      }
    },
    // Install uv using the official Windows installer
    {
      method: "shell.run",
      params: {
        message: "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\""
      }
    },
    // Install all dependencies
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
        html: "Speaches installed successfully! Click Start to run it."
      }
    }
  ]
}
