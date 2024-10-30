### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, JACKZ, Spinx, ZywOo<br />
Global Rank: [4](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [4]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  1860.7<br />
<br />
Final Rank Value (1860.7) = Starting Rank Value (1888.2) + Head To Head Adjustments (-27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.714[<sup>2</sup>](#table1)
- Opponent Network: 0.308[<sup>2</sup>](#table1)
- LAN Wins: 0.980[<sup>2</sup>](#table1)

The average of these factors is 0.750<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1888.2
- 400 + ( ( 0.750 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1888.2


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
|           35 |        6 | 2024-10-30 | Spirit        | L   | 1.000      | -            | -                | -                | -         |   -14.57 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           34 |      354 | 2024-10-11 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -18.08 | apEX, flameZ, mezii, Spinx, ZywOo |
|           33 |      404 | 2024-10-09 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |   -25.37 | apEX, flameZ, mezii, Spinx, ZywOo |
|           32 |      447 | 2024-10-08 | The MongolZ   | W   | 1.000      | 0.624        | 0.698 (0.436)    | 0.592 (0.370)    | 1 (1.000) |     7.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |      468 | 2024-10-07 | 9z            | W   | 1.000      | 0.624        | -                | 0.313 (0.195)    | 1 (1.000) |     1.02 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      768 | 2024-09-28 | G2            | L   | 0.987      | -            | -                | -                | -         |   -13.66 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      844 | 2024-09-26 | Liquid        | W   | 0.974      | 0.729        | 0.423 (0.300)    | -                | 1 (0.974) |     7.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      914 | 2024-09-25 | Astralis      | W   | 0.966      | -            | -                | -                | 1 (0.966) |     2.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |     1104 | 2024-09-19 | Eternal Fire  | L   | 0.928      | -            | -                | -                | -         |   -16.68 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |     1215 | 2024-09-15 | Liquid        | W   | 0.901      | 0.889        | 0.423 (0.339)    | 0.273 (0.218)    | 1 (0.901) |     5.79 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |     1324 | 2024-09-12 | FURIA         | W   | 0.880      | 0.889        | 0.373 (0.291)    | 0.446 (0.349)    | 1 (0.880) |     5.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1364 | 2024-09-11 | ATOX          | W   | 0.872      | 0.889        | -                | 0.270 (0.209)    | 1 (0.872) |     0.21 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     2180 | 2024-08-18 | Natus Vincere | W   | 0.714      | 1.000        | 1.000 (0.714)    | 0.523 (0.374)    | 1 (0.714) |    13.73 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     2215 | 2024-08-17 | SAW           | W   | 0.706      | 1.000        | 0.540 (0.381)    | 0.768 (0.542)    | 1 (0.706) |     5.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     2314 | 2024-08-13 | MOUZ          | W   | 0.680      | 1.000        | 0.983 (0.669)    | 0.337 (0.229)    | 1 (0.680) |    11.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     2368 | 2024-08-12 | FaZe          | W   | 0.673      | 1.000        | 0.586 (0.394)    | -                | -         |     5.68 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     2400 | 2024-08-11 | FURIA         | W   | 0.665      | 1.000        | 0.373 (0.248)    | 0.446 (0.297)    | -         |     5.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     2652 | 2024-08-03 | Astralis      | W   | 0.613      | -            | -                | -                | -         |     1.86 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     2818 | 2024-07-30 | Astralis      | W   | 0.586      | -            | -                | -                | -         |     1.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2851 | 2024-07-29 | GamerLegion   | W   | 0.580      | -            | -                | -                | -         |     0.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     3176 | 2024-07-19 | Virtus.pro    | L   | 0.513      | -            | -                | -                | -         |   -12.68 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     3293 | 2024-07-17 | M80           | W   | 0.500      | 1.000        | -                | 0.597 (0.298)    | -         |     0.85 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     3644 | 2024-06-15 | Spirit        | L   | 0.287      | -            | -                | -                | -         |    -3.98 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     3683 | 2024-06-14 | FaZe          | W   | 0.280      | -            | -                | -                | -         |     2.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     3718 | 2024-06-13 | G2            | W   | 0.274      | 0.729        | 1.000 (0.200)    | -                | -         |     5.23 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3745 | 2024-06-12 | Virtus.pro    | L   | 0.267      | -            | -                | -                | -         |    -6.77 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     4171 | 2024-06-02 | G2            | L   | 0.201      | -            | -                | -                | -         |    -2.58 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     4203 | 2024-06-01 | Spirit        | W   | 0.194      | -            | -                | -                | -         |     3.43 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     4238 | 2024-05-31 | HEROIC        | W   | 0.187      | -            | -                | -                | -         |     1.75 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     4285 | 2024-05-29 | 9z            | L   | 0.175      | -            | -                | -                | -         |    -5.30 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     4329 | 2024-05-27 | G2            | W   | 0.162      | -            | -                | -                | -         |     3.02 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     4339 | 2024-05-27 | Monte         | W   | 0.160      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     4809 | 2024-05-12 | MOUZ          | L   | 0.060      | -            | -                | -                | -         |    -0.89 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4840 | 2024-05-11 | Astralis      | W   | 0.053      | -            | -                | -                | -         |     0.14 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4858 | 2024-05-10 | FaZe          | W   | 0.047      | -            | -                | -                | -         |     0.42 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($425,700.20)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-29 |      0.993 | $40,000.00     | $39,737.74      |
| 2024-09-22 |      0.947 | $32,000.00     | $30,318.68      |
| 2024-08-18 |      0.714 | $400,000.00    | $285,620.80     |
| 2024-08-04 |      0.620 | $22,500.00     | $13,941.45      |
| 2024-07-21 |      0.528 | $40,000.00     | $21,103.03      |
| 2024-06-16 |      0.293 | $40,000.00     | $11,734.11      |
| 2024-06-02 |      0.201 | $42,000.00     | $8,446.88       |
| 2024-05-12 |      0.060 | $80,000.00     | $4,797.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
