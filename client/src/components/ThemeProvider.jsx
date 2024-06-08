import { useSelector } from "react-redux"


export default function ThemeProvider(children) {
  const {theme} = useSelector(state=> state.theme)
  return (
    <div className={theme}>
      <div className="bg-white text-grey-700 dark:text-grey-200 dark:bg-[rgb(16,23,42)]"></div>
       {children}
    </div>
  )
}
