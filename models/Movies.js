const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes :{
        type: String,
        enum: ['13:00','15,30','18:00','20:10','22:40']
    }
})

const Movies = mongoose.model ('Movies', movieSchema);
module.exports = Movies;

