### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, flying, Starry, Westmelon, z4kr<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [47](../standings_global.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
Final Rank Value:  1136.8<br />
<br />
Final Rank Value (1136.8) = Starting Rank Value (1150.2) + Head To Head Adjustments (-13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.528[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.463[<sup>2</sup>](#table1)

The average of these factors is 0.356<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1150.2
- 400 + ( ( 0.356 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1150.2


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
|           36 |      386 | 2024-06-09 | ATOX              | W   | 0.986      | 0.416        | 0.031 (0.013)    | 0.256 (0.105)    | -         |     9.41 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           35 |      460 | 2024-06-08 | TYLOO             | W   | 0.979      | 0.416        | 0.050 (0.020)    | 0.240 (0.098)    | -         |     5.73 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           34 |      579 | 2024-06-06 | ATOX              | L   | 0.966      | -            | -                | -                | -         |   -21.47 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           33 |      636 | 2024-06-05 | TYLOO             | W   | 0.959      | 0.416        | 0.050 (0.020)    | 0.240 (0.096)    | -         |     4.91 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           32 |      761 | 2024-06-01 | Aurora            | L   | 0.932      | -            | -                | -                | -         |    -2.81 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           31 |      771 | 2024-05-31 | ATOX              | W   | 0.930      | 0.500        | 0.031 (0.014)    | 0.256 (0.119)    | 1 (0.930) |     8.02 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           30 |      822 | 2024-05-30 | Gaimin Gladiators | W   | 0.918      | 0.500        | 0.069 (0.031)    | 0.528 (0.242)    | 1 (0.918) |    14.35 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           29 |      868 | 2024-05-28 | Aurora            | L   | 0.904      | -            | -                | -                | -         |    -2.46 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           28 |     1925 | 2024-04-18 | Rare Atom         | L   | 0.639      | -            | -                | -                | -         |   -18.82 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           27 |     1937 | 2024-04-18 | TYLOO             | L   | 0.638      | -            | -                | -                | -         |   -17.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           26 |     2193 | 2024-04-09 | G2                | L   | 0.579      | -            | -                | -                | -         |    -0.28 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           25 |     2222 | 2024-04-08 | TYLOO             | W   | 0.572      | 0.624        | 0.050 (0.018)    | 0.240 (0.086)    | 1 (0.572) |     2.46 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           24 |     2233 | 2024-04-07 | FURIA             | L   | 0.570      | -            | -                | -                | -         |    -1.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           23 |     2361 | 2024-04-03 | The MongolZ       | L   | 0.539      | -            | -                | -                | -         |    -0.24 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           22 |     2402 | 2024-04-02 | LYG               | W   | 0.532      | 0.143        | 0.005 (0.000)    | 0.054 (0.004)    | -         |     1.62 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           21 |     2409 | 2024-04-02 | ATOX              | W   | 0.531      | 0.143        | 0.031 (0.002)    | 0.256 (0.019)    | -         |     4.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           20 |     2624 | 2024-03-19 | The MongolZ       | L   | 0.439      | -            | -                | -                | -         |    -0.15 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           19 |     2632 | 2024-03-18 | Gaimin Gladiators | L   | 0.432      | -            | -                | -                | -         |    -6.72 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           18 |     2641 | 2024-03-17 | FURIA             | W   | 0.428      | 0.143        | 0.253 (0.015)    | 0.509 (0.031)    | 1 (0.428) |    12.72 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           17 |     2662 | 2024-03-17 | HEROIC            | L   | 0.426      | -            | -                | -                | -         |    -0.42 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     3096 | 2024-02-28 | FlyQuest          | W   | 0.304      | 0.143        | 0.116 (0.005)    | 0.417 (0.018)    | 1 (0.304) |     7.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     3098 | 2024-02-27 | The MongolZ       | L   | 0.303      | -            | -                | -                | -         |    -0.09 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     3133 | 2024-02-26 | TYLOO             | W   | 0.290      | -            | -                | -                | 1 (0.290) |     0.78 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     3137 | 2024-02-25 | Twisted Minds     | W   | 0.290      | -            | -                | -                | 1 (0.290) |     0.14 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     3343 | 2024-02-17 | Newhappy          | L   | 0.232      | -            | -                | -                | -         |    -7.08 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     3372 | 2024-02-16 | Newhappy          | W   | 0.226      | -            | -                | -                | -         |     0.22 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     3379 | 2024-02-16 | MAG               | W   | 0.224      | -            | -                | -                | -         |     0.19 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     3686 | 2024-01-31 | Rare Atom         | L   | 0.118      | -            | -                | -                | -         |    -3.48 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     3690 | 2024-01-31 | NKT               | L   | 0.117      | -            | -                | -                | -         |    -3.47 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     3722 | 2024-01-28 | The MongolZ       | L   | 0.099      | -            | -                | -                | -         |    -0.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3725 | 2024-01-27 | TYLOO             | W   | 0.097      | -            | -                | -                | 1 (0.097) |     0.24 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     3757 | 2024-01-26 | NKT               | W   | 0.085      | -            | -                | -                | 1 (0.085) |     0.16 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     3761 | 2024-01-26 | NCTDK             | W   | 0.084      | -            | -                | -                | 1 (0.084) |     0.08 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     3876 | 2024-01-20 | TYLOO             | W   | 0.050      | -            | -                | -                | -         |     0.12 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     3980 | 2024-01-19 | Wings Up          | W   | 0.037      | -            | -                | -                | -         |     0.03 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     3986 | 2024-01-18 | Nirvana           | W   | 0.037      | -            | -                | -                | -         |     0.02 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,887.97)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.986 | $15,000.00     | $14,787.60      |
| 2024-06-02 |      0.939 | $10,000.00     | $9,390.15       |
| 2024-04-14 |      0.612 | $5,000.00      | $3,058.66       |
| 2024-03-20 |      0.447 | $10,000.00     | $4,469.44       |
| 2024-01-28 |      0.099 | $12,000.00     | $1,182.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
