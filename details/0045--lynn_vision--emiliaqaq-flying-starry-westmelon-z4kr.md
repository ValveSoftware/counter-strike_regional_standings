### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, flying, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [45](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1152.2<br />
<br />
Final Rank Value (1152.2) = Starting Rank Value (1184.5) + Head To Head Adjustments (-32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.526[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.562[<sup>2</sup>](#table1)

The average of these factors is 0.386<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1184.5
- 400 + ( ( 0.386 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1184.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      250 | 2024-06-09 | ATOX              | W   | 1.000      | 0.416        | 0.027 (0.011)    | 0.275 (0.114)    | -         |     9.03 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           35 |      324 | 2024-06-08 | TYLOO             | W   | 1.000      | 0.416        | 0.049 (0.020)    | 0.241 (0.100)    | -         |     5.29 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           34 |      443 | 2024-06-06 | ATOX              | L   | 1.000      | -            | -                | -                | -         |   -22.79 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           33 |      500 | 2024-06-05 | TYLOO             | W   | 1.000      | 0.416        | 0.049 (0.020)    | 0.241 (0.100)    | -         |     4.57 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           32 |      627 | 2024-06-01 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.96 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           31 |      637 | 2024-05-31 | ATOX              | W   | 1.000      | 0.500        | 0.027 (0.013)    | 0.275 (0.138)    | 1 (1.000) |     7.97 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           30 |      688 | 2024-05-30 | Gaimin Gladiators | W   | 1.000      | 0.500        | 0.076 (0.038)    | 0.632 (0.316)    | 1 (1.000) |    15.86 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           29 |      734 | 2024-05-28 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -3.60 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           28 |     1791 | 2024-04-18 | Rare Atom         | L   | 0.795      | -            | -                | -                | -         |   -23.79 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           27 |     1803 | 2024-04-18 | TYLOO             | L   | 0.794      | -            | -                | -                | -         |   -21.88 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           26 |     2059 | 2024-04-09 | G2                | L   | 0.734      | -            | -                | -                | -         |    -0.41 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           25 |     2088 | 2024-04-08 | TYLOO             | W   | 0.728      | 0.624        | 0.049 (0.022)    | 0.241 (0.109)    | 1 (0.728) |     2.58 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           24 |     2099 | 2024-04-07 | FURIA             | L   | 0.726      | -            | -                | -                | -         |    -1.97 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           23 |     2227 | 2024-04-03 | The MongolZ       | L   | 0.695      | -            | -                | -                | -         |    -0.51 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           22 |     2268 | 2024-04-02 | LYG               | W   | 0.688      | 0.143        | 0.005 (0.000)    | -                | -         |     1.77 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           21 |     2275 | 2024-04-02 | ATOX              | W   | 0.687      | 0.143        | 0.027 (0.003)    | 0.275 (0.027)    | -         |     4.58 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           20 |     2491 | 2024-03-19 | The MongolZ       | L   | 0.594      | -            | -                | -                | -         |    -0.32 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           19 |     2499 | 2024-03-18 | Gaimin Gladiators | L   | 0.588      | -            | -                | -                | -         |    -8.24 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           18 |     2508 | 2024-03-17 | FURIA             | W   | 0.584      | 0.143        | 0.245 (0.020)    | 0.521 (0.043)    | 1 (0.584) |    17.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           17 |     2529 | 2024-03-17 | HEROIC            | L   | 0.581      | -            | -                | -                | -         |    -0.64 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     2963 | 2024-02-28 | FlyQuest          | W   | 0.460      | 0.143        | 0.118 (0.008)    | 0.476 (0.031)    | 1 (0.460) |    11.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     2965 | 2024-02-27 | The MongolZ       | L   | 0.458      | -            | -                | -                | -         |    -0.19 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     3000 | 2024-02-26 | TYLOO             | W   | 0.446      | -            | -                | -                | 1 (0.446) |     1.40 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     3004 | 2024-02-25 | Twisted Minds     | W   | 0.445      | -            | -                | -                | 1 (0.445) |     0.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     3210 | 2024-02-17 | Newhappy          | L   | 0.388      | -            | -                | -                | -         |   -11.86 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     3239 | 2024-02-16 | Newhappy          | W   | 0.381      | -            | -                | -                | -         |     0.34 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     3246 | 2024-02-16 | MAG               | W   | 0.380      | -            | -                | -                | -         |     0.31 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     3553 | 2024-01-31 | Rare Atom         | L   | 0.274      | -            | -                | -                | -         |    -8.13 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     3557 | 2024-01-31 | NKT               | L   | 0.273      | -            | -                | -                | -         |    -8.09 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     3589 | 2024-01-28 | The MongolZ       | L   | 0.254      | -            | -                | -                | -         |    -0.11 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3592 | 2024-01-27 | TYLOO             | W   | 0.252      | 0.435        | -                | 0.093 (0.010)    | 1 (0.252) |     0.69 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     3624 | 2024-01-26 | NKT               | W   | 0.241      | -            | -                | -                | 1 (0.241) |     0.44 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     3628 | 2024-01-26 | NCTDK             | W   | 0.240      | -            | -                | -                | 1 (0.240) |     0.19 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     3743 | 2024-01-20 | TYLOO             | W   | 0.206      | -            | -                | -                | -         |     0.52 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     3847 | 2024-01-19 | Wings Up          | W   | 0.193      | -            | -                | -                | -         |     0.13 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     3853 | 2024-01-18 | Nirvana           | W   | 0.192      | -            | -                | -                | -         |     0.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,913.39)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-04-14 |      0.767 | $5,000.00      | $3,837.03       |
| 2024-03-20 |      0.603 | $10,000.00     | $6,026.17       |
| 2024-01-28 |      0.254 | $12,000.00     | $3,050.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
