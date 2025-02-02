import { Component } from '@/components/chart-bar-multiple'
import { Components } from '@/components/chart-pie-donut-text'
import { MyComponent } from '@/components/chart-bar-interective'
import React from 'react'

const page = () => {
  return (
    <div>
      <Component/>
      <Components/>
      <MyComponent/>
    </div>
  )
}

export default page
