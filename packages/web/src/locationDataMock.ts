// Mockup of ICE office data taken from @medelman's word doc
// This should be replaced with a graphql query
export default [
  {
    id: 12345,
    name: "ICE OCC – Chicago",
    tel: "(312) 542-8200",
    address: {
      line1: "525 W. Van Buren St.",
      line2: "Suite 701",
      city: "Chicago",
      state: "IL",
      zip: "60607"
    },
    agents: [
      {
        name: "Karen E. Lundgren",
        title: "Chief Counsel",
        email: "OPLA-PD-CHI-OCC@ice.dhs.gov"
      }
    ]
  },
  {
    id: 12346,
    name: "ICE OCC – Kansas City Sub-Office",
    tel: "(816) 391-7200",
    address: {
      line1: "2345 Grand Boulevard",
      line2: "Suite 500",
      city: "Kansas City",
      state: "MO",
      zip: "64108"
    },
    agents: [
      {
        name: "Melissa Castillo",
        title: "Deputy Chief Counsel",
        tel: "816-391-7212",
        email: "Melissa.L.Castillo@ice.dhs.gov"
      }
    ],
    email: "OCC-KAN-Duty@ice.dhs.gov"
  },
  {
    id: 12347,
    name: "ICE ERO - Chicago",
    address: {
      line1: "101 West Congress Parkway",
      line2: "4th Floor",
      city: "Chicago",
      state: "IL",
      zip: "60605"
    },
    tel: "(312) 347-2400",
    agents: [
      {
        name: "Ricardo Wong",
        title: "FOD"
      },
      {
        name: "Sylvia Bonaccorsi-Manno",
        title: "AFOD"
      }
    ],
    email: "Chicago.Outreach@ice.dhs.gov"
  },
  {
    id: 2016,
    name: "ICE HSI - Chicago",
    address: {
      line1: "1 North Tower Lane",
      line2: "Suite 1600",
      city: "Oakbrook Terrace",
      state: "IL",
      zip: "60181"
    },
    tel: "(630) 574-4600",
    fax: "(630) 574-2889"
  }
];
