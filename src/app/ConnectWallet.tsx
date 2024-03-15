'use client'

import React, {useState, useEffect} from 'react'

declare var window: any

import { ethers } from 'ethers'
// import factory from typechain

export default function ConnectWallet() {
  // State to store and show the connected account
  const [connectedAccount, setConnectedAccount] = useState('null');

  async function connectMetamask() {

    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum)

      const account = provider.getSigner()

      console.log(account)
    } 
    else {
      alert('Please download Metamask');
    }
  }

  return (
  <div className='button'>
    <button className='' onClick={() => connectMetamask()}>Connect to Metamask</button>
  </div>

  );
} 