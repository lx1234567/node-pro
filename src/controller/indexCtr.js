const fs = require('fs')
const typeContentType = {
    html:'Text/Html',
    css:'Text/Css',
    js:'Text/javascript'
}

const sendTypeFs = (type,fileName,res)=>{
    if(type === 'html' || type === 'css'){
        fs.readFile(`./src/static/${fileName}.${type}`,(err,data)=>{
            if(data){
                res.writeHead(200,{'Content-Type':`${typeContentType[type]};Chartset=utf-8`})
                res.write(data)
                res.end()
            }
        })
    }
}

const login = (name,password,res)=>{
    if(name === 'leixu' && password === '123456'){
        res.writeHead(200,{'Content-Type':'text/Html;Chartset=utf-8'})
        res.write('login sucess')
        res.end()
    }
    else {
        res.writeHead('301',{location:'http://localhost:8080/'})
        res.end()
    }
}
// sendTypeFs('html','index',{})
module.exports = {
    sendTypeFs,
    login
}