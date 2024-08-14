### Roster Details<br />
Team Name: ex-PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [71](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [51]( ../standings_europe.md)<br />
<br />
Final Rank Value:  948.5<br />
<br />
Final Rank Value (948.5) = Starting Rank Value (915.5) + Head To Head Adjustments (33.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.425[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.195[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.5
- 400 + ( ( 0.261 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 915.5


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
|           36 |      170 | 2024-08-09 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -8.71 | Aaron, Bibu, DGL, kory, Porya      |
|           35 |      184 | 2024-08-08 | Permitta          | W   | 1.000      | 0.426        | 0.036 (0.016)    | 0.957 (0.408)    | 0 (0.000) |    14.65 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      482 | 2024-07-31 | B8                | L   | 1.000      | -            | -                | -                | -         |    -8.13 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      531 | 2024-07-30 | Space             | W   | 1.000      | 0.500        | 0.005 (0.003)    | 0.445 (0.222)    | 0 (0.000) |    11.21 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      566 | 2024-07-29 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -15.45 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      891 | 2024-07-19 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -23.46 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |      924 | 2024-07-18 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -7.67 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1003 | 2024-07-17 | Verdant           | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.307 (0.102)    | 0 (0.000) |     9.24 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1059 | 2024-07-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -2.59 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1110 | 2024-07-15 | Betera            | W   | 0.999      | -            | -                | -                | 0 (0.000) |     3.05 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1427 | 2024-06-13 | Enterprise        | W   | 0.787      | 0.379        | 0.042 (0.012)    | 0.687 (0.205)    | 0 (0.000) |    11.12 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1463 | 2024-06-12 | Rebels            | W   | 0.780      | 0.379        | 0.036 (0.010)    | 0.585 (0.173)    | 0 (0.000) |    13.33 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     1483 | 2024-06-11 | ECLOT             | W   | 0.773      | 0.379        | 0.078 (0.023)    | 0.501 (0.147)    | 0 (0.000) |    18.89 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     1686 | 2024-06-07 | B8                | L   | 0.745      | -            | -                | -                | -         |    -6.75 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     1690 | 2024-06-07 | Aurora            | L   | 0.745      | -            | -                | -                | -         |    -1.14 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     1790 | 2024-06-05 | The Prodigies     | W   | 0.733      | -            | -                | -                | 0 (0.000) |     2.49 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     1873 | 2024-06-03 | GL Academy        | W   | 0.720      | -            | -                | -                | 0 (0.000) |     5.63 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     1979 | 2024-05-30 | Rebels            | L   | 0.693      | -            | -                | -                | -         |   -10.32 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     2159 | 2024-05-22 | System5           | W   | 0.640      | -            | -                | -                | -         |     3.46 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     2207 | 2024-05-21 | EYEBALLERS        | W   | 0.633      | 0.500        | -                | 0.614 (0.194)    | -         |     8.07 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     2246 | 2024-05-20 | Nexus             | W   | 0.626      | 0.379        | 0.013 (0.003)    | 0.548 (0.130)    | -         |     6.05 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     2416 | 2024-05-15 | Norway            | W   | 0.593      | -            | -                | -                | -         |     3.74 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     2475 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.586      | 0.500        | 0.036 (0.011)    | 0.496 (0.146)    | -         |    10.24 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     2699 | 2024-05-04 | FlyQuest          | L   | 0.518      | -            | -                | -                | -         |    -4.21 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           12 |     2714 | 2024-05-03 | BIG               | L   | 0.511      | -            | -                | -                | -         |    -1.95 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           11 |     2734 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.506      | 0.889        | 0.236 (0.106)    | 0.498 (0.224)    | 1 (0.506) |    15.43 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           10 |     2784 | 2024-04-30 | Complexity        | L   | 0.492      | -            | -                | -                | -         |    -0.25 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            9 |     2994 | 2024-04-20 | EYEBALLERS        | L   | 0.426      | -            | -                | -                | -         |    -7.28 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            8 |     3533 | 2024-04-03 | SAW               | L   | 0.312      | -            | -                | -                | -         |    -0.43 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3588 | 2024-04-01 | RUSH B            | W   | 0.299      | 0.500        | 0.025 (0.004)    | -                | -         |     4.13 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            6 |     3865 | 2024-03-15 | Betera            | L   | 0.186      | -            | -                | -                | -         |    -4.58 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3923 | 2024-03-13 | Monte             | L   | 0.174      | -            | -                | -                | -         |    -1.79 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     4302 | 2024-02-26 | System5           | L   | 0.067      | -            | -                | -                | -         |    -1.70 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     4440 | 2024-02-20 | ex-Preasy         | L   | 0.026      | -            | -                | -                | -         |    -0.60 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     4468 | 2024-02-19 | GamerLegion       | L   | 0.019      | -            | -                | -                | -         |    -0.45 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4471 | 2024-02-19 | Cloud9            | L   | 0.018      | -            | -                | -                | -         |    -0.26 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,210.57)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-13 |      0.787 | $10,895.00     | $8,573.22       |
| 2024-06-09 |      0.760 | $500.00        | $379.92         |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
