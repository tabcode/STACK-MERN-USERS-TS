import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/usersdb',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db=>console.log('DB is connected'))
.catch(err=>console.log(err));
mongoose.set('useFindAndModify', false);