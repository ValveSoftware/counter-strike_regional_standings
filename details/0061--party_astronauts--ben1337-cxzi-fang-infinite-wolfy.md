### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Global Rank: [61](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [17]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1000.2<br />
<br />
Final Rank Value (1000.2) = Starting Rank Value (936.2) + Head To Head Adjustments (64.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.421[<sup>1</sup>](#table2)
- Bounty Collected: 0.366[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 936.2
- 400 + ( ( 0.260 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 936.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |       31 | 2024-07-30 | NRG           | W   | 1.000      | 0.477        | 0.020 (0.010)    | 0.519 (0.247)    | 0 (0.000) |    15.41 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           74 |       36 | 2024-07-30 | NRG           | W   | 1.000      | 0.477        | 0.020 (0.010)    | 0.519 (0.247)    | 0 (0.000) |    16.83 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           73 |      262 | 2024-07-23 | FLUFFY AIMERS | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.96 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           72 |      264 | 2024-07-23 | FLUFFY AIMERS | L   | 1.000      | -            | -                | -                | -         |   -26.09 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           71 |      350 | 2024-07-20 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |   -15.73 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           70 |      486 | 2024-07-17 | Take Flyte    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.23 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           69 |      490 | 2024-07-17 | Take Flyte    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.49 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           68 |      554 | 2024-07-16 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.06 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |      558 | 2024-07-16 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.41 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      896 | 2024-06-15 | Falcons       | L   | 0.890      | -            | -                | -                | -         |    -2.13 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      940 | 2024-06-14 | The MongolZ   | L   | 0.883      | -            | -                | -                | -         |    -0.16 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |     1050 | 2024-06-09 | Legacy        | L   | 0.855      | -            | -                | -                | -         |   -12.49 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |     1121 | 2024-06-08 | Wildcard      | W   | 0.847      | 0.384        | 0.055 (0.018)    | 0.501 (0.163)    | 0 (0.000) |    12.70 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |     1128 | 2024-06-08 | NRG           | L   | 0.846      | -            | -                | -                | -         |   -16.33 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |     1168 | 2024-06-07 | Nouns         | L   | 0.842      | -            | -                | -                | -         |   -13.78 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |     1177 | 2024-06-07 | Legacy        | W   | 0.840      | 0.143        | 0.119 (0.014)    | -                | 0 (0.000) |    13.94 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |     1184 | 2024-06-07 | NRG           | W   | 0.840      | 0.384        | -                | 0.519 (0.167)    | -         |    10.19 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |     1196 | 2024-06-07 | Nouns         | W   | 0.839      | -            | -                | -                | -         |    13.74 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |     1227 | 2024-06-06 | NRG           | W   | 0.835      | 0.477        | 0.020 (0.008)    | 0.519 (0.206)    | -         |    11.40 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |     1243 | 2024-06-06 | E-Xolos LAZER | W   | 0.833      | -            | -                | -                | -         |     6.32 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |     1297 | 2024-06-05 | Wildcard      | L   | 0.828      | -            | -                | -                | -         |   -12.70 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           54 |     1346 | 2024-06-04 | Elevate       | W   | 0.822      | 0.477        | 0.028 (0.011)    | 0.505 (0.198)    | -         |    14.32 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           53 |     1656 | 2024-05-22 | Nouns         | L   | 0.735      | -            | -                | -                | -         |   -11.53 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           52 |     1666 | 2024-05-22 | M80           | W   | 0.734      | 0.477        | 0.190 (0.067)    | 0.551 (0.193)    | -         |    19.67 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           51 |     1671 | 2024-05-22 | M80           | L   | 0.734      | -            | -                | -                | -         |    -3.31 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           50 |     1704 | 2024-05-21 | Limitless     | W   | 0.728      | -            | -                | -                | -         |     3.24 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           49 |     1707 | 2024-05-21 | Limitless     | W   | 0.728      | -            | -                | -                | -         |     3.34 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           48 |     1740 | 2024-05-20 | Akimbo        | W   | 0.722      | -            | -                | -                | -         |     6.30 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           47 |     1809 | 2024-05-18 | NRG           | L   | 0.707      | -            | -                | -                | -         |   -11.24 | ben1337, chop, cxzi, Infinite, WolfY |
|           46 |     1841 | 2024-05-17 | Legacy        | W   | 0.701      | 0.303        | 0.119 (0.025)    | -                | -         |    13.37 | ben1337, chop, cxzi, Infinite, WolfY |
|           45 |     1870 | 2024-05-16 | FLUFFY AIMERS | W   | 0.695      | -            | -                | -                | -         |     5.25 | ben1337, chop, cxzi, Infinite, WolfY |
|           44 |     1873 | 2024-05-16 | FLUFFY AIMERS | W   | 0.695      | -            | -                | -                | -         |     5.49 | ben1337, chop, cxzi, Infinite, WolfY |
|           43 |     1963 | 2024-05-14 | Mythic        | W   | 0.681      | -            | -                | -                | -         |     7.18 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |     1971 | 2024-05-14 | Mythic        | L   | 0.681      | -            | -                | -                | -         |   -14.67 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |     2064 | 2024-05-11 | BOSS          | L   | 0.660      | -            | -                | -                | -         |   -14.08 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |     2070 | 2024-05-11 | Perseverance  | L   | 0.660      | -            | -                | -                | -         |   -16.17 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |     2126 | 2024-05-08 | LAG           | W   | 0.642      | -            | -                | -                | -         |     7.27 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |     2131 | 2024-05-08 | LAG           | W   | 0.641      | -            | -                | -                | -         |     7.66 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |     2151 | 2024-05-07 | Elevate       | L   | 0.635      | -            | -                | -                | -         |    -9.31 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     2152 | 2024-05-07 | Elevate       | W   | 0.635      | 0.477        | 0.028 (0.008)    | 0.505 (0.153)    | -         |    10.94 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     2170 | 2024-05-06 | NRG           | L   | 0.628      | -            | -                | -                | -         |   -12.47 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     2171 | 2024-05-06 | NRG           | W   | 0.628      | 0.477        | -                | 0.519 (0.155)    | -         |     7.38 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     2242 | 2024-05-02 | Wildcard      | L   | 0.601      | -            | -                | -                | -         |   -10.76 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     2243 | 2024-05-02 | Wildcard      | W   | 0.601      | 0.477        | 0.055 (0.016)    | 0.501 (0.143)    | -         |     8.31 | ben1337, chop, cxzi, RUSH, WolfY     |
|           31 |     2379 | 2024-04-27 | Aurora        | L   | 0.563      | -            | -                | -                | -         |    -0.41 | ben1337, chop, cxzi, RUSH, WolfY     |
|           30 |     2381 | 2024-04-26 | sunday school | W   | 0.562      | -            | -                | -                | 1 (0.562) |     2.59 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     2407 | 2024-04-25 | Aurora        | L   | 0.555      | -            | -                | -                | -         |    -0.36 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     2846 | 2024-04-09 | Take Flyte    | W   | 0.448      | -            | -                | -                | -         |     2.83 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     2853 | 2024-04-09 | Take Flyte    | W   | 0.448      | -            | -                | -                | -         |     2.90 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     2977 | 2024-04-04 | MIGHT         | W   | 0.415      | -            | -                | -                | -         |     1.20 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     2985 | 2024-04-04 | MIGHT         | W   | 0.415      | -            | -                | -                | -         |     1.22 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     3074 | 2024-04-02 | Perseverance  | W   | 0.402      | -            | -                | -                | -         |     2.97 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           23 |     3077 | 2024-04-02 | Nouns         | L   | 0.401      | -            | -                | -                | -         |    -6.63 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           22 |     3155 | 2024-03-27 | Carpe Diem    | W   | 0.362      | -            | -                | -                | -         |     2.14 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     3159 | 2024-03-27 | Carpe Diem    | W   | 0.362      | -            | -                | -                | -         |     2.18 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     3201 | 2024-03-26 | Nouns         | L   | 0.355      | -            | -                | -                | -         |    -5.96 | ben1337, chop, cxzi, RUSH, WolfY     |
|           19 |     3205 | 2024-03-26 | Nouns         | L   | 0.355      | -            | -                | -                | -         |    -6.14 | ben1337, chop, cxzi, RUSH, WolfY     |
|           18 |     3283 | 2024-03-20 | BOSS          | W   | 0.315      | -            | -                | -                | -         |     3.20 | ben1337, chop, cxzi, RUSH, WolfY     |
|           17 |     3287 | 2024-03-20 | BOSS          | W   | 0.315      | -            | -                | -                | -         |     3.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           16 |     3304 | 2024-03-19 | Perseverance  | W   | 0.309      | -            | -                | -                | -         |     2.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           15 |     3307 | 2024-03-19 | Perseverance  | W   | 0.308      | -            | -                | -                | -         |     2.33 | ben1337, chop, cxzi, RUSH, WolfY     |
|           14 |     3436 | 2024-03-13 | Carpe Diem    | W   | 0.267      | -            | -                | -                | -         |     1.65 | ben1337, chop, cxzi, RUSH, WolfY     |
|           13 |     3474 | 2024-03-12 | Elevate       | W   | 0.261      | -            | -                | -                | -         |     4.89 | ben1337, chop, cxzi, RUSH, WolfY     |
|           12 |     3854 | 2024-02-24 | Wildcard      | L   | 0.148      | -            | -                | -                | -         |    -2.56 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     3861 | 2024-02-24 | ex-CatEvil    | W   | 0.147      | -            | -                | -                | -         |     0.21 | ben1337, chop, cxzi, Walco, WolfY    |
|           10 |     3896 | 2024-02-22 | Liquid        | L   | 0.135      | -            | -                | -                | -         |    -0.22 | ben1337, chop, cxzi, Walco, WolfY    |
|            9 |     3898 | 2024-02-22 | NRG           | W   | 0.134      | -            | -                | -                | -         |     1.61 | ben1337, chop, cxzi, Walco, WolfY    |
|            8 |     3903 | 2024-02-22 | Take Flyte    | W   | 0.134      | -            | -                | -                | -         |     0.95 | ben1337, chop, cxzi, Walco, WolfY    |
|            7 |     3950 | 2024-02-20 | NRG           | W   | 0.122      | -            | -                | -                | -         |     1.47 | ben1337, chop, cxzi, Walco, WolfY    |
|            6 |     3951 | 2024-02-20 | Mythic        | W   | 0.121      | -            | -                | -                | -         |     1.22 | ben1337, chop, cxzi, Walco, WolfY    |
|            5 |     3975 | 2024-02-19 | NRG           | L   | 0.116      | -            | -                | -                | -         |    -2.27 | ben1337, chop, cxzi, Walco, WolfY    |
|            4 |     3978 | 2024-02-19 | Akimbo        | W   | 0.114      | -            | -                | -                | -         |     1.00 | ben1337, chop, cxzi, Walco, WolfY    |
|            3 |     4304 | 2024-02-02 | NRG           | L   | 0.001      | -            | -                | -                | -         |    -0.03 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     4306 | 2024-02-02 | Carpe Diem    | W   | 0.001      | -            | -                | -                | -         |     0.01 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     4310 | 2024-02-02 | NRG           | L   | 0.001      | -            | -                | -                | -         |    -0.01 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,769.77)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $2,000.00      | $1,797.10       |
| 2024-06-09 |      0.855 | $5,000.00      | $4,276.09       |
| 2024-06-09 |      0.855 | $7,000.00      | $5,985.01       |
| 2024-04-28 |      0.571 | $3,000.00      | $1,711.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
