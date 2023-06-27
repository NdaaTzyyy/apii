var express = require("express")
var scr = require("api-dylux")
var router = express()
var { cnbcindonesia, antaranews, kompas, suaracom, liputan6, merdeka } = require('@bochilteam/scraper-news')

//news
router.get("/antaranews", async (req, res, next) => {
    const ress = await antaranews()
    var result = ress
    res.json({
        result
    })
})
router.get("/cnbcindonesia", async (req, res, next) => {
    const ress = await cnbcindonesia()
    var result = ress
    res.json({
        result
    })
})
router.get("/kompas", async (req, res, next) => {
    const ress = await kompas()
    var result = ress
    res.json({
        result
    })
})
router.get("/suaracom", async (req, res, next) => {
    const ress = await suaracom()
    var result = ress
    res.json({
        result
    })
})
router.get("/liputan6", async (req, res, next) => {
    const ress = await liputan6()
    var result = ress
    res.json({
        result
    })
})
router.get("/merdeka", async (req, res, next) => {
    const ress = await merdeka()
    var result = ress
    res.json({
        result
    })
})
//gaatau
router.get("/ai", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
    const ress = await scr.ChatGpt(query)
    var result = ress.text
    res.json({
        result
    })
})
router.get("/googleimage", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
    const ress = await scr.googleImage(query)
    var result = ress
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
router.get("/ttp", async (req, res, next) => {
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
    const ress = await scr.ttp(query)
    var result = ress
    res.json({
        result
    })
})

module.exports = router;
