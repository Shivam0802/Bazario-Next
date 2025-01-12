import moongose from 'mongoose';

const userSchema = moongose.Schema({
      firstName: {
         type: String,
         required: true,
      },
      lastName: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      dob : {
         type: Date,
         required: true,
      },
      gender: {
         type: String,
         required: true,
      },
      contact: {
         type:Number,
         required : true
      },
      address: {
         type: String,      
         required: true
      },
      password: {
         type: String,
         required: true,
      },
   }, {
      timestamps: true,
   });

const User = moongose.model('User', userSchema);

export default User;