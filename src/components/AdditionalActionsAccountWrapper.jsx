const AdditionalActionsAccountWrapper = props => {
    return (
        <div className="fixed w-screen h-screen bg-[#F8F9FA] font-montserrat">
            <div className="center h-[90vh] px-[1.6rem]">
                <div className="center bg-white w-full lg:w-[68rem] min-h-[30rem] lg:min-h-[45rem] rounded-[24px] p-[2.5rem] lg:px-[15rem] text-center">{props.children}</div>
            </div>
            <div className="center h-[10vh] text-[rgba(0,0,0,0.8)]">
                <p>&copy; {new Date().getFullYear()} TicketDorm</p>
            </div>
        </div>
    );
};

export default AdditionalActionsAccountWrapper;