const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: "there's nothing here" })
}

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
  
    next(error)
}

module.exports = {
    unknownEndpoint,
    errorHandler
}