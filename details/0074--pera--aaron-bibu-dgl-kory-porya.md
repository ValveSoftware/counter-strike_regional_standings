### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [74](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [52]( ../standings_europe.md)<br />
<br />
Final Rank Value:  960.5<br />
<br />
Final Rank Value (960.5) = Starting Rank Value (930.8) + Head To Head Adjustments (29.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.430[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 930.8
- 400 + ( ( 0.258 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 930.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      209 | 2024-07-31 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.72 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      258 | 2024-07-30 | Space             | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.429 (0.215)    | 0 (0.000) |    11.75 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      293 | 2024-07-29 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -15.28 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      618 | 2024-07-19 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -23.71 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      651 | 2024-07-18 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.29 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |      730 | 2024-07-17 | Verdant           | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.287 (0.096)    | 0 (0.000) |     9.06 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |      786 | 2024-07-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.39 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |      837 | 2024-07-15 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.82 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1154 | 2024-06-13 | Enterprise        | W   | 0.841      | 0.379        | 0.039 (0.012)    | 0.641 (0.204)    | 0 (0.000) |    12.15 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1190 | 2024-06-12 | Rebels            | W   | 0.834      | 0.379        | 0.038 (0.012)    | 0.578 (0.183)    | 0 (0.000) |    14.91 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1210 | 2024-06-11 | ECLOT             | W   | 0.827      | 0.379        | 0.086 (0.027)    | 0.537 (0.168)    | 0 (0.000) |    21.07 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     1413 | 2024-06-07 | B8                | L   | 0.799      | -            | -                | -                | -         |    -6.60 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     1417 | 2024-06-07 | Aurora            | L   | 0.799      | -            | -                | -                | -         |    -0.97 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     1517 | 2024-06-05 | The Prodigies     | W   | 0.787      | -            | -                | -                | 0 (0.000) |     2.64 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     1600 | 2024-06-03 | GL Academy        | W   | 0.774      | -            | -                | -                | 0 (0.000) |     6.38 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     1706 | 2024-05-30 | Rebels            | L   | 0.747      | -            | -                | -                | -         |   -10.38 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     1886 | 2024-05-22 | System5           | W   | 0.694      | -            | -                | -                | 0 (0.000) |     3.84 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     1934 | 2024-05-21 | EYEBALLERS        | W   | 0.687      | 0.500        | -                | 0.488 (0.168)    | -         |     8.79 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     1973 | 2024-05-20 | Nexus             | W   | 0.680      | 0.379        | 0.014 (0.004)    | 0.447 (0.115)    | -         |     6.59 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     2143 | 2024-05-15 | Norway            | W   | 0.647      | 0.500        | 0.006 (0.002)    | -                | -         |     4.27 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     2202 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.640      | 0.500        | 0.031 (0.010)    | 0.537 (0.172)    | -         |    11.68 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     2426 | 2024-05-04 | FlyQuest          | L   | 0.572      | -            | -                | -                | -         |    -3.59 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           13 |     2441 | 2024-05-03 | BIG               | L   | 0.566      | -            | -                | -                | -         |    -2.10 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           12 |     2461 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.560      | 0.889        | 0.253 (0.126)    | 0.531 (0.264)    | 1 (0.560) |    17.29 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           11 |     2511 | 2024-04-30 | Complexity        | L   | 0.546      | -            | -                | -                | -         |    -0.28 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           10 |     2721 | 2024-04-20 | EYEBALLERS        | L   | 0.480      | -            | -                | -                | -         |    -8.28 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            9 |     3260 | 2024-04-03 | SAW               | L   | 0.366      | -            | -                | -                | -         |    -2.29 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            8 |     3315 | 2024-04-01 | RUSH B            | W   | 0.354      | 0.500        | 0.026 (0.005)    | 0.371 (0.066)    | -         |     4.87 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3592 | 2024-03-15 | Betera            | L   | 0.240      | -            | -                | -                | -         |    -5.91 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3650 | 2024-03-13 | Monte             | L   | 0.228      | -            | -                | -                | -         |    -2.94 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     4029 | 2024-02-26 | System5           | L   | 0.121      | -            | -                | -                | -         |    -3.06 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     4167 | 2024-02-20 | ex-Preasy         | L   | 0.080      | -            | -                | -                | -         |    -1.78 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     4195 | 2024-02-19 | GamerLegion       | L   | 0.073      | -            | -                | -                | -         |    -1.64 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     4198 | 2024-02-19 | Cloud9            | L   | 0.072      | -            | -                | -                | -         |    -0.85 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4268 | 2024-02-16 | SINNERS           | L   | 0.053      | -            | -                | -                | -         |    -0.36 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,205.35)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-13 |      0.841 | $10,895.00     | $9,162.41       |
| 2024-06-09 |      0.814 | $500.00        | $406.96         |
| 2024-05-12 |      0.627 | $7,000.00      | $4,385.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
