const Users = mongoose.model("User");

const updateUser = async(req,res,next)=>{
    try {
        const updateUsers = await Users.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUsers)
        
    } catch (error) {
        next(error)
    }
}
const deleteUser = async(req,res,next)=>{
    try {
        await Users.findByIdAndDelete(req.params.id,)
       res.status(200).json("User deleted")
       
   } catch (error) {
       next(error)
   }
}
const getUser = async(req,res,next)=>{
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
        
    } catch (error) {
        next(error)
    }
}
const getAllUser = async(req,res,next)=>{
    try {
        const users = await Users.find()
        res.status(200).json(users)
        
    } catch (error) {
        next(error)
    }
}

module.exports = {getAllUser,getUser,deleteUser,updateUser}