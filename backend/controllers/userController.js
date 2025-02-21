// imports
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import JWT from 'jsonwebtoken';

// create jwt function
const signToken = (username) => {
    return JWT.sign({ userName: username }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

// user controller function
export async function signUp(req, res, next) {
    try {
        const userData = User.build(
            { ...req.body },
            {
                fields: ['firstName', 'lastName', 'userName', 'email', 'password'],
            }
        );

        await userData.save();

        // removing the password field
        const responseData = userData.toJSON();
        delete responseData.password;

        res.status(201).json({
            status: 'success',
            data: {
                user: responseData,
            },
        });
    } catch (err) {
        next(err);
    }
}

export async function userLogin(req, res, next) {
    try {
        const loginData = req.body;
        let token;

        if (loginData.email && loginData.password) {
            // check if email or user exist or not
            const user = await User.findOne({ where: { email: loginData.email } });

            if (!user) {
                throw new Error('userName/email or password is not valid');
            }
            // verify the password
            if (!(await bcrypt.compare(loginData.password, user.password))) {
                throw new Error('userName/email or password is not valid');
            }

            // user password changed or not (optional)
            // create jwt
            token = signToken(user.userName);
        } else if (loginData.userName && loginData.password) {
            // check if userName or user exist or not
            const user = await User.findOne({ where: { userName: loginData.userName } });

            if (!user) {
                throw new Error('userName/email or password is not valid');
            }
            // verify the password
            if (!(await bcrypt.compare(loginData.password, user.password))) {
                throw new Error('userName/email or password is not valid');
            }

            // user password changed or not (optional)
            // create jwt
            token = signToken(user.userName);
        } else {
            throw new Error('userName/email or password not provided!');
        }

        res.status(200).json({
            status: 'success',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
}
