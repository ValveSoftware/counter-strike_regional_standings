### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [48]( ../standings_europe.md)<br />
Final Rank Value:  1045.3<br />
<br />
Final Rank Value (1045.3) = Starting Rank Value (981.7) + Head To Head Adjustments (63.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.286<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.7
- 400 + ( ( 0.286 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 981.7


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
|           47 |      116 | 2024-06-13 | Enterprise        | W   | 1.000      | 0.379        | 0.046 (0.017)    | 0.575 (0.218)    | 0 (0.000) |    13.98 | Aaron, Bibu, DGL, kory, Porya      |
|           46 |      152 | 2024-06-12 | Rebels            | W   | 1.000      | 0.379        | 0.054 (0.020)    | 0.450 (0.170)    | 0 (0.000) |    19.28 | Aaron, Bibu, DGL, kory, Porya      |
|           45 |      172 | 2024-06-11 | ECLOT             | W   | 1.000      | 0.379        | 0.107 (0.041)    | 0.478 (0.181)    | 0 (0.000) |    21.70 | Aaron, Bibu, DGL, kory, Porya      |
|           44 |      375 | 2024-06-07 | B8                | L   | 1.000      | -            | -                | -                | -         |    -7.48 | Aaron, Bibu, DGL, kory, Porya      |
|           43 |      379 | 2024-06-07 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.19 | Aaron, Bibu, DGL, kory, Porya      |
|           42 |      479 | 2024-06-05 | The Prodigies     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.91 | Aaron, Bibu, DGL, kory, Porya      |
|           41 |      562 | 2024-06-03 | GL Academy        | W   | 1.000      | 0.379        | 0.013 (0.005)    | 0.144 (0.055)    | 0 (0.000) |     8.53 | Aaron, Bibu, DGL, kory, Porya      |
|           40 |      670 | 2024-05-30 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.73 | Aaron, Bibu, DGL, kory, Porya      |
|           39 |      850 | 2024-05-22 | System5           | W   | 1.000      | 0.500        | -                | 0.115 (0.057)    | 0 (0.000) |     2.64 | Aaron, Bibu, DGL, kory, Porya      |
|           38 |      898 | 2024-05-21 | EYEBALLERS        | W   | 1.000      | 0.500        | 0.006 (0.003)    | 0.653 (0.327)    | 0 (0.000) |    12.10 | Aaron, Bibu, DGL, kory, Porya      |
|           37 |      937 | 2024-05-20 | Nexus             | W   | 1.000      | 0.379        | 0.012 (0.005)    | 0.397 (0.150)    | 0 (0.000) |     8.82 | Aaron, Bibu, DGL, kory, Porya      |
|           36 |     1107 | 2024-05-15 | Apeks             | W   | 0.976      | -            | -                | -                | 0 (0.000) |     1.12 | Aaron, Bibu, DGL, kory, Porya      |
|           35 |     1166 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.969      | 0.500        | 0.046 (0.022)    | 0.573 (0.278)    | -         |    17.38 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |     1390 | 2024-05-04 | FlyQuest          | L   | 0.901      | -            | -                | -                | -         |    -2.28 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           33 |     1405 | 2024-05-03 | BIG               | L   | 0.894      | -            | -                | -                | -         |    -2.29 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           32 |     1425 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.889      | 0.889        | 0.315 (0.249)    | 0.497 (0.393)    | 1 (0.889) |    27.44 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           31 |     1475 | 2024-04-30 | Complexity        | L   | 0.875      | -            | -                | -                | -         |    -0.26 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           30 |     1685 | 2024-04-20 | EYEBALLERS        | L   | 0.809      | -            | -                | -                | -         |   -14.29 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           29 |     2224 | 2024-04-03 | SAW               | L   | 0.695      | -            | -                | -                | -         |    -2.10 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           28 |     2279 | 2024-04-01 | RUSH B            | W   | 0.682      | 0.500        | 0.017 (0.006)    | 0.315 (0.108)    | -         |     8.29 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           27 |     2557 | 2024-03-15 | Betera            | L   | 0.569      | -            | -                | -                | -         |   -14.20 | Aaron, DGL, Kamion, msN, Porya     |
|           26 |     2615 | 2024-03-13 | Monte             | L   | 0.557      | -            | -                | -                | -         |    -2.35 | Aaron, DGL, Kamion, msN, Porya     |
|           25 |     2994 | 2024-02-26 | System5           | L   | 0.450      | -            | -                | -                | -         |   -12.89 | Aaron, DGL, Kamion, msN, Porya     |
|           24 |     3132 | 2024-02-20 | ex-Preasy         | L   | 0.409      | -            | -                | -                | -         |    -7.52 | Aaron, DGL, Kamion, msN, Porya     |
|           23 |     3160 | 2024-02-19 | GamerLegion       | L   | 0.402      | -            | -                | -                | -         |    -4.56 | Aaron, DGL, Kamion, msN, Porya     |
|           22 |     3163 | 2024-02-19 | Cloud9            | L   | 0.401      | -            | -                | -                | -         |    -1.57 | Aaron, DGL, Kamion, msN, Porya     |
|           21 |     3233 | 2024-02-16 | SINNERS           | L   | 0.382      | -            | -                | -                | -         |    -4.33 | Aaron, DGL, Kamion, msN, Porya     |
|           20 |     3634 | 2024-01-25 | ex-Guild Eagles   | W   | 0.237      | -            | -                | -                | -         |     3.26 | Aaron, DGL, Kamion, msN, Porya     |
|           19 |     3647 | 2024-01-24 | Viperio           | W   | 0.230      | -            | -                | -                | -         |     0.50 | Aaron, DGL, Kamion, msN, Porya     |
|           18 |     3669 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.222      | -            | -                | -                | -         |     4.16 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     3672 | 2024-01-23 | Rebels            | W   | 0.222      | 0.143        | 0.054 (0.002)    | -                | -         |     4.59 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     3694 | 2024-01-22 | ex-Guild Eagles   | W   | 0.216      | -            | -                | -                | -         |     3.00 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     3698 | 2024-01-22 | Sampi             | L   | 0.216      | -            | -                | -                | -         |    -3.80 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     3702 | 2024-01-22 | Viperio           | W   | 0.215      | -            | -                | -                | -         |     0.46 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     3726 | 2024-01-21 | ex-sYnck          | W   | 0.209      | -            | -                | -                | -         |     0.47 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     3731 | 2024-01-21 | Gaimin Gladiators | L   | 0.208      | -            | -                | -                | -         |    -1.51 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     3755 | 2024-01-20 | KOI               | L   | 0.203      | -            | -                | -                | -         |    -1.57 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     3765 | 2024-01-20 | Astralis          | L   | 0.202      | -            | -                | -                | -         |    -0.03 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     3826 | 2024-01-19 | IKLA              | W   | 0.195      | -            | -                | -                | -         |     0.53 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3872 | 2024-01-18 | EYEBALLERS        | W   | 0.189      | -            | -                | -                | -         |     2.60 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3895 | 2024-01-18 | Eternal Fire      | L   | 0.188      | -            | -                | -                | -         |    -0.06 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     4146 | 2024-01-11 | IKLA              | L   | 0.144      | -            | -                | -                | -         |    -4.16 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     4152 | 2024-01-11 | SINNERS           | L   | 0.143      | -            | -                | -                | -         |    -1.44 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     4162 | 2024-01-11 | ex-Anonymo        | W   | 0.143      | -            | -                | -                | -         |     0.48 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     4166 | 2024-01-11 | Permitta          | W   | 0.142      | -            | -                | -                | -         |     2.05 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     4187 | 2024-01-10 | esmagaB           | W   | 0.137      | -            | -                | -                | -         |     0.95 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4242 | 2024-01-09 | Sashi             | L   | 0.129      | -            | -                | -                | -         |    -1.10 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,583.70)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $10,895.00     | $10,895.00      |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
