#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
var localip = require("local-ip");
var chalk = require("chalk");
var qrcode = require("qrcode-terminal");
var iface = "en0";

// args
const argv = yargs(hideBin(process.argv)).argv;
console.log({ argv });

// https://github.com/zxing/zxing/wiki/Barcode-Contents#wifi-network-config-android
const config = {
  port: 8899,
  protocol: "http://",
  ssid: "Paperang_5G",
  password: "mb123kj456",
};

const genQrStr = ({ ssid, password }) => {
  return `WIFI:S:${ssid};T:WPA;P:${password};;`;
};

const genQRcode = (qrStr) => {
  qrcode.setErrorLevel("Q");
  qrcode.generate(qrStr);
};

const getLocalIp = async () => {
  return new Promise((res, rej) => {
    localip(iface, function (err, ip) {
      if (err) {
        rej(err);
      }
      res(ip);
    });
  });
};

const __main__ = async () => {
  const myIp = await getLocalIp();
  const qrStr2 = genQrStr(config);
  const qrStr = `${config.protocol}${myIp}:${config.port}`;

  console.log(
    `扫码链接本地wifi, This only works with ${chalk.green(
      "Android"
    )} devices, and iPhones running ${chalk.green("iOS11")}.\n`
  );

  // genQRcode(myIp);
  // genQRcode(qrStr);
  genQRcode(qrStr2);
};

yargs(hideBin(process.argv))
  .command(
    "serve [port]",
    "start the server",
    (yargs) => {
      return yargs.positional("port", {
        describe: "port to bind on",
        default: 5000,
      });
    },
    (argv) => {
      if (argv.verbose) console.info(`start server on :${argv.port}`);
      serve(argv.port);
    }
  )
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  }).argv;

if (require.main === module) {
  __main__();
}
