

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
  


export const truncateText =(str: string) => { 
  if (str.length < 25)
    return(str);
    return (str.substring(0, 25) + "...");
};
  
export const formatPrice = (amount:number) => {
  return new Intl.NumberFormat('en-us', {
      style: 'currency', currency: 'USD'
    }).format(amount);
};

