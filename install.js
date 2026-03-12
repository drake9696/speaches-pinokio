module.exports = {
  run: [
    // Clone the Speaches repo
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/speaches-ai/speaches app"
      }
    },
    // Remove uv version restriction using Python
    {
      method: "shell.run",
      params: {
        message: "python -c \"content=open('pyproject.toml').read(); content='\\n'.join(l for l in content.splitlines() if 'required-version' not in l); open('pyproject.toml','w').write(content)\"",
        path: "app"
      }
    },
    // Install all dependencies
    {
      method: "shell.run",
      params: {
        message: "uv sync --frozen",
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
