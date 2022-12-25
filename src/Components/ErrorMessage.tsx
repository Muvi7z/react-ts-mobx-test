
interface ErrorMessageProps {
    error: string
}

const ErrorMessage = ({error} : ErrorMessageProps) => {
  return (
      <div>{error}</div>
  )
}