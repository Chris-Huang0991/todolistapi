import { verify } from 'jsonwebtoken'
export default props => {
  const Authorization = props.req.get('Authorization')
  if(Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, '1234')
    return verifiedToken && verifiedToken.userId
  }
}