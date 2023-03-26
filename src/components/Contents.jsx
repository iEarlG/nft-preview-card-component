import React from 'react';

import nftImage from '../assets/images/image-equilibrium.jpg';
import nftAuthor from '../assets/images/image-avatar.png';
import ethIcon from '../assets/images/icon-ethereum.svg';
import nftClock from '../assets/images/icon-clock.svg';
import nftView from '../assets/images/icon-view.svg';

const Contents = () => {
  return (
    <main>
      <div className="container">
        <div className="nft-card">
          <div className="nft-image">
            <img src={nftImage} alt="nft_image" />
            {/* <div className="icon-view"><img src={nftView} aalt="icon-view" /></div> */}
          </div>

          <h1 className="nft-title">Equilibrium #3429</h1>
          <p className="nft-description">Our Equilibrium collection promotes balance and calm.</p>

          <div className="nft-details">
            <div className="nft-eth">
              <img src={ethIcon} alt="ethIcon" />
              <span className="nft-price">0.041 ETH</span>
            </div>
            <div className="nft-time">
              <img src={nftClock} alt="nftClock" />
              <span className="nft-time">3 days left</span>
            </div>
          </div>

          <div className="nft-author">
            <img src={nftAuthor} alt="nftAuthor" className="author-avatar" />
            <span className="author-details">Creation of <span>Jules Wyvern</span></span>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="no-referrer"> Frontend Mentor</a>. 
        Coded by <a href="https://github.com/iEarlG" target="_blank" rel="no-referrer">Earl A. Villapaz</a>.
      </div>
    </main>
  )
}

export default Contents;