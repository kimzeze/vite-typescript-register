import { Input, Title } from '@/components'

const RegisterForm = () => {
  return (
    <div className="border border-black w-2/3 text-center">
      <Title type={1} className="text-8xl py-10" label={'REGISTER'} />
      <Input label="Username" id="username" placeholder="Enter your username" />
    </div>
  )
}

export default RegisterForm
