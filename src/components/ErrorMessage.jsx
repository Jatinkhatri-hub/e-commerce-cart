// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ message }) => {
  return (
    <p>
      <span>🔴</span> { message }
    </p>
  )
} 

export default ErrorMessage;