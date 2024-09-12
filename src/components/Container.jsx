const Container = ({ children, designs }) => {
    return (
        <div className={`${designs} max-w-[1200px] mx-auto p-5`}>{children}</div>
    )
}

export default Container