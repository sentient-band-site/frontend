const Loader = ({message}: {message?: string}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-[#e07a5f] border-solid"></div>
            {message &&
                <p className="text-gray-500 text-sm font-semibold font-style:italic mt-4">{message}</p>
            }
        </div>
    )
}

export default Loader;