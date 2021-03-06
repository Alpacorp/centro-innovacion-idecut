import "./aminatedLetters.scss";

const AnimatedLetters = ({ strArray, letterClass, idx }: any) => {
  return (
    <span className="animated-letters">
      {strArray.map((letter: string, i: any) => {
        return (
          <span key={letter + i} className={`${letterClass} _${i + idx}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
