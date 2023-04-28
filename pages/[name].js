import { useRouter } from 'next/router'
import React from 'react'

const Something = () => {
    const router=useRouter();
    const {name}=router.query;
  return (
    <div>{name} now get lost from here</div>
  )
}

export default Something