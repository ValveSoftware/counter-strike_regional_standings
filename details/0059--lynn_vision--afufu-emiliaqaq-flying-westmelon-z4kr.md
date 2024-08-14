### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: afufu, EmiliaQAQ, flying, Westmelon, z4kr<br />
Global Rank: [59](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [3]( ../standings_asia.md)<br />
<br />
Final Rank Value:  991.4<br />
<br />
Final Rank Value (991.4) = Starting Rank Value (991.1) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.352[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 991.1
- 400 + ( ( 0.300 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 991.1


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
|           27 |      314 | 2024-08-05 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -19.11 | afufu, EmiliaQAQ, flying, Westmelon, z4kr  |
|           26 |      349 | 2024-08-04 | Housebets         | W   | 1.000      | 0.380        | 0.002 (0.001)    | 0.178 (0.068)    | 1 (1.000) |     4.53 | afufu, EmiliaQAQ, flying, Westmelon, z4kr  |
|           25 |     1561 | 2024-06-09 | ATOX              | W   | 0.758      | 0.416        | 0.019 (0.006)    | 0.191 (0.060)    | 0 (0.000) |     7.33 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           24 |     1635 | 2024-06-08 | TYLOO             | W   | 0.752      | 0.416        | 0.055 (0.017)    | 0.276 (0.086)    | 0 (0.000) |    10.41 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           23 |     1754 | 2024-06-06 | ATOX              | L   | 0.738      | -            | -                | -                | -         |   -16.25 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           22 |     1811 | 2024-06-05 | TYLOO             | W   | 0.732      | 0.416        | 0.055 (0.017)    | 0.276 (0.084)    | -         |    10.02 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           21 |     1936 | 2024-06-01 | Aurora            | L   | 0.705      | -            | -                | -                | -         |    -1.28 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           20 |     1946 | 2024-05-31 | ATOX              | W   | 0.702      | 0.500        | 0.019 (0.007)    | 0.191 (0.067)    | 1 (0.702) |     6.50 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           19 |     1997 | 2024-05-30 | Gaimin Gladiators | W   | 0.690      | 0.500        | 0.032 (0.011)    | 0.326 (0.112)    | 1 (0.690) |     9.37 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           18 |     2043 | 2024-05-28 | Aurora            | L   | 0.677      | -            | -                | -                | -         |    -1.14 | EmiliaQAQ, flying, Starry, Westmelon, z4kr |
|           17 |     3100 | 2024-04-18 | Rare Atom         | L   | 0.412      | -            | -                | -                | -         |    -8.99 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           16 |     3112 | 2024-04-18 | TYLOO             | L   | 0.411      | -            | -                | -                | -         |   -10.52 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           15 |     3368 | 2024-04-09 | G2                | L   | 0.351      | -            | -                | -                | -         |    -0.05 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           14 |     3397 | 2024-04-08 | TYLOO             | W   | 0.345      | 0.624        | 0.017 (0.004)    | 0.074 (0.016)    | 1 (0.345) |     1.98 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           13 |     3408 | 2024-04-07 | FURIA             | L   | 0.343      | -            | -                | -                | -         |    -0.25 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           12 |     3536 | 2024-04-03 | The MongolZ       | L   | 0.312      | -            | -                | -                | -         |    -0.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           11 |     3577 | 2024-04-02 | LYG               | W   | 0.305      | -            | -                | -                | -         |     1.54 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|           10 |     3584 | 2024-04-02 | ATOX              | W   | 0.304      | 0.143        | 0.019 (0.001)    | 0.191 (0.008)    | -         |     2.65 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            9 |     3799 | 2024-03-19 | The MongolZ       | L   | 0.211      | -            | -                | -                | -         |    -0.04 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            8 |     3807 | 2024-03-18 | Gaimin Gladiators | L   | 0.205      | -            | -                | -                | -         |    -3.98 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            7 |     3816 | 2024-03-17 | FURIA             | W   | 0.200      | 0.143        | 0.301 (0.009)    | 0.506 (0.014)    | 1 (0.200) |     6.18 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            6 |     3837 | 2024-03-17 | HEROIC            | L   | 0.198      | -            | -                | -                | -         |    -0.38 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            5 |     4271 | 2024-02-28 | FlyQuest          | W   | 0.077      | 0.143        | 0.105 (0.001)    | 0.272 (0.003)    | 1 (0.077) |     1.52 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            4 |     4273 | 2024-02-27 | The MongolZ       | L   | 0.075      | -            | -                | -                | -         |    -0.01 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            3 |     4308 | 2024-02-26 | TYLOO             | W   | 0.063      | -            | -                | -                | 1 (0.063) |     0.38 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            2 |     4312 | 2024-02-25 | Twisted Minds     | W   | 0.062      | -            | -                | -                | 1 (0.062) |     0.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |
|            1 |     4518 | 2024-02-17 | Newhappy          | L   | 0.005      | -            | -                | -                | -         |    -0.15 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,367.19)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-06 |      1.000 | $2,756.00      | $2,756.00       |
| 2024-06-09 |      0.758 | $15,000.00     | $11,377.10      |
| 2024-06-02 |      0.712 | $10,000.00     | $7,116.49       |
| 2024-04-14 |      0.384 | $5,000.00      | $1,921.83       |
| 2024-03-20 |      0.220 | $10,000.00     | $2,195.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
