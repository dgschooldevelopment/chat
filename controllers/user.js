import { compare } from 'bcrypt';
import { tryCatch } from '../middlewares/error.js';
import { User } from '../models/user.js';
import { sendToken } from '../utils/feachers.js';
import { errorHandler } from '../utils/utility.js';
const avtar = {}

const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    console.log(req.body);

    const avatar = {
        public_id: "test",
        url: "",
    };

    const user = await User.create({
        name,
        bio,
        username,
        password,
        avatar,
    });

    sendToken(res, user, 201, "User created successfully");
};

const login = tryCatch(
    async (req, res, next) => {

        const { username, password } = req.body;

        const user = await User.findOne({ username }).select("+password");

        if (!user) {
            return next(new errorHandler("User not found", 404));

        };

        const isMatch = await compare(password, user.password);
        if (!isMatch) return next(new errorHandler("Invalid Password", 404));

        sendToken(res, user, 200, `Welcome ${user.name}`);


    }
);




const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user).select('-password');
    res.json(user);
};

export { getUserProfile, login, newUser };

