### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [14]( ../standings_americas.md)<br />
Final Rank Value:  1052.3<br />
<br />
Final Rank Value (1052.3) = Starting Rank Value (998.4) + Head To Head Adjustments (53.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.454[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 998.4
- 400 + ( ( 0.279 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 998.4


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
|           68 |       24 | 2024-07-16 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.76 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |       28 | 2024-07-16 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.08 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      366 | 2024-06-15 | Falcons       | L   | 0.985      | -            | -                | -                | -         |    -1.95 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      410 | 2024-06-14 | The MongolZ   | L   | 0.978      | -            | -                | -                | -         |    -0.22 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |      520 | 2024-06-09 | Legacy        | L   | 0.950      | -            | -                | -                | -         |   -12.58 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |      591 | 2024-06-08 | Wildcard      | W   | 0.942      | 0.384        | 0.064 (0.023)    | 0.553 (0.200)    | 0 (0.000) |    14.03 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |      598 | 2024-06-08 | NRG           | L   | 0.941      | -            | -                | -                | -         |   -18.34 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |      638 | 2024-06-07 | Nouns         | L   | 0.936      | -            | -                | -                | -         |   -15.42 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |      647 | 2024-06-07 | Legacy        | W   | 0.935      | 0.143        | 0.178 (0.024)    | -                | 0 (0.000) |    16.80 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |      654 | 2024-06-07 | NRG           | W   | 0.934      | 0.384        | 0.026 (0.009)    | 0.515 (0.185)    | 0 (0.000) |    11.07 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |      666 | 2024-06-07 | Nouns         | W   | 0.934      | 0.143        | 0.087 (0.012)    | -                | 0 (0.000) |    15.24 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |      697 | 2024-06-06 | NRG           | W   | 0.929      | 0.477        | 0.026 (0.011)    | 0.515 (0.228)    | 0 (0.000) |    12.55 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |      713 | 2024-06-06 | E-Xolos LAZER | W   | 0.928      | -            | -                | -                | 0 (0.000) |     6.35 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |      767 | 2024-06-05 | Wildcard      | L   | 0.923      | -            | -                | -                | -         |   -13.92 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           54 |      816 | 2024-06-04 | Elevate       | W   | 0.917      | 0.477        | 0.042 (0.018)    | 0.583 (0.255)    | 0 (0.000) |    16.02 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           53 |     1126 | 2024-05-22 | Nouns         | L   | 0.830      | -            | -                | -                | -         |   -12.95 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           52 |     1136 | 2024-05-22 | M80           | W   | 0.829      | 0.477        | 0.219 (0.087)    | 0.621 (0.245)    | -         |    21.64 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           51 |     1141 | 2024-05-22 | M80           | L   | 0.829      | -            | -                | -                | -         |    -4.21 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           50 |     1174 | 2024-05-21 | Limitless     | W   | 0.823      | -            | -                | -                | -         |     3.24 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           49 |     1177 | 2024-05-21 | Limitless     | W   | 0.823      | -            | -                | -                | -         |     3.34 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           48 |     1210 | 2024-05-20 | OMiT          | W   | 0.816      | -            | -                | -                | -         |     6.92 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           47 |     1279 | 2024-05-18 | NRG           | L   | 0.801      | -            | -                | -                | -         |   -12.57 | ben1337, chop, cxzi, Infinite, WolfY |
|           46 |     1311 | 2024-05-17 | Legacy        | W   | 0.795      | 0.303        | 0.178 (0.043)    | -                | -         |    16.72 | ben1337, chop, cxzi, Infinite, WolfY |
|           45 |     1340 | 2024-05-16 | FLUFFY AIMERS | W   | 0.789      | -            | -                | -                | -         |     4.25 | ben1337, chop, cxzi, Infinite, WolfY |
|           44 |     1343 | 2024-05-16 | FLUFFY AIMERS | W   | 0.789      | -            | -                | -                | -         |     4.42 | ben1337, chop, cxzi, Infinite, WolfY |
|           43 |     1433 | 2024-05-14 | Mythic        | W   | 0.776      | -            | -                | -                | -         |     8.13 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |     1441 | 2024-05-14 | Mythic        | L   | 0.776      | -            | -                | -                | -         |   -16.73 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |     1534 | 2024-05-11 | BOSS          | L   | 0.755      | -            | -                | -                | -         |   -16.53 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |     1540 | 2024-05-11 | Perseverance  | L   | 0.754      | -            | -                | -                | -         |   -18.88 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |     1596 | 2024-05-08 | LAG           | W   | 0.736      | 0.477        | -                | 0.417 (0.146)    | -         |     8.47 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |     1601 | 2024-05-08 | LAG           | W   | 0.736      | 0.477        | -                | 0.417 (0.146)    | -         |     9.01 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |     1621 | 2024-05-07 | Elevate       | L   | 0.730      | -            | -                | -                | -         |   -10.50 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     1622 | 2024-05-07 | Elevate       | W   | 0.729      | 0.477        | 0.042 (0.015)    | 0.583 (0.203)    | -         |    12.76 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     1640 | 2024-05-06 | NRG           | L   | 0.723      | -            | -                | -                | -         |   -14.59 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     1641 | 2024-05-06 | NRG           | W   | 0.722      | 0.477        | -                | 0.515 (0.177)    | -         |     8.18 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     1712 | 2024-05-02 | Wildcard      | L   | 0.696      | -            | -                | -                | -         |   -12.46 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     1713 | 2024-05-02 | Wildcard      | W   | 0.696      | 0.477        | 0.064 (0.021)    | 0.553 (0.183)    | -         |     9.57 | ben1337, chop, cxzi, RUSH, WolfY     |
|           31 |     1849 | 2024-04-27 | Aurora        | L   | 0.658      | -            | -                | -                | -         |    -0.72 | ben1337, chop, cxzi, RUSH, WolfY     |
|           30 |     1851 | 2024-04-26 | sunday school | W   | 0.657      | -            | -                | -                | 1 (0.657) |     2.60 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     1877 | 2024-04-25 | Aurora        | L   | 0.649      | -            | -                | -                | -         |    -0.64 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     2316 | 2024-04-09 | Take Flyte    | W   | 0.543      | -            | -                | -                | -         |     3.04 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     2323 | 2024-04-09 | Take Flyte    | W   | 0.542      | -            | -                | -                | -         |     3.13 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     2447 | 2024-04-04 | MIGHT         | W   | 0.509      | -            | -                | -                | -         |     1.25 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     2455 | 2024-04-04 | MIGHT         | W   | 0.509      | -            | -                | -                | -         |     1.26 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     2544 | 2024-04-02 | Perseverance  | W   | 0.496      | -            | -                | -                | -         |     3.37 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           23 |     2547 | 2024-04-02 | Nouns         | L   | 0.496      | -            | -                | -                | -         |    -8.16 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           22 |     2625 | 2024-03-27 | Carpe Diem    | W   | 0.456      | -            | -                | -                | -         |     2.40 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     2629 | 2024-03-27 | Carpe Diem    | W   | 0.456      | -            | -                | -                | -         |     2.45 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     2671 | 2024-03-26 | Nouns         | L   | 0.450      | -            | -                | -                | -         |    -7.54 | ben1337, chop, cxzi, RUSH, WolfY     |
|           19 |     2675 | 2024-03-26 | Nouns         | L   | 0.450      | -            | -                | -                | -         |    -7.84 | ben1337, chop, cxzi, RUSH, WolfY     |
|           18 |     2753 | 2024-03-20 | BOSS          | W   | 0.410      | -            | -                | -                | -         |     3.71 | ben1337, chop, cxzi, RUSH, WolfY     |
|           17 |     2757 | 2024-03-20 | BOSS          | W   | 0.409      | -            | -                | -                | -         |     3.82 | ben1337, chop, cxzi, RUSH, WolfY     |
|           16 |     2774 | 2024-03-19 | Perseverance  | W   | 0.403      | -            | -                | -                | -         |     2.71 | ben1337, chop, cxzi, RUSH, WolfY     |
|           15 |     2777 | 2024-03-19 | Perseverance  | W   | 0.403      | -            | -                | -                | -         |     2.77 | ben1337, chop, cxzi, RUSH, WolfY     |
|           14 |     2906 | 2024-03-13 | Carpe Diem    | W   | 0.362      | -            | -                | -                | -         |     1.99 | ben1337, chop, cxzi, RUSH, WolfY     |
|           13 |     2944 | 2024-03-12 | Elevate       | W   | 0.356      | -            | -                | -                | -         |     6.85 | ben1337, chop, cxzi, RUSH, WolfY     |
|           12 |     3324 | 2024-02-24 | Wildcard      | L   | 0.242      | -            | -                | -                | -         |    -4.23 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     3331 | 2024-02-24 | ex-CatEvil    | W   | 0.242      | -            | -                | -                | -         |     0.25 | ben1337, chop, cxzi, Walco, WolfY    |
|           10 |     3366 | 2024-02-22 | Liquid        | L   | 0.230      | -            | -                | -                | -         |    -0.28 | ben1337, chop, cxzi, Walco, WolfY    |
|            9 |     3368 | 2024-02-22 | NRG           | W   | 0.229      | -            | -                | -                | -         |     2.63 | ben1337, chop, cxzi, Walco, WolfY    |
|            8 |     3373 | 2024-02-22 | Take Flyte    | W   | 0.229      | -            | -                | -                | -         |     1.47 | ben1337, chop, cxzi, Walco, WolfY    |
|            7 |     3420 | 2024-02-20 | NRG           | W   | 0.217      | -            | -                | -                | -         |     2.51 | ben1337, chop, cxzi, Walco, WolfY    |
|            6 |     3421 | 2024-02-20 | Mythic        | W   | 0.216      | -            | -                | -                | -         |     2.22 | ben1337, chop, cxzi, Walco, WolfY    |
|            5 |     3445 | 2024-02-19 | NRG           | L   | 0.210      | -            | -                | -                | -         |    -4.23 | ben1337, chop, cxzi, Walco, WolfY    |
|            4 |     3448 | 2024-02-19 | OMiT          | W   | 0.209      | -            | -                | -                | -         |     1.75 | ben1337, chop, cxzi, Walco, WolfY    |
|            3 |     3774 | 2024-02-02 | NRG           | L   | 0.096      | -            | -                | -                | -         |    -1.95 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     3776 | 2024-02-02 | Carpe Diem    | W   | 0.096      | -            | -                | -                | -         |     0.51 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     3780 | 2024-02-02 | NRG           | L   | 0.095      | -            | -                | -                | -         |    -1.94 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,376.48)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $2,000.00      | $1,986.13       |
| 2024-06-09 |      0.950 | $5,000.00      | $4,748.66       |
| 2024-06-09 |      0.950 | $7,000.00      | $6,646.60       |
| 2024-04-28 |      0.665 | $3,000.00      | $1,995.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
