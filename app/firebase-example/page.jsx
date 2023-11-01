"use client"
import FirebaseForm from "@/Components/Firebase/firebaseForm"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

// export default function FirebaseExamplePage() {
//   return (
//     <div className="moodConvertAllContainer">
//       <div className="flex min-h-screen flex-col items-center justify-between p-24 termsConditionsAllContainer bg-gray-500">
//         <GoogleReCaptchaProvider
//           reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//         >
//           <div className="text-black">Test Form</div>
//           <FirebaseForm />
//         </GoogleReCaptchaProvider>
//       </div>
//     </div>
//   )
// }

import GetInTouch from "@/Components/GetInTouch"
import PrivacyPolicy from "@/Components/Privacypolicy"

export default function Home() {
  return (
    <div className="partnershipAllContainer">
      <div className="getInTouchContainer">
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        >
          <div className="text-black">Test Form</div>
          <FirebaseForm />
        </GoogleReCaptchaProvider>
      </div>
    </div>
  )
}
