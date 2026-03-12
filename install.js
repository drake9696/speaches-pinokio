module.exports = {
  run: [
    // Clone the Speaches repo
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/speaches-ai/speaches app"
      }
    },
    // Remove the uv version restriction so it works with any uv version
    {
      method: "shell.run",
      params: {
        message: "powershell -Command \"(Get-Content pyproject.toml) | Where-Object {$_ -notmatch 'required-uv|requires-uv'} | Set-Content pyproject.toml\"",
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
    {
      method: "notify",
      params: {
        html: "Speaches installed successfully! Click Start to run it."
      }
    }
  ]
}
