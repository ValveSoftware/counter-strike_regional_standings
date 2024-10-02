### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [66](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [49]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  942.8<br />
<br />
Final Rank Value (942.8) = Starting Rank Value (863.8) + Head To Head Adjustments (79.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 863.8
- 400 + ( ( 0.242 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 863.8


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
|           36 |       54 | 2024-10-01 | G2 Ares           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.78 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |      391 | 2024-09-23 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -14.29 | adamb, L00m1, nilo, Plopski, Sapec    |
|           34 |      579 | 2024-09-16 | 9INE              | W   | 1.000      | 0.384        | 0.091 (0.035)    | 0.726 (0.279)    | 0 (0.000) |    15.97 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |      735 | 2024-09-11 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.25 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |      789 | 2024-09-09 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.09 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |      935 | 2024-09-04 | Sampi             | W   | 1.000      | 0.384        | 0.030 (0.012)    | 0.797 (0.306)    | 0 (0.000) |    12.83 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |      997 | 2024-09-02 | FAVBET            | W   | 0.998      | 0.384        | -                | 0.751 (0.288)    | 0 (0.000) |    13.05 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |     1149 | 2024-08-28 | Nemiga            | W   | 0.965      | 0.384        | 0.228 (0.085)    | 0.821 (0.304)    | 0 (0.000) |    22.74 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1214 | 2024-08-27 | ex-Enterprise     | W   | 0.957      | 0.384        | 0.028 (0.010)    | 0.502 (0.185)    | 0 (0.000) |    13.30 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     1394 | 2024-08-22 | Complexity        | L   | 0.926      | -            | -                | -                | -         |    -0.66 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     1465 | 2024-08-21 | 9INE              | L   | 0.918      | -            | -                | -                | -         |   -12.57 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     1514 | 2024-08-20 | TSM               | L   | 0.911      | -            | -                | -                | -         |   -10.07 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     1531 | 2024-08-19 | Sashi             | L   | 0.906      | -            | -                | -                | -         |    -9.28 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     1647 | 2024-08-15 | PARIVISION        | L   | 0.878      | -            | -                | -                | -         |    -8.95 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     1748 | 2024-08-12 | Sampi             | W   | 0.858      | 0.384        | 0.030 (0.010)    | 0.797 (0.263)    | 0 (0.000) |    11.84 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     1849 | 2024-08-08 | Into the Breach   | W   | 0.831      | -            | -                | -                | 0 (0.000) |    13.04 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     1878 | 2024-08-07 | Johnny Speeds     | W   | 0.826      | 0.143        | 0.094 (0.011)    | 0.906 (0.107)    | 0 (0.000) |    20.50 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     1887 | 2024-08-07 | TSM               | W   | 0.825      | -            | -                | -                | 0 (0.000) |    16.59 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     1934 | 2024-08-06 | BLEED             | W   | 0.819      | -            | -                | -                | -         |    20.66 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     1938 | 2024-08-06 | HAVU              | W   | 0.818      | -            | -                | -                | -         |     3.88 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     1943 | 2024-08-06 | Johnny Speeds     | L   | 0.818      | -            | -                | -                | -         |    -4.70 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     2099 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.786      | 0.143        | 0.084 (0.009)    | 0.847 (0.095)    | -         |    14.60 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     2109 | 2024-08-01 | Insilio           | L   | 0.785      | -            | -                | -                | -         |    -9.81 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     2206 | 2024-07-30 | QUAZAR            | W   | 0.771      | -            | -                | -                | -         |     3.32 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     2261 | 2024-07-28 | Insilio           | L   | 0.759      | -            | -                | -                | -         |    -9.44 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     2427 | 2024-07-23 | RUBY              | L   | 0.724      | -            | -                | -                | -         |   -12.39 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     2445 | 2024-07-22 | Permitta          | L   | 0.720      | -            | -                | -                | -         |   -10.44 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     2546 | 2024-07-19 | Sampi             | W   | 0.699      | 0.435        | 0.030 (0.009)    | 0.797 (0.242)    | -         |    11.96 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     2602 | 2024-07-18 | BC.Game           | L   | 0.692      | -            | -                | -                | -         |   -11.72 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     2725 | 2024-07-16 | Endpoint          | W   | 0.679      | 0.435        | 0.055 (0.016)    | 0.630 (0.186)    | -         |    12.21 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3789 | 2024-05-23 | Space             | L   | 0.317      | -            | -                | -                | -         |    -6.01 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     3894 | 2024-05-20 | Zero Tenacity     | L   | 0.300      | -            | -                | -                | -         |    -2.71 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     3948 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.287      | 0.500        | 0.159 (0.023)    | -                | -         |     8.14 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     4035 | 2024-05-16 | Rare Atom         | W   | 0.272      | -            | -                | -                | -         |     3.59 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     4219 | 2024-05-11 | BetBoom           | L   | 0.238      | -            | -                | -                | -         |    -1.23 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     4234 | 2024-05-10 | EYEBALLERS        | W   | 0.233      | -            | -                | -                | -         |     2.61 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,225.73)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-09-14 |      1.000 | $500.00        | $500.00         |
| 2024-08-25 |      0.947 | $5,000.00      | $4,733.02       |
| 2024-05-12 |      0.246 | $2,000.00      | $492.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
