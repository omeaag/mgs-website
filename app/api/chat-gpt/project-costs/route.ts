// Define the type for a feature
type Feature =
  | "erc20Token"
  | "nftMarketplace"
  | "oracleConnection"
  | "templateWebsite" // ... add other features as needed

// Define the type for the costs object
type Costs = {
  [key in Feature]: number
}

export async function GET(req: Request, res: Response) {
  const body = req.body

  const costs: Costs = {
    erc20Token: 1000,
    nftMarketplace: 5000,
    oracleConnection: 2000,
    templateWebsite: 1500,
    // ... add other features and their costs
  }

  // let totalCost = 0
  // features.forEach((feature: Feature) => {
  // 	totalCost += costs[feature] || 0
  // })

  return new Response("OK")
}

export async function POST(req: Request) {
  const body = await req.json()
  if (!body.features)
    return new Response("No features provided", { status: 400 })

  const features: Feature[] = body.features

  const costs: Costs = {
    erc20Token: 1000,
    nftMarketplace: 5000,
    oracleConnection: 2000,
    templateWebsite: 1500,
    // ... add other features and their costs
  }

  let totalCost = 0
  features.forEach((feature: Feature) => {
    totalCost += costs[feature] || 0
  })

  return new Response(JSON.stringify({ totalCost }), { status: 200 })
}

// https://www.youtube.com/watch?v=vrR4MlB7nBI&t=318s
