const express = require('express')
const axios = require('axios')
const config = require('./config')
const app = express()
const path = require("path")


app.set('views', path.join(__dirname, 'views/'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');





app.get('/', async (req, res) => {
    // let [token, dollar, stock] = await Promise.all([getTokenPrice(), getDollarPrice(), getStockPrice()])
    // result.push(...token)
    // result.push(...dollar)
    // result.push(...stock)

    res.render("index", {config: config})
})
let ip_info = {
    ip: "unknown",
    time: "unknown"
}

app.get("/ip", async (req, res) => {
    res.render("ip", {ip: ip_info})
})

app.get("/report_ip", async (req, res) => {
    params = req.query
    ip_info.ip = params["ip"]
    ip_info.time = new Date(params["t"] * 1000)
    res.send({"status": "0", "param_echo": ip_info})
})
app.listen(config.port, "0.0.0.0", () => {
    console.log(`market watcher app listening on port ${config.port}`)
})

//http://qt.gtimg.cn/r=0.8409869808238q=s_sz000559,s_sh600895,s_sz002048,s_sz002085,s_sz002126,s_sz002284,s_sz002434,s_sz002472,s_sz002488