export default function Button({children, type, selected, ...props}) {
    var style;
    if (type == "easy") {
        style = "text-lg md:text-xl px-2 py-1 md:px-8 md:py-2 bg-green-400 hover:bg-green-200 text-green-900 border-2 border-green-900 rounded-md";
    }
    if (type == "medium") {
        style = "text-lg md:text-xl px-2 py-1 md:px-8 md:py-2 bg-yellow-400 hover:bg-yellow-200 text-yellow-900 border-2 border-yellow-900 rounded-md";
    }
    if (type == "hard") {
        style = "text-lg md:text-xl px-2 py-1 md:px-8 md:py-2 bg-red-400 hover:bg-red-200 text-red-900 border-2 border-red-900 rounded-md";
    }
    if (type == "reset") {
        style = "text-lg md:text-xl px-2 py-1 md:px-8 md:py-2 bg-cyan-400 hover:bg-cyan-200 text-cyan-900 border-2 border-cyan-900 rounded-md";
    }
    if (selected) {
        style += " font-extrabold";
    }
    else {
        style += " font-semibold";
    }
    return <button className={style} {...props}>
        {children}
    </button>
}