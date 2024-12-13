export const pancakeVeSenderV2ABI = [
  {
    inputs: [
      { internalType: 'address', name: '_veCake', type: 'address' },
      { internalType: 'address', name: '_pancakeProfileAddress', type: 'address' },
      { internalType: 'address', name: '_endpoint', type: 'address' },
      { internalType: 'address', name: '_delegate', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'EnforcedPause', type: 'error' },
  { inputs: [], name: 'ExpectedPause', type: 'error' },
  { inputs: [], name: 'InvalidDelegate', type: 'error' },
  { inputs: [], name: 'InvalidEndpointCall', type: 'error' },
  {
    inputs: [{ internalType: 'uint16', name: 'optionType', type: 'uint16' }],
    name: 'InvalidOptionType',
    type: 'error',
  },
  { inputs: [], name: 'LzTokenUnavailable', type: 'error' },
  { inputs: [{ internalType: 'uint32', name: 'eid', type: 'uint32' }], name: 'NoPeer', type: 'error' },
  { inputs: [{ internalType: 'uint256', name: 'msgValue', type: 'uint256' }], name: 'NotEnoughNative', type: 'error' },
  { inputs: [{ internalType: 'address', name: 'addr', type: 'address' }], name: 'OnlyEndpoint', type: 'error' },
  {
    inputs: [
      { internalType: 'uint32', name: 'eid', type: 'uint32' },
      { internalType: 'bytes32', name: 'sender', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint128', name: 'gas', type: 'uint128' }],
    name: 'GasForDestinationLzReceiveUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint32', name: 'eid', type: 'uint32' },
      { indexed: false, internalType: 'bytes32', name: 'peer', type: 'bytes32' },
    ],
    name: 'PeerSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'userAddress', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'userId', type: 'uint256' },
      { indexed: false, internalType: 'int128', name: 'amount', type: 'int128' },
      { indexed: false, internalType: 'uint256', name: 'end', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'cakePoolProxy', type: 'address' },
      { indexed: false, internalType: 'uint128', name: 'cakeAmount', type: 'uint128' },
      { indexed: false, internalType: 'uint48', name: 'lockEndTime', type: 'uint48' },
      { indexed: false, internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
    ],
    name: 'SyncMsgSend',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'bridge_buffer', type: 'uint256' }],
    name: 'UpdateBridgeBuffer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BRIDGE_BUFFER',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint32', name: 'srcEid', type: 'uint32' },
          { internalType: 'bytes32', name: 'sender', type: 'bytes32' },
          { internalType: 'uint64', name: 'nonce', type: 'uint64' },
        ],
        internalType: 'struct Origin',
        name: 'origin',
        type: 'tuple',
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'data',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endpoint',
    outputs: [{ internalType: 'contract ILayerZeroEndpointV2', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasForDestinationLzReceive',
    outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint32', name: '_dstEid', type: 'uint32' },
      { internalType: 'uint128', name: '_dstGasCost', type: 'uint128' },
    ],
    name: 'getEstimateGasFees',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'nativeFee', type: 'uint256' },
          { internalType: 'uint256', name: 'lzTokenFee', type: 'uint256' },
        ],
        internalType: 'struct MessagingFee',
        name: 'fee',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint32', name: 'srcEid', type: 'uint32' },
          { internalType: 'bytes32', name: 'sender', type: 'bytes32' },
          { internalType: 'uint64', name: 'nonce', type: 'uint64' },
        ],
        internalType: 'struct Origin',
        name: '',
        type: 'tuple',
      },
      { internalType: 'bytes', name: '', type: 'bytes' },
      { internalType: 'address', name: '_sender', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint32', name: 'srcEid', type: 'uint32' },
          { internalType: 'bytes32', name: 'sender', type: 'bytes32' },
          { internalType: 'uint64', name: 'nonce', type: 'uint64' },
        ],
        internalType: 'struct Origin',
        name: '_origin',
        type: 'tuple',
      },
      { internalType: 'bytes32', name: '_guid', type: 'bytes32' },
      { internalType: 'bytes', name: '_message', type: 'bytes' },
      { internalType: 'address', name: '_executor', type: 'address' },
      { internalType: 'bytes', name: '_extraData', type: 'bytes' },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint32', name: '', type: 'uint32' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ internalType: 'uint64', name: 'nonce', type: 'uint64' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { internalType: 'uint64', name: 'senderVersion', type: 'uint64' },
      { internalType: 'uint64', name: 'receiverVersion', type: 'uint64' },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pancakeProfileAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: 'en', type: 'bool' }],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint32', name: 'eid', type: 'uint32' }],
    name: 'peers',
    outputs: [{ internalType: 'bytes32', name: 'peer', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'uint32', name: '_dstEid', type: 'uint32' },
      { internalType: 'address', name: '_user', type: 'address' },
      { internalType: 'bool', name: '_syncVeCake', type: 'bool' },
      { internalType: 'bool', name: '_syncProfile', type: 'bool' },
      { internalType: 'uint128', name: '_dstGasCost', type: 'uint128' },
    ],
    name: 'sendSyncMsg',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_delegate', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint32', name: '_eid', type: 'uint32' },
      { internalType: 'bytes32', name: '_peer', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_bridge_buffer', type: 'uint256' }],
    name: 'updateBridgeBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint128', name: '_gasForDestinationLzReceive', type: 'uint128' }],
    name: 'updateGasForDestinationLzReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'veCake',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const
