
# ⚡ ZeroWallet

**The modern playground for passkey-powered, gasless Solana transactions — no wallet, no seed phrase, just biometrics.**

ZeroWallet is a live, interactive environment that demonstrates how Web2-grade UX (Face ID, Touch ID, no wallets, no seed phrases) maps deterministically to real Solana transactions — with full execution visibility.

---

## ✨ What is ZeroWallet?

ZeroWallet is not just a demo.

It is a developer-first inspection tool that shows:
- How user intent becomes a Solana transaction
- How passkeys orchestrate signing, sponsorship, and execution
- How biometrics replace wallets
- How gasless UX still results in verifiable on-chain proof

---

## 🔥 Why ZeroWallet Exists

Most Solana demos answer "can it work?"

ZeroWallet answers:
- How does it work?
- What exactly was signed?
- Who paid for gas?
- What ran on-chain?
- Why did it succeed or fail?

### Traditional Solana UX vs ZeroWallet UX

| Traditional Solana | ZeroWallet |
|--------------------|--------------------|
| Browser wallet popups | Native Face ID / Touch ID |
| Seed phrases | Zero secrets exposed to users |
| User pays gas | Gasless via paymaster |
| Black-box signing | Transparent execution flow |
| Hard to debug | Step-by-step lifecycle |

---

## 🧠 Core Features

### 🔐 Passkey-Based Authentication
- WebAuthn (Face ID / Touch ID)
- No wallet installation
- No seed phrases
- Secure enclave backed keys

### ⚡ Gasless Transactions
- Paymaster-sponsored execution
- Zero SOL required from users
- Identical on-chain guarantees

### 🧭 Transaction Flow Inspector
Transaction is broken into deterministic steps:

1. User intent captured
2. Instruction assembly
3. Passkey orchestration
4. Gas sponsorship
5. Biometric authorization
6. Validator execution
7. Finalization & proof

### 🧾 On-Chain Proof Snapshot
- Transaction status
- Network
- Signature (copyable)
- Timestamp
- Direct Solana Explorer link

---

## 🧪 Who is this for?

- Developers building Solana dApps without wallets
- Protocol teams evaluating passkey UX
- Judges & reviewers validating real on-chain execution
- Designers studying wallet-less crypto UX
- Founders pitching Web2-grade onboarding on Solana

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React + TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| Styling | Tailwind CSS + Shadcn/UI |
| Wallet SDK | LazorKit |
| Blockchain | Solana (Devnet) |
| Auth | WebAuthn (Passkeys) |
| UX | Gasless Transactions |

---

## 📂 Project Structure

```
zerowallet/
├── src/
│   ├── pages/          # App routes (Login, Actions, Debug)
│   ├── components/     # UI components
│   ├── lib/            # Transaction utilities
│   ├── hooks/          # Wallet + state hooks
│   └── styles/         # Tailwind config
├── public/
└── README.md
```

---

## 🚀 Getting Started (Local)

```bash
git clone https://github.com/Priyanshubhartistm/ZeroWallet
cd ZeroWallet
npm install
npm run dev
```

Open:
👉 http://localhost:5173

---

## 🎯 Design Philosophy

ZeroWallet is built around three principles:

### 1️⃣ UX First
If it doesn't feel like Web2, it's not good enough.

### 2️⃣ Transparency by Default
Every abstraction is explainable. No magic.

### 3️⃣ Production-Grade Example
This is real code, not pseudo-demos.

---

## 👤 Author

**Priyanshu Bharti**
B.Tech CSE | Full-Stack & Web3 Developer

- GitHub: https://github.com/Priyanshubhartistm

---

## 📜 License

MIT License
Feel free to fork, learn, build, and extend.
