const port = 4001
const hostname = 'localhost';
const http = require('http')
const router = require('./src/router/indexRut')

const myserver = http.createServer((req, res) => {
    router.pageRoute(req,res)
})

// const myserver = http.createServer()
// myserver.on('request',(req,res)=>{
//     console.log("ssss")
// })

myserver.listen(port, hostname, () => {
    // myserver.emit('sss')
    console.log(`listen server on ${hostname}:${port}`)
})

// const myreq = http.request({host:hostname,port},(res)=>{
//     res.write('sssss')
//     res.end()
// })

// myreq.on('error',(res)=>{
//     console.log(res)
// })
// console.log(myreq)
// // myreq.write('sssss')
// myreq.end()

// const postData = JSON.stringify({
//     'msg': 'Hello World!'
//   });

// const options = {
//     hostname: 'localhost',
//     port: 8080,
//     path: '/',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': Buffer.byteLength(postData)
//     }
//   };
  
//   const req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//       console.log('No more data in response.');
//     });
//   });
  
//   req.on('error', (e) => {
//     console.error(`problem with request: ${e.message}`);
//   });
  
  // Write data to request body
//   req.write(postData);
//   req.end();
//   req.sendDate('sfdaf')


