### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Global Rank: [3](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [3]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1841.3<br />
<br />
Final Rank Value (1841.3) = Starting Rank Value (1850.9) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.649[<sup>2</sup>](#table1)
- Opponent Network: 0.425[<sup>2</sup>](#table1)
- LAN Wins: 0.956[<sup>2</sup>](#table1)

The average of these factors is 0.757<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1850.9
- 400 + ( ( 0.757 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1850.9


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
|           32 |       94 | 2024-12-13 | FaZe          | L   | 1.000      | -            | -                | -                | -         |   -19.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |      225 | 2024-12-05 | MIBR          | W   | 1.000      | 1.000        | 0.184 (0.184)    | 0.681 (0.681)    | 1 (1.000) |     2.54 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      251 | 2024-12-05 | FURIA         | W   | 1.000      | 1.000        | 0.195 (0.195)    | 0.635 (0.635)    | 1 (1.000) |     6.10 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      261 | 2024-12-04 | GamerLegion   | W   | 1.000      | 1.000        | 0.171 (0.171)    | 0.685 (0.685)    | 1 (1.000) |     1.82 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      580 | 2024-11-18 | FaZe          | W   | 0.998      | -            | -                | -                | 1 (0.998) |    12.58 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      602 | 2024-11-17 | BetBoom       | W   | 0.991      | -            | -                | -                | 1 (0.991) |     0.74 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      612 | 2024-11-16 | GamerLegion   | W   | 0.990      | -            | -                | -                | 1 (0.990) |     1.39 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      969 | 2024-11-02 | G2            | L   | 0.892      | -            | -                | -                | -         |    -8.94 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           24 |      991 | 2024-11-01 | MOUZ          | W   | 0.884      | 1.000        | 0.620 (0.548)    | 0.517 (0.458)    | 1 (0.884) |    11.03 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           23 |     1005 | 2024-10-31 | Liquid        | W   | 0.879      | 1.000        | 0.323 (0.284)    | 0.493 (0.434)    | 1 (0.879) |     6.99 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           22 |     1025 | 2024-10-30 | Spirit        | L   | 0.873      | -            | -                | -                | -         |    -9.86 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           21 |     1373 | 2024-10-11 | MOUZ          | L   | 0.748      | -            | -                | -                | -         |   -14.12 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1423 | 2024-10-09 | HEROIC        | L   | 0.733      | -            | -                | -                | -         |   -16.61 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1466 | 2024-10-08 | The MongolZ   | W   | 0.726      | 0.624        | 1.000 (0.453)    | 0.734 (0.333)    | 1 (0.726) |    10.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1487 | 2024-10-07 | 9z            | W   | 0.720      | -            | -                | -                | 1 (0.720) |     0.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1787 | 2024-09-28 | G2            | L   | 0.660      | -            | -                | -                | -         |    -6.94 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     1863 | 2024-09-26 | Liquid        | W   | 0.647      | 0.729        | -                | 0.493 (0.233)    | -         |     5.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     1933 | 2024-09-25 | Astralis      | W   | 0.640      | -            | -                | -                | -         |     1.07 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2123 | 2024-09-19 | Eternal Fire  | L   | 0.601      | -            | -                | -                | -         |   -16.44 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2234 | 2024-09-15 | Liquid        | W   | 0.574      | 0.889        | 0.323 (0.165)    | 0.493 (0.252)    | -         |     3.98 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2343 | 2024-09-12 | FURIA         | W   | 0.553      | 0.889        | -                | 0.635 (0.312)    | -         |     3.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2383 | 2024-09-11 | ATOX          | W   | 0.545      | -            | -                | -                | -         |     0.08 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3199 | 2024-08-18 | Natus Vincere | W   | 0.387      | 1.000        | 1.000 (0.387)    | -                | -         |     5.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3234 | 2024-08-17 | SAW           | W   | 0.379      | 1.000        | -                | 0.594 (0.225)    | -         |     1.23 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3333 | 2024-08-13 | MOUZ          | W   | 0.353      | 1.000        | 0.620 (0.219)    | -                | -         |     5.12 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3387 | 2024-08-12 | FaZe          | W   | 0.346      | 1.000        | 0.780 (0.270)    | -                | -         |     5.42 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3419 | 2024-08-11 | FURIA         | W   | 0.339      | -            | -                | -                | -         |     2.24 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3671 | 2024-08-03 | Astralis      | W   | 0.286      | -            | -                | -                | -         |     0.58 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3837 | 2024-07-30 | Astralis      | W   | 0.260      | -            | -                | -                | -         |     0.53 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3870 | 2024-07-29 | GamerLegion   | W   | 0.253      | -            | -                | -                | -         |     0.58 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4195 | 2024-07-19 | Virtus.pro    | L   | 0.186      | -            | -                | -                | -         |    -5.43 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4312 | 2024-07-17 | M80           | W   | 0.173      | -            | -                | -                | -         |     0.16 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($344,999.34)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-11-03 |      0.898 | $85,000.00     | $76,348.16      |
| 2024-10-13 |      0.761 | $10,000.00     | $7,607.41       |
| 2024-09-29 |      0.667 | $40,000.00     | $26,665.49      |
| 2024-09-22 |      0.621 | $32,000.00     | $19,860.88      |
| 2024-08-18 |      0.387 | $400,000.00    | $154,898.30     |
| 2024-08-04 |      0.293 | $22,500.00     | $6,588.31       |
| 2024-07-21 |      0.201 | $40,000.00     | $8,030.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
