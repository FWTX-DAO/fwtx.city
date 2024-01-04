/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1M5S49l8LHK
 */
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <FWTXDAOLOGO className="h-6 w-6" />
          <span>FWTX DAO</span>
        </Link>
        {/* <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav> */}
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  FWTX DAO: The Future of Civic Cyber Education & Web3 Excellence
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We are a municipal DAO dedicated to the promotion and integration of Web3 technologies into everyday
                  civic life. By fostering education and collaboration, we aim to create a more informed and equitable
                  digital future.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="https://discord.gg/nh7z664e5Z"
                  >
                    Join our Discord
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="https://x.com/FWTX_DAO"
                  >
                    Follow us on X
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/fwtx-cyber.png"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Driving Innovation Through Collaboration
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore our latest initiatives designed to promote civic engagement and digital literacy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-bold">Texas Blockchain Council</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                    Non-profit industry association working to make the State of Texas the jurisdiction of choice for bitcoin, blockchain, and digital asset innovation.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-1">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-bold">Yeetum</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                    Platform for cyber & economic information pipelines, intel newsletter, investment club, and analyst community.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-1">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-bold">Project Moonshot</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Mission to expedite and fill the gap of cyber and technical skills development for NextGen workforce to deploy Web3 technology.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join FWTX DAO Today</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Become part of a pioneering community focused on building a better digital future for Fort Worth.
              </p>
            </div>
            <div className="flex space-x-4 lg:justify-end">
              <Button>Join Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© FWTX DAO. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function FWTXDAOLOGO(props) {
  return (
    <img height='55' width='55' src="/logo.svg"></img>
  )
}

