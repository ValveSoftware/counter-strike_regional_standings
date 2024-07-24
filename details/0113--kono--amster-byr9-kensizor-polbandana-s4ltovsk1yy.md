### Roster Details<br />
Team Name: kONO<br />
Roster: amster, byr9, kensizor, Polbandana, s4ltovsk1yy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [113](../standings_global.md)<br />
Regional Rank: [82]( ../standings_europe.md)<br />
Final Rank Value:  832.5<br />
<br />
Final Rank Value (832.5) = Starting Rank Value (823.8) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 823.8
- 400 + ( ( 0.209 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 823.8


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
|           43 |      234 | 2024-07-18 | Lilmix            | L   | 1.000      | -            | -                | -                | -         |   -13.06 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           42 |      286 | 2024-07-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -18.03 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           41 |      349 | 2024-07-16 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |   -13.79 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           40 |      402 | 2024-07-15 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -11.41 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           39 |      405 | 2024-07-14 | Turkey            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.09 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           38 |      407 | 2024-07-14 | Nexus             | W   | 1.000      | 0.143        | 0.018 (0.003)    | 0.480 (0.069)    | 0 (0.000) |     9.98 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           37 |      411 | 2024-07-14 | Turkey            | L   | 1.000      | -            | -                | -                | -         |   -26.71 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           36 |      457 | 2024-07-11 | Illuminar         | W   | 1.000      | 0.371        | 0.015 (0.006)    | 0.378 (0.140)    | 0 (0.000) |    16.16 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           35 |      468 | 2024-07-10 | Nexus             | W   | 1.000      | 0.143        | -                | 0.480 (0.069)    | 0 (0.000) |     9.62 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           34 |      499 | 2024-07-09 | 500               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.17 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           33 |      528 | 2024-07-07 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -17.87 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           32 |      532 | 2024-07-06 | BRUTE             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.90 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           31 |      535 | 2024-07-05 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -3.26 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           30 |      546 | 2024-06-30 | Lazer Cats        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.63 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           29 |      588 | 2024-06-18 | UNiTY             | W   | 0.957      | 0.333        | 0.032 (0.010)    | 0.342 (0.109)    | 0 (0.000) |    19.13 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           28 |      593 | 2024-06-17 | K10               | W   | 0.951      | 0.333        | 0.010 (0.003)    | -                | 0 (0.000) |     9.12 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           27 |     1383 | 2024-05-25 | Rebels            | L   | 0.798      | -            | -                | -                | -         |    -7.17 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           26 |     1493 | 2024-05-21 | Serbia            | L   | 0.772      | -            | -                | -                | -         |   -15.35 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           25 |     1652 | 2024-05-16 | Monte             | L   | 0.739      | -            | -                | -                | -         |    -9.04 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           24 |     1663 | 2024-05-16 | Zero Tenacity     | L   | 0.737      | -            | -                | -                | -         |    -6.24 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           23 |     1713 | 2024-05-15 | Preasy            | W   | 0.731      | 0.333        | 0.015 (0.004)    | 0.243 (0.059)    | 0 (0.000) |     8.50 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           22 |     1760 | 2024-05-14 | Alliance          | W   | 0.726      | 0.384        | 0.018 (0.005)    | 0.328 (0.092)    | -         |    11.51 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           21 |     1767 | 2024-05-14 | Johnny Speeds     | W   | 0.724      | 0.333        | 0.154 (0.037)    | 0.858 (0.207)    | -         |    20.99 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           20 |     1787 | 2024-05-13 | Verdant           | W   | 0.718      | 0.333        | 0.019 (0.004)    | 0.336 (0.080)    | -         |    14.02 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           19 |     2083 | 2024-04-29 | Gaimin Gladiators | W   | 0.626      | 0.384        | 0.053 (0.013)    | 0.432 (0.104)    | -         |    15.41 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           18 |     2187 | 2024-04-25 | HAVU              | W   | 0.598      | -            | -                | -                | -         |     6.56 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           17 |     2650 | 2024-04-09 | ex-Preasy         | L   | 0.491      | -            | -                | -                | -         |    -6.72 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           16 |     3143 | 2024-03-15 | Metizport         | W   | 0.327      | -            | -                | -                | -         |     6.95 | amster, byr9, kensizor, Polbandana, s4ltovsk1yy |
|           15 |     3246 | 2024-03-12 | JANO              | W   | 0.306      | -            | -                | -                | -         |     3.12 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           14 |     3258 | 2024-03-11 | CYBERSHOKE        | L   | 0.300      | -            | -                | -                | -         |    -6.51 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           13 |     3306 | 2024-03-09 | Enterprise        | W   | 0.286      | 0.372        | 0.050 (0.005)    | 0.646 (0.069)    | -         |     5.89 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           12 |     3350 | 2024-03-07 | Endpoint          | L   | 0.274      | -            | -                | -                | -         |    -3.44 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           11 |     3363 | 2024-03-07 | Permitta          | L   | 0.272      | -            | -                | -                | -         |    -2.79 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|           10 |     3473 | 2024-03-03 | ex-Preasy         | L   | 0.246      | -            | -                | -                | -         |    -3.92 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            9 |     3495 | 2024-03-02 | MOUZ NXT          | L   | 0.239      | -            | -                | -                | -         |    -1.61 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            8 |     3533 | 2024-02-28 | Aurora            | L   | 0.221      | -            | -                | -                | -         |    -0.09 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            7 |     3538 | 2024-02-28 | KOI               | L   | 0.220      | -            | -                | -                | -         |    -1.13 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            6 |     3553 | 2024-02-27 | DMS               | W   | 0.214      | -            | -                | -                | -         |     3.67 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            5 |     3563 | 2024-02-27 | INGLORIOUS        | W   | 0.213      | -            | -                | -                | -         |     1.16 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            4 |     3564 | 2024-02-27 | AURA              | W   | 0.213      | -            | -                | -                | -         |     1.01 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            3 |     3787 | 2024-02-17 | Aurora            | L   | 0.146      | -            | -                | -                | -         |    -0.06 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            2 |     3789 | 2024-02-17 | The Chosen Few    | W   | 0.146      | -            | -                | -                | -         |     1.43 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |
|            1 |     3794 | 2024-02-17 | Aurora            | L   | 0.146      | -            | -                | -                | -         |    -0.06 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,960.69)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-06-18 |      0.957 | $6,000.00      | $5,744.95       |
| 2024-05-18 |      0.753 | $1,000.00      | $753.47         |
| 2024-05-16 |      0.737 | $3,000.00      | $2,212.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
