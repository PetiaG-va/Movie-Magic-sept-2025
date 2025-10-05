import { create } from "express-handlebars";
import Movie from "../models/Movie.js";

export default {
    getAll() {
        return Movie.find();
    },
    getOne(movieId) {
        return Movie.find({_id: movieId});
    },
    create(movieData) {
        // TODO Create movie
        console.log(movieData);

        const movie = new Movie(movieData);
        return movie.save();
    }
}