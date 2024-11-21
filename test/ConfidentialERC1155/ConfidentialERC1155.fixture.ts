import { ethers } from "hardhat";

import type { IncoEventContract } from "../../types";
import { getSigners } from "../signers";


export async function deployConfidentialERC1155(): Promise<IncoEventContract> {
  const signers = await getSigners();

  const erc1155ContractFactory = await ethers.getContractFactory("IncoEventContract");
  const erc1155Contract = await erc1155ContractFactory.connect(signers.alice).deploy("0x3BaF3000D1C82229bdA54c4705dFf82119230De1");

  return erc1155Contract;
}
