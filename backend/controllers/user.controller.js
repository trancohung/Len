import userModel from "../models/user.model.js";

const userController = {
  getAll: async (req, res) => {
    try {
      res.send("User");
    } catch (error) {
      console.error("Error fetching users: ", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  register: async(req, res) => {
    try{
      const {phone, password} = req.body;
      
      if(!phone || !password){
        return res.status(400).json({error: 'phone and password are required'});
      }

    }catch (err)
    {

    }
  }
};

export default userController;
