### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [19](../standings_global.md)<br />
Regional Rank: [5]( ../standings_americas.md)<br />
Final Rank Value:  1511.9<br />
<br />
Final Rank Value (1511.9) = Starting Rank Value (1573.1) + Head To Head Adjustments (-61.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.637[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.756[<sup>2</sup>](#table1)

The average of these factors is 0.546<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1573.1
- 400 + ( ( 0.546 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1573.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           71 |      361 | 2024-06-15 | Complexity     | L   | 0.986      | -            | -                | -                | -         |    -7.53 | brnz4n, drop, exit, insani, saffee |
|           70 |      386 | 2024-06-14 | Alliance       | W   | 0.981      | 0.500        | -                | 0.349 (0.171)    | 1 (0.981) |     1.05 | brnz4n, drop, exit, insani, saffee |
|           69 |      403 | 2024-06-14 | ENCE           | L   | 0.979      | -            | -                | -                | -         |   -22.77 | brnz4n, drop, exit, insani, saffee |
|           68 |      642 | 2024-06-07 | Bounty Hunters | L   | 0.936      | -            | -                | -                | -         |   -28.63 | brnz4n, drop, exit, insani, saffee |
|           67 |      701 | 2024-06-06 | 9z             | L   | 0.929      | -            | -                | -                | -         |   -13.48 | brnz4n, drop, exit, insani, saffee |
|           66 |      773 | 2024-06-05 | BESTIA         | W   | 0.922      | 0.450        | -                | 0.645 (0.267)    | -         |     1.81 | brnz4n, drop, exit, insani, saffee |
|           65 |      825 | 2024-06-04 | Galorys        | W   | 0.915      | 0.450        | -                | 0.535 (0.220)    | -         |     0.56 | brnz4n, drop, exit, insani, saffee |
|           64 |     1151 | 2024-05-22 | paiN           | W   | 0.827      | 0.450        | 0.476 (0.177)    | 0.763 (0.284)    | -         |     9.95 | brnz4n, drop, exit, insani, saffee |
|           63 |     1154 | 2024-05-22 | paiN           | W   | 0.827      | 0.450        | 0.476 (0.177)    | 0.763 (0.284)    | -         |    10.67 | brnz4n, drop, exit, insani, saffee |
|           62 |     1224 | 2024-05-20 | BetBoom        | L   | 0.815      | -            | -                | -                | -         |   -15.09 | brnz4n, drop, exit, insani, saffee |
|           61 |     1237 | 2024-05-20 | BIG            | W   | 0.813      | 0.769        | 0.212 (0.132)    | 0.382 (0.239)    | -         |     6.36 | brnz4n, drop, exit, insani, saffee |
|           60 |     1246 | 2024-05-20 | BetBoom        | L   | 0.812      | -            | -                | -                | -         |   -15.80 | brnz4n, drop, exit, insani, saffee |
|           59 |     1323 | 2024-05-17 | HEROIC         | L   | 0.794      | -            | -                | -                | -         |    -8.23 | brnz4n, drop, exit, insani, saffee |
|           58 |     1357 | 2024-05-16 | Aurora         | W   | 0.787      | 0.769        | 0.514 (0.311)    | 0.813 (0.492)    | 1 (0.787) |    11.09 | brnz4n, drop, exit, insani, saffee |
|           57 |     1413 | 2024-05-15 | HEROIC         | L   | 0.780      | -            | -                | -                | -         |    -8.12 | brnz4n, drop, exit, insani, saffee |
|           56 |     1822 | 2024-04-28 | Aurora         | W   | 0.665      | 0.500        | 0.514 (0.171)    | 0.813 (0.270)    | 1 (0.665) |    11.13 | brnz4n, drop, exit, insani, saffee |
|           55 |     1824 | 2024-04-27 | Apeks          | W   | 0.664      | -            | -                | -                | 1 (0.664) |     1.29 | brnz4n, drop, exit, insani, saffee |
|           54 |     1850 | 2024-04-27 | Rooster        | W   | 0.657      | -            | -                | -                | 1 (0.657) |     0.35 | brnz4n, drop, exit, insani, saffee |
|           53 |     1872 | 2024-04-26 | Rebels         | L   | 0.651      | -            | -                | -                | -         |   -19.52 | brnz4n, drop, exit, insani, saffee |
|           52 |     1875 | 2024-04-25 | KZG            | W   | 0.650      | -            | -                | -                | 1 (0.650) |     0.12 | brnz4n, drop, exit, insani, saffee |
|           51 |     1984 | 2024-04-20 | paiN           | L   | 0.614      | -            | -                | -                | -         |   -10.91 | brnz4n, drop, exit, insani, saffee |
|           50 |     1991 | 2024-04-20 | OG             | W   | 0.613      | 0.589        | 0.210 (0.076)    | -                | 1 (0.613) |     2.02 | brnz4n, drop, exit, insani, saffee |
|           49 |     2007 | 2024-04-19 | paiN           | W   | 0.610      | 0.143        | 0.476 (0.041)    | -                | -         |     8.88 | brnz4n, drop, exit, insani, saffee |
|           48 |     2014 | 2024-04-19 | FURIA          | W   | 0.609      | 0.589        | 0.253 (0.091)    | 0.483 (0.173)    | 1 (0.609) |     9.99 | brnz4n, drop, exit, insani, saffee |
|           47 |     2036 | 2024-04-19 | paiN           | L   | 0.607      | -            | -                | -                | -         |   -10.45 | brnz4n, drop, exit, insani, saffee |
|           46 |     2057 | 2024-04-18 | Imperial       | W   | 0.603      | -            | -                | -                | -         |     7.00 | brnz4n, drop, exit, insani, saffee |
|           45 |     2059 | 2024-04-18 | paiN           | W   | 0.602      | -            | -                | -                | -         |     8.91 | brnz4n, drop, exit, insani, saffee |
|           44 |     2064 | 2024-04-18 | OG             | W   | 0.601      | 0.589        | 0.210 (0.074)    | -                | 1 (0.601) |     2.00 | brnz4n, drop, exit, insani, saffee |
|           43 |     2109 | 2024-04-17 | RED Canids     | W   | 0.595      | -            | -                | -                | -         |     1.85 | brnz4n, drop, exit, insani, saffee |
|           42 |     2115 | 2024-04-17 | Case           | W   | 0.595      | -            | -                | -                | -         |     0.52 | brnz4n, drop, exit, insani, saffee |
|           41 |     2154 | 2024-04-16 | Bounty Hunters | W   | 0.589      | -            | -                | -                | -         |     0.46 | brnz4n, drop, exit, insani, saffee |
|           40 |     2175 | 2024-04-15 | Imperial       | W   | 0.582      | 0.435        | 0.386 (0.098)    | -                | -         |     6.97 | brnz4n, drop, exit, insani, saffee |
|           39 |     2189 | 2024-04-14 | Galorys        | W   | 0.575      | -            | -                | -                | -         |     0.48 | brnz4n, drop, exit, insani, saffee |
|           38 |     2203 | 2024-04-13 | Case           | W   | 0.567      | 0.435        | -                | 0.697 (0.172)    | -         |     0.50 | brnz4n, drop, exit, insani, saffee |
|           37 |     2233 | 2024-04-11 | paiN           | W   | 0.556      | -            | -                | -                | -         |     9.21 | brnz4n, drop, exit, insani, saffee |
|           36 |     2275 | 2024-04-10 | Galorys        | W   | 0.549      | -            | -                | -                | -         |     0.43 | brnz4n, drop, exit, insani, saffee |
|           35 |     2276 | 2024-04-10 | Galorys        | W   | 0.548      | -            | -                | -                | -         |     0.44 | brnz4n, drop, exit, insani, saffee |
|           34 |     2293 | 2024-04-10 | Imperial       | W   | 0.547      | -            | -                | -                | -         |     7.27 | brnz4n, drop, exit, insani, saffee |
|           33 |     2325 | 2024-04-09 | adalYamigos    | W   | 0.542      | -            | -                | -                | -         |     0.13 | brnz4n, drop, exit, insani, saffee |
|           32 |     2329 | 2024-04-09 | adalYamigos    | W   | 0.542      | -            | -                | -                | -         |     0.13 | brnz4n, drop, exit, insani, saffee |
|           31 |     2334 | 2024-04-09 | RED Canids     | W   | 0.541      | -            | -                | -                | -         |     1.90 | brnz4n, drop, exit, insani, saffee |
|           30 |     2366 | 2024-04-08 | W7M            | W   | 0.536      | -            | -                | -                | -         |     0.33 | brnz4n, drop, exit, insani, saffee |
|           29 |     2400 | 2024-04-07 | paiN           | W   | 0.530      | -            | -                | -                | -         |     9.48 | brnz4n, drop, exit, insani, saffee |
|           28 |     2418 | 2024-04-06 | Bounty Hunters | W   | 0.522      | -            | -                | -                | -         |     0.51 | brnz4n, drop, exit, insani, saffee |
|           27 |     2434 | 2024-04-05 | Fluxo          | W   | 0.515      | -            | -                | -                | -         |     1.32 | brnz4n, drop, exit, insani, saffee |
|           26 |     2435 | 2024-04-05 | Fluxo          | L   | 0.515      | -            | -                | -                | -         |   -15.05 | brnz4n, drop, exit, insani, saffee |
|           25 |     2438 | 2024-04-05 | ODDIK          | W   | 0.515      | -            | -                | -                | -         |     0.78 | brnz4n, drop, exit, insani, saffee |
|           24 |     2461 | 2024-04-04 | Solid          | W   | 0.509      | -            | -                | -                | -         |     0.48 | brnz4n, drop, exit, insani, saffee |
|           23 |     2465 | 2024-04-04 | Solid          | W   | 0.508      | -            | -                | -                | -         |     0.48 | brnz4n, drop, exit, insani, saffee |
|           22 |     2496 | 2024-04-03 | Fluxo          | W   | 0.503      | -            | -                | -                | -         |     1.16 | brnz4n, drop, exit, insani, saffee |
|           21 |     2546 | 2024-04-02 | Fluxo          | W   | 0.496      | -            | -                | -                | -         |     1.12 | brnz4n, drop, exit, insani, saffee |
|           20 |     2549 | 2024-04-02 | Sharks         | W   | 0.495      | -            | -                | -                | -         |     0.22 | brnz4n, drop, exit, insani, saffee |
|           19 |     2635 | 2024-03-27 | Case           | W   | 0.456      | -            | -                | -                | -         |     0.45 | brnz4n, drop, exit, insani, saffee |
|           18 |     2641 | 2024-03-27 | Case           | W   | 0.455      | -            | -                | -                | -         |     0.45 | brnz4n, drop, exit, insani, saffee |
|           17 |     2681 | 2024-03-26 | ODDIK          | W   | 0.449      | -            | -                | -                | -         |     0.74 | brnz4n, drop, exit, insani, saffee |
|           16 |     2683 | 2024-03-26 | ODDIK          | W   | 0.449      | -            | -                | -                | -         |     0.75 | brnz4n, drop, exit, insani, saffee |
|           15 |     2875 | 2024-03-14 | Sharks         | W   | 0.369      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           14 |     2877 | 2024-03-14 | Sharks         | W   | 0.369      | -            | -                | -                | -         |     0.54 | brnz4n, drop, exit, insani, saffee |
|           13 |     2948 | 2024-03-12 | Fluxo          | L   | 0.355      | -            | -                | -                | -         |   -10.39 | brnz4n, drop, exit, insani, saffee |
|           12 |     2987 | 2024-03-10 | Galorys        | W   | 0.342      | -            | -                | -                | -         |     0.25 | brnz4n, drop, exit, insani, saffee |
|           11 |     3035 | 2024-03-08 | LA RUGONETA    | W   | 0.328      | -            | -                | -                | -         |     0.04 | brnz4n, drop, exit, insani, saffee |
|           10 |     3166 | 2024-03-03 | Legacy         | L   | 0.295      | -            | -                | -                | -         |    -8.61 | brnz4n, drop, exit, insani, saffee |
|            9 |     3198 | 2024-03-02 | NRG            | W   | 0.288      | -            | -                | -                | 1 (0.288) |     0.21 | brnz4n, drop, exit, insani, saffee |
|            8 |     3221 | 2024-03-01 | BOSS           | L   | 0.281      | -            | -                | -                | -         |    -8.70 | brnz4n, drop, exit, insani, saffee |
|            7 |     3747 | 2024-02-03 | Imperial       | L   | 0.102      | -            | -                | -                | -         |    -1.99 | brnz4n, drop, exit, insani, saffee |
|            6 |     3811 | 2024-02-01 | paiN           | W   | 0.089      | -            | -                | -                | -         |     1.45 | brnz4n, drop, exit, insani, saffee |
|            5 |     3814 | 2024-02-01 | W7M            | W   | 0.088      | -            | -                | -                | -         |     0.05 | brnz4n, drop, exit, insani, saffee |
|            4 |     3987 | 2024-01-22 | adalYamigos    | L   | 0.022      | -            | -                | -                | -         |    -0.69 | brnz4n, drop, exit, insani, saffee |
|            3 |     4049 | 2024-01-20 | BESTIA         | W   | 0.008      | -            | -                | -                | -         |     0.01 | brnz4n, drop, exit, insani, saffee |
|            2 |     4097 | 2024-01-19 | TIMACETA       | W   | 0.002      | -            | -                | -                | -         |     0.00 | brnz4n, drop, exit, insani, saffee |
|            1 |     4111 | 2024-01-19 | ODDIK          | W   | 0.001      | -            | -                | -                | -         |     0.00 | brnz4n, drop, exit, insani, saffee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($65,921.63)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $3,000.00      | $2,979.19       |
| 2024-06-09 |      0.948 | $3,000.00      | $2,845.35       |
| 2024-04-28 |      0.665 | $50,000.00     | $33,251.69      |
| 2024-04-20 |      0.615 | $20,000.00     | $12,303.81      |
| 2024-04-15 |      0.582 | $25,000.00     | $14,541.59      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
