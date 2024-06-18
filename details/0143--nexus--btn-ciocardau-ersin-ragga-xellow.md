### Roster Details<br />
Team Name: Nexus<br />
Roster: BTN, Ciocardau, ERSIN, ragga, XELLOW<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [143](../standings_global.md)<br />
Regional Rank: [92]( ../standings_europe.md)<br />
Final Rank Value:  735.3<br />
<br />
Final Rank Value (735.3) = Starting Rank Value (877.1) + Head To Head Adjustments (-141.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.193[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.1
- 400 + ( ( 0.235 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 877.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      150 | 2024-06-12 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -6.77 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           61 |      175 | 2024-06-11 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -10.87 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           60 |      270 | 2024-06-09 | EYEBALLERS        | L   | 1.000      | -            | -                | -                | -         |    -7.86 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           59 |      300 | 2024-06-08 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |    -8.41 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           58 |      373 | 2024-06-07 | Astralis Talent   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.36 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           57 |      383 | 2024-06-07 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -15.56 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           56 |      405 | 2024-06-06 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -2.69 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           55 |      503 | 2024-06-05 | BLEED             | L   | 1.000      | -            | -                | -                | -         |    -1.65 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           54 |      745 | 2024-05-27 | The Prodigies     | L   | 1.000      | -            | -                | -                | -         |   -24.98 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           53 |      756 | 2024-05-27 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -4.91 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           52 |      790 | 2024-05-25 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -11.30 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           51 |      819 | 2024-05-23 | RUBY              | L   | 1.000      | -            | -                | -                | -         |    -8.12 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           50 |      931 | 2024-05-20 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.573 (0.249)    | 0 (0.000) |    20.85 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |      937 | 2024-05-20 | PERA              | L   | 1.000      | -            | -                | -                | -         |    -8.82 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |     1034 | 2024-05-17 | Passion UA        | L   | 0.988      | -            | -                | -                | -         |    -8.30 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |     1125 | 2024-05-15 | Space             | L   | 0.974      | -            | -                | -                | -         |   -12.76 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           46 |     1200 | 2024-05-13 | Sampi             | L   | 0.961      | -            | -                | -                | -         |    -8.77 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           45 |     1410 | 2024-05-03 | ENCE Academy      | L   | 0.894      | -            | -                | -                | -         |   -17.17 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           44 |     1455 | 2024-05-01 | Insilio           | L   | 0.881      | -            | -                | -                | -         |    -9.13 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           43 |     1487 | 2024-04-30 | fnatic            | L   | 0.873      | -            | -                | -                | -         |    -0.95 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           42 |     1492 | 2024-04-29 | Endpoint          | L   | 0.869      | -            | -                | -                | -         |   -11.90 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           41 |     1495 | 2024-04-29 | VP.Prodigy        | L   | 0.868      | -            | -                | -                | -         |   -13.58 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           40 |     1502 | 2024-04-29 | LEON              | W   | 0.867      | 0.396        | -                | 0.165 (0.057)    | 0 (0.000) |     6.89 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           39 |     1506 | 2024-04-29 | Enterprise        | W   | 0.867      | 0.384        | 0.046 (0.015)    | 0.575 (0.192)    | 0 (0.000) |    16.09 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           38 |     1523 | 2024-04-28 | brazylijski luz   | L   | 0.861      | -            | -                | -                | -         |   -14.07 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           37 |     1587 | 2024-04-25 | Metizport         | W   | 0.843      | 0.384        | 0.073 (0.024)    | 0.587 (0.190)    | 0 (0.000) |    19.26 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           36 |     1594 | 2024-04-25 | Grannys Knockers  | L   | 0.841      | -            | -                | -                | -         |   -16.37 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           35 |     1616 | 2024-04-24 | AMKAL             | L   | 0.834      | -            | -                | -                | -         |    -4.08 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           34 |     1637 | 2024-04-23 | Illuminar         | L   | 0.827      | -            | -                | -                | -         |   -13.65 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           33 |     1650 | 2024-04-22 | Zero Tenacity     | L   | 0.821      | -            | -                | -                | -         |    -7.82 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     1660 | 2024-04-21 | Young Ninjas      | W   | 0.816      | 0.500        | 0.030 (0.012)    | -                | 0 (0.000) |    11.37 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     1663 | 2024-04-21 | PARIVISION        | L   | 0.815      | -            | -                | -                | -         |   -11.05 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     1699 | 2024-04-20 | Permitta          | W   | 0.808      | 0.500        | 0.039 (0.016)    | 0.885 (0.358)    | 0 (0.000) |    15.84 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     1768 | 2024-04-18 | Young Ninjas      | L   | 0.796      | -            | -                | -                | -         |   -13.76 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     1802 | 2024-04-18 | Enterprise        | L   | 0.794      | -            | -                | -                | -         |    -9.25 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     1999 | 2024-04-10 | B8                | W   | 0.742      | 0.384        | 0.229 (0.065)    | 1.000 (0.285)    | 0 (0.000) |    17.71 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     2142 | 2024-04-05 | SINNERS           | L   | 0.709      | -            | -                | -                | -         |    -5.35 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     2285 | 2024-04-01 | Sashi             | W   | 0.681      | 0.384        | 0.200 (0.052)    | 1.000 (0.262)    | 0 (0.000) |    16.36 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     2394 | 2024-03-25 | Sashi             | L   | 0.636      | -            | -                | -                | -         |    -4.44 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2655 | 2024-03-12 | Nemiga            | W   | 0.550      | 0.372        | 0.486 (0.099)    | 0.694 (0.142)    | 0 (0.000) |    15.78 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2677 | 2024-03-11 | RUBY              | W   | 0.542      | 0.372        | 0.121 (0.024)    | 0.574 (0.116)    | -         |    11.03 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2716 | 2024-03-09 | INGLORIOUS        | W   | 0.529      | -            | -                | -                | -         |     2.63 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2742 | 2024-03-08 | FAVBET            | W   | 0.523      | 0.372        | -                | 0.397 (0.077)    | -         |     6.45 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2889 | 2024-03-03 | TSM               | L   | 0.489      | -            | -                | -                | -         |   -10.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     3135 | 2024-02-20 | ex-Guild Eagles   | L   | 0.408      | -            | -                | -                | -         |    -5.42 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     3157 | 2024-02-19 | Monte             | L   | 0.402      | -            | -                | -                | -         |    -0.94 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     3162 | 2024-02-19 | Astralis          | L   | 0.401      | -            | -                | -                | -         |    -0.04 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     3462 | 2024-02-03 | 500               | L   | 0.296      | -            | -                | -                | -         |    -6.49 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     3464 | 2024-02-03 | Jake Bube         | W   | 0.295      | -            | -                | -                | -         |     0.58 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     3473 | 2024-02-03 | AIRLYA            | L   | 0.294      | -            | -                | -                | -         |    -8.34 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3730 | 2024-01-21 | ex-sYnck          | W   | 0.208      | -            | -                | -                | -         |     0.74 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3761 | 2024-01-20 | OG                | L   | 0.203      | -            | -                | -                | -         |    -1.00 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3773 | 2024-01-20 | BIG               | W   | 0.201      | 0.143        | 0.225 (0.006)    | -                | -         |     6.07 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3809 | 2024-01-19 | SINNERS           | W   | 0.197      | -            | -                | -                | -         |     4.90 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3866 | 2024-01-18 | Gaimin Gladiators | L   | 0.189      | -            | -                | -                | -         |    -0.87 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3888 | 2024-01-18 | 9 Pandas          | L   | 0.189      | -            | -                | -                | -         |    -1.12 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3961 | 2024-01-16 | Endpoint          | W   | 0.178      | -            | -                | -                | -         |     3.06 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3976 | 2024-01-16 | FAVBET            | W   | 0.177      | -            | -                | -                | -         |     2.05 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     3987 | 2024-01-16 | Alliance          | W   | 0.176      | -            | -                | -                | -         |     3.00 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4083 | 2024-01-13 | OG                | L   | 0.155      | -            | -                | -                | -         |    -0.71 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4118 | 2024-01-12 | Gucci Academy     | W   | 0.150      | -            | -                | -                | -         |     0.56 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            1 |     4238 | 2024-01-09 | Fraud5            | L   | 0.129      | -            | -                | -                | -         |    -2.96 | BTN, ERSIN, ragga, s0und, XELLOW     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,622.95)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.889 | $1,000.00      | $889.13         |
| 2024-03-25 |      0.636 | $4,300.00      | $2,733.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
