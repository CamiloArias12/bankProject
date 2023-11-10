type PropsHeadeModule = {
  title: string
  colorBorder: string
}

function HeaderModule({ title, colorBorder }: PropsHeadeModule) {
  return (
    <div
      className={`flex-grow flex flex-row items-center rounded-lg justify-center border-b-3 ${colorBorder}  py-2`}
    ></div>
  )
}

export default HeaderModule
