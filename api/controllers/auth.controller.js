import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
        res.status(400).json(
            // error: err
            err.message    
        );
    }
};