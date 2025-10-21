import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'ksandiqj093u0edjsikjncxoeiw93eidkjsjdi';

export default {
    register(userData){
        return User.create(userData);
    },
    async login(email, password) {
        // Validate user
        const user = await User.findOne({email});

        if (!user) {
            throw new Error("Invalid user or password!");
        };

        // Validate password
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("Invalid user or password!");   
        };

        // Create token
        const payload = {
            id: user.id,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'});
        return token;
    }
}