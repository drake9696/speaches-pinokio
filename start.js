module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "uv run uvicorn speaches.main:app --host 0.0.0.0 --port 8000",
        path: "app",
        env: {
          SPEACHES__HOST: "0.0.0.0",
          SPEACHES__PORT: "8000"
        }
      }
    },
    {
      method: "browser.open",
      params: {
        url: "http://localhost:8000"
      }
    }
  ]
}
