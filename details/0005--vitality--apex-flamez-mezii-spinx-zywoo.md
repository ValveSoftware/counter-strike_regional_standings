### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Global Rank: [5](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1843.7<br />
<br />
Final Rank Value (1843.7) = Starting Rank Value (1846.5) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.814[<sup>1</sup>](#table2)
- Bounty Collected: 0.707[<sup>2</sup>](#table1)
- Opponent Network: 0.299[<sup>2</sup>](#table1)
- LAN Wins: 0.982[<sup>2</sup>](#table1)

The average of these factors is 0.701<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1846.5
- 400 + ( ( 0.701 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1846.5


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
|           32 |       56 | 2024-07-30 | Astralis     | W   | 1.000      | 0.581        | 0.360 (0.209)    | -                | 1 (1.000) |     9.25 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |       89 | 2024-07-29 | GamerLegion  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.72 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      414 | 2024-07-19 | Virtus.pro   | L   | 1.000      | -            | -                | -                | -         |   -21.60 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      531 | 2024-07-17 | M80          | W   | 1.000      | 1.000        | 0.190 (0.190)    | 0.551 (0.551)    | 1 (1.000) |     1.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      882 | 2024-06-15 | Spirit       | L   | 0.893      | -            | -                | -                | -         |   -11.45 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      921 | 2024-06-14 | FaZe         | W   | 0.886      | 0.729        | 0.643 (0.415)    | 0.410 (0.265)    | 1 (0.886) |     9.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      956 | 2024-06-13 | G2           | W   | 0.879      | 0.729        | 1.000 (0.641)    | 0.492 (0.316)    | 1 (0.879) |    17.64 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      983 | 2024-06-12 | Virtus.pro   | L   | 0.873      | -            | -                | -                | -         |   -20.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1409 | 2024-06-02 | G2           | L   | 0.807      | -            | -                | -                | -         |    -9.78 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1441 | 2024-06-01 | Spirit       | W   | 0.800      | 0.624        | 1.000 (0.499)    | -                | 1 (0.800) |    14.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1476 | 2024-05-31 | HEROIC       | W   | 0.793      | -            | -                | -                | 1 (0.793) |     4.72 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1523 | 2024-05-29 | 9z           | L   | 0.780      | -            | -                | -                | -         |   -22.02 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1567 | 2024-05-27 | G2           | W   | 0.767      | 0.624        | 1.000 (0.479)    | 0.492 (0.236)    | 1 (0.767) |    14.39 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1577 | 2024-05-27 | Monte        | W   | 0.766      | 0.624        | -                | 0.613 (0.293)    | 1 (0.766) |     0.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     2047 | 2024-05-12 | MOUZ         | L   | 0.666      | -            | -                | -                | -         |    -9.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     2078 | 2024-05-11 | Astralis     | W   | 0.659      | 0.889        | 0.360 (0.211)    | 0.386 (0.226)    | 1 (0.659) |     6.55 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2096 | 2024-05-10 | FaZe         | W   | 0.653      | 0.889        | 0.643 (0.373)    | 0.410 (0.238)    | -         |     7.90 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2348 | 2024-04-28 | The MongolZ  | W   | 0.571      | 0.889        | 1.000 (0.508)    | 0.719 (0.365)    | -         |    10.87 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2421 | 2024-04-25 | BetBoom      | W   | 0.552      | 0.889        | -                | 0.554 (0.272)    | -         |     1.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2458 | 2024-04-23 | Sharks       | W   | 0.539      | -            | -                | -                | -         |     0.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     3121 | 2024-03-30 | FaZe         | L   | 0.379      | -            | -                | -                | -         |    -7.82 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     3148 | 2024-03-28 | Cloud9       | W   | 0.366      | -            | -                | -                | -         |     0.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3235 | 2024-03-23 | Complexity   | W   | 0.333      | -            | -                | -                | -         |     2.56 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3252 | 2024-03-22 | Imperial     | W   | 0.325      | -            | -                | -                | -         |     0.47 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3271 | 2024-03-21 | The MongolZ  | W   | 0.319      | 1.000        | 1.000 (0.319)    | 0.719 (0.229)    | -         |     6.41 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3278 | 2024-03-21 | Eternal Fire | L   | 0.318      | -            | -                | -                | -         |    -6.57 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3933 | 2024-02-21 | ENCE         | W   | 0.125      | -            | -                | -                | -         |     0.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3963 | 2024-02-20 | Cloud9       | L   | 0.119      | -            | -                | -                | -         |    -3.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3980 | 2024-02-19 | HEROIC       | W   | 0.113      | -            | -                | -                | -         |     0.67 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3996 | 2024-02-19 | GamerLegion  | W   | 0.111      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4245 | 2024-02-05 | HEROIC       | L   | 0.019      | -            | -                | -                | -         |    -0.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4279 | 2024-02-03 | ENCE         | L   | 0.007      | -            | -                | -                | -         |    -0.20 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($194,627.66)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.59) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.899 | $40,000.00     | $35,964.65      |
| 2024-06-02 |      0.807 | $42,000.00     | $33,888.95      |
| 2024-05-12 |      0.666 | $80,000.00     | $53,258.59      |
| 2024-03-31 |      0.387 | $80,000.00     | $30,921.23      |
| 2024-02-11 |      0.059 | $10,000.00     | $594.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
