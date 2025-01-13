function Button({ title, text }: { title: string; text: string }) {
    return (
    <div>
        <button>{text}</button>
        <p>{title}</p>
    </div>
    );
}

export default Button;