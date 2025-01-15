function Button({text }: {text: string }) {
    return (
        <button className="ml-0 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">{text}</button>
    );
}

export default Button;