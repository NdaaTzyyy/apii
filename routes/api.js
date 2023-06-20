var express = require("express")
var scr = require("api-dylux")
var router = express()

router.get("/ai", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
    const ress = await scr.ChatGpt(query)
    var result
    res.json({
        result
    })
})
router.get("/xnxxsearch", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
    const ress = await scr.xnxxSearch(query)
    var result = ress
    res.json({
        result
    })
})
router.get("/xnxxdl", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"masukkan url"})
    const ress = await scr.xnxxdl(url)
    var result = ress
    res.json({
        result
    })
})
router.get("/tiktok", async (req, res, next) => {
    let url = req.query.url
    if (!url) return res.json({"message":"masukkan url"})
    const ress = await scr.tiktok(url)
    var result = ress
    res.json({
        result
    })
})

module.exports = router;
