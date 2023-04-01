const FooterMenu = ({ links }) => {
    return (
        <div className="flex flex-col">
            {links.map((link, index) => (
                <a key={index} href={link.url} className="text-light hover:text-accent py-2">
                    {link.text}
                </a>
            ))}
        </div>
    );
}

export default FooterMenu;
