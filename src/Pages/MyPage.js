import React from 'react';
import Footer from '../Footer';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';

// ! 위 코드는 수정하지 않습니다.

const MyPage = () => {
  // username이 Alice인 요소만 필터링
  const filteredTweets = dummyTweets.filter((tweet) => tweet.username === 'Alice');

  return (
    <section className="myInfo">
      {filteredTweets.map((tweet) => (
        <div className="myInfo__container" key={tweet.id}>
          <div className="myInfo__wrapper">
            <div className="myInfo__profile">
              <img src={tweet.picture} alt="profile" />
            </div>
            <div className="myInfo__detail">
              <p className="myInfo__detailName">
                {tweet.username} Profile
              </p>
              <p>28 팔로워 100 팔로잉</p>
            </div>
          </div>

          {/* 필터링된 트윗 목록 */}
          <ul className="tweets__mypage">
            <li className="tweet">
              <div className="tweet__profile">
                <img src={tweet.picture} alt="user-profile" />
              </div>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  <span className="tweet__username">{tweet.username}</span>
                  <span className="tweet__createdAt">{tweet.createdAt}</span>
                </div>
                <div className="tweet__message">{tweet.content}</div>
              </div>
            </li>
          </ul>
        </div>
      ))}
      <Footer />
    </section>
  );
};

export default MyPage;
