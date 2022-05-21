import { useEffect, useState, useCallback, useMemo } from 'react';
import { SingleJokeWrapper, HeadWrapper, JokeContentWrapper, GroupButtonWrapper, FooterWrapper } from './styles';
import { listJokes } from 'utils/listJokes';
import { getCookie, setCookie } from "utils/funcs";

const JOKE_NAME_KEY = "JOKE_NAME_KEY";
const DATE_JOKE_NAME_KEY = "DATE_JOKE_NAME_KEY";

const SingleJoke = () => {
  const dateJokeStr = getCookie(DATE_JOKE_NAME_KEY);
  const todayStr = new Date().toLocaleDateString();
  const jokeStrData = getCookie(JOKE_NAME_KEY);
  const jokeObjectData = todayStr !== dateJokeStr ? {} : JSON.parse(jokeStrData || "{}");
  const [jokeData, setJokeData] = useState(jokeObjectData);

  useEffect(() => {
    if (todayStr !== dateJokeStr) {
      setCookie(DATE_JOKE_NAME_KEY, todayStr);
      setCookie(JOKE_NAME_KEY, "{}");
      setJokeData({});
    }
  }, [dateJokeStr, todayStr]);

  const listVotedIndexes = Object.keys(jokeData);
  const listRestIndexes = useMemo(() =>
    Array.from({length: listJokes.length}, (v, i) => i).filter((idx: number) => !listVotedIndexes.includes(`${idx}`))
  , [listVotedIndexes]);

  const handleVote = useCallback((state: boolean) => {
    setJokeData((prev: any) => {
      const newJokeData = {...prev, [listRestIndexes[0]]: state };
      setCookie(JOKE_NAME_KEY, JSON.stringify(newJokeData));
      return ({...prev, [listRestIndexes[0]]: state });
    });
    
  }, [listRestIndexes])

  return (
    <SingleJokeWrapper>
      <HeadWrapper>
        <p>A joke a day keeps the doctor away</p>
        <small>If you joke wrong way, your teeth have to pay. (Serious)</small>
      </HeadWrapper>
      <JokeContentWrapper>
        <p style={{ textAlign: listRestIndexes.length ? "left" : "center" }}>
          {listRestIndexes.length ? listJokes[listRestIndexes[0]] : "That's all the jokes for today! Come back another day!"}
        </p>
      </JokeContentWrapper>
      <GroupButtonWrapper>
        <button onClick={() => handleVote(true)} disabled={!listRestIndexes.length}>This is Funny!</button>
        <button onClick={() => handleVote(false)} disabled={!listRestIndexes.length}>This is not funny.</button>
      </GroupButtonWrapper>
      <FooterWrapper>
        <p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general
  information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and
  accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
        <p>Copyright 2021 HLS</p>
      </FooterWrapper>
    </SingleJokeWrapper>
  );
};

export default SingleJoke;
