import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi';
const User = require('../models/user');
export const createUser = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = new User(request.payload);
        const userSaved = await user.save();
        return h.response(userSaved);
    } catch (error) {
        return h.response(error).code(500);
    }
}
export const getUsers = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const users = await User.find();
        return h.response(users);
    } catch (error) {
        return h.response(error).code(500);
    }
}
export const getUser = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const userFound = await User.findById(request.params.id);
        if (userFound) {
            return h.response(userFound);
        }
        return h.response('The user is not in the DB').code(404);
    } catch (error) {
        return h.response(error).code(500);
    }
}
export const deleteUser = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const userDeleted = await User.findByIdAndDelete(request.params.id);
        if (userDeleted) {
            return h.response(userDeleted);
        }
        return h.response('The user is not in the DB').code(404);
    } catch (error) {
        return h.response(error).code(500);
    }
}
export const updateUser = async (request: any, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        let data = {
            username:request.payload.username,
            fullname:request.payload.fullname,
            password:request.payload.password
        }
        const Currentuser = await User.findById(request.params.id);
        const band = await Currentuser.updatePassword(data.password,Currentuser.password);
        
        if(band != true) data.password = band;
        else delete data.password;

        const userUpdated = await User.findOneAndUpdate(request.params.id,data,{new:true});

        if (userUpdated) {
            return h.response(userUpdated);
        }
        return h.response('The user is not in the DB').code(404);
    } catch (error) {
        return h.response('There was an error').code(500);
    }
}
