import { css } from 'emotion'
import * as React from 'react'
import { abstract, Article } from '../data'

export const ArticleCard: React.FC<Article> = ({ image, title, subTitle, content, commentCount }) => {
  // TODO
  return (
    <div className={containerStyle}>
      <img src={image} alt={title} />
      <div>{title}</div>
      {!!subTitle && <div>{subTitle}</div>}
      <div>{abstract(content, 200)}</div>
      <div>{commentCount}</div>
    </div>
  )
}

const containerStyle = css`
  border: 1px solid black;
`
