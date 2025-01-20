### Roster Details<br />
Team Name: Complexity<br />
Roster: cxzi, Grim, hallzerk, JT, nicx<br />
Global Rank: [20](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [6]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  1310.3<br />
<br />
Final Rank Value (1310.3) = Starting Rank Value (1330.6) + Head To Head Adjustments (-20.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.512[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.739[<sup>2</sup>](#table1)

The average of these factors is 0.469<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1330.6
- 400 + ( ( 0.469 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1330.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |        6 | 2025-01-16 | Virtus.pro      | L   | 1.000      | -            | -                | -                | -         |   -17.60 | cxzi, Grim, hallzerk, JT, nicx    |
|           32 |      440 | 2024-12-02 | BIG             | L   | 0.896      | -            | -                | -                | -         |   -12.95 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      459 | 2024-12-02 | Cloud9          | W   | 0.890      | -            | -                | -                | 1 (0.890) |     6.40 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      475 | 2024-12-01 | Imperial        | W   | 0.883      | 0.143        | 0.164 (0.021)    | 0.428 (0.054)    | 1 (0.883) |     7.73 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      505 | 2024-11-30 | Passion UA      | L   | 0.877      | -            | -                | -                | -         |   -20.52 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      514 | 2024-11-29 | FlyQuest        | L   | 0.875      | -            | -                | -                | -         |   -15.09 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      847 | 2024-11-14 | M80             | W   | 0.770      | -            | -                | -                | 1 (0.770) |     6.50 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      874 | 2024-11-13 | MIBR            | L   | 0.764      | -            | -                | -                | -         |   -10.85 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      899 | 2024-11-12 | BOSS            | W   | 0.757      | -            | -                | -                | 1 (0.757) |     4.15 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      916 | 2024-11-11 | BESTIA          | W   | 0.756      | 0.143        | 0.155 (0.017)    | 0.602 (0.065)    | 1 (0.756) |     5.09 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1598 | 2024-10-08 | MOUZ            | L   | 0.527      | -            | -                | -                | -         |    -1.53 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1620 | 2024-10-07 | Imperial        | W   | 0.521      | 0.624        | 0.164 (0.053)    | 0.428 (0.139)    | 1 (0.521) |     4.21 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1631 | 2024-10-07 | Liquid          | L   | 0.518      | -            | -                | -                | -         |    -2.96 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2303 | 2024-09-18 | Liquid          | L   | 0.393      | -            | -                | -                | -         |    -2.34 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2334 | 2024-09-17 | FaZe            | W   | 0.386      | 0.889        | 1.000 (0.343)    | 0.554 (0.190)    | 1 (0.386) |    11.62 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2396 | 2024-09-15 | MOUZ            | W   | 0.371      | 0.889        | 0.677 (0.223)    | 0.479 (0.158)    | 1 (0.371) |    10.80 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2413 | 2024-09-14 | Astralis        | W   | 0.366      | 0.889        | 0.327 (0.106)    | 0.231 (0.075)    | 1 (0.366) |     5.15 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2451 | 2024-09-13 | BIG             | L   | 0.359      | -            | -                | -                | -         |    -5.06 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2479 | 2024-09-12 | MOUZ            | W   | 0.353      | 0.889        | 0.677 (0.212)    | 0.479 (0.150)    | 1 (0.353) |    10.35 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2516 | 2024-09-11 | Astralis        | W   | 0.346      | 0.889        | 0.327 (0.100)    | 0.231 (0.071)    | -         |     5.10 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2543 | 2024-09-10 | M80             | L   | 0.339      | -            | -                | -                | -         |    -7.60 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3128 | 2024-08-24 | Falcons         | L   | 0.225      | -            | -                | -                | -         |    -6.25 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3181 | 2024-08-22 | Metizport       | W   | 0.212      | 0.535        | 0.182 (0.021)    | 0.790 (0.090)    | -         |     3.49 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3487 | 2024-08-13 | Liquid          | L   | 0.151      | -            | -                | -                | -         |    -0.77 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3531 | 2024-08-12 | MOUZ            | L   | 0.145      | -            | -                | -                | -         |    -0.28 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3580 | 2024-08-10 | Virtus.pro      | W   | 0.131      | 1.000        | 0.133 (0.017)    | 0.382 (0.050)    | -         |     1.90 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3624 | 2024-08-08 | Eternal Fire    | W   | 0.119      | -            | -                | -                | -         |     1.97 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3676 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.112      | -            | -                | -                | -         |     0.85 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3778 | 2024-08-04 | Natus Vincere   | L   | 0.092      | -            | -                | -                | -         |    -0.26 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3825 | 2024-08-03 | Spirit          | L   | 0.084      | -            | -                | -                | -         |    -0.06 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3859 | 2024-08-02 | HEROIC          | W   | 0.077      | -            | -                | -                | -         |     0.06 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     3986 | 2024-07-30 | OG              | W   | 0.058      | -            | -                | -                | -         |     0.02 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4017 | 2024-07-29 | HEROIC          | L   | 0.051      | -            | -                | -                | -         |    -1.57 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,327.84)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.897 | $10,000.00     | $8,972.10       |
| 2024-10-13 |      0.560 | $5,000.00      | $2,799.09       |
| 2024-09-22 |      0.420 | $23,500.00     | $9,863.66       |
| 2024-08-25 |      0.233 | $7,500.00      | $1,746.95       |
| 2024-08-18 |      0.186 | $16,000.00     | $2,981.17       |
| 2024-08-04 |      0.092 | $10,500.00     | $964.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
