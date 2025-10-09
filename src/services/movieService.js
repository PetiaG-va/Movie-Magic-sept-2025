import Movie from "../models/Movie.js";

export default {
    async getAll(filter) {
        const result = await Movie.find(filter); // #3 general fix 
        //const result = await Movie.find(filter).lean();  // #2 with lean method
        //const resultObj = result.map(movie => movie.toObject()); // #1 with object
        //return resultObj;

        return result;
    },

    getOne(movieId) {
        return Movie.findOne({_id: movieId});
    },

    create(movieData) {
        movieData.rating = Number(movieData.rating)
        // const movie = new Movie(movieData);
        // return movie.save();

        return Movie.create(movieData);
    }
}