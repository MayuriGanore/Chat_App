import bcrypt from "bcryptjs"
import User from "../models/user_model.js";
import generateTokenAndSetCookie from "../utils/generateTokens.js";

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ msg: "User already exists!" })
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const boyProfilePic = `https://avatar.iran.liara.run/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })

        if (newUser) {
            //Generate JWT token here
            await generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "invalid user data" });
        }
    } catch (err) {
        console.log("Error in signup controller", err.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const login = async(req, res) => {
    try { 
        const {username , password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return  res.status(401).json({error:"Invalid Credentials!"})
        }

        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })
    }catch(err){
        console.log("Error in login controller", err.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const logout = (req, res) => {
    try{
        //remove the token from cookies and set it
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({ message : "Logged out successfully."});
    }catch(err){
        console.log("Error in login controller", err.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

