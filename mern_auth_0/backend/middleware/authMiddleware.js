import JWT from 'jsonwebtoken';


export const requireSignIn = (req, res, next) => {
   try {

      const decode = JWT.verify(
         req.headers.authorization,
         process.env.secret
      )
      if(!decode) return res.status(404).send({ status: "false", msg: "you are not sign in"}) 
      next();

   } catch (error) {
      console.log(error)
      return res.status(500).send({
         status: false,
         error: error.message,
         message: "Internal server error"
      })
   }
}