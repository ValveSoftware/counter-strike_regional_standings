### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [81](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [59]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  937.9<br />
<br />
Final Rank Value (937.9) = Starting Rank Value (905.4) + Head To Head Adjustments (32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.422[<sup>1</sup>](#table2)
- Bounty Collected: 0.367[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.4
- 400 + ( ( 0.255 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 905.4


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
|           36 |      247 | 2024-08-23 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -18.02 | Aaron, Bibu, DGL, kory, Porya      |
|           35 |      277 | 2024-08-22 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -5.06 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      305 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.31 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      336 | 2024-08-21 | Sashi             | W   | 1.000      | 0.143        | 0.178 (0.025)    | 0.977 (0.140)    | 0 (0.000) |    22.16 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      692 | 2024-08-09 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -8.60 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      706 | 2024-08-08 | Permitta          | W   | 1.000      | 0.426        | 0.036 (0.015)    | 0.932 (0.397)    | 0 (0.000) |    15.46 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1004 | 2024-07-31 | B8                | L   | 1.000      | -            | -                | -                | -         |    -8.05 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1053 | 2024-07-30 | Space             | W   | 1.000      | 0.500        | 0.005 (0.003)    | 0.421 (0.210)    | 0 (0.000) |    11.70 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1088 | 2024-07-29 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -15.18 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1413 | 2024-07-19 | Nexus             | L   | 0.933      | -            | -                | -                | -         |   -21.87 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1446 | 2024-07-18 | Nemiga            | L   | 0.928      | -            | -                | -                | -         |    -6.80 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1525 | 2024-07-17 | Verdant           | W   | 0.921      | 0.333        | 0.013 (0.004)    | 0.363 (0.111)    | 0 (0.000) |     9.21 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     1581 | 2024-07-16 | Aurora            | L   | 0.914      | -            | -                | -                | -         |    -2.39 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     1632 | 2024-07-15 | Betera            | W   | 0.907      | -            | -                | -                | 0 (0.000) |     3.08 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     1949 | 2024-06-13 | Enterprise        | W   | 0.694      | 0.379        | 0.045 (0.012)    | 0.713 (0.188)    | 0 (0.000) |    10.22 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     1985 | 2024-06-12 | Rebels            | W   | 0.687      | 0.379        | 0.034 (0.009)    | 0.640 (0.166)    | 0 (0.000) |    11.84 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2005 | 2024-06-11 | ECLOT             | W   | 0.681      | 0.379        | 0.074 (0.019)    | 0.666 (0.172)    | 0 (0.000) |    16.80 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2208 | 2024-06-07 | B8                | L   | 0.653      | -            | -                | -                | -         |    -5.86 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     2212 | 2024-06-07 | Aurora            | L   | 0.652      | -            | -                | -                | -         |    -1.12 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     2312 | 2024-06-05 | The Prodigies     | W   | 0.641      | -            | -                | -                | 0 (0.000) |     2.17 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     2395 | 2024-06-03 | GL Academy        | W   | 0.628      | -            | -                | -                | -         |     4.73 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     2501 | 2024-05-30 | Rebels            | L   | 0.601      | -            | -                | -                | -         |    -8.88 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     2681 | 2024-05-22 | System5           | W   | 0.548      | -            | -                | -                | -         |     3.00 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     2729 | 2024-05-21 | EYEBALLERS        | W   | 0.541      | 0.500        | -                | 0.553 (0.150)    | -         |     7.14 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     2768 | 2024-05-20 | Nexus             | W   | 0.533      | -            | -                | -                | -         |     5.36 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     2938 | 2024-05-15 | Norway            | W   | 0.501      | -            | -                | -                | -         |     3.10 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     2997 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.494      | 0.500        | 0.035 (0.009)    | 0.707 (0.175)    | -         |     9.56 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     3221 | 2024-05-04 | FlyQuest          | L   | 0.426      | -            | -                | -                | -         |    -4.39 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            8 |     3236 | 2024-05-03 | BIG               | L   | 0.419      | -            | -                | -                | -         |    -1.65 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3256 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.413      | 0.889        | 0.245 (0.090)    | 0.443 (0.163)    | 1 (0.413) |    12.47 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            6 |     3306 | 2024-04-30 | Complexity        | L   | 0.400      | -            | -                | -                | -         |    -0.25 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            5 |     3516 | 2024-04-20 | EYEBALLERS        | L   | 0.334      | -            | -                | -                | -         |    -5.63 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     4055 | 2024-04-03 | SAW               | L   | 0.220      | -            | -                | -                | -         |    -0.15 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4110 | 2024-04-01 | RUSH B            | W   | 0.207      | 0.500        | 0.025 (0.003)    | -                | -         |     2.99 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4387 | 2024-03-15 | Betera            | L   | 0.094      | -            | -                | -                | -         |    -2.32 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4445 | 2024-03-13 | Monte             | L   | 0.081      | -            | -                | -                | -         |    -0.96 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,436.20)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.940 | $1,250.00      | $1,175.39       |
| 2024-06-13 |      0.694 | $10,895.00     | $7,566.49       |
| 2024-06-09 |      0.667 | $500.00        | $333.72         |
| 2024-05-12 |      0.480 | $7,000.00      | $3,360.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
