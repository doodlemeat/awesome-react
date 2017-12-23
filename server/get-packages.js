function getPackages(req, res) {
    res.json({
        hej: 123
    });
    console.log(process.env);
}

module.exports = getPackages;