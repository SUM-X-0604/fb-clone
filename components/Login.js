import { signIn } from "next-auth/react"
import Image from "next/image"

const Login = () => {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://links.papareact.com/t4i"
                alt="image"
                height={400}
                width={400}
                objectFit="contain"
            />

            <h1 className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:scale-105 transition duration-300" onClick={signIn}>Login with facebook</h1>
        </div>

    )
}

export default Login


