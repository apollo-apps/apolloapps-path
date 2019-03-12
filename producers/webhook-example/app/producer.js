"use strict";

const os = require("os");

const nsq = require("nsqjs");
const uuid = require("uuid/v5");

const NSQ_PORT = process.env.NSQ_NSQD_HTTP_PORT || 4150;
const NSQ_HOST = process.env.NSQ_HOST || "nsqd";

const w = new nsq.Writer(NSQ_HOST, NSQ_PORT);

// ... using predefined URL namespace (for, well, URLs)
const ProducerID = uuid(os.hostname(), uuid.DNS); // ⇨ '3bbcee75-cecc-5b56-8031-b6641c1ed1f1'

w.on("closed", () => {
  console.log("Writer closed");
});

module.exports = (TOPIC = "node_cli_example") => {
  w.connect();
  w.on("ready", () => {
    w.publish(TOPIC, `[${ProducerID}] Connected`, err => {
      if (err) {
        return console.error(`[${ProducerID}] Error: `, err.message);
      }
      return console.info(
        `[${ProducerID}] Connected and connected message sent successfully`
      );
    });
  });

  let send = (msg, topic = TOPIC) => {
    w.on("ready", () => {
      w.publish(topic, msg, err => {
        if (err) {
          return console.error(`[${ProducerID}] Error: `, err.message);
        }
      });
    });
  };

  return {
    send,
    w
  };
};
