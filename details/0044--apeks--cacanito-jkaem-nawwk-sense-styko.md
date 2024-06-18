### Roster Details<br />
Team Name: Apeks<br />
Roster: CacaNito, jkaem, nawwk, sense, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [44](../standings_global.md)<br />
Regional Rank: [32]( ../standings_europe.md)<br />
Final Rank Value:  1166.5<br />
<br />
Final Rank Value (1166.5) = Starting Rank Value (1100.6) + Head To Head Adjustments (65.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.424[<sup>2</sup>](#table1)

The average of these factors is 0.345<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1100.6
- 400 + ( ( 0.345 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1100.6


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
|           40 |     1526 | 2024-04-27 | MIBR              | L   | 0.859      | -            | -                | -                | -         |    -2.16 | CacaNito, jkaem, nawwk, sense, STYKO |
|           39 |     1575 | 2024-04-25 | Aurora            | W   | 0.846      | 0.500        | 0.526 (0.223)    | 0.874 (0.370)    | 1 (0.846) |    24.38 | CacaNito, jkaem, nawwk, sense, STYKO |
|           38 |     1581 | 2024-04-25 | sunday school     | W   | 0.844      | -            | -                | -                | 1 (0.844) |     1.74 | CacaNito, jkaem, nawwk, sense, STYKO |
|           37 |     1770 | 2024-04-18 | BetBoom           | L   | 0.796      | -            | -                | -                | -         |    -2.32 | CacaNito, jkaem, nawwk, sense, STYKO |
|           36 |     1773 | 2024-04-18 | DMS               | W   | 0.796      | 0.143        | -                | 0.473 (0.054)    | 0 (0.000) |     4.98 | CacaNito, jkaem, nawwk, sense, STYKO |
|           35 |     1786 | 2024-04-18 | AMKAL             | W   | 0.795      | 0.143        | 0.139 (0.016)    | 0.613 (0.070)    | 0 (0.000) |    14.54 | CacaNito, jkaem, nawwk, sense, STYKO |
|           34 |     1950 | 2024-04-11 | Aurora            | L   | 0.749      | -            | -                | -                | -         |    -1.70 | CacaNito, jkaem, nawwk, sense, STYKO |
|           33 |     1989 | 2024-04-10 | AMKAL             | L   | 0.743      | -            | -                | -                | -         |   -11.04 | CacaNito, jkaem, nawwk, sense, STYKO |
|           32 |     2042 | 2024-04-09 | fnatic            | W   | 0.736      | 0.143        | 0.290 (0.030)    | 0.666 (0.070)    | -         |    20.79 | CacaNito, jkaem, nawwk, sense, STYKO |
|           31 |     2050 | 2024-04-09 | KOI               | W   | 0.736      | 0.143        | -                | 0.508 (0.053)    | -         |    13.31 | CacaNito, jkaem, nawwk, sense, STYKO |
|           30 |     2071 | 2024-04-08 | fnatic            | L   | 0.730      | -            | -                | -                | -         |    -2.10 | CacaNito, jkaem, nawwk, sense, STYKO |
|           29 |     2087 | 2024-04-08 | GUN5              | W   | 0.728      | -            | -                | -                | -         |     0.42 | CacaNito, jkaem, nawwk, sense, STYKO |
|           28 |     2228 | 2024-04-03 | Monte             | L   | 0.695      | -            | -                | -                | -         |    -6.38 | CacaNito, jkaem, nawwk, sense, STYKO |
|           27 |     2257 | 2024-04-02 | Aurora            | L   | 0.689      | -            | -                | -                | -         |    -1.34 | CacaNito, jkaem, nawwk, sense, STYKO |
|           26 |     2264 | 2024-04-02 | B8                | W   | 0.688      | 0.143        | 0.229 (0.023)    | 1.000 (0.098)    | -         |    12.73 | CacaNito, jkaem, nawwk, sense, STYKO |
|           25 |     2291 | 2024-03-31 | B8                | L   | 0.675      | -            | -                | -                | -         |    -8.85 | CacaNito, jkaem, nawwk, sense, STYKO |
|           24 |     2323 | 2024-03-28 | 3DMAX             | L   | 0.655      | -            | -                | -                | -         |    -7.67 | CacaNito, jkaem, nawwk, sense, STYKO |
|           23 |     2388 | 2024-03-26 | FORZE             | L   | 0.641      | -            | -                | -                | -         |   -11.81 | CacaNito, jkaem, nawwk, sense, STYKO |
|           22 |     2489 | 2024-03-19 | Legacy            | L   | 0.595      | -            | -                | -                | -         |    -9.81 | CacaNito, jkaem, nawwk, sense, STYKO |
|           21 |     2501 | 2024-03-18 | Imperial          | L   | 0.587      | -            | -                | -                | -         |    -1.86 | CacaNito, jkaem, nawwk, sense, STYKO |
|           20 |     2518 | 2024-03-17 | AMKAL             | W   | 0.583      | 0.143        | 0.139 (0.012)    | 0.613 (0.051)    | 1 (0.583) |     9.93 | CacaNito, jkaem, nawwk, sense, STYKO |
|           19 |     2530 | 2024-03-17 | paiN              | L   | 0.581      | -            | -                | -                | -         |    -1.30 | CacaNito, jkaem, nawwk, sense, STYKO |
|           18 |     2660 | 2024-03-12 | Metizport         | L   | 0.549      | -            | -                | -                | -         |   -11.23 | CacaNito, jkaem, nawwk, sense, STYKO |
|           17 |     2669 | 2024-03-11 | Virtus.pro        | L   | 0.543      | -            | -                | -                | -         |    -0.48 | CacaNito, jkaem, nawwk, sense, STYKO |
|           16 |     2678 | 2024-03-11 | KOI               | W   | 0.542      | 0.143        | -                | 0.508 (0.039)    | -         |    10.10 | CacaNito, jkaem, nawwk, sense, STYKO |
|           15 |     2772 | 2024-03-07 | Space             | W   | 0.516      | 0.500        | -                | 0.419 (0.108)    | -         |     2.80 | CacaNito, jkaem, nawwk, sense, STYKO |
|           14 |     2799 | 2024-03-06 | PARIVISION        | L   | 0.509      | -            | -                | -                | -         |   -11.37 | CacaNito, jkaem, nawwk, sense, STYKO |
|           13 |     3109 | 2024-02-21 | Gaimin Gladiators | W   | 0.415      | -            | -                | -                | 1 (0.415) |     7.75 | CacaNito, jkaem, nawwk, sense, STYKO |
|           12 |     3141 | 2024-02-20 | Monte             | W   | 0.407      | 0.143        | 0.189 (0.011)    | -                | 1 (0.407) |     9.67 | CacaNito, jkaem, nawwk, sense, STYKO |
|           11 |     3154 | 2024-02-19 | Cloud9            | L   | 0.403      | -            | -                | -                | -         |    -2.99 | CacaNito, jkaem, nawwk, sense, STYKO |
|           10 |     3165 | 2024-02-19 | OG                | W   | 0.401      | 0.143        | 0.235 (0.013)    | -                | 1 (0.401) |     7.50 | CacaNito, jkaem, nawwk, sense, STYKO |
|            9 |     3348 | 2024-02-11 | Metizport         | L   | 0.350      | -            | -                | -                | -         |    -7.52 | CacaNito, jkaem, nawwk, sense, STYKO |
|            8 |     3351 | 2024-02-11 | 3DMAX             | W   | 0.349      | 0.143        | 0.186 (0.009)    | 1.000 (0.050)    | -         |     7.13 | CacaNito, jkaem, nawwk, sense, STYKO |
|            7 |     3364 | 2024-02-10 | Metizport         | W   | 0.342      | -            | -                | -                | -         |     3.40 | CacaNito, jkaem, nawwk, sense, STYKO |
|            6 |     3367 | 2024-02-10 | ex-Anonymo        | W   | 0.341      | -            | -                | -                | -         |     0.58 | CacaNito, jkaem, nawwk, sense, STYKO |
|            5 |     3431 | 2024-02-04 | Natus Vincere     | L   | 0.303      | -            | -                | -                | -         |    -0.10 | CacaNito, jkaem, nawwk, sense, STYKO |
|            4 |     3456 | 2024-02-03 | Complexity        | L   | 0.296      | -            | -                | -                | -         |    -0.20 | CacaNito, jkaem, nawwk, sense, STYKO |
|            3 |     3484 | 2024-02-02 | BIG               | W   | 0.290      | 0.143        | 0.225 (0.009)    | -                | 1 (0.290) |     7.92 | CacaNito, jkaem, nawwk, sense, STYKO |
|            2 |     3519 | 2024-02-01 | FURIA             | W   | 0.283      | 0.143        | 0.245 (0.010)    | -                | 1 (0.283) |     8.54 | CacaNito, jkaem, nawwk, sense, STYKO |
|            1 |     3544 | 2024-01-31 | Spirit            | L   | 0.275      | -            | -                | -                | -         |    -0.06 | CacaNito, jkaem, nawwk, sense, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,121.53)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-28 |      0.860 | $10,000.00     | $8,603.17       |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |
| 2024-02-11 |      0.349 | $10,000.00     | $3,492.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
