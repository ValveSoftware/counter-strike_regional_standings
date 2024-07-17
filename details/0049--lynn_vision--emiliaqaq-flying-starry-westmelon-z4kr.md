### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, flying, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [49](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1115.3<br />
<br />
Final Rank Value (1115.3) = Starting Rank Value (1124.5) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.526[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.418[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1124.5
- 400 + ( ( 0.337 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1124.5


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
|           34 |      550 | 2024-06-09 | ATOX              | W   | 0.946      | 0.416        | 0.031 (0.012)    | 0.239 (0.094)    | -         |     9.66 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           33 |      624 | 2024-06-08 | TYLOO             | W   | 0.940      | 0.416        | 0.019 (0.008)    | 0.238 (0.093)    | -         |     3.98 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           32 |      743 | 2024-06-06 | ATOX              | L   | 0.926      | -            | -                | -                | -         |   -20.02 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           31 |      800 | 2024-06-05 | TYLOO             | W   | 0.919      | 0.416        | 0.019 (0.007)    | 0.238 (0.091)    | -         |     3.24 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           30 |      925 | 2024-06-01 | Aurora            | L   | 0.893      | -            | -                | -                | -         |    -2.38 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           29 |      935 | 2024-05-31 | ATOX              | W   | 0.890      | 0.500        | 0.031 (0.014)    | 0.239 (0.106)    | 1 (0.890) |     8.25 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           28 |      986 | 2024-05-30 | Gaimin Gladiators | W   | 0.878      | 0.500        | 0.067 (0.029)    | 0.488 (0.214)    | 1 (0.878) |    13.40 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           27 |     1032 | 2024-05-28 | Aurora            | L   | 0.865      | -            | -                | -                | -         |    -2.08 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           26 |     2089 | 2024-04-18 | Rare Atom         | L   | 0.600      | -            | -                | -                | -         |   -17.49 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           25 |     2101 | 2024-04-18 | TYLOO             | L   | 0.599      | -            | -                | -                | -         |   -15.82 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           24 |     2357 | 2024-04-09 | G2                | L   | 0.539      | -            | -                | -                | -         |    -0.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           23 |     2386 | 2024-04-08 | TYLOO             | W   | 0.533      | 0.624        | 0.032 (0.011)    | 0.141 (0.047)    | 1 (0.533) |     2.57 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           22 |     2397 | 2024-04-07 | FURIA             | L   | 0.530      | -            | -                | -                | -         |    -1.02 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           21 |     2525 | 2024-04-03 | The MongolZ       | L   | 0.500      | -            | -                | -                | -         |    -0.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           20 |     2566 | 2024-04-02 | LYG               | W   | 0.493      | -            | -                | -                | -         |     1.70 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           19 |     2573 | 2024-04-02 | ATOX              | W   | 0.492      | 0.143        | 0.031 (0.002)    | 0.239 (0.017)    | -         |     4.15 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           18 |     2788 | 2024-03-19 | The MongolZ       | L   | 0.399      | -            | -                | -                | -         |    -0.12 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           17 |     2796 | 2024-03-18 | Gaimin Gladiators | L   | 0.392      | -            | -                | -                | -         |    -6.32 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     2805 | 2024-03-17 | FURIA             | W   | 0.388      | 0.143        | 0.253 (0.014)    | 0.483 (0.027)    | 1 (0.388) |    11.58 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     2826 | 2024-03-17 | HEROIC            | L   | 0.386      | -            | -                | -                | -         |    -0.36 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     3260 | 2024-02-28 | FlyQuest          | W   | 0.265      | 0.143        | 0.116 (0.004)    | 0.388 (0.015)    | 1 (0.265) |     6.37 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     3262 | 2024-02-27 | The MongolZ       | L   | 0.263      | -            | -                | -                | -         |    -0.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     3297 | 2024-02-26 | TYLOO             | W   | 0.251      | 0.143        | 0.032 (0.001)    | 0.141 (0.005)    | 1 (0.251) |     1.38 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     3301 | 2024-02-25 | Twisted Minds     | W   | 0.250      | -            | -                | -                | 1 (0.250) |     0.14 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     3507 | 2024-02-17 | Newhappy          | L   | 0.193      | -            | -                | -                | -         |    -5.85 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     3536 | 2024-02-16 | Newhappy          | W   | 0.186      | -            | -                | -                | -         |     0.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     3543 | 2024-02-16 | MAG               | W   | 0.185      | -            | -                | -                | -         |     0.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     3850 | 2024-01-31 | Rare Atom         | L   | 0.079      | -            | -                | -                | -         |    -2.29 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3854 | 2024-01-31 | NKT               | L   | 0.078      | -            | -                | -                | -         |    -2.29 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     3886 | 2024-01-28 | The MongolZ       | L   | 0.059      | -            | -                | -                | -         |    -0.01 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     3889 | 2024-01-27 | TYLOO             | W   | 0.057      | -            | -                | -                | 1 (0.057) |     0.30 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     3921 | 2024-01-26 | NKT               | W   | 0.046      | -            | -                | -                | 1 (0.046) |     0.09 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     3925 | 2024-01-26 | NCTDK             | W   | 0.045      | -            | -                | -                | 1 (0.045) |     0.05 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     4040 | 2024-01-20 | TYLOO             | W   | 0.011      | -            | -                | -                | -         |     0.06 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,828.23)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.946 | $15,000.00     | $14,193.45      |
| 2024-06-02 |      0.899 | $10,000.00     | $8,994.05       |
| 2024-04-14 |      0.572 | $5,000.00      | $2,860.61       |
| 2024-03-20 |      0.407 | $10,000.00     | $4,073.34       |
| 2024-01-28 |      0.059 | $12,000.00     | $706.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
