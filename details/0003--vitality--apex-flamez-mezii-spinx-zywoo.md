### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [3](../standings_global.md)<br />
Regional Rank: [3]( ../standings_europe.md)<br />
Final Rank Value:  1956.0<br />
<br />
Final Rank Value (1956.0) = Starting Rank Value (1977.8) + Head To Head Adjustments (-21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.881[<sup>1</sup>](#table2)
- Bounty Collected: 0.758[<sup>2</sup>](#table1)
- Opponent Network: 0.353[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.748<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1977.8
- 400 + ( ( 0.748 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1977.8


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
|           32 |      188 | 2024-06-15 | Spirit       | L   | 1.000      | -            | -                | -                | -         |   -12.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |      227 | 2024-06-14 | FaZe         | W   | 1.000      | 0.729        | 0.936 (0.682)    | 0.491 (0.358)    | 1 (1.000) |    12.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      262 | 2024-06-13 | G2           | W   | 1.000      | 0.729        | 0.745 (0.543)    | 0.481 (0.351)    | 1 (1.000) |    13.87 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      289 | 2024-06-12 | Virtus.pro   | L   | 1.000      | -            | -                | -                | -         |   -24.96 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      715 | 2024-06-02 | G2           | L   | 0.941      | -            | -                | -                | -         |   -17.31 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      747 | 2024-06-01 | Spirit       | W   | 0.934      | 0.624        | 1.000 (0.583)    | -                | 1 (0.934) |    16.21 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      782 | 2024-05-31 | HEROIC       | W   | 0.927      | 0.624        | -                | 0.480 (0.278)    | 1 (0.927) |     6.32 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      829 | 2024-05-29 | 9z           | L   | 0.914      | -            | -                | -                | -         |   -25.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |      873 | 2024-05-27 | G2           | W   | 0.901      | 0.624        | 0.745 (0.419)    | -                | 1 (0.901) |     9.81 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |      883 | 2024-05-27 | Monte        | W   | 0.900      | 0.624        | -                | 0.668 (0.375)    | 1 (0.900) |     0.51 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1353 | 2024-05-12 | MOUZ         | L   | 0.800      | -            | -                | -                | -         |   -12.76 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1384 | 2024-05-11 | Astralis     | W   | 0.793      | 0.889        | 0.546 (0.385)    | 0.461 (0.325)    | 1 (0.793) |    10.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1402 | 2024-05-10 | FaZe         | W   | 0.787      | 0.889        | 0.936 (0.655)    | 0.491 (0.343)    | 1 (0.787) |    11.10 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1654 | 2024-04-28 | The MongolZ  | W   | 0.705      | 0.889        | 1.000 (0.627)    | 0.692 (0.434)    | 1 (0.705) |     9.82 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1727 | 2024-04-25 | BetBoom      | W   | 0.686      | 0.889        | 0.406 (0.247)    | 0.745 (0.455)    | 1 (0.686) |     2.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1764 | 2024-04-23 | Sharks       | W   | 0.673      | -            | -                | -                | -         |     0.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2427 | 2024-03-30 | FaZe         | L   | 0.513      | -            | -                | -                | -         |    -9.25 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2454 | 2024-03-28 | Cloud9       | W   | 0.500      | -            | -                | -                | -         |     0.36 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2541 | 2024-03-23 | Complexity   | W   | 0.467      | 1.000        | 0.440 (0.205)    | -                | -         |     4.15 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2558 | 2024-03-22 | Imperial     | W   | 0.459      | 1.000        | -                | 0.646 (0.296)    | -         |     0.99 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2577 | 2024-03-21 | The MongolZ  | W   | 0.453      | 1.000        | 1.000 (0.453)    | 0.692 (0.314)    | -         |     6.95 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2584 | 2024-03-21 | Eternal Fire | L   | 0.452      | -            | -                | -                | -         |   -10.92 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3239 | 2024-02-21 | ENCE         | W   | 0.259      | -            | -                | -                | -         |     0.56 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3269 | 2024-02-20 | Cloud9       | L   | 0.253      | -            | -                | -                | -         |    -7.83 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3286 | 2024-02-19 | HEROIC       | W   | 0.247      | -            | -                | -                | -         |     1.93 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3302 | 2024-02-19 | GamerLegion  | W   | 0.245      | -            | -                | -                | -         |     0.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3551 | 2024-02-05 | HEROIC       | L   | 0.153      | -            | -                | -                | -         |    -3.65 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3585 | 2024-02-03 | ENCE         | L   | 0.141      | -            | -                | -                | -         |    -4.17 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3735 | 2024-01-27 | Astralis     | W   | 0.092      | -            | -                | -                | -         |     1.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3754 | 2024-01-26 | Falcons      | W   | 0.086      | -            | -                | -                | -         |     0.28 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3801 | 2024-01-23 | Astralis     | L   | 0.067      | -            | -                | -                | -         |    -1.22 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     3832 | 2024-01-22 | OG           | W   | 0.060      | -            | -                | -                | -         |     0.02 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($189,354.23)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.73) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-02 |      0.941 | $42,000.00     | $39,522.12      |
| 2024-05-12 |      0.800 | $80,000.00     | $63,988.44      |
| 2024-03-31 |      0.521 | $80,000.00     | $41,651.08      |
| 2024-02-11 |      0.194 | $10,000.00     | $1,935.46       |
| 2024-01-28 |      0.100 | $22,500.00     | $2,257.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
