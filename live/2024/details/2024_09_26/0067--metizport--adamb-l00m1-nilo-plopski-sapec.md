### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, Sapec<br />
Global Rank: [67](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [50]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  951.1<br />
<br />
Final Rank Value (951.1) = Starting Rank Value (879.5) + Head To Head Adjustments (71.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.263[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 879.5
- 400 + ( ( 0.254 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 879.5


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
|           35 |      158 | 2024-09-23 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -14.64 | adamb, L00m1, nilo, Plopski, Sapec    |
|           34 |      346 | 2024-09-16 | 9INE              | W   | 1.000      | 0.384        | 0.091 (0.035)    | 0.796 (0.306)    | 0 (0.000) |    15.81 | adamb, L00m1, nilo, Plopski, Sapec    |
|           33 |      502 | 2024-09-11 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -10.52 | adamb, L00m1, nilo, Plopski, Sapec    |
|           32 |      556 | 2024-09-09 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -11.39 | adamb, L00m1, nilo, Plopski, Sapec    |
|           31 |      702 | 2024-09-04 | Sampi             | W   | 1.000      | 0.384        | 0.032 (0.012)    | 0.942 (0.362)    | 0 (0.000) |    12.52 | adamb, L00m1, nilo, Plopski, Sapec    |
|           30 |      764 | 2024-09-02 | FAVBET            | W   | 1.000      | 0.384        | -                | 0.817 (0.314)    | 0 (0.000) |    12.42 | adamb, L00m1, nilo, Plopski, Sapec    |
|           29 |      916 | 2024-08-28 | Nemiga            | W   | 1.000      | 0.384        | 0.247 (0.095)    | 0.874 (0.336)    | 0 (0.000) |    23.45 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |      981 | 2024-08-27 | ex-Enterprise     | W   | 0.998      | 0.384        | 0.030 (0.011)    | 0.586 (0.225)    | 0 (0.000) |    13.59 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     1161 | 2024-08-22 | Complexity        | L   | 0.967      | -            | -                | -                | -         |    -0.66 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     1232 | 2024-08-21 | 9INE              | L   | 0.959      | -            | -                | -                | -         |   -13.37 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     1281 | 2024-08-20 | TSM               | L   | 0.952      | -            | -                | -                | -         |   -10.67 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     1298 | 2024-08-19 | Sashi             | L   | 0.947      | -            | -                | -                | -         |    -9.59 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     1414 | 2024-08-15 | PARIVISION        | L   | 0.919      | -            | -                | -                | -         |    -9.28 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     1515 | 2024-08-12 | Sampi             | W   | 0.899      | 0.384        | 0.032 (0.011)    | 0.942 (0.325)    | 0 (0.000) |    11.95 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     1616 | 2024-08-08 | Into the Breach   | W   | 0.872      | -            | -                | -                | 0 (0.000) |    13.09 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     1645 | 2024-08-07 | Johnny Speeds     | W   | 0.867      | 0.143        | 0.098 (0.012)    | 0.977 (0.121)    | 0 (0.000) |    21.56 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     1654 | 2024-08-07 | TSM               | W   | 0.866      | 0.143        | -                | 0.875 (0.108)    | 0 (0.000) |    17.22 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     1701 | 2024-08-06 | BLEED             | W   | 0.860      | -            | -                | -                | 0 (0.000) |    21.82 | adamb, Jackinho, nilo, Plopski, Sapec |
|           17 |     1705 | 2024-08-06 | HAVU              | W   | 0.859      | -            | -                | -                | -         |     3.94 | adamb, Jackinho, nilo, Plopski, Sapec |
|           16 |     1710 | 2024-08-06 | Johnny Speeds     | L   | 0.859      | -            | -                | -                | -         |    -4.82 | adamb, Jackinho, nilo, Plopski, Sapec |
|           15 |     1866 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.827      | 0.143        | 0.087 (0.010)    | -                | -         |    14.86 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     1876 | 2024-08-01 | Insilio           | L   | 0.826      | -            | -                | -                | -         |   -10.64 | adamb, Jackinho, nilo, Plopski, Sapec |
|           13 |     1973 | 2024-07-30 | QUAZAR            | W   | 0.812      | -            | -                | -                | -         |     3.27 | adamb, Jackinho, nilo, Plopski, Sapec |
|           12 |     2028 | 2024-07-28 | Insilio           | L   | 0.800      | -            | -                | -                | -         |   -10.31 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     2194 | 2024-07-23 | RUBY              | L   | 0.765      | -            | -                | -                | -         |   -13.27 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     2212 | 2024-07-22 | Permitta          | L   | 0.761      | -            | -                | -                | -         |   -11.56 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     2313 | 2024-07-19 | Sampi             | W   | 0.740      | 0.435        | 0.032 (0.010)    | 0.942 (0.303)    | -         |    12.28 | adamb, Jackinho, nilo, Plopski, Sapec |
|            8 |     2369 | 2024-07-18 | BC.Game           | L   | 0.733      | -            | -                | -                | -         |   -12.59 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     2492 | 2024-07-16 | Endpoint          | W   | 0.720      | 0.435        | 0.057 (0.018)    | 0.725 (0.227)    | -         |    12.58 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3556 | 2024-05-23 | Space             | L   | 0.358      | -            | -                | -                | -         |    -6.82 | abdi, adamb, Jackinho, nilo, Plopski  |
|            5 |     3661 | 2024-05-20 | Zero Tenacity     | L   | 0.341      | -            | -                | -                | -         |    -3.24 | adamb, Jackinho, nilo, Plopski, ztr   |
|            4 |     3715 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.327      | 0.500        | 0.171 (0.028)    | -                | -         |     9.37 | adamb, Jackinho, nilo, Plopski, ztr   |
|            3 |     3802 | 2024-05-16 | Rare Atom         | W   | 0.312      | -            | -                | -                | -         |     4.01 | adamb, Jackinho, nilo, Plopski, ztr   |
|            2 |     3986 | 2024-05-11 | BetBoom           | L   | 0.279      | -            | -                | -                | -         |    -1.72 | adamb, Jackinho, nilo, Plopski, ztr   |
|            1 |     4001 | 2024-05-10 | EYEBALLERS        | W   | 0.274      | -            | -                | -                | -         |     3.04 | adamb, Jackinho, nilo, Plopski, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,512.17)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $500.00        | $500.00         |
| 2024-09-14 |      1.000 | $500.00        | $500.00         |
| 2024-08-25 |      0.988 | $5,000.00      | $4,937.62       |
| 2024-05-12 |      0.287 | $2,000.00      | $574.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
