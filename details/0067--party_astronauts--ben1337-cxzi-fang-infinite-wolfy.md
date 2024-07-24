### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, cxzi, FaNg, Infinite, WolfY<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [67](../standings_global.md)<br />
Regional Rank: [18]( ../standings_americas.md)<br />
Final Rank Value:  983.6<br />
<br />
Final Rank Value (983.6) = Starting Rank Value (947.2) + Head To Head Adjustments (36.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 947.2
- 400 + ( ( 0.270 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 947.2


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
|           73 |       20 | 2024-07-23 | FLUFFY AIMERS | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.54 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           72 |       22 | 2024-07-23 | FLUFFY AIMERS | L   | 1.000      | -            | -                | -                | -         |   -26.51 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           71 |      108 | 2024-07-20 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |   -15.55 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           70 |      244 | 2024-07-17 | Take Flyte    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.05 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           69 |      248 | 2024-07-17 | Take Flyte    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.30 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           68 |      312 | 2024-07-16 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.94 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           67 |      316 | 2024-07-16 | Limitless     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.28 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           66 |      654 | 2024-06-15 | Falcons       | L   | 0.938      | -            | -                | -                | -         |    -2.56 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           65 |      698 | 2024-06-14 | The MongolZ   | L   | 0.930      | -            | -                | -                | -         |    -0.23 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           64 |      808 | 2024-06-09 | Legacy        | L   | 0.903      | -            | -                | -                | -         |   -12.69 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           63 |      879 | 2024-06-08 | Wildcard      | W   | 0.895      | 0.384        | 0.069 (0.024)    | 0.557 (0.191)    | 0 (0.000) |    13.60 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           62 |      886 | 2024-06-08 | NRG           | L   | 0.894      | -            | -                | -                | -         |   -17.20 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           61 |      926 | 2024-06-07 | Nouns         | L   | 0.889      | -            | -                | -                | -         |   -14.55 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           60 |      935 | 2024-06-07 | Legacy        | W   | 0.888      | 0.143        | 0.150 (0.019)    | -                | 0 (0.000) |    15.19 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           59 |      942 | 2024-06-07 | NRG           | W   | 0.887      | 0.384        | 0.025 (0.009)    | 0.574 (0.196)    | 0 (0.000) |    10.77 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           58 |      954 | 2024-06-07 | Nouns         | W   | 0.886      | 0.143        | 0.073 (0.009)    | -                | 0 (0.000) |    14.54 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           57 |      985 | 2024-06-06 | NRG           | W   | 0.882      | 0.477        | 0.025 (0.011)    | 0.574 (0.241)    | -         |    12.13 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           56 |     1001 | 2024-06-06 | E-Xolos LAZER | W   | 0.880      | -            | -                | -                | -         |     6.26 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           55 |     1055 | 2024-06-05 | Wildcard      | L   | 0.876      | -            | -                | -                | -         |   -13.09 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           54 |     1104 | 2024-06-04 | Elevate       | W   | 0.869      | 0.477        | 0.035 (0.015)    | 0.563 (0.233)    | -         |    15.36 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           53 |     1414 | 2024-05-22 | Nouns         | L   | 0.782      | -            | -                | -                | -         |   -12.25 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           52 |     1424 | 2024-05-22 | M80           | W   | 0.782      | 0.477        | 0.238 (0.089)    | 0.614 (0.229)    | -         |    21.31 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           51 |     1429 | 2024-05-22 | M80           | L   | 0.781      | -            | -                | -                | -         |    -3.12 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           50 |     1462 | 2024-05-21 | Limitless     | W   | 0.776      | -            | -                | -                | -         |     3.32 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           49 |     1465 | 2024-05-21 | Limitless     | W   | 0.775      | -            | -                | -                | -         |     3.42 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           48 |     1498 | 2024-05-20 | OMiT          | W   | 0.769      | -            | -                | -                | -         |     6.65 | ben1337, cxzi, FaNg, Infinite, WolfY |
|           47 |     1567 | 2024-05-18 | NRG           | L   | 0.754      | -            | -                | -                | -         |   -11.74 | ben1337, chop, cxzi, Infinite, WolfY |
|           46 |     1599 | 2024-05-17 | Legacy        | W   | 0.748      | 0.303        | 0.150 (0.034)    | -                | -         |    14.92 | ben1337, chop, cxzi, Infinite, WolfY |
|           45 |     1628 | 2024-05-16 | FLUFFY AIMERS | W   | 0.742      | -            | -                | -                | -         |     5.17 | ben1337, chop, cxzi, Infinite, WolfY |
|           44 |     1631 | 2024-05-16 | FLUFFY AIMERS | W   | 0.742      | -            | -                | -                | -         |     5.42 | ben1337, chop, cxzi, Infinite, WolfY |
|           43 |     1721 | 2024-05-14 | Mythic        | W   | 0.729      | -            | -                | -                | -         |     7.77 | ben1337, chop, cxzi, RUSH, WolfY     |
|           42 |     1729 | 2024-05-14 | Mythic        | L   | 0.729      | -            | -                | -                | -         |   -15.59 | ben1337, chop, cxzi, RUSH, WolfY     |
|           41 |     1822 | 2024-05-11 | BOSS          | L   | 0.707      | -            | -                | -                | -         |   -14.97 | ben1337, chop, cxzi, RUSH, WolfY     |
|           40 |     1828 | 2024-05-11 | Perseverance  | L   | 0.707      | -            | -                | -                | -         |   -17.40 | ben1337, chop, cxzi, RUSH, WolfY     |
|           39 |     1884 | 2024-05-08 | LAG           | W   | 0.689      | 0.477        | -                | 0.385 (0.126)    | -         |     7.97 | ben1337, chop, cxzi, RUSH, WolfY     |
|           38 |     1889 | 2024-05-08 | LAG           | W   | 0.689      | 0.477        | -                | 0.385 (0.126)    | -         |     8.44 | ben1337, chop, cxzi, RUSH, WolfY     |
|           37 |     1909 | 2024-05-07 | Elevate       | L   | 0.682      | -            | -                | -                | -         |    -9.69 | ben1337, chop, cxzi, RUSH, WolfY     |
|           36 |     1910 | 2024-05-07 | Elevate       | W   | 0.682      | 0.477        | 0.035 (0.011)    | 0.563 (0.183)    | -         |    12.08 | ben1337, chop, cxzi, RUSH, WolfY     |
|           35 |     1928 | 2024-05-06 | NRG           | L   | 0.675      | -            | -                | -                | -         |   -13.31 | ben1337, chop, cxzi, RUSH, WolfY     |
|           34 |     1929 | 2024-05-06 | NRG           | W   | 0.675      | 0.477        | -                | 0.574 (0.185)    | -         |     8.01 | ben1337, chop, cxzi, RUSH, WolfY     |
|           33 |     2000 | 2024-05-02 | Wildcard      | L   | 0.649      | -            | -                | -                | -         |   -11.28 | ben1337, chop, cxzi, RUSH, WolfY     |
|           32 |     2001 | 2024-05-02 | Wildcard      | W   | 0.648      | 0.477        | 0.069 (0.021)    | 0.557 (0.172)    | -         |     9.30 | ben1337, chop, cxzi, RUSH, WolfY     |
|           31 |     2137 | 2024-04-27 | Aurora        | L   | 0.611      | -            | -                | -                | -         |    -0.73 | ben1337, chop, cxzi, RUSH, WolfY     |
|           30 |     2139 | 2024-04-26 | sunday school | W   | 0.609      | -            | -                | -                | 1 (0.609) |     2.71 | ben1337, chop, cxzi, RUSH, WolfY     |
|           29 |     2165 | 2024-04-25 | Aurora        | L   | 0.602      | -            | -                | -                | -         |    -0.65 | ben1337, chop, cxzi, RUSH, WolfY     |
|           28 |     2604 | 2024-04-09 | Take Flyte    | W   | 0.496      | -            | -                | -                | -         |     3.02 | ben1337, chop, cxzi, RUSH, WolfY     |
|           27 |     2611 | 2024-04-09 | Take Flyte    | W   | 0.495      | -            | -                | -                | -         |     3.11 | ben1337, chop, cxzi, RUSH, WolfY     |
|           26 |     2735 | 2024-04-04 | MIGHT         | W   | 0.462      | -            | -                | -                | -         |     1.31 | ben1337, chop, cxzi, RUSH, WolfY     |
|           25 |     2743 | 2024-04-04 | MIGHT         | W   | 0.462      | -            | -                | -                | -         |     1.33 | ben1337, chop, cxzi, RUSH, WolfY     |
|           24 |     2832 | 2024-04-02 | Perseverance  | W   | 0.449      | -            | -                | -                | -         |     3.29 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           23 |     2835 | 2024-04-02 | Nouns         | L   | 0.448      | -            | -                | -                | -         |    -7.42 | ben1337, chop, CLASIA, cxzi, WolfY   |
|           22 |     2913 | 2024-03-27 | Carpe Diem    | W   | 0.409      | -            | -                | -                | -         |     2.36 | ben1337, chop, cxzi, RUSH, WolfY     |
|           21 |     2917 | 2024-03-27 | Carpe Diem    | W   | 0.409      | -            | -                | -                | -         |     2.42 | ben1337, chop, cxzi, RUSH, WolfY     |
|           20 |     2959 | 2024-03-26 | Nouns         | L   | 0.403      | -            | -                | -                | -         |    -6.78 | ben1337, chop, cxzi, RUSH, WolfY     |
|           19 |     2963 | 2024-03-26 | Nouns         | L   | 0.402      | -            | -                | -                | -         |    -7.02 | ben1337, chop, cxzi, RUSH, WolfY     |
|           18 |     3041 | 2024-03-20 | BOSS          | W   | 0.362      | -            | -                | -                | -         |     3.75 | ben1337, chop, cxzi, RUSH, WolfY     |
|           17 |     3045 | 2024-03-20 | BOSS          | W   | 0.362      | -            | -                | -                | -         |     3.86 | ben1337, chop, cxzi, RUSH, WolfY     |
|           16 |     3062 | 2024-03-19 | Perseverance  | W   | 0.356      | -            | -                | -                | -         |     2.60 | ben1337, chop, cxzi, RUSH, WolfY     |
|           15 |     3065 | 2024-03-19 | Perseverance  | W   | 0.356      | -            | -                | -                | -         |     2.66 | ben1337, chop, cxzi, RUSH, WolfY     |
|           14 |     3194 | 2024-03-13 | Carpe Diem    | W   | 0.315      | -            | -                | -                | -         |     1.91 | ben1337, chop, cxzi, RUSH, WolfY     |
|           13 |     3232 | 2024-03-12 | Elevate       | W   | 0.309      | -            | -                | -                | -         |     5.99 | ben1337, chop, cxzi, RUSH, WolfY     |
|           12 |     3612 | 2024-02-24 | Wildcard      | L   | 0.195      | -            | -                | -                | -         |    -3.26 | ben1337, chop, cxzi, Walco, WolfY    |
|           11 |     3619 | 2024-02-24 | ex-CatEvil    | W   | 0.195      | -            | -                | -                | -         |     0.27 | ben1337, chop, cxzi, Walco, WolfY    |
|           10 |     3654 | 2024-02-22 | Liquid        | L   | 0.183      | -            | -                | -                | -         |    -0.34 | ben1337, chop, cxzi, Walco, WolfY    |
|            9 |     3656 | 2024-02-22 | NRG           | W   | 0.182      | -            | -                | -                | -         |     2.21 | ben1337, chop, cxzi, Walco, WolfY    |
|            8 |     3661 | 2024-02-22 | Take Flyte    | W   | 0.181      | -            | -                | -                | -         |     1.26 | ben1337, chop, cxzi, Walco, WolfY    |
|            7 |     3708 | 2024-02-20 | NRG           | W   | 0.169      | -            | -                | -                | -         |     2.08 | ben1337, chop, cxzi, Walco, WolfY    |
|            6 |     3709 | 2024-02-20 | Mythic        | W   | 0.168      | -            | -                | -                | -         |     1.76 | ben1337, chop, cxzi, Walco, WolfY    |
|            5 |     3733 | 2024-02-19 | NRG           | L   | 0.163      | -            | -                | -                | -         |    -3.17 | ben1337, chop, cxzi, Walco, WolfY    |
|            4 |     3736 | 2024-02-19 | OMiT          | W   | 0.162      | -            | -                | -                | -         |     1.42 | ben1337, chop, cxzi, Walco, WolfY    |
|            3 |     4062 | 2024-02-02 | NRG           | L   | 0.049      | -            | -                | -                | -         |    -0.95 | ben1337, chop, cxzi, viz, WolfY      |
|            2 |     4064 | 2024-02-02 | Carpe Diem    | W   | 0.048      | -            | -                | -                | -         |     0.29 | ben1337, chop, cxzi, viz, WolfY      |
|            1 |     4068 | 2024-02-02 | NRG           | L   | 0.048      | -            | -                | -                | -         |    -0.94 | ben1337, chop, cxzi, viz, WolfY      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,573.66)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $2,000.00      | $1,891.68       |
| 2024-06-09 |      0.903 | $5,000.00      | $4,512.53       |
| 2024-06-09 |      0.902 | $7,000.00      | $6,316.02       |
| 2024-04-28 |      0.618 | $3,000.00      | $1,853.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
