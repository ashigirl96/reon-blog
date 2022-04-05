import { FC } from 'react'

export const Code: FC = ({ children }) => {
  // @ts-expect-error
  const codeLines: string[] = children[0].props.children[0].split('\n')
  return (
    <div className="mockup-code">
      {codeLines.map((code, index) => (
        <pre data-prefix={index}>{code}</pre>
      ))}
    </div>
  )
}

export const Pre: FC = ({ children }) => {
  return <pre>{children}</pre>
}
