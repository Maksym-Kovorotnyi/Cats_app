import { useDispatch, useSelector } from "react-redux";
import { getImgByBreed } from "../../redux/voting/votingOperations";

function VotingSearchForm() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const breed = e.currentTarget[0].value;
    dispatch(getImgByBreed(breed.slice(0, 4)));
  };
  console.log(images);
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input type="text" />
        <button type="submit"></button>
      </form>
    </>
  );
}

export default VotingSearchForm;
