const errorHandler = (app) => {
    app.use((err,req, res, next) => {
        console.log(err.stack)
        res.status(500).send('Something broke!');
    });

    app.use((err, req, res, next) => {
        console.log(err.stack)
        res.status(404).send('Not found!');
    });
};

export {errorHandler};