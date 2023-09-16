import { RegisterForm } from '@/containers'
import { Link } from '@/components'

const Register = () => {
  return (
    <div className="border border-black w-full h-96 flex flex-col items-center">
      <Link
        className="border border-black"
        onClick={() => console.log('홈으로 돌아가기 링크 눌렀어요')}
        path="/"
        children="홈으로 돌아가기"
      />
      <RegisterForm />
    </div>
  )
}

export default Register
