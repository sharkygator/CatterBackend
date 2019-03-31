const Catt = require('../models/catt');

exports.index = (req, res) => {
    Catt.get((err, result) => {
        if(err) {
            res.json({
                status: "error",
                message: err
            })
        }
        else {res.json(result)}
    })
};

exports.new = (req, res) => {
    const newCatt = new Catt();
    newCatt.content = req.body.content ? req.body.content: newCatt.content;
    newCatt.imgUrl = req.body.imgUrl ? req.body.imgUrl: newCatt.imgUrl;

    newCatt.save(err => {
        if (err){
            res.json(err);
        }else {
            res.status(201).json({
                data: newCatt
            })
        }
    })
};

exports.update = (req, res) => {
    Catt.findById(req.params.id, (error, catt) => {
        if(error){
            res.json(error);
        }else{
            catt.content = req.body.content ? req.body.content: catt.content;
            catt.imgUrl = req.body.imgUrl ? req.body.imgUrl: catt.imgUrl;
            catt.save((err) => {
                if (err){
                    res.json(err);
                } else {
                    res.status(202).json({
                        data: catt
                    })
                }
            })
        }
    })
};

exports.delete = (req, res) => {
    Catt.findById(req.params.id, (error, catt) => {
        if(error){
            res.json(error);
        }else{
            catt.delete((err) => {
                if (err){
                    res.json(err);
                } else {
                    res.status(202).json({
                        data: catt
                    })
                }
            })
        }
    })
};


exports.view = (req, res) => {
    Catt.findById(req.params.id, (err, response) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                data: response
            })
        }
    })
};

// app.get("/api/v1/catt:id", (req, res) => {
//     const id = req.params.id;
//     Catt.findById(id)
// });
