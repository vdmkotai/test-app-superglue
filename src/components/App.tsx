import React, { useEffect } from 'react'
import { convertDataToTree, emulateFetch } from '../mockdata'
import Tree from './Tree'

const App = () => {
  const [data, setData] = React.useState<any>([])

  useEffect(() => {
    emulateFetch()
      .then((data) => {
        setData(convertDataToTree(data))
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <Tree data={data} />
    </div>
  )
}

export default App
