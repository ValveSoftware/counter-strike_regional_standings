### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, flying, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1040.4<br />
<br />
Final Rank Value (1040.4) = Starting Rank Value (1037.9) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.503[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.370[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1037.9
- 400 + ( ( 0.315 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1037.9


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
|           31 |      838 | 2024-06-09 | ATOX              | W   | 0.899      | 0.416        | 0.026 (0.010)    | 0.215 (0.080)    | 0 (0.000) |     9.87 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           30 |      912 | 2024-06-08 | TYLOO             | W   | 0.892      | 0.416        | 0.016 (0.006)    | 0.229 (0.085)    | 0 (0.000) |     4.69 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           29 |     1031 | 2024-06-06 | ATOX              | L   | 0.879      | -            | -                | -                | -         |   -18.29 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           28 |     1088 | 2024-06-05 | TYLOO             | W   | 0.872      | 0.416        | 0.016 (0.006)    | 0.229 (0.083)    | -         |     3.91 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           27 |     1213 | 2024-06-01 | Aurora            | L   | 0.845      | -            | -                | -                | -         |    -2.08 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           26 |     1223 | 2024-05-31 | ATOX              | W   | 0.843      | 0.500        | 0.026 (0.011)    | 0.215 (0.091)    | 1 (0.843) |     8.57 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           25 |     1274 | 2024-05-30 | Gaimin Gladiators | W   | 0.831      | 0.500        | 0.053 (0.022)    | 0.432 (0.180)    | 1 (0.831) |    13.35 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           24 |     1320 | 2024-05-28 | Aurora            | L   | 0.817      | -            | -                | -                | -         |    -1.81 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           23 |     2377 | 2024-04-18 | Rare Atom         | L   | 0.552      | -            | -                | -                | -         |   -15.64 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           22 |     2389 | 2024-04-18 | TYLOO             | L   | 0.551      | -            | -                | -                | -         |   -14.16 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           21 |     2645 | 2024-04-09 | G2                | L   | 0.492      | -            | -                | -                | -         |    -0.09 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           20 |     2674 | 2024-04-08 | TYLOO             | W   | 0.485      | 0.624        | 0.026 (0.008)    | 0.116 (0.035)    | 1 (0.485) |     2.72 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           19 |     2685 | 2024-04-07 | FURIA             | L   | 0.483      | -            | -                | -                | -         |    -0.28 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           18 |     2813 | 2024-04-03 | The MongolZ       | L   | 0.452      | -            | -                | -                | -         |    -0.15 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           17 |     2854 | 2024-04-02 | LYG               | W   | 0.445      | -            | -                | -                | -         |     2.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     2861 | 2024-04-02 | ATOX              | W   | 0.444      | 0.143        | 0.026 (0.002)    | 0.215 (0.014)    | -         |     4.23 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     3076 | 2024-03-19 | The MongolZ       | L   | 0.352      | -            | -                | -                | -         |    -0.09 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     3084 | 2024-03-18 | Gaimin Gladiators | L   | 0.345      | -            | -                | -                | -         |    -5.43 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     3093 | 2024-03-17 | FURIA             | W   | 0.341      | 0.143        | 0.355 (0.017)    | 0.563 (0.027)    | 1 (0.341) |    10.58 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     3114 | 2024-03-17 | HEROIC            | L   | 0.339      | -            | -                | -                | -         |    -0.42 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     3548 | 2024-02-28 | FlyQuest          | W   | 0.218      | 0.143        | 0.133 (0.004)    | 0.349 (0.011)    | 1 (0.218) |     5.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     3550 | 2024-02-27 | The MongolZ       | L   | 0.216      | -            | -                | -                | -         |    -0.05 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     3585 | 2024-02-26 | TYLOO             | W   | 0.204      | 0.143        | 0.026 (0.001)    | 0.116 (0.003)    | 1 (0.204) |     1.28 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     3589 | 2024-02-25 | Twisted Minds     | W   | 0.203      | -            | -                | -                | 1 (0.203) |     0.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     3795 | 2024-02-17 | Newhappy          | L   | 0.145      | -            | -                | -                | -         |    -4.35 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3824 | 2024-02-16 | Newhappy          | W   | 0.139      | -            | -                | -                | -         |     0.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     3831 | 2024-02-16 | MAG               | W   | 0.138      | -            | -                | -                | -         |     0.20 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     4138 | 2024-01-31 | Rare Atom         | L   | 0.032      | -            | -                | -                | -         |    -0.89 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     4142 | 2024-01-31 | NKT               | L   | 0.031      | -            | -                | -                | -         |    -0.89 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     4174 | 2024-01-28 | The MongolZ       | L   | 0.012      | -            | -                | -                | -         |    -0.00 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     4177 | 2024-01-27 | TYLOO             | W   | 0.010      | -            | -                | -                | 1 (0.010) |     0.06 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,372.52)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.899 | $15,000.00     | $13,485.07      |
| 2024-06-02 |      0.852 | $10,000.00     | $8,521.80       |
| 2024-04-14 |      0.525 | $5,000.00      | $2,624.49       |
| 2024-03-20 |      0.360 | $10,000.00     | $3,601.09       |
| 2024-01-28 |      0.012 | $12,000.00     | $140.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
