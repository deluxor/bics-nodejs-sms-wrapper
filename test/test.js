const SMS = require('../sms');

const smsObj = new SMS('eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJUUklBTF8rMzUxOTM4MTczNTU3X3NtcyIsImp0aSI6IjE1YzJmZDIzMmRjIiwicm9sZXMiOnsic21zIjpbIm91dGJvdW5kIl0sIm1zZWN1cmUiOlsibWNoZWNrX3JhbmdlX3ZhbGlkaXR5IiwibWNoZWNrX3R5cGUiLCJtY2hlY2tfZnJhdWRfZGV0ZWN0aW9uIiwibWNoZWNrX29wZXJhdG9yIl19LCJTTVNfT01UUlVOSyI6Ik9QRU5BUElURVNUIiwibGltaXRzIjp7InNtcyI6MTAsIm1zZWN1cmUiOjEwMH0sImV4cCI6MTQ5NjY2MDUyM30.N5zlda0_tgbbUvapAUJbDoZ-HZ51f7NcCN9IQcrRYF55rHZwp0t4cq2idIrVzgS9vcKC_BWFswFddm2rvh2YOKUlp9a9SGpiORSxR_Cetw7j7eavGMS72cebh8REBtfqOePM7rqj5CkNgbu3sdKXDOXI4TsViMiF3tnV2tqKCDS7MnpwS5NH4RsDBkDE2SKSGqi3opaL0EKAMeqCK6TH1fuRaCVhZ8PwRJai0NvgJW0R8ZR13yu7MJlzyl2f6aYr9LnriQoZarRL6lUTbGFSw9RSKX_giJuVTKe2VYfZ8ta8RfAkFjjA7IqQA8ms05wto0EJsMizDsT-NN-0BkwR-A');

const payload = {
  to: [
    "tel:+351938173557"
  ],
  senderName: 'Loqr',
  senderAddress: '+351938173557',
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
