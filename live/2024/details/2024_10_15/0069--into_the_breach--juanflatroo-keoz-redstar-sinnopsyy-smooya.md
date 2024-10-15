### Roster Details<br />
Team Name: Into the Breach<br />
Roster: juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya<br />
Global Rank: [69](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [49]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  941.8<br />
<br />
Final Rank Value (941.8) = Starting Rank Value (917.0) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.427[<sup>2</sup>](#table1)
- Opponent Network: 0.300[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 917.0
- 400 + ( ( 0.266 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 917.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |       21 | 2024-10-13 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -11.74 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           44 |      334 | 2024-10-02 | Illuminar       | L   | 1.000      | -            | -                | -                | -         |   -21.89 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           43 |      390 | 2024-10-01 | Passion UA      | L   | 1.000      | -            | -                | -                | -         |   -14.17 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           42 |      428 | 2024-09-29 | CPH Wolves      | L   | 1.000      | -            | -                | -                | -         |   -23.38 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           41 |      465 | 2024-09-28 | Sampi           | W   | 1.000      | 0.354        | -                | 0.677 (0.240)    | 0 (0.000) |    11.03 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           40 |      472 | 2024-09-28 | Johnny Speeds   | W   | 1.000      | 0.371        | 0.115 (0.042)    | 0.982 (0.364)    | 0 (0.000) |    17.13 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           39 |      501 | 2024-09-27 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -17.68 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           38 |      512 | 2024-09-27 | UNiTY           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.54 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           37 |      539 | 2024-09-26 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |   -14.55 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           36 |      561 | 2024-09-26 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -9.60 | juanflatroo, rallen, REDSTAR, sinnopsyy, smooya   |
|           35 |      651 | 2024-09-24 | Endpoint        | W   | 1.000      | 0.435        | 0.052 (0.023)    | 0.590 (0.257)    | 0 (0.000) |    14.41 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           34 |      660 | 2024-09-24 | fnatic          | W   | 1.000      | 0.384        | 0.217 (0.083)    | -                | 0 (0.000) |    24.08 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           33 |      665 | 2024-09-24 | ALTERNATE aTTaX | L   | 1.000      | -            | -                | -                | -         |   -18.43 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           32 |      708 | 2024-09-23 | Metizport       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.66 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           31 |      777 | 2024-09-20 | Anonymo         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.19 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           30 |      802 | 2024-09-19 | Sampi           | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.677 (0.260)    | 0 (0.000) |    13.32 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           29 |      844 | 2024-09-18 | AMKAL           | L   | 1.000      | -            | -                | -                | -         |   -15.44 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           28 |      870 | 2024-09-17 | Sashi           | W   | 1.000      | 0.443        | 0.100 (0.044)    | 0.634 (0.280)    | 0 (0.000) |    18.38 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           27 |      880 | 2024-09-17 | GUN5            | W   | 1.000      | 0.443        | 0.096 (0.043)    | 1.000 (0.443)    | 0 (0.000) |    20.17 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           26 |     1047 | 2024-09-11 | EYEBALLERS      | W   | 0.974      | -            | -                | -                | -         |    10.31 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           25 |     1060 | 2024-09-11 | Rebels          | L   | 0.973      | -            | -                | -                | -         |   -14.22 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           24 |     1223 | 2024-09-05 | DASH            | W   | 0.933      | -            | -                | -                | -         |     4.83 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           23 |     1231 | 2024-09-05 | GamerLegion     | W   | 0.932      | 0.384        | 0.250 (0.090)    | -                | -         |    20.10 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           22 |     1319 | 2024-09-02 | TSM             | L   | 0.912      | -            | -                | -                | -         |   -10.50 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           21 |     1398 | 2024-08-29 | Zero Tenacity   | L   | 0.888      | -            | -                | -                | -         |   -11.46 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           20 |     1426 | 2024-08-29 | ALTERNATE aTTaX | W   | 0.885      | 0.384        | 0.078 (0.027)    | 0.787 (0.268)    | -         |    15.53 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           19 |     1793 | 2024-08-21 | MOUZ NXT        | L   | 0.832      | -            | -                | -                | -         |   -12.05 | juanflatroo, Keoz, REDSTAR, sinnopsyy, smooya     |
|           18 |     1961 | 2024-08-15 | ex-Enterprise   | W   | 0.793      | -            | -                | -                | -         |    10.13 | juanflatroo, Keoz, rallen, sinnopsyy, smooya      |
|           17 |     1977 | 2024-08-14 | ECLOT           | W   | 0.787      | -            | -                | -                | -         |    17.68 | Aaron, juanflatroo, Keoz, sinnopsyy, smooya       |
|           16 |     2116 | 2024-08-10 | TSM             | L   | 0.759      | -            | -                | -                | -         |   -10.11 | juanflatroo, Keoz, lollipop21k, sinnopsyy, smooya |
|           15 |     2141 | 2024-08-09 | Astralis Talent | W   | 0.753      | -            | -                | -                | -         |     4.04 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|           14 |     2166 | 2024-08-08 | Metizport       | L   | 0.746      | -            | -                | -                | -         |   -11.16 | juanflatroo, Keoz, kRYSTAL, sinnopsyy, smooya     |
|           13 |     2205 | 2024-08-07 | ECSTATIC        | W   | 0.740      | -            | -                | -                | -         |    11.96 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|           12 |     2273 | 2024-08-05 | Johnny Speeds   | L   | 0.727      | -            | -                | -                | -         |    -6.03 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|           11 |     2310 | 2024-08-04 | Zero Tenacity   | L   | 0.720      | -            | -                | -                | -         |    -6.42 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|           10 |     2351 | 2024-08-03 | 9INE            | L   | 0.713      | -            | -                | -                | -         |   -10.72 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            9 |     2384 | 2024-08-02 | 9INE            | L   | 0.707      | -            | -                | -                | -         |   -11.01 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            8 |     2413 | 2024-08-01 | GUN5            | W   | 0.701      | 0.435        | 0.096 (0.029)    | 1.000 (0.305)    | -         |    10.37 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            7 |     2469 | 2024-07-31 | 1WIN            | L   | 0.694      | -            | -                | -                | -         |   -13.90 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            6 |     2556 | 2024-07-29 | Passion UA      | W   | 0.679      | 0.435        | 0.192 (0.057)    | 1.000 (0.295)    | -         |    14.67 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            5 |     2598 | 2024-07-27 | Monte           | L   | 0.668      | -            | -                | -                | -         |   -10.29 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            4 |     2664 | 2024-07-25 | Permitta        | W   | 0.654      | 0.435        | -                | 1.000 (0.284)    | -         |     9.54 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            3 |     2770 | 2024-07-22 | INFINITE        | W   | 0.633      | -            | -                | -                | -         |     2.17 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            2 |     2910 | 2024-07-18 | Preasy          | W   | 0.607      | -            | -                | -                | -         |     4.59 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |
|            1 |     2999 | 2024-07-17 | TSM             | W   | 0.599      | -            | -                | -                | -         |    11.78 | BOROS, juanflatroo, Keoz, sinnopsyy, smooya       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,383.74)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-26 |      1.000 | $1,500.00      | $1,500.00       |
| 2024-09-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-09-14 |      0.995 | $500.00        | $497.26         |
| 2024-08-12 |      0.773 | $500.00        | $386.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
