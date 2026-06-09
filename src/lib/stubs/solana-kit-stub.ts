// Universal stub — catches ALL named imports from missing @solana/* sub-packages
// Uses a Proxy so any import resolves to a no-op function/value without errors

const stub: any = new Proxy(
  {},
  {
    get(_target, prop) {
      if (prop === '__esModule') return true;
      if (prop === 'default') return {};
      // Return a no-op function for any named export
      return () => {};
    },
  }
);

export default stub;

// Re-export the proxy itself so named imports don't fail
export const {
  address,
  blockhash,
  signature,
  pipe,
  createSolanaRpc,
  createNoopSigner,
  assertIsAddress,
  isTransactionSigner,
  setTransactionMessageFeePayerSigner,
  createEmptyClient,
  TOKEN_PROGRAM_ADDRESS,
  TRANSFER_DISCRIMINATOR,
  payer,
  rpc,
  getBase64Codec,
  getCompiledTransactionMessageCodec,
  setTransactionMessageLifetimeUsingBlockhash,
  createTransactionPlannerPlugin,
  createComputeUnitLimitFactory,
  findAssociatedTokenPda,
  getTransferInstruction,
  parseTransferInstruction,
  appendTransactionMessageInstructions,
  createTransactionMessage,
  createTransactionPlanExecutor,
  getBase64EncodedWireTransaction,
  getBase64Encoder,
  getSignatureFromTransaction,
  getTransactionDecoder,
  partiallySignTransactionMessageWithSigners,
  createTransactionPlanner,
  fillProvisorySetComputeUnitLimitInstruction,
  getSetComputeUnitLimitInstruction,
  getSetComputeUnitPriceInstruction,
  planAndSendTransactions,
  transactionPlanExecutor,
  transactionPlanner,
  estimateAndUpdateProvisoryComputeUnitLimitFactory,
  estimateComputeUnitLimitFactory,
  decompileTransactionMessage,
} = new Proxy({}, { get: () => () => {} }) as any;
