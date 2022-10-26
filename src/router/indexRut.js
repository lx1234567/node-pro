const ctr = require('../controller/indexCtr')
const querystr = require('query-string')
module.exports = {
    pageRoute: (req, res) => {
        let url = req.url
        let sencondIndex = url.indexOf('.')
        let firstIndex = url.indexOf('/')
        let type = 'html';
        let fileName = 'index';
        if (url.length >= firstIndex + 1) {
            if (sencondIndex !== -1) {
                type = url.substring(sencondIndex + 1)
                fileName = url.substring(firstIndex + 1, sencondIndex)
            }
        }
        if (sencondIndex === -1 && url.indexOf('?') !== -1) {
            let paramsArr = url.split('?')
            let parmas = querystr.parse(paramsArr[1])
            ctr.login(parmas.name,parmas.password,res)
        }
        else {
            ctr.sendTypeFs(type, fileName, res)
        }

    }
}