import { ReactComponent as SmileIcon } from "../assets/images/voting/smile.svg";
import { ReactComponent as SadIcon } from "../assets/images/voting/sad.svg";
import { ReactComponent as HeartIcon } from "../assets/images/voting/heart.svg";
import { ReactComponent as FavoritesGroup } from "../assets/images/voting/favoritesGroup.svg";
import VotingSearchForm from "../Components/VotingSearchForm/VotingSearchForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getImages } from "../redux/voting/votingOperations";

function VotingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  return (
    <div>
      <VotingSearchForm />
      <div>
        <SmileIcon />
      </div>
      <div>
        <HeartIcon />
      </div>
      <div>
        <SadIcon />
      </div>
      <button type="button"></button>
      <h1>VOTING</h1>
      <div>
        <img src="#" alt="some cat picture" />
        <FavoritesGroup />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default VotingPage;
