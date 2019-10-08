export const defaults = {
  isLoggedIn : localStorage.getItem('TOKEN') !== null ? true : false
}
export const resolvers = {
  Mutation : {
    logUserIn : (_, {token}, {cache}) =>{
      localStorage.setItem('TOKEN', token);
      cache.writeData({data : {
        isLoggedIn: true
        }});
      return null;
    },
    logUserOut : (_, __, {cache}) => {
      localStorage.removeItem('TOKEN');
      cache.writeData({
        data : {
          isLoggedIn:false
        }
      })
      window.location.reload();
      return null;
    }
  }
}