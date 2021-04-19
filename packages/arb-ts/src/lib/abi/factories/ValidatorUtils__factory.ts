/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { ValidatorUtils } from '../ValidatorUtils'

export class ValidatorUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<ValidatorUtils> {
    return super.deploy(overrides || {}) as Promise<ValidatorUtils>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ValidatorUtils {
    return super.attach(address) as ValidatorUtils
  }
  connect(signer: Signer): ValidatorUtils__factory {
    return super.connect(signer) as ValidatorUtils__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidatorUtils {
    return new Contract(address, _abi, signerOrProvider) as ValidatorUtils
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
    ],
    name: 'areUnresolvedNodesLinear',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
    ],
    name: 'checkDecidableNextNode',
    outputs: [
      {
        internalType: 'enum ValidatorUtils.ConfirmType',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'node1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'node2',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxDepth',
        type: 'uint256',
      },
    ],
    name: 'findNodeConflict',
    outputs: [
      {
        internalType: 'enum ValidatorUtils.NodeConflict',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'staker1',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'staker2',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxDepth',
        type: 'uint256',
      },
    ],
    name: 'findStakerConflict',
    outputs: [
      {
        internalType: 'enum ValidatorUtils.NodeConflict',
        name: '',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
    ],
    name: 'getConfig',
    outputs: [
      {
        internalType: 'uint256',
        name: 'confirmPeriodBlocks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'extraChallengeTimeBlocks',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'arbGasSpeedLimitPerBlock',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'baseStake',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'stakeToken',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'startIndex',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
    ],
    name: 'getStakers',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'bool',
        name: 'hasMore',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'latestStaked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
    ],
    name: 'refundableStakers',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
    ],
    name: 'requireConfirmable',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
    ],
    name: 'requireRejectable',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'staker',
        type: 'address',
      },
    ],
    name: 'stakedNodes',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'stakerAddress',
        type: 'address',
      },
    ],
    name: 'stakerInfo',
    outputs: [
      {
        internalType: 'bool',
        name: 'isStaked',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'latestStakedNode',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountStaked',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'currentChallenge',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract Rollup',
        name: 'rollup',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'startIndex',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
    ],
    name: 'timedOutChallenges',
    outputs: [
      {
        internalType: 'contract IChallenge[]',
        name: '',
        type: 'address[]',
      },
      {
        internalType: 'bool',
        name: 'hasMore',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506129ca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c80637988ad371161007c5780637988ad37146101855780638f67e6bb14610198578063a8ac9cf3146101bb578063abeba4f7146101dc578063aea2f06e146101fd578063c308eaaf14610210578063e48a5f7b14610230576100bf565b806301d9717d146100c45780630a46c1b5146100ee5780631fc43bb61461010e5780633082d0291461012357806371229340146101455780637464ae0614610165575b600080fd5b6100d76100d23660046125f6565b610254565b6040516100e5929190612942565b60405180910390f35b6101016100fc3660046125da565b6103dc565b6040516100e59190612843565b61012161011c3660046125da565b6104be565b005b6101366101313660046126b2565b610a40565b6040516100e593929190612857565b6101586101533660046125da565b610f13565b6040516100e59190612812565b6101786101733660046125da565b611420565b6040516100e59190612743565b61013661019336600461262e565b61173a565b6101ab6101a63660046125f6565b61185c565b6040516100e5949392919061281d565b6101ce6101c936600461267e565b611a62565b6040516100e592919061277a565b6101ef6101ea36600461267e565b611d3d565b6040516100e5929190612756565b61015861020b3660046125da565b611ece565b61022361021e3660046125f6565b6120e3565b6040516100e591906127ce565b61024361023e3660046125da565b612336565b6040516100e5959493929190612950565b6000806000846001600160a01b0316633e96576e856040518263ffffffff1660e01b8152600401610285919061272f565b60206040518083038186803b15801561029d57600080fd5b505afa1580156102b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d591906125c2565b90508061035057846001600160a01b03166365f7f80d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031557600080fd5b505afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d91906125c2565b90505b604051633e347c6560e21b81526000906001600160a01b0387169063f8d1f1949061037f908590600401612939565b60206040518083038186803b15801561039757600080fd5b505afa1580156103ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cf91906125c2565b9196919550909350505050565b604051630fe21ddb60e11b81526000903090631fc43bb69061040290859060040161272f565b60006040518083038186803b15801561041a57600080fd5b505afa92505050801561042b575060015b6104345761043c565b5060016104b9565b6040516301c48a4d60e61b8152309063712293409061045f90859060040161272f565b60206040518083038186803b15801561047757600080fd5b505afa9250505080156104a7575060408051601f3d908101601f191682019092526104a4918101906125a2565b60015b6104b3575060006104b9565b50600290505b919050565b806001600160a01b03166367425daf6040518163ffffffff1660e01b815260040160006040518083038186803b1580156104f757600080fd5b505afa15801561050b573d6000803e3d6000fd5b505050506000816001600160a01b031663dff697876040518163ffffffff1660e01b815260040160206040518083038186803b15801561054a57600080fd5b505afa15801561055e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058291906125c2565b9050600081116105ad5760405162461bcd60e51b81526004016105a49061289e565b60405180910390fd5b6000826001600160a01b031663d735e21d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105e857600080fd5b505afa1580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062091906125c2565b90506000836001600160a01b0316634f0f4aa9836040518263ffffffff1660e01b81526004016106509190612939565b60206040518083038186803b15801561066857600080fd5b505afa15801561067c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a09190612586565b9050806001600160a01b03166388d221c66040518163ffffffff1660e01b815260040160006040518083038186803b1580156106db57600080fd5b505afa1580156106ef573d6000803e3d6000fd5b50505050836001600160a01b0316634f0f4aa9826001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b15801561073b57600080fd5b505afa15801561074f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077391906125c2565b6040518263ffffffff1660e01b815260040161078f9190612939565b60206040518083038186803b1580156107a757600080fd5b505afa1580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107df9190612586565b6001600160a01b0316633aa192746040518163ffffffff1660e01b815260040160006040518083038186803b15801561081757600080fd5b505afa15801561082b573d6000803e3d6000fd5b50505050836001600160a01b03166365f7f80d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561086857600080fd5b505afa15801561087c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a091906125c2565b816001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b1580156108d957600080fd5b505afa1580156108ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091191906125c2565b1461092e5760405162461bcd60e51b81526004016105a4906128ea565b604051630128a01960e21b81526001600160a01b038516906304a280649061095a90849060040161272f565b60206040518083038186803b15801561097257600080fd5b505afa158015610986573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109aa91906125c2565b8301816001600160a01b031663dff697876040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e557600080fd5b505afa1580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d91906125c2565b14610a3a5760405162461bcd60e51b81526004016105a4906128c2565b50505050565b600080600080876001600160a01b031663d735e21d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a7f57600080fd5b505afa158015610a93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab791906125c2565b90506000886001600160a01b0316634f0f4aa9896040518263ffffffff1660e01b8152600401610ae79190612939565b60206040518083038186803b158015610aff57600080fd5b505afa158015610b13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b379190612586565b6001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b158015610b6f57600080fd5b505afa158015610b83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba791906125c2565b90506000896001600160a01b0316634f0f4aa9896040518263ffffffff1660e01b8152600401610bd79190612939565b60206040518083038186803b158015610bef57600080fd5b505afa158015610c03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c279190612586565b6001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b158015610c5f57600080fd5b505afa158015610c73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9791906125c2565b905060005b87811015610efa57888a1415610cbf5760008a8a96509650965050505050610f09565b81831415610cda5760018a8a96509650965050505050610f09565b8383108015610ce857508382105b15610d0257506002955060009450849350610f0992505050565b81831015610e00578198508a6001600160a01b0316634f0f4aa98a6040518263ffffffff1660e01b8152600401610d399190612939565b60206040518083038186803b158015610d5157600080fd5b505afa158015610d65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d899190612586565b6001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b158015610dc157600080fd5b505afa158015610dd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df991906125c2565b9150610ef2565b8299508a6001600160a01b0316634f0f4aa98b6040518263ffffffff1660e01b8152600401610e2f9190612939565b60206040518083038186803b158015610e4757600080fd5b505afa158015610e5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7f9190612586565b6001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b158015610eb757600080fd5b505afa158015610ecb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eef91906125c2565b92505b600101610c9c565b50600389899550955095505050505b9450945094915050565b6000816001600160a01b03166367425daf6040518163ffffffff1660e01b815260040160006040518083038186803b158015610f4e57600080fd5b505afa158015610f62573d6000803e3d6000fd5b505050506000826001600160a01b0316634f0f4aa9846001600160a01b031663d735e21d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610fb057600080fd5b505afa158015610fc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe891906125c2565b6040518263ffffffff1660e01b81526004016110049190612939565b60206040518083038186803b15801561101c57600080fd5b505afa158015611030573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110549190612586565b90506000836001600160a01b03166365f7f80d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561109157600080fd5b505afa1580156110a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c991906125c2565b826001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b15801561110257600080fd5b505afa158015611116573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113a91906125c2565b149050801561141957816001600160a01b0316632edfb42a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561117c57600080fd5b505afa158015611190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b491906125c2565b4310156111d35760405162461bcd60e51b81526004016105a490612910565b836001600160a01b0316634f0f4aa9836001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b15801561121b57600080fd5b505afa15801561122f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125391906125c2565b6040518263ffffffff1660e01b815260040161126f9190612939565b60206040518083038186803b15801561128757600080fd5b505afa15801561129b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bf9190612586565b6001600160a01b0316633aa192746040518163ffffffff1660e01b815260040160006040518083038186803b1580156112f757600080fd5b505afa15801561130b573d6000803e3d6000fd5b5050604051630128a01960e21b81526001600160a01b03871692506304a28064915061133b90859060040161272f565b60206040518083038186803b15801561135357600080fd5b505afa158015611367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138b91906125c2565b826001600160a01b031663dff697876040518163ffffffff1660e01b815260040160206040518083038186803b1580156113c457600080fd5b505afa1580156113d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113fc91906125c2565b146114195760405162461bcd60e51b81526004016105a490612879565b9392505050565b60606000826001600160a01b031663dff697876040518163ffffffff1660e01b815260040160206040518083038186803b15801561145d57600080fd5b505afa158015611471573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149591906125c2565b905060608167ffffffffffffffff811180156114b057600080fd5b506040519080825280602002602001820160405280156114da578160200160208202803683370190505b5090506000846001600160a01b03166365f7f80d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561151857600080fd5b505afa15801561152c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155091906125c2565b90506000805b8481101561172f576040516362a82d7d60e01b81526000906001600160a01b038916906362a82d7d9061158d908590600401612939565b60206040518083038186803b1580156115a557600080fd5b505afa1580156115b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115dd9190612586565b90506000886001600160a01b0316633e96576e836040518263ffffffff1660e01b815260040161160d919061272f565b60206040518083038186803b15801561162557600080fd5b505afa158015611639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165d91906125c2565b90508481111580156116f45750604051631a7f494760e21b81526000906001600160a01b038b16906369fd251c9061169990869060040161272f565b60206040518083038186803b1580156116b157600080fd5b505afa1580156116c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e99190612586565b6001600160a01b0316145b15611725578186858151811061170657fe5b6001600160a01b03909216602092830291909101909101526001909301925b5050600101611556565b508252509392505050565b600080600080876001600160a01b0316633e96576e886040518263ffffffff1660e01b815260040161176c919061272f565b60206040518083038186803b15801561178457600080fd5b505afa158015611798573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117bc91906125c2565b90506000886001600160a01b0316633e96576e886040518263ffffffff1660e01b81526004016117ec919061272f565b60206040518083038186803b15801561180457600080fd5b505afa158015611818573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183c91906125c2565b905061184a89838389610a40565b94509450945050509450945094915050565b600080600080856001600160a01b0316636177fd18866040518263ffffffff1660e01b815260040161188e919061272f565b60206040518083038186803b1580156118a657600080fd5b505afa1580156118ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118de91906125a2565b604051631f4b2bb760e11b81526001600160a01b03881690633e96576e9061190a90899060040161272f565b60206040518083038186803b15801561192257600080fd5b505afa158015611936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061195a91906125c2565b604051630ef40a6760e41b81526001600160a01b0389169063ef40a67090611986908a9060040161272f565b60206040518083038186803b15801561199e57600080fd5b505afa1580156119b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d691906125c2565b604051631a7f494760e21b81526001600160a01b038a16906369fd251c90611a02908b9060040161272f565b60206040518083038186803b158015611a1a57600080fd5b505afa158015611a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a529190612586565b9299919850965090945092505050565b6060600060606000611a75878787611d3d565b915091506060825167ffffffffffffffff81118015611a9357600080fd5b50604051908082528060200260200182016040528015611abd578160200160208202803683370190505b5090506000805b8451811015611d2e576000858281518110611adb57fe5b6020026020010151905060008b6001600160a01b03166369fd251c836040518263ffffffff1660e01b8152600401611b13919061272f565b60206040518083038186803b158015611b2b57600080fd5b505afa158015611b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b639190612586565b90506001600160a01b03811615611d245760008190506000816001600160a01b031663925f9a966040518163ffffffff1660e01b815260040160206040518083038186803b158015611bb457600080fd5b505afa158015611bc8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bec91906125c2565b43039050816001600160a01b031663e87e35896040518163ffffffff1660e01b815260040160206040518083038186803b158015611c2957600080fd5b505afa158015611c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6191906125c2565b81118015611cf05750836001600160a01b0316826001600160a01b031663bb4af0b16040518163ffffffff1660e01b815260040160206040518083038186803b158015611cad57600080fd5b505afa158015611cc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce59190612586565b6001600160a01b0316145b15611d215781878781518110611d0257fe5b6001600160a01b03909216602092830291909101909101526001909501945b50505b5050600101611ac4565b50815297909650945050505050565b6060600080856001600160a01b031663dff697876040518163ffffffff1660e01b815260040160206040518083038186803b158015611d7b57600080fd5b505afa158015611d8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db391906125c2565b90508084860111611dc75750600190508383015b60608167ffffffffffffffff81118015611de057600080fd5b50604051908082528060200260200182016040528015611e0a578160200160208202803683370190505b50905060005b82811015611ec2576040516362a82d7d60e01b81526001600160a01b038916906362a82d7d90611e46908a850190600401612939565b60206040518083038186803b158015611e5e57600080fd5b505afa158015611e72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e969190612586565b828281518110611ea257fe5b6001600160a01b0390921660209283029190910190910152600101611e10565b50925050935093915050565b600080826001600160a01b0316637ba9534a6040518163ffffffff1660e01b815260040160206040518083038186803b158015611f0a57600080fd5b505afa158015611f1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f4291906125c2565b90506000836001600160a01b031663d735e21d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611f7f57600080fd5b505afa158015611f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb791906125c2565b90505b8181116120d9576000811180156120c15750604051634f0f4aa960e01b81526000198201906001600160a01b03861690634f0f4aa990611ffe908590600401612939565b60206040518083038186803b15801561201657600080fd5b505afa15801561202a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204e9190612586565b6001600160a01b031663479c92546040518163ffffffff1660e01b815260040160206040518083038186803b15801561208657600080fd5b505afa15801561209a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120be91906125c2565b14155b156120d1576000925050506104b9565b600101611fba565b5060019392505050565b60408051620186a08082526230d4208201909252606091829190602082016230d4008036833701905050905060008090506000856001600160a01b03166365f7f80d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561214f57600080fd5b505afa158015612163573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061218791906125c2565b90505b856001600160a01b0316637ba9534a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156121c357600080fd5b505afa1580156121d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121fb91906125c2565b811161232c57604051634f0f4aa960e01b81526000906001600160a01b03881690634f0f4aa990612230908590600401612939565b60206040518083038186803b15801561224857600080fd5b505afa15801561225c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122809190612586565b6040516348b4573960e11b81529091506001600160a01b03821690639168ae72906122af90899060040161272f565b60206040518083038186803b1580156122c757600080fd5b505afa1580156122db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122ff91906125a2565b15612323578184848151811061231157fe5b60209081029190910101526001909201915b5060010161218a565b5081529392505050565b6000806000806000856001600160a01b0316632e7acfa66040518163ffffffff1660e01b815260040160206040518083038186803b15801561237757600080fd5b505afa15801561238b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123af91906125c2565b9450856001600160a01b031663771b2f976040518163ffffffff1660e01b815260040160206040518083038186803b1580156123ea57600080fd5b505afa1580156123fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061242291906125c2565b9350856001600160a01b0316635e8ef1066040518163ffffffff1660e01b815260040160206040518083038186803b15801561245d57600080fd5b505afa158015612471573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061249591906125c2565b9250856001600160a01b03166376e7e23b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156124d057600080fd5b505afa1580156124e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061250891906125c2565b9150856001600160a01b03166351ed6a306040518163ffffffff1660e01b815260040160206040518083038186803b15801561254357600080fd5b505afa158015612557573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061257b9190612586565b905091939590929450565b600060208284031215612597578081fd5b81516114198161297c565b6000602082840312156125b3578081fd5b81518015158114611419578182fd5b6000602082840312156125d3578081fd5b5051919050565b6000602082840312156125eb578081fd5b81356114198161297c565b60008060408385031215612608578081fd5b82356126138161297c565b915060208301356126238161297c565b809150509250929050565b60008060008060808587031215612643578182fd5b843561264e8161297c565b9350602085013561265e8161297c565b9250604085013561266e8161297c565b9396929550929360600135925050565b600080600060608486031215612692578283fd5b833561269d8161297c565b95602085013595506040909401359392505050565b600080600080608085870312156126c7578384fd5b84356126d28161297c565b966020860135965060408601359560600135945092505050565b6000815180845260208085019450808401835b838110156127245781516001600160a01b0316875295820195908201906001016126ff565b509495945050505050565b6001600160a01b0391909116815260200190565b60006020825261141960208301846126ec565b60006040825261276960408301856126ec565b905082151560208301529392505050565b604080825283519082018190526000906020906060840190828701845b828110156127bc5781516001600160a01b031684529284019290840190600101612797565b50505093151592019190915250919050565b6020808252825182820181905260009190848201906040850190845b81811015612806578351835292840192918401916001016127ea565b50909695505050505050565b901515815260200190565b9315158452602084019290925260408301526001600160a01b0316606082015260800190565b602081016003831061285157fe5b91905290565b606081016004851061286557fe5b938152602081019290925260409091015290565b6020808252600b908201526a4841535f5354414b45525360a81b604082015260600190565b6020808252600a90820152694e4f5f5354414b45525360b01b604082015260600190565b6020808252600e908201526d1393d517d0531317d4d51052d15160921b604082015260600190565b6020808252600c908201526b24a72b20a624a22fa82922ab60a11b604082015260600190565b6020808252600f908201526e4245464f52455f444541444c494e4560881b604082015260600190565b90815260200190565b918252602082015260400190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b6001600160a01b038116811461299157600080fd5b5056fea2646970667358221220f799655c06f91012c025a0f6d578d590e11125dc582343b8b8af4630ed63baeb64736f6c634300060b0033'