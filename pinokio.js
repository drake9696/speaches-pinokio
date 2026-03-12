module.exports = {
  version: "2.0",
  title: "Speaches",
  description: "OpenAI-compatible Speech-to-Text and Text-to-Speech server. Powered by Faster-Whisper, Kokoro, and Piper.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = await kernel.exists(__dirname, "app", "pyproject.toml")
    if (installed) {
      return [
        {
          text: "Start",
          href: "start.js",
        },
        {
          text: "Update",
          href: "update.js",
        },
        {
          text: "Reset",
          href: "reset.js",
        }
      ]
    } else {
      return [
        {
          text: "Install",
          href: "install.js",
        }
      ]
    }
  }
}
