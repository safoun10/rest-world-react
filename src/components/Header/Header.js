import React from 'react';
import ("./Header.css");

const Header = () => {
    return (
        <div>
            <section className="display-1 text-center mt-5">Hello World!!</section>
            <section className="display-6 my-3 text-secondary text-center mb-5">
                Welcome to the flag museum
            </section>
        </div>
    );
};

export default Header;