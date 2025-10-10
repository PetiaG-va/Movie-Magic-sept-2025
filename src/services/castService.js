import Cast from "../models/Cast.js"

export default {
    getAll(filter = {}) {
        let query = Cast.find();

        if (filter.includes) {
            // query = query.in('_id', filter.includs) // Mongoose
            query = query.find({'_id': {$in: filter.includes}}); // Mongoose
        }

        return query;
    },
    create(castData) {
        return Cast.create(castData);
    }
}