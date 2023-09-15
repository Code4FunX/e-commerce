export const useHelloWorldController = (message?: string) => {
  const handleClick = () => {
    alert(message ?? 'Hello world')
  }

  return { handleClick }
}
