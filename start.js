module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "uv run uvicorn --factory --host 0.0.0.0 --port 8000 speaches.main:create_app",
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
