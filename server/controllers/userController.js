import User from "../model/userSchema.js";

export const userSignUp = async (request, response) => {
  try {
    const existingUser = await User.findOne({
      username: request.body.username,
    });
    if (existingUser) {
      return response.status(401).json({ message: "Username already taken" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: "User registered successfullyz" });
  } catch (error) {
    console.log("error", error.message);
  }
};

export const userLogIn = async (request, response) => {
  try {
    let user = await User.findOne({
      username: request.body.username,
      password: request.body.password,
    });
    if (user) {
      return response
        .status(200)
        .json(`${request.body.username} login successfull`);
    } else {
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    response.json("Error: ", error.message);
  }
};
