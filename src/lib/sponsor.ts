import { Sponsor } from "../types";
import Sponsors from "../data/sponsors.json"

const printLn = (sponsor: Sponsor) => {
return( 
`name: "${sponsor.name}",
    website: "${sponsor.website}"
    }`
)
}


export const getAllSponsors = () => {
  return (
`const ALL_SPONSORS = [
${Sponsors.map((sponsor) => (
`{
    ${printLn(sponsor)}
}`)
  )},
]`
  )
}