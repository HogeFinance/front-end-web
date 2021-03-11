import React from 'react';
import hoge from 'assets/hoge.png';

const HomePage = () => (
    <div className="main">
        <div className="child">
            <div className="title">
                <img className="logo" src={hoge} alt="hoge" />
                <h1>HOGE FINANCE</h1>
                <p>A deflationary farming meme powered currency.</p>
                <p>It&apos;s DOGE but DeFi.</p>
                <br />
                <a className="mr-5" href="https://t.me/hogefinance" target="_blank" rel="noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-telegram"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#9E9E9E"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                </a>

                <a
                    className="mr-5"
                    href="https://twitter.com/hogefinance"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-twitter"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="#9E9E9E"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                    </svg>
                </a>

                <a
                    className="mr-5"
                    href="https://www.reddit.com/r/hogefinance"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-reddit"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#9E9E9E"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
                        <path d="M12 8l1 -5l6 1" />
                        <circle cx="19" cy="4" r="1" />
                        <circle cx="9" cy="13" r=".5" fill="currentColor" />
                        <circle cx="15" cy="13" r=".5" fill="currentColor" />
                        <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
                    </svg>
                </a>

                <a
                    className="mr-5"
                    href="https://discord.gg/5F8taSX9"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-discord"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#9E9E9E"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0" />
                        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5" />
                        <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5" />
                    </svg>
                </a>

                <a
                    href="https://www.instagram.com/invites/contact/?i=6tmp9smqumnp&utm_content=l6b5qvi"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-instagram"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#9e9e9e"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg>
                </a>
            </div>

            {/* <NavLink className="uni-guide" to="/uniswap-guide">
          UNISWAP GUIDE
        </NavLink> */}

            <div className="section">
                <div>
                    <h3>Tokenomics:</h3>
                    <ul>
                        <li>1,000,000,000,000 Max supply</li>
                        <li>All supply added to liquidity</li>
                        <li>No team tokens</li>
                        <li>Fair launch</li>
                    </ul>
                </div>
                <div>
                    <h3>Rules:</h3>
                    <ul>
                        <li>1% burn every swap</li>
                        <li>1% distributed to holders every swap</li>
                        <li>Use at least 2.5% slippage when swap</li>
                    </ul>
                </div>
                <div>
                    <h3>Proofs:</h3>
                    <ul>
                        <a
                            href="https://etherscan.io/token/0xfad45e47083e4607302aa43c65fb3106f1cd7607"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li>Contract Address</li>
                        </a>
                        <a
                            href="https://unicrypt.network/pair/0x7fd1de95fc975fbbd8be260525758549ec477960"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <li>Locked liquidity</li>
                        </a>
                        <a
                            href="https://etherscan.io/token/0xfad45e47083e4607302aa43c65fb3106f1cd7607?a=0x000000000000000000000000000000000000dead"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li>Burnt tokens</li>
                        </a>
                        <a
                            href="https://www.dextools.io/app/uniswap/pair-explorer/0x7fd1de95fc975fbbd8be260525758549ec477960"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <li>Dextools chart</li>
                        </a>
                    </ul>
                </div>
            </div>

            <div className="btn-action">
                <a
                    href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xfad45e47083e4607302aa43c65fb3106f1cd7607"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="buybtn" type="button">Swap on Uniswap</button>
                </a>

                <a href="http://hoge.fun" target="_blank" rel="noreferrer">
                    <button className="buybtn" type="button">PLAY Hoge Runner</button>
                </a>
            </div>
        </div>
    </div>
);

export default HomePage;
