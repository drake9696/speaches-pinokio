module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "if not exist cache\\HF_HOME\\hub mkdir cache\\HF_HOME\\hub",
        path: "app"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "set HF_HOME=cache\\HF_HOME&& set HF_HUB_DISABLE_SYMLINKS_WARNING=1&& set UVICORN_HOST=0.0.0.0&& set UVICORN_PORT=8000&& set ENABLE_UI=true&& set PRELOAD_MODELS=[\"Systran/faster-distil-whisper-large-v3\"]&& uv run uvicorn --factory speaches.main:create_app",
        path: "app"
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
