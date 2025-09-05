"use client";
import React from "react";

type RegionId =
  | "nonMuscles"
  | "pectorals"
  | "biceps"
  | "anteriorDeltoids"
  | "forearms"
  | "abdominals"
  | "obliques"
  | "adductors"
  | "abductors"
  | "quadriceps"
  | "tibialis"
  | "traps";

type FrontBodyProps = {
  regionColors: Record<RegionId, string>;
  changeRegionColor: (regionId: RegionId, color: string) => void;
  onRegionClick: (regionId: RegionId) => void;
  onRegionHover: (regionId: RegionId) => void;
  onRegionLeave: (regionId: RegionId) => void;
};

function FrontBody({
  regionColors,
  changeRegionColor,
  onRegionClick,
  onRegionHover,
  onRegionLeave,
}: FrontBodyProps) {
  const regions = [
    {
      id: "pectorals",
      content: (
        <path
          id="Pectorals_2"
          d="M210 283.5C333 278.001 325 297.938 325 297.938C325 297.938 317 278.001 440 283.5C448.5 328 480.5 350 480.5 350C480.5 350 477 412.739 436 436.5C395 460.261 361.5 449 325 436.5C288.5 449 255 460.261 214 436.5C173 412.739 169.5 350 169.5 350C169.5 350 201.5 328 210 283.5Z"
          stroke="grey"
          strokeWidth="5"
        />
      ),
    },
    {
      id: "biceps",
      content: (
        <>
          <path
            id="Left Biceps"
            d="M184 420C168.5 393 168.915 385.425 163 358C125.5 397.5 101.5 404.5 97.9999 409.5C94.5 414.5 86.046 469.414 87.9998 497.5C101.031 521.955 105.5 556.5 105.5 556.5H143.5C161.64 525.255 168.467 511.183 174.5 492.5C181.762 466.147 184.846 449.582 184 420Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Biceps"
            d="M466 420C481.5 393 481.085 385.425 487 358C524.5 397.5 548.5 404.5 552 409.5C555.5 414.5 563.954 469.414 562 497.5C548.969 521.955 544.5 556.5 544.5 556.5H506.5C488.36 525.255 481.533 511.183 475.5 492.5C468.238 466.147 465.154 449.582 466 420Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "anteriorDeltoids",
      content: (
        <>
          <path
            id="Left Ant. Deltoid"
            d="M106.5 298C79.5 320 95.5 402 95.5 402C95.5 402 133.761 378.862 162.5 347.5C188.5 319.127 195 313 202.5 281.5C153.363 274.92 133.5 276 106.5 298Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Ant. Deltoid"
            d="M543.5 298C570.5 320 554.5 402 554.5 402C554.5 402 516.239 378.862 487.5 347.5C461.5 319.127 455 313 447.5 281.5C496.637 274.92 516.5 276 543.5 298Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "forearms",
      content: (
        <>
          <path
            id="Left Forearm"
            d="M66 557.5C75.5 551.5 85.5 512 85.5 512C85.5 512 90.5 521 93.5 534C96.5 547 99.5 563.5 99.5 563.5H140C146.087 606.8 121.261 652.602 78.5001 734L32.5001 724C42.3446 644.097 56.5 563.5 66 557.5Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Forearm"
            d="M584 557.5C574.5 551.5 564.5 512 564.5 512C564.5 512 559.5 521 556.5 534C553.5 547 550.5 563.5 550.5 563.5H510C503.913 606.8 528.739 652.602 571.5 734L617.5 724C607.655 644.097 593.5 563.5 584 557.5Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "abdominals",
      content: (
        <path
          id="Abdominals_2"
          d="M325 444C303.042 453.557 289.551 456.562 261 459L261 680C261 680 298.634 700.5 325 700.5C351.366 700.5 389 680 389 680L389 459C360.449 456.562 346.958 453.557 325 444Z"
          stroke="grey"
          strokeWidth="5"
        />
      ),
    },
    {
      id: "adductors",
      content: (
        <>
          <path
            id="Left Adductor"
            d="M310.5 921C319.801 879.097 320 811.5 320 811.5C320 811.5 300.839 804.537 288.5 799C275.394 793.118 255.5 782 255.5 782C255.5 782 276.482 844.143 282 885.5C288.198 931.951 282 1005.5 282 1005.5C282 1005.5 302.954 954.998 310.5 921Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Adductor"
            d="M339.5 921C330.199 879.097 330 811.5 330 811.5C330 811.5 349.161 804.537 361.5 799C374.606 793.118 394.5 782 394.5 782C394.5 782 373.518 844.143 368 885.5C361.802 931.951 368 1005.5 368 1005.5C368 1005.5 347.046 954.998 339.5 921Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "abductors",
      content: (
        <>
          <path
            id="Left Abductor"
            d="M221 739L202.08 706C202.08 706 169.812 807.64 165.58 873C161.047 942.996 184.58 1046.5 184.58 1046.5L193.58 1018.5C193.58 1018.5 170.083 920.5 178.08 860.5C185.079 807.986 221 739 221 739Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Abductor"
            d="M429 739L447.92 706C447.92 706 480.188 807.64 484.42 873C488.953 942.996 465.42 1046.5 465.42 1046.5L456.42 1018.5C456.42 1018.5 479.917 920.5 471.92 860.5C464.921 807.986 429 739 429 739Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "quadriceps",
      content: (
        <>
          <path
            id="Left Quad"
            d="M244.5 773L225.5 747.5C225.5 747.5 203.5 783 186 856.5C180.832 902.488 190.528 971.953 202 1017.5C228.457 1026.29 243.495 1039.65 270.5 1071C270.5 1071 280.956 941.839 275 894C269.044 846.161 244.5 773 244.5 773Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Quad"
            d="M405.5 773L424.5 747.5C424.5 747.5 446.5 783 464 856.5C469.168 902.488 459.472 971.953 448 1017.5C421.543 1026.29 406.505 1039.65 379.5 1071C379.5 1071 369.044 941.839 375 894C380.956 846.161 405.5 773 405.5 773Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "obliques",
      content: (
        <>
          <path
            id="Left Obliques"
            d="M253 676.5V460C253 460 230 455 216.5 448.5C203 442 191.5 430 191.5 430C191.5 430 190.659 470.423 182 490.5C200.986 530.153 208.089 567.327 207.124 650L253 676.5Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Left Obliques_2"
            d="M397 676.5V460C397 460 420 455 433.5 448.5C447 442 458.5 430 458.5 430C458.5 430 459.341 470.423 468 490.5C449.014 530.153 441.911 567.327 442.876 650L397 676.5Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "tibialis",
      content: (
        <>
          <path
            id="Left Tibialis "
            d="M183.5 1082C190.999 1117.18 208.836 1124.12 265.5 1113.5C272.021 1233.41 244.5 1248.5 232.5 1315C220.5 1381.5 242.424 1361.36 237.5 1389C212.116 1404.18 197.884 1404.69 172.5 1389C174.541 1332.04 183.5 1373.5 165 1244C146.5 1114.5 193 1095 183.5 1082Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Tibialis"
            d="M466.5 1082C459.001 1117.18 441.164 1124.12 384.5 1113.5C377.979 1233.41 405.5 1248.5 417.5 1315C429.5 1381.5 407.576 1361.36 412.5 1389C437.884 1404.18 452.116 1404.69 477.5 1389C475.459 1332.04 466.5 1373.5 485 1244C503.5 1114.5 457 1095 466.5 1082Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "nonMuscles",
      content: (
        <>
          <path
            id="Left Hand"
            d="M76.2492 741.478L30.1112 731C30.1112 731 -30.8889 807.41 30.1111 819.5C91.1112 831.59 76.2492 741.478 76.2492 741.478Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Hand"
            d="M573.751 741.478L619.889 731C619.889 731 680.889 807.41 619.889 819.5C558.889 831.59 573.751 741.478 573.751 741.478Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Left Knee"
            d="M271 1083.5C229.956 1036.35 217.774 1030.56 202 1028C195.166 1043.82 193.334 1054.68 186.5 1070.5C195.376 1105.38 208.824 1116.69 265 1105.5L271 1083.5Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Left Foot"
            d="M174.643 1401C198.5 1415.5 208.164 1404.46 229.643 1406.67L244.643 1429C226.623 1457.12 212.5 1489.5 198.5 1501C184.5 1512.5 135.5 1512.5 128.5 1501C121.5 1489.5 150.785 1386.5 174.643 1401Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Foot"
            d="M475.357 1401C451.5 1415.5 441.836 1404.46 420.357 1406.67L405.357 1429C423.377 1457.12 437.5 1489.5 451.5 1501C465.5 1512.5 514.5 1512.5 521.5 1501C528.5 1489.5 499.215 1386.5 475.357 1401Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Knee"
            d="M379 1083.5C420.044 1036.35 432.226 1030.56 448 1028C454.834 1043.82 456.666 1054.68 463.5 1070.5C454.624 1105.38 441.176 1116.69 385 1105.5L379 1083.5Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Face"
            d="M253.415 90.5C256.761 42.9954 276.292 3 323.915 3C371.537 3 391.068 42.9954 394.415 90.5C398.14 143.38 376.926 206.5 323.915 206.5C270.903 206.5 249.689 143.38 253.415 90.5Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Pelvis"
            d="M325 806C256 778.5 251.5 772 228 736C219.746 723.355 206 695 206 695L206.7 659C274.2 698 296.5 707 325 709C353.5 707 375.8 698 443.3 659L444 695C444 695 430.254 723.355 422 736C398.5 772 394 778.5 325 806Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Neck"
            d="M354.5 273L325 284L295.5 273V240.5C291.935 225.118 289.22 216.763 284 202C284 202 306.144 216.5 325 216.5C343.856 216.5 366 202 366 202C360.78 216.763 358.065 225.118 354.5 240.5V273Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
    {
      id: "traps",
      content: (
        <>
          <path
            id="Left Trap"
            d="M287.5 243.5V272H199H194C243.078 255.953 265.259 255.093 277 207C277 207 287.5 236.181 287.5 243.5Z"
            stroke="grey"
            strokeWidth="5"
          />
          <path
            id="Right Traps"
            d="M362.5 243.5V272H451H456C406.922 255.953 384.741 255.093 373 207C373 207 362.5 236.181 362.5 243.5Z"
            stroke="grey"
            strokeWidth="5"
          />
        </>
      ),
    },
  ];

  return (
    <svg
      viewBox="0 0 650 1513"
      fill="none"
      className="w-full h-auto max-w-[220px] aspect-[650/1513]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Front Body">
        <rect width="650" height="1513" stroke="grey" />
        {regions.map((region) => {
          const isMuscle = region.id as RegionId !== "nonMuscles";
          const eventHandlers = isMuscle
            ? {
                onClick: () => {onRegionClick(region.id as RegionId)},
                onMouseEnter: () => onRegionHover(region.id as RegionId),
                onMouseLeave: () => {
                  if (regionColors[region.id as RegionId] !== "lightblue") {
                    onRegionLeave(region.id as RegionId);
                  }
                },
              }
            : {};
          return (
            <g
              key={region.id}
              id={region.id}
              style={{ fill: regionColors[region.id as RegionId] }}
              className="cursor-pointer"
              {...eventHandlers}
            >
              {region.content}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export default FrontBody;

