import Cast from "../models/Cast.js"

export default {
    getAll(filter = {}) {
        let query = Cast.find();

        if (filter.includs) {
            // query = query.in('_id', filter.includs) // Mongoose
            query = query.find({'_id': {$in: filter.includs}}); // Mongoose
        }

        return query;
    },
    create(castData) {
        return Cast.create(castData);
    }
}