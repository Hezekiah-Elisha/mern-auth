import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.status(201).json({
            message: "User created successfully!",
            user: savedUser
        });
    } catch (err) {
        next(err);
            // error: err
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email: email });
        if (!validUser) return next(errorHandler(404, "Invalid email or password!"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Invalid email or password!"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const { password: hashedPassword, ...user } = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ user });
    } catch (error) {
        console.log(error)
    }

}