var express = require("express")
var scr = require("api-dylux")
var router = express()

router.get("/ai", async (req, res, next) => {
    const { Configuration, OpenAIApi } = require("openai")
    let query = req.query.query
    if (!query) return res.json({"message":"masukkan query"})
        const keynya = `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`
const configuration = new Configuration({
  apiKey: keynya,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: query,
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.2,
              presence_penalty: 0,
            });
            const resultnya = response.data.choices[0].text;
            res.json({
                resultnya
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
