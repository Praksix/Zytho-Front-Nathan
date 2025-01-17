function Button({text }: {text: string }) {
    return (
        <button className="inline-flex mr-2 text-white bg-green border-2 border-green py-2 px-6 focus:outline-none hover:bg-lightgreenhover rounded text-lg">{text}</button>
    );
}

export default Button;