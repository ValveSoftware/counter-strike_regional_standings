### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1957.0<br />
<br />
Final Rank Value (1957.0) = Starting Rank Value (1983.7) + Head To Head Adjustments (-26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.883[<sup>1</sup>](#table2)
- Bounty Collected: 0.799[<sup>2</sup>](#table1)
- Opponent Network: 0.436[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.779<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1983.7
- 400 + ( ( 0.779 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1983.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       52 | 2024-06-15 | Spirit       | L   | 1.000      | -            | -                | -                | -         |   -12.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |       91 | 2024-06-14 | FaZe         | W   | 1.000      | 0.729        | 1.000 (0.729)    | 0.540 (0.394)    | 1 (1.000) |    13.99 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      126 | 2024-06-13 | G2           | W   | 1.000      | 0.729        | 0.756 (0.551)    | 0.508 (0.371)    | 1 (1.000) |    14.14 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      153 | 2024-06-12 | Virtus.pro   | L   | 1.000      | -            | -                | -                | -         |   -24.76 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      579 | 2024-06-02 | G2           | L   | 1.000      | -            | -                | -                | -         |   -18.09 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      613 | 2024-06-01 | Spirit       | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    17.40 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      648 | 2024-05-31 | HEROIC       | W   | 1.000      | 0.624        | -                | 0.545 (0.340)    | 1 (1.000) |     6.80 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      695 | 2024-05-29 | 9z           | L   | 1.000      | -            | -                | -                | -         |   -29.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |      739 | 2024-05-27 | G2           | W   | 1.000      | 0.624        | 0.756 (0.472)    | -                | 1 (1.000) |    10.79 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |      749 | 2024-05-27 | Monte        | W   | 1.000      | 0.624        | -                | 0.674 (0.421)    | 1 (1.000) |     0.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1219 | 2024-05-12 | MOUZ         | L   | 0.956      | -            | -                | -                | -         |   -13.54 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1250 | 2024-05-11 | Astralis     | W   | 0.949      | 0.889        | 0.533 (0.450)    | 0.501 (0.422)    | 1 (0.949) |    11.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1268 | 2024-05-10 | FaZe         | W   | 0.943      | 0.889        | 1.000 (0.838)    | 0.540 (0.453)    | 1 (0.943) |    15.14 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1520 | 2024-04-28 | The MongolZ  | W   | 0.861      | 0.889        | 0.986 (0.755)    | 0.681 (0.521)    | 1 (0.861) |    10.15 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1593 | 2024-04-25 | BetBoom      | W   | 0.842      | 0.889        | 0.414 (0.309)    | 0.798 (0.597)    | 1 (0.842) |     2.31 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1630 | 2024-04-23 | Sharks       | W   | 0.828      | -            | -                | -                | -         |     0.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2294 | 2024-03-30 | FaZe         | L   | 0.669      | -            | -                | -                | -         |   -10.45 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2321 | 2024-03-28 | Cloud9       | W   | 0.656      | -            | -                | -                | -         |     0.88 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2408 | 2024-03-23 | Complexity   | W   | 0.623      | 1.000        | 0.426 (0.265)    | -                | -         |     5.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2425 | 2024-03-22 | Imperial     | W   | 0.614      | 1.000        | -                | 0.694 (0.426)    | -         |     1.66 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2444 | 2024-03-21 | The MongolZ  | W   | 0.609      | 1.000        | 0.986 (0.601)    | 0.681 (0.415)    | -         |     8.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2451 | 2024-03-21 | Eternal Fire | L   | 0.608      | -            | -                | -                | -         |   -13.22 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3106 | 2024-02-21 | ENCE         | W   | 0.415      | -            | -                | -                | -         |     1.19 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3136 | 2024-02-20 | Cloud9       | L   | 0.408      | -            | -                | -                | -         |   -12.49 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3153 | 2024-02-19 | HEROIC       | W   | 0.403      | -            | -                | -                | -         |     3.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3169 | 2024-02-19 | GamerLegion  | W   | 0.400      | -            | -                | -                | -         |     0.09 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3418 | 2024-02-05 | HEROIC       | L   | 0.308      | -            | -                | -                | -         |    -7.30 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3452 | 2024-02-03 | ENCE         | L   | 0.297      | -            | -                | -                | -         |    -8.64 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3602 | 2024-01-27 | Astralis     | W   | 0.248      | -            | -                | -                | -         |     3.31 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3621 | 2024-01-26 | Falcons      | W   | 0.241      | -            | -                | -                | -         |     0.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3668 | 2024-01-23 | Astralis     | L   | 0.223      | -            | -                | -                | -         |    -4.10 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     3699 | 2024-01-22 | OG           | W   | 0.215      | -            | -                | -                | -         |     0.08 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($221,799.18)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.74) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-02 |      1.000 | $42,000.00     | $42,000.00      |
| 2024-05-12 |      0.956 | $80,000.00     | $76,442.28      |
| 2024-03-31 |      0.676 | $80,000.00     | $54,104.93      |
| 2024-02-11 |      0.349 | $10,000.00     | $3,492.19       |
| 2024-01-28 |      0.256 | $22,500.00     | $5,759.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
