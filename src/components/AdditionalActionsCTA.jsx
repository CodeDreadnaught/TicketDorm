const AdditionalActionsCTA = props => {
    return (
        <button className="w-full bg-[rgba(149,99,255,1)] h-[3.5rem] gen-transistion hover:bg-[green] lg:h-[4rem] rounded-[12px] text-white">{props.children}</button>
    );
};

export default AdditionalActionsCTA;