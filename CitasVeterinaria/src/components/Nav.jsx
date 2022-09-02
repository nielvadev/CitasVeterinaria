export const Nav = () => {

  return (
    <nav className="fixed bg-blue-600 shadow-md w-full p-5 flex justify-between items-center">
        <a href="./index.html" className="text-base">
            <img src="src\assets\VeterinApp.png" width={200}
                className="hover:cursor-pointer hover:animate-pulse">
                </img>
                
        </a>
    <div>
        
        <a href="https://github.com/nielvadev">
            <img src="src\assets\gitLogo.png"
                className="hover:cursor-pointer hover:animate-bounce">
                </img>
        </a>
    </div>
    </nav>
  )
}