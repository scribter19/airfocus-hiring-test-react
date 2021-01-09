import { css } from 'emotion'
import * as React from 'react'
import { articles } from '../data'
import { ArticleCard } from './ArticleCard'

export const Dashboard: React.FC = () => {
  return (
    <div className={containerStyle}>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  )
}

const containerStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
