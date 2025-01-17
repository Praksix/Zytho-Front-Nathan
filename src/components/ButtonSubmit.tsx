function ButtonSubmit({text }: {text: string }) {
    return (
        <button type="submit" className="flex justify-end text-white bg-lightgreen border-0 py-2 px-6 focus:outline-none hover:bg-lightgreenhover rounded text-lg">{text}</button>
    );
}

export default ButtonSubmit;