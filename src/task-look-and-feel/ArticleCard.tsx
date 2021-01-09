import { css } from 'emotion'
import * as React from 'react'
import { abstract, Article } from '../data'

export const ArticleCard: React.FC<Article> =
  ({ image, title, subTitle, content, commentCount }) => {
  return (
      <div className={containerStyle}>
          <img className={img} src={image} alt={title} />
          <div className={titleStyle}>{title}</div>
          {!!subTitle && <div className={subTitleStyle}>{subTitle}</div>}
          <div>{abstract(content, 200)}</div>
          <div className={commentCountStyle}> {commentCount}</div>
      </div>
  )
}

const containerStyle = css`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(10px, 500px));
  gap: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px darkgrey;
`

const img = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const titleStyle = css`
  font-weight: bolder;
  font-size: medium;
`

const subTitleStyle = css`
  font-weight: bold;
`

const commentCountStyle = css`
  margin-right: 15px;
  text-align: right;
  font-size: medium;
  color: blue;
`
