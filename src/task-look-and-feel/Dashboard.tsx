import { css } from 'emotion'
import * as React from 'react'
import { articles } from '../data'
import { ArticleCard } from './ArticleCard'

export const Dashboard: React.FC = () => {
  // TODO
  return (
    <div className={containerStyle}>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  )
}

const containerStyle = css`
  border: 1px solid black;
`
