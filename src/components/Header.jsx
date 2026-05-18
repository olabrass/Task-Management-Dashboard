import Timer from './Timer';

const Header = () => {
    return (
        <>
                  <div className="max-w-7xl mx-auto mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

  {/* Heading */}
  <div className="bg-white shadow-lg rounded-2xl px-6 py-4 items-center gap-4">
    <h1 className="text-3xl font-bold text-gray-800">
      Task Management Dashboard
    </h1>

    <p className="text-gray-500 mt-1">
      Organize and manage your daily tasks efficiently.
    </p>
  </div>

  {/* Timer Section */}
      <Timer />

</div>
        </>
    )
}

export default Header;