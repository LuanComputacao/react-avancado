import React from 'react'
import * as S from './styles'

const Main = ({ name }: { name: string }) => (
  <S.Wraper>
    <h1>{name}</h1>
  </S.Wraper>
)

export default Main
