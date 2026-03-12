module.exports = {
  run: [
    // Clone the Speaches repo
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/speaches-ai/speaches app"
      }
    },
    // Install uv (fast Python package manager)
    {
      method: "shell.run",
      params: {
        message: "pip install uv",
        path: "app"
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
    // Done
    {
      method: "notify",
      params: {
        html: "Speaches installed successfully! Click Start to run it."
      }
    }
  ]
}
