import React from 'react'

export interface ITreeProps {
  data: any
}

const Tree: React.FC<ITreeProps> = ({ data }) => {
  const renderItem = (data: any) => {
    const keys = Object.keys(data)
    const values = Object.values(data)

    return (
      <ul>
        {keys.map((key, index) => {
          return (
            <li key={key}>
              {key}
              {typeof values[index] === 'object' && renderItem(values[index])}
            </li>
          )
        })}
      </ul>
    )
  }

  return renderItem(data)
}

export default Tree
