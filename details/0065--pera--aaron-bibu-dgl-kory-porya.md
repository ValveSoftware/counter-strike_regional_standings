### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [65](../standings_global.md)<br />
Regional Rank: [45]( ../standings_europe.md)<br />
Final Rank Value:  984.4<br />
<br />
Final Rank Value (984.4) = Starting Rank Value (952.5) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.389[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 952.5
- 400 + ( ( 0.273 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 952.5


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
|           32 |      168 | 2024-07-19 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -24.27 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      201 | 2024-07-18 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |    -8.60 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |      280 | 2024-07-17 | Verdant           | W   | 1.000      | 0.333        | 0.019 (0.006)    | 0.336 (0.112)    | 0 (0.000) |     8.45 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |      336 | 2024-07-16 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.85 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |      387 | 2024-07-15 | Betera            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.37 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |      704 | 2024-06-13 | Enterprise        | W   | 0.927      | 0.379        | 0.050 (0.018)    | 0.646 (0.227)    | 0 (0.000) |    13.00 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |      740 | 2024-06-12 | Rebels            | W   | 0.920      | 0.379        | 0.053 (0.018)    | 0.661 (0.230)    | 0 (0.000) |    16.74 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |      760 | 2024-06-11 | ECLOT             | W   | 0.914      | 0.379        | 0.084 (0.029)    | 0.510 (0.176)    | 0 (0.000) |    19.85 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |      963 | 2024-06-07 | B8                | L   | 0.886      | -            | -                | -                | -         |    -7.65 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |      967 | 2024-06-07 | Aurora            | L   | 0.885      | -            | -                | -                | -         |    -1.82 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     1067 | 2024-06-05 | The Prodigies     | W   | 0.874      | -            | -                | -                | 0 (0.000) |     2.83 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     1150 | 2024-06-03 | GL Academy        | W   | 0.861      | 0.379        | 0.009 (0.003)    | -                | 0 (0.000) |     7.16 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     1256 | 2024-05-30 | Rebels            | L   | 0.834      | -            | -                | -                | -         |   -11.13 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     1436 | 2024-05-22 | System5           | W   | 0.781      | -            | -                | -                | 0 (0.000) |     4.20 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     1484 | 2024-05-21 | EYEBALLERS        | W   | 0.774      | 0.500        | -                | 0.571 (0.221)    | 0 (0.000) |     9.33 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     1523 | 2024-05-20 | Nexus             | W   | 0.766      | 0.379        | 0.018 (0.005)    | 0.480 (0.139)    | -         |     7.10 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     1693 | 2024-05-15 | Norway            | W   | 0.734      | 0.500        | 0.008 (0.003)    | 0.116 (0.043)    | -         |     4.81 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     1752 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.727      | 0.500        | 0.041 (0.015)    | 0.638 (0.232)    | -         |    13.13 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     1976 | 2024-05-04 | FlyQuest          | L   | 0.659      | -            | -                | -                | -         |    -2.94 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           13 |     1991 | 2024-05-03 | BIG               | L   | 0.652      | -            | -                | -                | -         |    -2.74 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           12 |     2011 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.646      | 0.889        | 0.287 (0.165)    | 0.537 (0.309)    | 1 (0.646) |    19.96 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           11 |     2061 | 2024-04-30 | Complexity        | L   | 0.633      | -            | -                | -                | -         |    -0.28 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           10 |     2271 | 2024-04-20 | EYEBALLERS        | L   | 0.567      | -            | -                | -                | -         |   -10.15 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            9 |     2810 | 2024-04-03 | SAW               | L   | 0.453      | -            | -                | -                | -         |    -2.53 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            8 |     2865 | 2024-04-01 | RUSH B            | W   | 0.440      | 0.500        | 0.021 (0.005)    | 0.306 (0.067)    | -         |     5.41 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3142 | 2024-03-15 | Betera            | L   | 0.327      | -            | -                | -                | -         |    -8.06 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3200 | 2024-03-13 | Monte             | L   | 0.314      | -            | -                | -                | -         |    -3.36 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3579 | 2024-02-26 | System5           | L   | 0.207      | -            | -                | -                | -         |    -5.28 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     3717 | 2024-02-20 | ex-Preasy         | L   | 0.167      | -            | -                | -                | -         |    -3.53 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     3745 | 2024-02-19 | GamerLegion       | L   | 0.160      | -            | -                | -                | -         |    -3.24 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     3748 | 2024-02-19 | Cloud9            | L   | 0.159      | -            | -                | -                | -         |    -1.44 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     3818 | 2024-02-16 | SINNERS           | L   | 0.140      | -            | -                | -                | -         |    -1.61 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,795.64)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-13 |      0.927 | $10,895.00     | $10,104.31      |
| 2024-06-09 |      0.900 | $500.00        | $450.19         |
| 2024-05-12 |      0.713 | $7,000.00      | $4,991.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
