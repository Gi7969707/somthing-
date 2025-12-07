const mineflayer = require("mineflayer");

function startBot() {
  const bot = mineflayer.createBot({
    host: "alphagenz.minefort.com",     // <-- Replace with your server IP
    username: "white_nagger", // <-- Replace with cracked username
  });

  bot.on("spawn", () => {
    console.log("Bot online and AFKing!");
    // bot.chat("/login password"); // optional
    // bot.chat("/register password password"); // optional
  });

  bot.on("end", () => {
    console.log("Bot disconnected. Reconnecting...");
    setTimeout(startBot, 5000);
  });

  bot.on("error", (err) => {
    console.log("Error:", err);
  });
}

startBot();
