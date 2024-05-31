const errorHandler = (err, res) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    } else if (err.name === 'CastError') {
        return res.status(404).json({ message: 'Resource not found' });
    } else {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = errorHandler;