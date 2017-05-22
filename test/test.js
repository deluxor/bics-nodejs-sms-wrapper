const SMS = require('../sms');

const smsObj = new SMS('000000000000000000');

const payload = {
  to: [
    "tel:+00000000"
  ],
  senderName: '00000',
  senderAddress: '+351000000000',
  message: 'Teste de sms',
};

smsObj.sendSms(payload)
  .then((res) => {
    console.log('------------------------------------');
    console.log(res);
    console.log('------------------------------------');
  })
  .catch((err) => {
    console.log('------------------------------------');
    console.log(err);
    console.log('------------------------------------');
  });
