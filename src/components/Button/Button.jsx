export const Button = ({onClick, children}) => {
  return (
    <button className="text-primary border-2 border-primary px-3 py-1 hover:text-black hover:bg-primary" onClick={onClick}>{children}</button>
  )
};
