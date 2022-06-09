const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Movies = mongoose.model ('Movies', movieSchema);
module.exports = Movies;

