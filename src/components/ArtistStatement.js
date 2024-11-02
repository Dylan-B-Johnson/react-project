import "../css/ArtistStatement.css"

const ArtistStatement = () => {
    return (
        <div className="three" id="artist-statement">
            <img id="about-art" className="contain-img" src="images/about-art.png"/>
            <h3>Artist's Statement</h3>
            <section>
                <blockquote className="text-align-center">"Beneath consciousness lies that great area of the soul which is still a total mystery, but which demonstrates its workings in dreams, in the somnambulistic state under hypnosis and which existed before one's earthly life and which will exist after death.  From there arise [anxiety], the passions, love, hate, and all that which occurs without reflection."</blockquote>
                <cite><em className="right text-align-right">—Gerhard Von der Lippe Gran, 1893</em></cite>
            </section>
            <p>I am fascinated by the associations we make as we interpret the world around us. I use simple abstract forms to create conflicting formal and sensory associations: hard/soft, precise/imperfect, strong/vulnerable. My works are inspired by human form, nature, and mass-produced objects. Embracing the plumpness of anatomical form, and the rigidity of machine-tooled objects, I strive to heighten potential readings. Clay's amorphous, malleable nature easily embraces these many qualities.</p>
        </div>
    );
};

export default ArtistStatement;
