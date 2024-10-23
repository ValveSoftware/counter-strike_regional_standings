### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Global Rank: [3](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [3]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  1869.6<br />
<br />
Final Rank Value (1869.6) = Starting Rank Value (1891.9) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.715[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.995[<sup>2</sup>](#table1)

The average of these factors is 0.761<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1891.9
- 400 + ( ( 0.761 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1891.9


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
|           35 |      224 | 2024-10-11 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -18.57 | apEX, flameZ, mezii, Spinx, ZywOo |
|           34 |      274 | 2024-10-09 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |   -26.05 | apEX, flameZ, mezii, Spinx, ZywOo |
|           33 |      317 | 2024-10-08 | The MongolZ   | W   | 1.000      | 0.624        | 0.696 (0.434)    | 0.597 (0.373)    | 1 (1.000) |     7.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           32 |      338 | 2024-10-07 | 9z            | W   | 1.000      | 0.624        | -                | 0.353 (0.220)    | 1 (1.000) |     1.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|           31 |      638 | 2024-09-28 | G2            | L   | 1.000      | -            | -                | -                | -         |   -14.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      714 | 2024-09-26 | Liquid        | W   | 1.000      | 0.729        | 0.416 (0.304)    | -                | 1 (1.000) |     7.65 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      784 | 2024-09-25 | Astralis      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.56 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      974 | 2024-09-19 | Eternal Fire  | L   | 0.974      | -            | -                | -                | -         |   -17.98 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |     1085 | 2024-09-15 | Liquid        | W   | 0.947      | 0.889        | 0.416 (0.350)    | 0.298 (0.251)    | 1 (0.947) |     6.32 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |     1194 | 2024-09-12 | FURIA         | W   | 0.926      | 0.889        | 0.358 (0.294)    | 0.484 (0.398)    | 1 (0.926) |     5.86 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |     1234 | 2024-09-11 | ATOX          | W   | 0.918      | 0.889        | -                | 0.280 (0.229)    | 1 (0.918) |     0.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     2050 | 2024-08-18 | Natus Vincere | W   | 0.760      | 1.000        | 1.000 (0.760)    | 0.547 (0.416)    | 1 (0.760) |    14.39 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     2085 | 2024-08-17 | SAW           | W   | 0.752      | 1.000        | 0.321 (0.241)    | 0.706 (0.531)    | 1 (0.752) |     2.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     2184 | 2024-08-13 | MOUZ          | W   | 0.726      | 1.000        | 1.000 (0.726)    | 0.359 (0.261)    | 1 (0.726) |    11.38 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     2238 | 2024-08-12 | FaZe          | W   | 0.719      | 1.000        | 0.558 (0.401)    | -                | -         |     5.94 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     2270 | 2024-08-11 | FURIA         | W   | 0.711      | 1.000        | 0.358 (0.255)    | 0.484 (0.344)    | -         |     5.78 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     2522 | 2024-08-03 | Astralis      | W   | 0.659      | -            | -                | -                | -         |     1.38 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     2688 | 2024-07-30 | Astralis      | W   | 0.633      | -            | -                | -                | -         |     1.28 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     2721 | 2024-07-29 | GamerLegion   | W   | 0.626      | -            | -                | -                | -         |     0.25 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     3046 | 2024-07-19 | Virtus.pro    | L   | 0.559      | -            | -                | -                | -         |   -13.74 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     3163 | 2024-07-17 | M80           | W   | 0.546      | 1.000        | -                | 0.589 (0.321)    | -         |     0.88 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     3514 | 2024-06-15 | Spirit        | L   | 0.333      | -            | -                | -                | -         |    -5.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     3553 | 2024-06-14 | FaZe          | W   | 0.326      | -            | -                | -                | -         |     2.84 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     3588 | 2024-06-13 | G2            | W   | 0.320      | 0.729        | 1.000 (0.233)    | -                | -         |     6.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     3615 | 2024-06-12 | Virtus.pro    | L   | 0.313      | -            | -                | -                | -         |    -7.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     4041 | 2024-06-02 | G2            | L   | 0.247      | -            | -                | -                | -         |    -3.27 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     4073 | 2024-06-01 | Spirit        | W   | 0.240      | -            | -                | -                | -         |     3.96 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     4108 | 2024-05-31 | HEROIC        | W   | 0.233      | -            | -                | -                | -         |     1.95 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     4155 | 2024-05-29 | 9z            | L   | 0.221      | -            | -                | -                | -         |    -6.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     4199 | 2024-05-27 | G2            | W   | 0.208      | -            | -                | -                | -         |     3.79 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     4209 | 2024-05-27 | Monte         | W   | 0.206      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     4679 | 2024-05-12 | MOUZ          | L   | 0.106      | -            | -                | -                | -         |    -1.67 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     4710 | 2024-05-11 | Astralis      | W   | 0.099      | -            | -                | -                | -         |     0.16 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4728 | 2024-05-10 | FaZe          | W   | 0.093      | -            | -                | -                | -         |     0.81 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4980 | 2024-04-28 | The MongolZ   | W   | 0.011      | -            | -                | -                | -         |     0.14 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($456,179.19)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-29 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-09-22 |      0.993 | $32,000.00     | $31,791.55      |
| 2024-08-18 |      0.760 | $400,000.00    | $304,031.60     |
| 2024-08-04 |      0.666 | $22,500.00     | $14,977.06      |
| 2024-07-21 |      0.574 | $40,000.00     | $22,944.11      |
| 2024-06-16 |      0.339 | $40,000.00     | $13,575.19      |
| 2024-06-02 |      0.247 | $42,000.00     | $10,380.01      |
| 2024-05-12 |      0.106 | $80,000.00     | $8,479.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
