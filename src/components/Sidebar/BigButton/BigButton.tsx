import { FC } from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 100%;
  height: 44px;
  background-color: white;
  color: black;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
`

interface BigButtonProps {
  children?: React.ReactNode
}

const BigButton: FC<BigButtonProps> = ({ children }) => {
  return <Button>{children}</Button>
}

export default BigButton
