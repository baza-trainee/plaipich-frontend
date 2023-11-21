export  const Header = async ({ lng }: { lng: string }) => {
    return (
        <header>
            <hr />
            <div className="text-xl">{ lng }</div>
            <hr />
        </header>
    )
}
