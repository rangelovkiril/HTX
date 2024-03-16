// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import './ReviewCoin.sol';

contract Proposals is Ownable {
    ReviewCoin immutable token;

    uint proposalcoast = 100;
    uint votecoast = (proposalcoast * 10) / 100;

    struct Proposal {
        address initiator;
        string title;
        string content;
        uint timestamp;
        bool executed;
        uint confirmations;
    }

    mapping(uint => Proposal) public proposals;
    mapping(address => bool) internal voted;

    constructor(address _owner) Ownable(_owner) {
        token = new ReviewCoin(_owner);
    }

    event ProposalCreated(string indexed title, uint indexed id, uint timestamp);

    function newProposal(
        string calldata _title,
        string calldata _content
    ) external returns (uint) {
        require(msg.sender != address(0), "Internal error");
        require(bytes(_title).length > 0, "Title required");
        require(bytes(_content).length > 0, "Content required");

        uint nextId = uint(
            _proposalId(
                msg.sender,
                _title,
                _content,
                block.timestamp
            )
        );

        Proposal memory nextProposal = Proposal({
            initiator: msg.sender,
            title: _title,
            content: _content,
            timestamp: block.timestamp,
            executed: false,
            confirmations: 0
        });

        proposals[nextId] = nextProposal;

        emit ProposalCreated(_title, nextId, block.timestamp);
        return nextId;
    }

    function confirm(uint _uid) external {
        require(!voted[msg.sender], 'Already voted');
        voted[msg.sender] = true;

        proposals[_uid].confirmations += ReviewCoin(token).balanceOf(msg.sender);
        ReviewCoin(token).burnFrom(msg.sender, votecoast);
    }

    function reject(uint _uid) external {
        require(!voted[msg.sender], 'Already voted');
        voted[msg.sender] = true;

        proposals[_uid].confirmations -= ReviewCoin(token).balanceOf(msg.sender);
        ReviewCoin(token).burnFrom(msg.sender, votecoast);
    }


    function _proposalId(
        address initiator_,
        string calldata title_,
        string calldata content_,
        uint timestamp_
    ) internal pure returns (bytes32 id) {
        id = keccak256(
            abi.encode(
                initiator_,
                title_,
                content_,
                timestamp_
            )
        );
    }

    fallback() external {
        revert('Unknown function');
    }

    receive() external payable {
        if (msg.value > 0) {
            (bool success, ) = payable(msg.sender).call{value: msg.value}(
                abi.encode(0x646f6573206e6f7420726563656976652066756e6473)
            );
            // Hardcoded "Does not receive funds!"
            require(success);
        }
    }
}

