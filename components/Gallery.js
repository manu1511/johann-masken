import Figure from "./Figure";

const Gallery = ({ images }) => images.map((props) => <Figure {...props} />);

export default Gallery;
