import {asyncHandler} from '../utils/asyncHandler.js'

const signIn = asyncHandler(async(req,res)=>{
    res.status(200).json(
    {
        message:"ok dhanu"
    }
    )
})
export {signIn}