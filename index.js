const mineflayer = require("mineflayer");

function startBot() {
  const bot = mineflayer.createBot({
    host: "SERVER_IP_HERE",     // <-- Replace with your server IP
    username: "USERNAME_HERE", // <-- Replace with cracked username
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
