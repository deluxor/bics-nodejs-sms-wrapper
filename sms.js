'use strict'

const API = require('./lib/api.js');

class SMS {
  constructor(_subscriptionKey) {
    this._API = new API(_subscriptionKey);
  }

  sendSms(payload) {
    return new Promise((resolve, reject) => {
      const toSendPayload = {
        to: payload.to,
        senderName: payload.senderName,
        senderAddress: payload.senderAddress,
        message: payload.message,
      };
      this._API._sendSms(toSendPayload)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = SMS;
