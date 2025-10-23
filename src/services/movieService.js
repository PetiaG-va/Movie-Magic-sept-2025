import Movie from "../models/Movie.js";

export default {
    async getAll(filter = {}) {
        let query = Movie.find(); // #3 general fix 
        //const result = await Movie.find(filter).lean();  // #2 with lean method
        //const resultObj = result.map(movie => movie.toObject()); // #1 with object

        if (filter.title) {
            query = query.find({ title: { $regex: filter.title, $options: 'i' } });
        }

        if (filter.genre) {
            // query = query.where('genre').equals(filter.genre);
            query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: 'i' } });
        }

        if (filter.year) {
            // result = result.find({ýear: filter.year}); // mongodb
            query = query.where(year).equals(filter.year); //mongoose
        }

        return query;
    },

    getOne(movieId) {
        return Movie.findById(movieId);
    },

    getOneDetailed(movieId) {
        return this.getOne(movieId).populate('casts');
    },

    create(movieData, userId) { 
        return Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            creator: userId,
        });
    },
    async attach(movieId, castId) {
        
        return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
    },
    delete(movieId) {
        return Movie.findByIdAndDelete(movieId);
    },
    edit(movieId, movieData) {
        return Movie.findByIdAndUpdate(movieId, movieData);
    }
}
