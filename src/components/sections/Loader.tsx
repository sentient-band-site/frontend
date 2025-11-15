const Loader = ({message}: {message: string}) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-[#e07a5f] border-solid mb-3"></div>
            <p className="text-gray-500 text-sm font-semibold font-style: italic">{message}</p>
        </div>
    )
}

export default Loader;