import bcrypt from 'bcrypt';

export const hash = async(password) => {
   try {
      const hashedPassword = await bcrypt.hash(password, 10)
      return hashedPassword
   } catch (error) {
      console.log(error.message);
   }
}

export const compare = async(password, hashedPassword) => {
   try {
      return await bcrypt.compare(password, hashedPassword);
   } catch (error) {
      console.log(error.message);
   }
}