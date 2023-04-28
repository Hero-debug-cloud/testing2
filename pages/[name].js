import { useRouter } from 'next/router'
import React from 'react'

const Something = () => {
    const router=useRouter();
    const {name}=router.query;
  return (
    <div>{name}</div>
  )
}

export default Something