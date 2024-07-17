### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  1056.0<br />
<br />
Final Rank Value (1056.0) = Starting Rank Value (1002.0) + Head To Head Adjustments (54.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.460[<sup>1</sup>](#table2)
- Bounty Collected: 0.403[<sup>2</sup>](#table1)
- Opponent Network: 0.178[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1002.0
- 400 + ( ( 0.280 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1002.0


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
|           40 |       48 | 2024-07-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.75 | Aaron, Bibu, DGL, kory, Porya      |
|           39 |       99 | 2024-07-15 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.98 | Aaron, Bibu, DGL, kory, Porya      |
|           38 |      416 | 2024-06-13 | Enterprise        | W   | 0.975      | 0.379        | 0.055 (0.020)    | 0.635 (0.234)    | 0 (0.000) |    13.28 | Aaron, Bibu, DGL, kory, Porya      |
|           37 |      452 | 2024-06-12 | Rebels            | W   | 0.967      | 0.379        | 0.052 (0.019)    | 0.575 (0.210)    | 0 (0.000) |    17.13 | Aaron, Bibu, DGL, kory, Porya      |
|           36 |      472 | 2024-06-11 | ECLOT             | W   | 0.961      | 0.379        | 0.103 (0.038)    | 0.551 (0.200)    | 0 (0.000) |    21.18 | Aaron, Bibu, DGL, kory, Porya      |
|           35 |      675 | 2024-06-07 | B8                | L   | 0.933      | -            | -                | -                | -         |    -8.10 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      679 | 2024-06-07 | Aurora            | L   | 0.933      | -            | -                | -                | -         |    -1.80 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      779 | 2024-06-05 | The Prodigies     | W   | 0.921      | -            | -                | -                | 0 (0.000) |     2.50 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      862 | 2024-06-03 | GL Academy        | W   | 0.908      | 0.379        | 0.012 (0.004)    | -                | 0 (0.000) |     7.20 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      968 | 2024-05-30 | Rebels            | L   | 0.881      | -            | -                | -                | -         |   -12.04 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1148 | 2024-05-22 | System5           | W   | 0.828      | 0.500        | -                | 0.108 (0.045)    | 0 (0.000) |     4.05 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1196 | 2024-05-21 | EYEBALLERS        | W   | 0.821      | 0.500        | 0.009 (0.004)    | 0.619 (0.254)    | 0 (0.000) |     9.51 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1235 | 2024-05-20 | Nexus             | W   | 0.813      | 0.379        | 0.011 (0.003)    | 0.432 (0.133)    | 0 (0.000) |     6.73 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1405 | 2024-05-15 | Norway            | W   | 0.781      | 0.500        | 0.010 (0.004)    | 0.122 (0.047)    | -         |     4.72 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1464 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.774      | 0.500        | 0.050 (0.019)    | 0.644 (0.249)    | -         |    13.67 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1688 | 2024-05-04 | FlyQuest          | L   | 0.706      | -            | -                | -                | -         |    -2.65 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           24 |     1703 | 2024-05-03 | BIG               | L   | 0.699      | -            | -                | -                | -         |    -2.42 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           23 |     1723 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.694      | 0.889        | 0.343 (0.211)    | 0.534 (0.329)    | 1 (0.694) |    21.52 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           22 |     1773 | 2024-04-30 | Complexity        | L   | 0.680      | -            | -                | -                | -         |    -0.20 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           21 |     1983 | 2024-04-20 | EYEBALLERS        | L   | 0.614      | -            | -                | -                | -         |   -11.22 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           20 |     2522 | 2024-04-03 | SAW               | L   | 0.500      | -            | -                | -                | -         |    -2.44 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           19 |     2577 | 2024-04-01 | RUSH B            | W   | 0.487      | 0.500        | 0.025 (0.006)    | 0.327 (0.080)    | -         |     5.54 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           18 |     2854 | 2024-03-15 | Betera            | L   | 0.374      | -            | -                | -                | -         |    -9.41 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     2912 | 2024-03-13 | Monte             | L   | 0.361      | -            | -                | -                | -         |    -3.53 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     3291 | 2024-02-26 | System5           | L   | 0.255      | -            | -                | -                | -         |    -6.63 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     3429 | 2024-02-20 | ex-Preasy         | L   | 0.214      | -            | -                | -                | -         |    -4.54 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     3457 | 2024-02-19 | GamerLegion       | L   | 0.207      | -            | -                | -                | -         |    -3.87 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     3460 | 2024-02-19 | Cloud9            | L   | 0.206      | -            | -                | -                | -         |    -1.58 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     3530 | 2024-02-16 | SINNERS           | L   | 0.187      | -            | -                | -                | -         |    -2.06 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     3931 | 2024-01-25 | ex-Guild Eagles   | W   | 0.041      | -            | -                | -                | -         |     0.46 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     3944 | 2024-01-24 | Viperio           | W   | 0.035      | -            | -                | -                | -         |     0.06 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     3966 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.027      | -            | -                | -                | -         |     0.51 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3969 | 2024-01-23 | Rebels            | W   | 0.027      | -            | -                | -                | -         |     0.48 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3991 | 2024-01-22 | ex-Guild Eagles   | W   | 0.021      | -            | -                | -                | -         |     0.23 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3995 | 2024-01-22 | Sampi             | L   | 0.020      | -            | -                | -                | -         |    -0.37 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3999 | 2024-01-22 | Viperio           | W   | 0.020      | -            | -                | -                | -         |     0.04 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     4023 | 2024-01-21 | ex-sYnck          | W   | 0.014      | -            | -                | -                | -         |     0.03 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     4028 | 2024-01-21 | Gaimin Gladiators | L   | 0.013      | -            | -                | -                | -         |    -0.15 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     4052 | 2024-01-20 | KOI               | L   | 0.008      | -            | -                | -                | -         |    -0.06 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4062 | 2024-01-20 | Astralis          | L   | 0.007      | -            | -                | -                | -         |    -0.00 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,414.34)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      0.975 | $10,895.00     | $10,618.83      |
| 2024-06-09 |      0.948 | $500.00        | $473.80         |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
