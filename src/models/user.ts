import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import helpers from '../lib/helpers';

export interface IUser extends mongoose.Document {
    username: string;
    fullname: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    fullname: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

userSchema.pre<IUser>('save', async function (next) {
    this.password = await helpers.encryptPassword(this.password);
    next;
});

userSchema.methods.updatePassword = async function (password:string,passwordSaved: string): Promise<any> {
    let modifed = await bcrypt.compare(password, passwordSaved);
    if(modifed)return true;
    else{
        return await helpers.encryptPassword(password);
    }
}
module.exports = mongoose.model('User', userSchema);