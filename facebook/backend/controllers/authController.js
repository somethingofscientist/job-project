export const register = async () => {
   try {
      // const res = await 
   } catch (error) {
      res.status(500).send({
         error: error.message,
         msg: 'error occured in the authController --> register'
      })
      console.log(error.message)
   }
}

export const login = async () => {
   try {
      // const res = await 
   } catch (error) {
      res.status(500).send({
         error: error.message,
         msg: 'error occured in the authController --> login'
      })
      console.log(error.message)
   }
}