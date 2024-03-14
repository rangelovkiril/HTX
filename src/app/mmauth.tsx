// src/app/page.jsx
import { useState } from 'react';
import { Web3 } from 'web3';
import styles from './mmauth_style.css'; 

function MyApp() {
  // State to store and show the connected account
  const [connectedAccount, setConnectedAccount] = useState('null');
    
  async function connectMetamask() {
    // Check if Metamask is installed
    if (window.ethereum) {
      // Instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      // Request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the connected accounts
      const accounts = await web3.eth.getAccounts();

      setConnectedAccount(accounts[0]);
    } else {
      alert('Please download Metamask');
    }
  }

  return (
    <div className={styles.container}>
      {/* Button to trigger Metamask connection */}
      <button className={styles.button} onClick={() => connectMetamask()}>Connect to Metamask</button>

      {/* Display the connected account */}
      <h2 className={styles.account}>{connectedAccount}</h2>
    </div>
  );
}

export default MyApp;
