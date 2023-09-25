export const boxData = [
  {
    Applied: 3112,
    "Previous Period": 390,
    growth: 15,
  },
  {
    Offer: 183,
    "Previous Period": 90,
    growth: 15,
  },
  {
    Hired: 98,
    "Previous Period": 70,
    growth: 15,
  },
  {
    Recommended: 2164,
    "Previous Period": 90,
    growth: 15,
  },
  {
    Interview: 443,
    "Previous Period": 90,
    growth: 15,
  },
];

export const flowData = [
    {
        "stage":'Applied',
        "qualified":3112,
        'disqualified':1433
    },
    {
        "stage":'Recommeded',
        "qualified":2113,
        'disqualified':986
    },
    {
        "stage":'Interview',
        "qualified":712,
        'disqualified':1733
    },
    {
        "stage":'Offer',
        "qualified":183,
        'disqualified':260
    },
    {
        "stage":'Hired',
        "qualified":118,
        'disqualified':65
    }
]
export const metaData = [
  {
    title: "Applied",
    quantity: 95,
  },
  {
    title: "Recommeded",
    quantity: 57,
  },
  {
    title: "Interview",
    quantity: 39,
  },
  {
    title: "Offer",
    quantity: 33,
  },
  {
    title: "Hired",
    quantity: 15,
  },
  {
    title: "Total Rejected",
    quantity: 60,
  },
];
const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];
export const chartData = {
  labels: labels,
  datasets: [
    {
      label: "Qualified",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#132",
      tension: 0.1,
    },
    {
      label: "Disqualified",
      data: [55, 45, 72, 64, 36, 49, 59],
      fill: false,
      borderColor: "#546",
      tension: 0.1,
    },
  ],
};
