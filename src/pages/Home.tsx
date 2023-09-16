import { Link } from '@/components'
const Home = () => {
  return (
    <div>
      <h1 className="text-9xl">kimdohyeon</h1>
      <Link
        onClick={() => console.log('회원가입 링크 눌렀어요')}
        path="/Register"
        children="회원가입"
      />
      <br></br>
      <Link
        onClick={() => console.log('로그인 링크 눌렀어요')}
        path="/Login"
        children="로그인"
      />
    </div>
  )
}

export default Home
