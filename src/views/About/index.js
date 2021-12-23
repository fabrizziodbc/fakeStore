import './styles.scss';

const About = () => {
  return (
    <div className="about">
      <img
        src="https://i.ibb.co/qkhKNPK/circle-cropped.png"
        alt="Foto de perfil de Fabrizzio De Bracamonte"
        className="about__img"
      />
      <p className="about__name">Fabrizzio De Bracamonte</p>
      <p className="about__description">
        Fullstack developer and tech lover. I have experience using HTML, CSS,
        SCSS, JavaScript, Git, React, Node.Js and Express. I want to be the best
        version of myself, which is why I always try to improve by taking
        courses, reading books, or exercising.
      </p>
      <p className="about__text">In this bootcamp I learned:</p>
      <ul className="about__list">
        <li>Teamwork</li>
        <li>GitFlow</li>
        <li>MongoDB with Mongoose</li>
      </ul>
      <p className="about__text">Correo electrónico:</p>
      <a href="mailto:fabrizziodbc@gmail.com" className="about__link">
        fabrizziodbc@gmail.com
      </a>
      <p className="about__text">Github:</p>
      <a href="https://github.com/fabrizziodbc" className="about__link">
        https://github.com/fabrizziodbc
      </a>
    </div>
  );
};

export default About;
