### Roster Details<br />
Team Name: kONO<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [59]( ../standings_europe.md)<br />
Final Rank Value:  942.1<br />
<br />
Final Rank Value (942.1) = Starting Rank Value (854.0) + Head To Head Adjustments (88.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.419[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.0
- 400 + ( ( 0.215 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 854.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |        5 | 2024-07-11 | Illuminar         | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.280 (0.104)    | 0 (0.000) |    18.18 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           35 |       16 | 2024-07-10 | Romania           | W   | 1.000      | 0.143        | -                | 0.375 (0.054)    | 0 (0.000) |     8.36 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           34 |       47 | 2024-07-09 | Bulgaria          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.76 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           33 |       76 | 2024-07-07 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -19.37 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           32 |       80 | 2024-07-06 | BRUTE             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.51 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           31 |       83 | 2024-07-05 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -3.27 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |       94 | 2024-06-30 | Lazer Cats        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.01 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           29 |      136 | 2024-06-18 | UNiTY             | W   | 1.000      | 0.333        | 0.039 (0.013)    | 0.331 (0.110)    | 0 (0.000) |    19.92 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |      141 | 2024-06-17 | EXO               | W   | 1.000      | 0.333        | 0.019 (0.006)    | -                | 0 (0.000) |    11.80 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |      931 | 2024-05-25 | Rebels            | L   | 0.884      | -            | -                | -                | -         |    -7.39 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     1041 | 2024-05-21 | Serbia            | L   | 0.859      | -            | -                | -                | -         |   -17.54 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     1200 | 2024-05-16 | Monte             | L   | 0.826      | -            | -                | -                | -         |    -3.39 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |     1211 | 2024-05-16 | Zero Tenacity     | L   | 0.824      | -            | -                | -                | -         |    -7.37 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     1261 | 2024-05-15 | Preasy            | W   | 0.818      | 0.333        | 0.012 (0.003)    | 0.176 (0.048)    | 0 (0.000) |     8.41 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     1308 | 2024-05-14 | Alliance          | W   | 0.813      | 0.384        | 0.020 (0.006)    | 0.377 (0.118)    | 0 (0.000) |    13.45 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     1315 | 2024-05-14 | Johnny Speeds     | W   | 0.811      | 0.333        | 0.158 (0.043)    | 0.825 (0.223)    | 0 (0.000) |    23.65 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     1335 | 2024-05-13 | Verdant           | W   | 0.805      | 0.333        | 0.013 (0.003)    | 0.327 (0.088)    | -         |    11.45 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     1631 | 2024-04-29 | Gaimin Gladiators | W   | 0.712      | 0.384        | 0.069 (0.019)    | 0.528 (0.145)    | -         |    18.92 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     1735 | 2024-04-25 | HAVU              | W   | 0.685      | 0.384        | -                | 0.211 (0.055)    | -         |     7.49 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     2198 | 2024-04-09 | ex-Preasy         | L   | 0.578      | -            | -                | -                | -         |    -7.02 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           16 |     2691 | 2024-03-15 | Metizport         | W   | 0.413      | 0.143        | 0.065 (0.004)    | -                | -         |     9.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           15 |     2794 | 2024-03-12 | JANO              | W   | 0.393      | -            | -                | -                | -         |     3.80 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           14 |     2806 | 2024-03-11 | CYBERSHOKE        | L   | 0.387      | -            | -                | -                | -         |    -8.50 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           13 |     2854 | 2024-03-09 | Enterprise        | W   | 0.373      | 0.372        | 0.053 (0.007)    | 0.654 (0.091)    | -         |     7.99 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     2898 | 2024-03-07 | Endpoint          | L   | 0.361      | -            | -                | -                | -         |    -4.70 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     2911 | 2024-03-07 | Permitta          | L   | 0.358      | -            | -                | -                | -         |    -3.71 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     3021 | 2024-03-03 | ex-Preasy         | L   | 0.333      | -            | -                | -                | -         |    -4.89 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     3043 | 2024-03-02 | MOUZ NXT          | L   | 0.326      | -            | -                | -                | -         |    -2.09 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            8 |     3081 | 2024-02-28 | Aurora            | L   | 0.308      | -            | -                | -                | -         |    -0.11 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            7 |     3086 | 2024-02-28 | KOI               | L   | 0.306      | -            | -                | -                | -         |    -1.28 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            6 |     3101 | 2024-02-27 | DMS               | W   | 0.301      | -            | -                | -                | -         |     5.10 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     3111 | 2024-02-27 | INGLORIOUS        | W   | 0.300      | -            | -                | -                | -         |     1.50 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     3112 | 2024-02-27 | AURA              | W   | 0.299      | -            | -                | -                | -         |     1.34 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     3335 | 2024-02-17 | Aurora            | L   | 0.233      | -            | -                | -                | -         |    -0.07 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     3337 | 2024-02-17 | The Chosen Few    | W   | 0.233      | -            | -                | -                | -         |     2.19 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     3342 | 2024-02-17 | Aurora            | L   | 0.232      | -            | -                | -                | -         |    -0.07 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,563.08)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-18 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-05-18 |      0.840 | $1,000.00      | $840.30         |
| 2024-05-16 |      0.824 | $3,000.00      | $2,472.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
