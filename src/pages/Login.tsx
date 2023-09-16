import { Link } from '../components'

const Login = () => {
  return (
    <div>
      <h1>Hello, Login Page</h1>
      <Link
        onClick={() => console.log('홈으로 돌아가기 링크 눌렀어요')}
        path="/"
        children="홈으로 돌아가기"
      />
    </div>
  )
}

export default Login
