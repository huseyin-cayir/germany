'use client0';


import styled from "styled-components";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


/*const Card = styled.div`
background: url(${(props) => props.imageUrl}) no-repeat center center;
background-size: cover;
width:150px;
hegiht:150px;
display:flex;
align-items:flex-end;
justify-content:center;
border-radius:8px;
margin:10px;
cursor:pointer;
border:${(props) => (props.selected ? '2px solid red' : 'none')};
&:hover{
border:2px solid red;
}
`;

const BrandName = styled.div`
background: rgba(0, 0, 0, 0.5);
color:white;
width:100%;
text-align: center;
padding: 5px 0px;
border-radius: 0 0 8px 8px;
`;*/


interface BrandCardProps{
  brand: any;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  
  const router = useRouter();

  return (
      <div onClick={() => router.push(`coding?${brand.id}`)} className="cursor-pointer min-w-[120px] h-[120px] bg-zinc-800 rounded-lg p-1 flex flex-col ">

          <div className="aspect-auto overflow-hidden relative w-full h-[90px]">
            <Image fill className="object-contain"
              alt={brand.name}
              src={brand.imageUrl}
            />
          </div>
          <div className="">
            <h4 className="text-center text-gray-200 font-medium text-lg w-full h-full">{brand.name}</h4>
          </div>

      </div>
  );
};

export default BrandCard