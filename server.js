const app = require("./app");
const open = require("open").default;
const { program } = require("commander");

let port = 80;

program.option("-p, --port <number>").action((options) => {
  if (options.port) {
    const portNumber = Number(options.port);
    if (isNaN(portNumber)) return console.error("error: port must be a number");
    if (portNumber > 65_535 || portNumber < 1)
      return console.error("error: port must be between 1 and 65535");
    port = portNumber;
  }
});

program.parse();

app.listen(port, async () => {
  const url = `http://localhost${port == 80 ? "" : `:${port}`}`;
  console.log(`\n> Server Started Successfully! =D\n\n\t- Local: ${url}\n`);
  await open(url);
});
