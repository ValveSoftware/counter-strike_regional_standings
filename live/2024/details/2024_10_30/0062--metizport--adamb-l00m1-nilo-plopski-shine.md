### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [62](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [44]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  1028.2<br />
<br />
Final Rank Value (1028.2) = Starting Rank Value (927.3) + Head To Head Adjustments (100.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.451[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.3
- 400 + ( ( 0.266 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 927.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |        2 | 2024-10-30 | KOI               | W   | 1.000      | 0.333        | 0.041 (0.014)    | -                | 0 (0.000) |     9.74 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           42 |      349 | 2024-10-12 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -9.01 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |      373 | 2024-10-10 | fnatic            | W   | 1.000      | 0.435        | 0.407 (0.177)    | 0.476 (0.207)    | 0 (0.000) |    26.27 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      450 | 2024-10-08 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.082 (0.036)    | 0.746 (0.324)    | 0 (0.000) |    12.96 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |      476 | 2024-10-07 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -8.22 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |      557 | 2024-10-04 | CYBERSHOKE        | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.717 (0.312)    | 0 (0.000) |    14.36 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |      602 | 2024-10-03 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -9.98 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |      679 | 2024-10-01 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.92 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |     1016 | 2024-09-23 | Into the Breach   | L   | 0.951      | -            | -                | -                | -         |   -14.12 | adamb, L00m1, nilo, Plopski, Sapec    |
|           34 |     1204 | 2024-09-16 | 9INE              | W   | 0.905      | 0.384        | 0.113 (0.039)    | 0.724 (0.252)    | 0 (0.000) |    15.43 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |     1360 | 2024-09-11 | Zero Tenacity     | L   | 0.873      | -            | -                | -                | -         |    -8.86 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |     1414 | 2024-09-09 | Zero Tenacity     | L   | 0.859      | -            | -                | -                | -         |    -9.33 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |     1560 | 2024-09-04 | Sampi             | W   | 0.826      | 0.384        | 0.053 (0.017)    | 0.606 (0.192)    | 0 (0.000) |    11.68 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |     1622 | 2024-09-02 | FAVBET            | W   | 0.812      | 0.384        | 0.055 (0.017)    | 0.828 (0.259)    | 0 (0.000) |    11.79 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |     1774 | 2024-08-28 | Nemiga            | W   | 0.779      | 0.384        | 0.838 (0.251)    | 0.786 (0.235)    | 0 (0.000) |    22.78 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1839 | 2024-08-27 | ex-Enterprise     | W   | 0.771      | -            | -                | -                | 0 (0.000) |    12.84 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     2019 | 2024-08-22 | Complexity        | L   | 0.740      | -            | -                | -                | -         |    -0.56 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     2090 | 2024-08-21 | 9INE              | L   | 0.732      | -            | -                | -                | -         |    -9.04 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     2139 | 2024-08-20 | TSM               | L   | 0.725      | -            | -                | -                | -         |    -8.69 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     2156 | 2024-08-19 | Sashi             | L   | 0.720      | -            | -                | -                | -         |    -8.83 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     2272 | 2024-08-15 | PARIVISION        | L   | 0.692      | -            | -                | -                | -         |    -6.07 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2373 | 2024-08-12 | Sampi             | W   | 0.672      | 0.384        | 0.053 (0.014)    | 0.606 (0.157)    | -         |    10.68 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     2474 | 2024-08-08 | Into the Breach   | W   | 0.645      | -            | -                | -                | -         |    10.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     2503 | 2024-08-07 | Johnny Speeds     | W   | 0.640      | -            | -                | -                | -         |    15.02 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     2512 | 2024-08-07 | TSM               | W   | 0.639      | -            | -                | -                | -         |    12.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     2559 | 2024-08-06 | UNPAID            | W   | 0.633      | 0.143        | 0.224 (0.020)    | -                | -         |    17.99 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     2563 | 2024-08-06 | HAVU              | W   | 0.632      | -            | -                | -                | -         |     2.09 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     2568 | 2024-08-06 | Johnny Speeds     | L   | 0.632      | -            | -                | -                | -         |    -4.78 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     2724 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.600      | -            | -                | -                | -         |    11.10 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     2734 | 2024-08-01 | Insilio           | L   | 0.599      | -            | -                | -                | -         |    -8.15 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     2831 | 2024-07-30 | QUAZAR            | W   | 0.585      | -            | -                | -                | -         |     1.93 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     2886 | 2024-07-28 | Insilio           | L   | 0.573      | -            | -                | -                | -         |    -7.80 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     3052 | 2024-07-23 | RUBY              | L   | 0.538      | -            | -                | -                | -         |   -10.96 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     3070 | 2024-07-22 | Permitta          | L   | 0.534      | -            | -                | -                | -         |    -4.37 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     3171 | 2024-07-19 | Sampi             | W   | 0.513      | 0.435        | -                | 0.606 (0.135)    | -         |     9.84 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     3227 | 2024-07-18 | BC.Game           | L   | 0.506      | -            | -                | -                | -         |   -10.08 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3350 | 2024-07-16 | Endpoint          | W   | 0.493      | 0.435        | -                | 0.626 (0.134)    | -         |     7.80 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     4414 | 2024-05-23 | SovvyKiNG         | L   | 0.131      | -            | -                | -                | -         |    -2.80 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     4519 | 2024-05-20 | Zero Tenacity     | L   | 0.114      | -            | -                | -                | -         |    -1.16 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     4573 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.101      | -            | -                | -                | -         |     2.62 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     4660 | 2024-05-16 | Rare Atom         | W   | 0.086      | -            | -                | -                | -         |     0.89 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     4844 | 2024-05-11 | BetBoom           | L   | 0.052      | -            | -                | -                | -         |    -0.36 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     4859 | 2024-05-10 | EYEBALLERS        | W   | 0.047      | -            | -                | -                | -         |     0.33 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,857.67)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-09-26 |      0.973 | $500.00        | $486.70         |
| 2024-09-14 |      0.894 | $500.00        | $446.88         |
| 2024-08-25 |      0.761 | $5,000.00      | $3,803.28       |
| 2024-05-12 |      0.060 | $2,000.00      | $120.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
