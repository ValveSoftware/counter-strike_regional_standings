### Roster Details<br />
Team Name: Legacy<br />
Roster: b4rtiN, dumau, latto, NEKIZ, saadzin<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [11]( ../standings_americas.md)<br />
Final Rank Value:  1138.3<br />
<br />
Final Rank Value (1138.3) = Starting Rank Value (1069.5) + Head To Head Adjustments (68.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.545[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.276[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1069.5
- 400 + ( ( 0.329 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1069.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |        6 | 2024-06-16 | Nouns            | W   | 1.000      | 0.384        | 0.081 (0.031)    | 0.504 (0.194)    | 0 (0.000) |    12.39 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           41 |       10 | 2024-06-16 | Elevate          | W   | 1.000      | 0.384        | 0.031 (0.012)    | 0.481 (0.185)    | 0 (0.000) |    10.49 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           40 |       40 | 2024-06-15 | OMiT             | W   | 1.000      | 0.384        | 0.022 (0.009)    | 0.311 (0.120)    | 0 (0.000) |     6.16 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           39 |       73 | 2024-06-14 | Akimbo           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.69 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           38 |      187 | 2024-06-10 | OMiT             | W   | 1.000      | 0.368        | -                | 0.311 (0.114)    | 0 (0.000) |     5.96 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           37 |      220 | 2024-06-09 | Party Astronauts | W   | 1.000      | 0.384        | 0.055 (0.021)    | 0.600 (0.231)    | -         |    13.46 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           36 |      289 | 2024-06-08 | M80              | L   | 1.000      | -            | -                | -                | -         |    -7.96 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           35 |      347 | 2024-06-07 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |   -17.68 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           34 |      355 | 2024-06-07 | Elevate          | W   | 1.000      | 0.143        | -                | 0.481 (0.069)    | -         |    10.70 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           33 |      399 | 2024-06-06 | Mythic           | W   | 1.000      | 0.384        | -                | 0.377 (0.145)    | -         |     7.20 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           32 |      404 | 2024-06-06 | OMiT             | W   | 1.000      | 0.368        | -                | 0.311 (0.114)    | -         |     5.64 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           31 |      468 | 2024-06-05 | Vibe             | W   | 1.000      | -            | -                | -                | -         |     0.73 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           30 |      518 | 2024-06-04 | E-Xolos LAZER    | W   | 1.000      | 0.368        | -                | 0.249 (0.092)    | -         |     3.95 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           29 |      857 | 2024-05-22 | NRG              | L   | 1.000      | -            | -                | -                | -         |   -20.20 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           28 |      883 | 2024-05-21 | Carpe Diem       | W   | 1.000      | 0.384        | -                | 0.278 (0.107)    | -         |     5.01 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           27 |     1013 | 2024-05-17 | Party Astronauts | L   | 0.991      | -            | -                | -                | -         |   -20.89 | b4rtiN, dumau, latto, NEKIZ, saadzin  |
|           26 |     1717 | 2024-04-19 | M80              | L   | 0.804      | -            | -                | -                | -         |   -10.14 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           25 |     1757 | 2024-04-18 | Elevate          | W   | 0.799      | -            | -                | -                | -         |     6.21 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           24 |     1764 | 2024-04-18 | Liquid           | L   | 0.797      | -            | -                | -                | -         |    -1.28 | b4rtiN, dumau, latto, NEKIZ, Stewie2K |
|           23 |     2474 | 2024-03-20 | The MongolZ      | L   | 0.601      | -            | -                | -                | -         |    -0.24 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           22 |     2489 | 2024-03-19 | Apeks            | W   | 0.595      | -            | -                | -                | 1 (0.595) |     9.81 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           21 |     2500 | 2024-03-18 | GamerLegion      | L   | 0.588      | -            | -                | -                | -         |    -9.44 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           20 |     2513 | 2024-03-17 | Cloud9           | L   | 0.583      | -            | -                | -                | -         |    -4.10 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           19 |     2523 | 2024-03-17 | FURIA            | W   | 0.582      | 0.143        | 0.245 (0.020)    | -                | 1 (0.582) |    17.43 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           18 |     2856 | 2024-03-04 | M80              | W   | 0.496      | 0.143        | 0.205 (0.015)    | -                | 1 (0.496) |    11.21 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           17 |     2869 | 2024-03-03 | MIBR             | W   | 0.490      | 0.143        | 0.281 (0.020)    | -                | 1 (0.490) |    14.57 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           16 |     2899 | 2024-03-02 | Nouns            | W   | 0.484      | -            | -                | -                | 1 (0.484) |     5.39 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           15 |     2921 | 2024-03-01 | paiN             | L   | 0.477      | -            | -                | -                | -         |    -0.80 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           14 |     3689 | 2024-01-22 | Sharks           | L   | 0.218      | -            | -                | -                | -         |    -4.35 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           13 |     3751 | 2024-01-20 | RED Canids       | W   | 0.204      | -            | -                | -                | -         |     3.94 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           12 |     3801 | 2024-01-19 | paiN             | W   | 0.198      | 0.143        | 0.492 (0.014)    | -                | -         |     5.95 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           11 |     3807 | 2024-01-19 | 9z               | W   | 0.197      | 0.143        | 0.525 (0.015)    | -                | -         |     6.01 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|           10 |     3956 | 2024-01-16 | RED Canids       | L   | 0.178      | -            | -                | -                | -         |    -2.09 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            9 |     3967 | 2024-01-16 | W7M              | W   | 0.177      | -            | -                | -                | -         |     0.96 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            8 |     3969 | 2024-01-16 | Imperial         | W   | 0.177      | 0.143        | 0.406 (0.010)    | -                | -         |     5.22 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            7 |     4008 | 2024-01-15 | Galorys          | W   | 0.171      | -            | -                | -                | -         |     1.39 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            6 |     4049 | 2024-01-14 | RED Canids       | L   | 0.163      | -            | -                | -                | -         |    -1.89 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            5 |     4068 | 2024-01-13 | inSanitY         | W   | 0.157      | -            | -                | -                | -         |     0.12 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            4 |     4198 | 2024-01-09 | Flamengo         | L   | 0.131      | -            | -                | -                | -         |    -3.95 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            3 |     4202 | 2024-01-09 | W7M              | W   | 0.131      | -            | -                | -                | -         |     0.72 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            2 |     4212 | 2024-01-09 | blockkstar       | W   | 0.130      | -            | -                | -                | -         |     0.16 | b4rtiN, coldzera, dumau, latto, NEKIZ |
|            1 |     4216 | 2024-01-09 | adalYamigos      | W   | 0.130      | -            | -                | -                | -         |     0.31 | b4rtiN, coldzera, dumau, latto, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,026.17)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $11,000.00     | $11,000.00      |
| 2024-06-10 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-06-09 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
