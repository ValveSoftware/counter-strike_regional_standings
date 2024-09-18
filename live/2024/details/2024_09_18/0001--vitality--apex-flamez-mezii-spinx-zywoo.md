### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Global Rank: [1](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_18.md)<br />
Regional Rank: [1]( ../../standings_europe_2024_09_18.md)<br />
<br />
Final Rank Value:  1996.0<br />
<br />
Final Rank Value (1996.0) = Starting Rank Value (1971.5) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.764[<sup>2</sup>](#table1)
- Opponent Network: 0.447[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.803<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1971.5
- 400 + ( ( 0.803 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1971.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       67 | 2024-09-15 | Liquid        | W   | 1.000      | 0.889        | 0.368 (0.327)    | 0.404 (0.359)    | 1 (1.000) |     5.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |      176 | 2024-09-12 | FURIA         | W   | 1.000      | 0.889        | 0.385 (0.342)    | 0.583 (0.518)    | 1 (1.000) |     4.52 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      216 | 2024-09-11 | ATOX          | W   | 1.000      | 0.889        | -                | 0.310 (0.276)    | 1 (1.000) |     0.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |     1032 | 2024-08-18 | Natus Vincere | W   | 0.995      | 1.000        | 1.000 (0.995)    | 0.448 (0.445)    | 1 (0.995) |    15.44 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |     1067 | 2024-08-17 | SAW           | W   | 0.987      | 1.000        | 0.354 (0.349)    | 0.736 (0.727)    | 1 (0.987) |     2.30 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |     1166 | 2024-08-13 | MOUZ          | W   | 0.961      | 1.000        | 1.000 (0.961)    | 0.424 (0.407)    | 1 (0.961) |    14.19 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |     1220 | 2024-08-12 | FaZe          | W   | 0.954      | 1.000        | 0.620 (0.592)    | 0.452 (0.431)    | 1 (0.954) |     6.52 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |     1252 | 2024-08-11 | FURIA         | W   | 0.946      | 1.000        | 0.385 (0.364)    | 0.583 (0.552)    | 1 (0.946) |     5.59 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1504 | 2024-08-03 | Astralis      | W   | 0.894      | -            | -                | -                | 1 (0.894) |     3.03 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1670 | 2024-07-30 | Astralis      | W   | 0.867      | -            | -                | -                | 1 (0.867) |     2.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1703 | 2024-07-29 | GamerLegion   | W   | 0.861      | 0.581        | -                | 0.639 (0.319)    | -         |     0.27 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     2028 | 2024-07-19 | Virtus.pro    | L   | 0.793      | -            | -                | -                | -         |   -20.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     2145 | 2024-07-17 | M80           | W   | 0.780      | 1.000        | -                | 0.552 (0.431)    | -         |     0.64 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     2496 | 2024-06-15 | Spirit        | L   | 0.567      | -            | -                | -                | -         |    -8.30 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     2535 | 2024-06-14 | FaZe          | W   | 0.561      | -            | -                | -                | -         |     4.09 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     2570 | 2024-06-13 | G2            | W   | 0.554      | 0.729        | 1.000 (0.404)    | -                | -         |     9.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2597 | 2024-06-12 | Virtus.pro    | L   | 0.548      | -            | -                | -                | -         |   -14.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     3023 | 2024-06-02 | G2            | L   | 0.482      | -            | -                | -                | -         |    -7.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     3055 | 2024-06-01 | Spirit        | W   | 0.475      | 0.624        | 1.000 (0.296)    | -                | -         |     7.92 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     3090 | 2024-05-31 | HEROIC        | W   | 0.468      | -            | -                | -                | -         |     1.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     3137 | 2024-05-29 | 9z            | L   | 0.455      | -            | -                | -                | -         |   -13.72 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     3181 | 2024-05-27 | G2            | W   | 0.442      | 0.624        | 1.000 (0.276)    | -                | -         |     6.59 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3191 | 2024-05-27 | Monte         | W   | 0.441      | -            | -                | -                | -         |     0.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3661 | 2024-05-12 | MOUZ          | L   | 0.341      | -            | -                | -                | -         |    -5.81 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3692 | 2024-05-11 | Astralis      | W   | 0.334      | -            | -                | -                | -         |     0.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3710 | 2024-05-10 | FaZe          | W   | 0.328      | -            | -                | -                | -         |     2.31 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3962 | 2024-04-28 | The MongolZ   | W   | 0.246      | -            | -                | -                | -         |     3.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     4035 | 2024-04-25 | BetBoom       | W   | 0.227      | -            | -                | -                | -         |     0.10 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     4072 | 2024-04-23 | Sharks        | W   | 0.214      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     4735 | 2024-03-30 | FaZe          | L   | 0.054      | -            | -                | -                | -         |    -1.35 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4762 | 2024-03-28 | Cloud9        | W   | 0.041      | -            | -                | -                | -         |     0.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4849 | 2024-03-23 | Complexity    | W   | 0.008      | -            | -                | -                | -         |     0.05 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($525,883.22)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      0.995 | $400,000.00    | $397,915.65     |
| 2024-08-04 |      0.900 | $22,500.00     | $20,258.04      |
| 2024-07-21 |      0.808 | $40,000.00     | $32,332.51      |
| 2024-06-16 |      0.574 | $40,000.00     | $22,963.59      |
| 2024-06-02 |      0.482 | $42,000.00     | $20,237.84      |
| 2024-05-12 |      0.341 | $80,000.00     | $27,256.48      |
| 2024-03-31 |      0.061 | $80,000.00     | $4,919.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
