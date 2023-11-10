import GetInTouch from "@/Components/GetInTouch"
import TermsConditions from "@/Components/TermsConditions"

export const metadata = {
  title: "Terms and Conditions",
  description: "Read about our terms and conditions.",
}

export default function Home() {
  return (
    <div>
      <TermsConditions />
      <GetInTouch />
    </div>
  )
}
