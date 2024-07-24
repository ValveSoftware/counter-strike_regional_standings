### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [5](../standings_global.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
Final Rank Value:  1859.5<br />
<br />
Final Rank Value (1859.5) = Starting Rank Value (1880.3) + Head To Head Adjustments (-20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.888[<sup>1</sup>](#table2)
- Bounty Collected: 0.739[<sup>2</sup>](#table1)
- Opponent Network: 0.329[<sup>2</sup>](#table1)
- LAN Wins: 0.969[<sup>2</sup>](#table1)

The average of these factors is 0.731<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1880.3
- 400 + ( ( 0.731 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1880.3


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
|           31 |      172 | 2024-07-19 | Virtus.pro   | L   | 1.000      | -            | -                | -                | -         |   -20.89 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      289 | 2024-07-17 | M80          | W   | 1.000      | 1.000        | 0.238 (0.238)    | 0.614 (0.614)    | 1 (1.000) |     1.12 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      640 | 2024-06-15 | Spirit       | L   | 0.940      | -            | -                | -                | -         |   -12.87 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      679 | 2024-06-14 | FaZe         | W   | 0.933      | 0.729        | 0.854 (0.581)    | 0.433 (0.295)    | 1 (0.933) |    11.09 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      714 | 2024-06-13 | G2           | W   | 0.927      | 0.729        | 1.000 (0.676)    | 0.515 (0.348)    | 1 (0.927) |    17.46 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      741 | 2024-06-12 | Virtus.pro   | L   | 0.920      | -            | -                | -                | -         |   -20.54 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |     1167 | 2024-06-02 | G2           | L   | 0.854      | -            | -                | -                | -         |   -11.46 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1199 | 2024-06-01 | Spirit       | W   | 0.847      | 0.624        | 1.000 (0.529)    | -                | 1 (0.847) |    14.87 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1234 | 2024-05-31 | HEROIC       | W   | 0.840      | -            | -                | -                | 1 (0.840) |     5.11 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1281 | 2024-05-29 | 9z           | L   | 0.828      | -            | -                | -                | -         |   -23.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1325 | 2024-05-27 | G2           | W   | 0.815      | 0.624        | 1.000 (0.508)    | 0.515 (0.262)    | 1 (0.815) |    13.86 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1335 | 2024-05-27 | Monte        | W   | 0.813      | -            | -                | -                | 1 (0.813) |     0.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1805 | 2024-05-12 | MOUZ         | L   | 0.713      | -            | -                | -                | -         |    -9.57 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1836 | 2024-05-11 | Astralis     | W   | 0.706      | 0.889        | 0.457 (0.287)    | 0.398 (0.250)    | 1 (0.706) |     7.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1854 | 2024-05-10 | FaZe         | W   | 0.700      | 0.889        | 0.854 (0.532)    | 0.433 (0.269)    | 1 (0.700) |     9.28 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2106 | 2024-04-28 | The MongolZ  | W   | 0.618      | 0.889        | 1.000 (0.550)    | 0.725 (0.399)    | 1 (0.618) |     9.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2179 | 2024-04-25 | BetBoom      | W   | 0.599      | 0.889        | 0.333 (0.177)    | 0.642 (0.342)    | -         |     1.67 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2216 | 2024-04-23 | Sharks       | W   | 0.586      | -            | -                | -                | -         |     0.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2879 | 2024-03-30 | FaZe         | L   | 0.427      | -            | -                | -                | -         |    -8.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2906 | 2024-03-28 | Cloud9       | W   | 0.413      | -            | -                | -                | -         |     0.23 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2993 | 2024-03-23 | Complexity   | W   | 0.380      | -            | -                | -                | -         |     3.10 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3010 | 2024-03-22 | Imperial     | W   | 0.372      | 1.000        | -                | 0.653 (0.243)    | -         |     0.65 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3029 | 2024-03-21 | The MongolZ  | W   | 0.366      | 1.000        | 1.000 (0.366)    | 0.725 (0.266)    | -         |     6.19 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3036 | 2024-03-21 | Eternal Fire | L   | 0.365      | -            | -                | -                | -         |    -8.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3691 | 2024-02-21 | ENCE         | W   | 0.173      | -            | -                | -                | -         |     0.39 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3721 | 2024-02-20 | Cloud9       | L   | 0.166      | -            | -                | -                | -         |    -5.15 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3738 | 2024-02-19 | HEROIC       | W   | 0.160      | -            | -                | -                | -         |     0.94 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3754 | 2024-02-19 | GamerLegion  | W   | 0.158      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     4003 | 2024-02-05 | HEROIC       | L   | 0.066      | -            | -                | -                | -         |    -1.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4037 | 2024-02-03 | ENCE         | L   | 0.054      | -            | -                | -                | -         |    -1.59 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4187 | 2024-01-27 | Astralis     | W   | 0.005      | -            | -                | -                | -         |     0.05 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($206,847.48)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.75) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.946 | $40,000.00     | $37,856.16      |
| 2024-06-02 |      0.854 | $42,000.00     | $35,875.03      |
| 2024-05-12 |      0.713 | $80,000.00     | $57,041.60      |
| 2024-03-31 |      0.434 | $80,000.00     | $34,704.25      |
| 2024-02-11 |      0.107 | $10,000.00     | $1,067.10       |
| 2024-01-28 |      0.013 | $22,500.00     | $303.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
