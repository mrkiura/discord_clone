import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pic from '../public/kiura.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-4">
        <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 text-gray-800">TW</div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="p-4 flex-1">channels</div>
      </div>
      <div className="bg-gray-600 flex flex-1 flex-col">
        <div className="p-4 shadow-md">general</div>
        <div className="bg-black p-4 flex-1">messages</div>
      </div>
    </div>
  )
}
