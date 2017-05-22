'use strict'

const REQUEST = require('superagent');

class API {
  constructor(subscriptionKey) {
    this._subscriptionKey = subscriptionKey;
  }

  _sendSms(payload) {
    return new Promise((resolve, reject) => {
      REQUEST.post(`https://opensms.api.bics.com/smsmessaging/v2/outbound/${payload.senderName}/requests`)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this._subscriptionKey}`)
        .send({
          outboundSMSMessageRequest: {
            address: payload.to,
            senderAddress: payload.senderAddress,
            outboundSMSTextMessage: {
              message: payload.message
            },
            senderName: payload.senderName
          }
        })
        .end(function (err, res) {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(res.body);
          }
        });
    });
  }
}

module.exports = API;
