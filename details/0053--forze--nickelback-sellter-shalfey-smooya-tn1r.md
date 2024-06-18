### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [53](../standings_global.md)<br />
Regional Rank: [39]( ../standings_europe.md)<br />
Final Rank Value:  1082.6<br />
<br />
Final Rank Value (1082.6) = Starting Rank Value (975.2) + Head To Head Adjustments (107.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.496[<sup>1</sup>](#table2)
- Bounty Collected: 0.427[<sup>2</sup>](#table1)
- Opponent Network: 0.118[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.2
- 400 + ( ( 0.283 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 975.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1388 | 2024-05-04 | Monte           | L   | 0.901      | -            | -                | -                | -         |    -8.01 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           29 |     1419 | 2024-05-02 | GamerLegion     | L   | 0.890      | -            | -                | -                | -         |    -7.76 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           28 |     1446 | 2024-05-01 | FURIA           | W   | 0.883      | 0.889        | 0.245 (0.192)    | 0.521 (0.409)    | 1 (0.883) |    25.94 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           27 |     1468 | 2024-04-30 | Monte           | L   | 0.876      | -            | -                | -                | -         |    -7.39 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           26 |     1922 | 2024-04-12 | BIG             | L   | 0.756      | -            | -                | -                | -         |    -3.19 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           25 |     1955 | 2024-04-11 | Aurora          | L   | 0.748      | -            | -                | -                | -         |    -1.37 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           24 |     1987 | 2024-04-10 | TSM             | W   | 0.743      | 0.500        | -                | 0.127 (0.047)    | 0 (0.000) |     3.32 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           23 |     2039 | 2024-04-09 | brazylijski luz | W   | 0.736      | 0.500        | -                | 0.306 (0.113)    | 0 (0.000) |     4.41 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           22 |     2079 | 2024-04-08 | ENCE            | W   | 0.728      | 0.684        | 0.229 (0.114)    | 0.424 (0.211)    | 0 (0.000) |    21.23 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           21 |     2357 | 2024-03-27 | 500             | L   | 0.649      | -            | -                | -                | -         |   -16.70 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           20 |     2388 | 2024-03-26 | Apeks           | W   | 0.641      | 0.500        | 0.060 (0.019)    | 0.338 (0.108)    | 0 (0.000) |    11.81 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           19 |     2393 | 2024-03-25 | B8              | L   | 0.636      | -            | -                | -                | -         |    -7.33 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           18 |     2398 | 2024-03-24 | BetBoom         | W   | 0.628      | 0.143        | 0.414 (0.037)    | 0.798 (0.072)    | 0 (0.000) |    18.89 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           17 |     2410 | 2024-03-23 | VP.Prodigy      | W   | 0.622      | 0.143        | -                | 0.518 (0.046)    | 0 (0.000) |     6.07 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           16 |     2424 | 2024-03-22 | ex-Preasy       | W   | 0.615      | -            | -                | -                | 0 (0.000) |     8.35 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           15 |     2445 | 2024-03-21 | PARIVISION      | L   | 0.609      | -            | -                | -                | -         |   -10.24 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           14 |     2471 | 2024-03-20 | NAVI Junior     | W   | 0.602      | -            | -                | -                | 0 (0.000) |     1.14 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           13 |     2827 | 2024-03-05 | KOI             | L   | 0.504      | -            | -                | -                | -         |    -4.83 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           12 |     2832 | 2024-03-05 | AMKAL           | W   | 0.503      | 0.143        | 0.139 (0.010)    | -                | 0 (0.000) |    10.96 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           11 |     2840 | 2024-03-05 | 3DMAX           | W   | 0.502      | 0.143        | 0.186 (0.013)    | 1.000 (0.072)    | -         |    11.84 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|           10 |     2922 | 2024-03-01 | Aurora          | L   | 0.477      | -            | -                | -                | -         |    -0.50 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            9 |     2936 | 2024-02-29 | 9 Pandas        | W   | 0.470      | 0.143        | 0.114 (0.008)    | 0.663 (0.045)    | -         |    10.41 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            8 |     2949 | 2024-02-28 | KOI             | W   | 0.463      | -            | -                | -                | -         |    10.97 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     2955 | 2024-02-28 | Aurora          | W   | 0.462      | 0.143        | 0.526 (0.035)    | 0.874 (0.058)    | -         |    14.16 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     2969 | 2024-02-27 | V1dar           | W   | 0.456      | -            | -                | -                | -         |     1.15 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     2975 | 2024-02-27 | ARCRED          | W   | 0.456      | -            | -                | -                | -         |     4.88 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     3373 | 2024-02-09 | Sashi           | L   | 0.336      | -            | -                | -                | -         |    -3.17 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     3375 | 2024-02-09 | RUBY            | W   | 0.335      | 0.143        | 0.121 (0.006)    | -                | -         |     5.26 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     3386 | 2024-02-08 | BetBoom         | W   | 0.330      | 0.143        | 0.414 (0.019)    | -                | -         |    10.17 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     3390 | 2024-02-08 | Sashi           | L   | 0.329      | -            | -                | -                | -         |    -2.98 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,875.06)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-04-14 |      0.769 | $26,250.00     | $20,186.36      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
