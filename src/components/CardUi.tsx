import React from 'react'
import { Button } from './ui/button'
import { FaGithub } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { Separator } from './ui/separator';


export default function CardUI() {
  return (
    <div className='bg-white space-y-4 border rounded-md w-[350px] p-2'>
      <h1 className='text-2xl text-black'>Create an account</h1>
      <p className='text-sm  text-gray-500'>Enter your email below to create your account</p>
      <div className="flex flex-row justify-between items-center w-[320px] mx-auto">
        <Button className='space-x-2 px-8' variant={'outline'}><FaGithub /><p>Github</p></Button>
        <Button className='space-x-2 px-8' variant={'outline'}><SiGoogle /><p>Google</p></Button>
      </div>
      <div className="flex flex-row items-center  text-black w-full space-x-2">
        <Separator className="flex-1" />
        <p className="px-2 text-center text-xs text-gray-500">Or continue with</p>
        <Separator className="flex-1" />
      </div>

    </div>
  )
}
