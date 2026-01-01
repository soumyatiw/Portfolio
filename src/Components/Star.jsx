import starImg from "../Logos/star-2.png"

export default function Star({ width, height }) {
    return (
        <img data-aos="zoom-in"
            data-aos-delay="600"
            style={{ height: height, width: width }}
            src={starImg}
            alt="star"
        />
    )
}