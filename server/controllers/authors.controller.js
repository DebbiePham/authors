const { Author } = require('../models/authors.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ authors: allAuthors });
        })
        .catch((err) => {
            res.json(err);
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json({ author: oneSingleAuthor });
        })
        .catch((err) => {
            res.json(err);
        });
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((newCreatedAuthor) => {
            res.json(newCreatedAuthor);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ author: updatedAuthor });
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.json(err);
        });
};

// function to get a random author
module.exports.getRandomAuthor = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        const authorsLength = allAuthors.length;
        const randomIndex = Math.floor(Math.random() * authorsLength);
        const randomAuthor = allAuthors[randomIndex];
        res.json({ author: randomAuthor })
    })
    .catch((err) => {
        res.json(err)
    });
}