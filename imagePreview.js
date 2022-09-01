const [image, setImage] = useState()
const [displayImage, setDisplayImage] = useState()

const handleChange = (e) => {
  setDisplayImage(URL.createObjectURL(e.target.files?.[0]));
  setImage(e.target.files?.[0]);
}
