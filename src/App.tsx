import React, { useState, useEffect } from 'react'
import Router from '@/routers'
import "@/styles/theme/light.scss";
import "@/styles/theme/dark.scss";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 设置默认主题为 light
    document.body.className = 'light';
  }, []);

  return (
    <Router />
  )
}

export default App
