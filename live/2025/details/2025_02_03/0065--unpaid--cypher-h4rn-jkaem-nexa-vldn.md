### Roster Details<br />
Team Name: UNPAID<br />
Roster: CYPHER, h4rn, jkaem, nexa, VLDN<br />
Global Rank: [65](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [45]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  967.9<br />
<br />
Final Rank Value (967.9) = Starting Rank Value (961.9) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.536[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.082[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.290<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 961.9
- 400 + ( ( 0.290 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 961.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1681 | 2024-10-19 | Nemiga         | L   | 0.487      | -            | -                | -                | -         |    -2.97 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           24 |     1691 | 2024-10-19 | HEROIC         | W   | 0.486      | 0.624        | 0.288 (0.087)    | 0.352 (0.107)    | 1 (0.486) |    12.71 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           23 |     1719 | 2024-10-18 | PARIVISION     | W   | 0.480      | 0.624        | 0.018 (0.005)    | 0.303 (0.091)    | 1 (0.480) |     5.43 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           22 |     1745 | 2024-10-17 | Solid          | W   | 0.472      | 0.624        | 0.048 (0.014)    | 0.767 (0.226)    | 1 (0.472) |     7.13 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           21 |     1772 | 2024-10-16 | fnatic         | L   | 0.467      | -            | -                | -                | -         |    -4.73 | CYPHER, h4rn, jkaem, nexa, VLDN    |
|           20 |     2601 | 2024-09-19 | devils.one     | L   | 0.287      | -            | -                | -                | -         |    -7.34 | CYPHER, jkaem, nawwk, Patti, VLDN  |
|           19 |     2651 | 2024-09-18 | Sashi          | L   | 0.278      | -            | -                | -                | -         |    -4.24 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           18 |     2665 | 2024-09-17 | Sashi          | W   | 0.274      | 0.443        | 0.039 (0.005)    | 0.638 (0.077)    | 0 (0.000) |     4.52 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           17 |     2671 | 2024-09-17 | GUN5           | W   | 0.272      | 0.443        | 0.229 (0.028)    | 1.000 (0.121)    | 0 (0.000) |     5.33 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           16 |     2679 | 2024-09-17 | Sashi          | L   | 0.272      | -            | -                | -                | -         |    -4.00 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           15 |     2739 | 2024-09-14 | Insilio        | L   | 0.254      | -            | -                | -                | -         |    -5.85 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           14 |     2784 | 2024-09-13 | Spirit Academy | W   | 0.246      | 0.435        | 0.170 (0.018)    | 1.000 (0.107)    | 0 (0.000) |     4.51 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           13 |     2891 | 2024-09-10 | Passion UA     | W   | 0.224      | 0.384        | 0.103 (0.009)    | 0.772 (0.067)    | 0 (0.000) |     4.90 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           12 |     2946 | 2024-09-07 | B8             | L   | 0.206      | -            | -                | -                | -         |    -1.94 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           11 |     2982 | 2024-09-06 | Insilio        | W   | 0.199      | 0.435        | 0.014 (0.001)    | 0.250 (0.022)    | 0 (0.000) |     1.63 | CYPHER, jkaem, nawwk, nexa, VLDN   |
|           10 |     3121 | 2024-09-02 | B8             | L   | 0.171      | -            | -                | -                | -         |    -1.59 | h4rn, hampus, jkaem, nexa, VLDN    |
|            9 |     3253 | 2024-08-28 | EYEBALLERS     | L   | 0.139      | -            | -                | -                | -         |    -2.96 | CYPHER, hampus, jkaem, nawwk, nexa |
|            8 |     3479 | 2024-08-23 | GamerLegion    | L   | 0.107      | -            | -                | -                | -         |    -2.51 | CYPHER, hampus, jkaem, nawwk, nexa |
|            7 |     3491 | 2024-08-23 | ECLOT          | L   | 0.106      | -            | -                | -                | -         |    -0.53 | CYPHER, hampus, jkaem, nawwk, nexa |
|            6 |     3519 | 2024-08-22 | HEROIC         | L   | 0.099      | -            | -                | -                | -         |    -0.62 | CYPHER, hampus, jkaem, nawwk, nexa |
|            5 |     3571 | 2024-08-21 | Rhyno          | W   | 0.092      | 0.143        | 0.007 (0.000)    | 0.176 (0.002)    | 0 (0.000) |     0.64 | CYPHER, hampus, jkaem, nawwk, nexa |
|            4 |     3599 | 2024-08-21 | TSM            | W   | 0.091      | 0.143        | 0.030 (0.000)    | 0.329 (0.004)    | 0 (0.000) |     0.94 | CYPHER, hampus, jkaem, nawwk, nexa |
|            3 |     3650 | 2024-08-19 | Cloud9         | L   | 0.080      | -            | -                | -                | -         |    -1.16 | CYPHER, hampus, jkaem, nawwk, nexa |
|            2 |     3705 | 2024-08-17 | SINNERS        | L   | 0.066      | -            | -                | -                | -         |    -0.83 | CYPHER, hampus, jkaem, nawwk, nexa |
|            1 |     3754 | 2024-08-15 | B8             | L   | 0.053      | -            | -                | -                | -         |    -0.50 | CYPHER, hampus, jkaem, nawwk, nexa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,638.99)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.487 | $50,000.00     | $24,372.64      |
| 2024-09-24 |      0.319 | $1,000.00      | $318.97         |
| 2024-09-15 |      0.260 | $2,000.00      | $520.49         |
| 2024-09-08 |      0.213 | $2,000.00      | $426.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
