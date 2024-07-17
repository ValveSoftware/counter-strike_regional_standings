### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1973.8<br />
<br />
Final Rank Value (1973.8) = Starting Rank Value (1998.2) + Head To Head Adjustments (-24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.881[<sup>1</sup>](#table2)
- Bounty Collected: 0.745[<sup>2</sup>](#table1)
- Opponent Network: 0.351[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.744<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1998.2
- 400 + ( ( 0.744 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1998.2


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
|           33 |        1 | 2024-07-17 | M80          | W   | 1.000      | 1.000        | 0.219 (0.219)    | 0.621 (0.621)    | 1 (1.000) |     0.68 | apEX, flameZ, mezii, Spinx, ZywOo |
|           32 |      352 | 2024-06-15 | Spirit       | L   | 0.987      | -            | -                | -                | -         |   -14.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |      391 | 2024-06-14 | FaZe         | W   | 0.980      | 0.729        | 0.902 (0.644)    | 0.479 (0.342)    | 1 (0.980) |    11.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      426 | 2024-06-13 | G2           | W   | 0.974      | 0.729        | 0.738 (0.524)    | 0.496 (0.352)    | 1 (0.974) |    14.76 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      453 | 2024-06-12 | Virtus.pro   | L   | 0.967      | -            | -                | -                | -         |   -24.85 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      879 | 2024-06-02 | G2           | L   | 0.901      | -            | -                | -                | -         |   -15.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      911 | 2024-06-01 | Spirit       | W   | 0.894      | 0.624        | 1.000 (0.558)    | -                | 1 (0.894) |    14.55 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      946 | 2024-05-31 | HEROIC       | W   | 0.888      | -            | -                | -                | 1 (0.888) |     5.38 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      993 | 2024-05-29 | 9z           | L   | 0.875      | -            | -                | -                | -         |   -24.68 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1037 | 2024-05-27 | G2           | W   | 0.862      | 0.624        | 0.738 (0.397)    | 0.496 (0.267)    | 1 (0.862) |    10.29 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1047 | 2024-05-27 | Monte        | W   | 0.861      | -            | -                | -                | 1 (0.861) |     0.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1517 | 2024-05-12 | MOUZ         | L   | 0.760      | -            | -                | -                | -         |   -11.41 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1548 | 2024-05-11 | Astralis     | W   | 0.753      | 0.889        | 0.549 (0.368)    | 0.434 (0.291)    | 1 (0.753) |     8.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1566 | 2024-05-10 | FaZe         | W   | 0.747      | 0.889        | 0.902 (0.599)    | 0.479 (0.318)    | 1 (0.747) |     9.81 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1818 | 2024-04-28 | The MongolZ  | W   | 0.666      | 0.889        | 1.000 (0.592)    | 0.653 (0.387)    | 1 (0.666) |     8.74 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1891 | 2024-04-25 | BetBoom      | W   | 0.646      | 0.889        | 0.403 (0.232)    | 0.704 (0.405)    | -         |     1.72 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1928 | 2024-04-23 | Sharks       | W   | 0.633      | -            | -                | -                | -         |     0.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2591 | 2024-03-30 | FaZe         | L   | 0.474      | -            | -                | -                | -         |    -8.99 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2618 | 2024-03-28 | Cloud9       | W   | 0.460      | -            | -                | -                | -         |     0.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2705 | 2024-03-23 | Complexity   | W   | 0.427      | -            | -                | -                | -         |     3.65 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2722 | 2024-03-22 | Imperial     | W   | 0.419      | 1.000        | -                | 0.607 (0.255)    | -         |     0.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2741 | 2024-03-21 | The MongolZ  | W   | 0.414      | 1.000        | 1.000 (0.414)    | 0.653 (0.270)    | -         |     5.90 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2748 | 2024-03-21 | Eternal Fire | L   | 0.413      | -            | -                | -                | -         |   -10.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3403 | 2024-02-21 | ENCE         | W   | 0.220      | -            | -                | -                | -         |     0.34 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3433 | 2024-02-20 | Cloud9       | L   | 0.213      | -            | -                | -                | -         |    -6.63 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3450 | 2024-02-19 | HEROIC       | W   | 0.208      | -            | -                | -                | -         |     1.37 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3466 | 2024-02-19 | GamerLegion  | W   | 0.205      | -            | -                | -                | -         |     0.02 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3715 | 2024-02-05 | HEROIC       | L   | 0.113      | -            | -                | -                | -         |    -2.83 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3749 | 2024-02-03 | ENCE         | L   | 0.102      | -            | -                | -                | -         |    -3.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3899 | 2024-01-27 | Astralis     | W   | 0.053      | -            | -                | -                | -         |     0.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3918 | 2024-01-26 | Falcons      | W   | 0.046      | -            | -                | -                | -         |     0.12 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3965 | 2024-01-23 | Astralis     | L   | 0.027      | -            | -                | -                | -         |    -0.54 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     3996 | 2024-01-22 | OG           | W   | 0.020      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($179,810.79)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.73) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $40,000.00     | $39,745.16      |
| 2024-06-02 |      0.901 | $42,000.00     | $37,858.49      |
| 2024-05-12 |      0.760 | $80,000.00     | $60,819.62      |
| 2024-03-31 |      0.481 | $80,000.00     | $38,482.26      |
| 2024-02-11 |      0.154 | $10,000.00     | $1,539.35       |
| 2024-01-28 |      0.061 | $22,500.00     | $1,365.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
