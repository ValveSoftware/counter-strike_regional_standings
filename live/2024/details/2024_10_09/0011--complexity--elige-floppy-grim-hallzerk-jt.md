### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [11](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_09.md)<br />
Regional Rank: [3]( ../../standings_americas_2024_10_09.md)<br />
<br />
Final Rank Value:  1586.9<br />
<br />
Final Rank Value (1586.9) = Starting Rank Value (1637.5) + Head To Head Adjustments (-50.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.671[<sup>1</sup>](#table2)
- Bounty Collected: 0.696[<sup>2</sup>](#table1)
- Opponent Network: 0.240[<sup>2</sup>](#table1)
- LAN Wins: 0.953[<sup>2</sup>](#table1)

The average of these factors is 0.640<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1637.5
- 400 + ( ( 0.640 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1637.5


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
|           42 |       31 | 2024-10-08 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -9.29 | EliGE, floppy, Grim, hallzerk, JT |
|           41 |       53 | 2024-10-07 | Imperial        | W   | 1.000      | 0.624        | 0.159 (0.099)    | 0.554 (0.346)    | 1 (1.000) |     2.91 | EliGE, floppy, Grim, hallzerk, JT |
|           40 |       64 | 2024-10-07 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -11.63 | EliGE, floppy, Grim, hallzerk, JT |
|           39 |      736 | 2024-09-18 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -12.31 | EliGE, floppy, Grim, hallzerk, JT |
|           38 |      767 | 2024-09-17 | FaZe            | W   | 1.000      | 0.889        | 0.534 (0.474)    | 0.332 (0.295)    | 1 (1.000) |    18.57 | EliGE, floppy, Grim, hallzerk, JT |
|           37 |      829 | 2024-09-15 | MOUZ            | W   | 1.000      | 0.889        | 0.967 (0.859)    | 0.312 (0.277)    | 1 (1.000) |    23.22 | EliGE, floppy, Grim, hallzerk, JT |
|           36 |      846 | 2024-09-14 | Astralis        | W   | 1.000      | 0.889        | 0.288 (0.256)    | 0.235 (0.209)    | 1 (1.000) |     9.41 | EliGE, floppy, Grim, hallzerk, JT |
|           35 |      884 | 2024-09-13 | BIG             | L   | 1.000      | -            | -                | -                | -         |   -23.25 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |      912 | 2024-09-12 | MOUZ            | W   | 1.000      | 0.889        | 0.967 (0.859)    | 0.312 (0.277)    | 1 (1.000) |    24.28 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |      949 | 2024-09-11 | Astralis        | W   | 1.000      | 0.889        | 0.288 (0.256)    | 0.235 (0.209)    | 1 (1.000) |    10.16 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |      976 | 2024-09-10 | M80             | L   | 1.000      | -            | -                | -                | -         |   -24.59 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |     1561 | 2024-08-24 | Falcons         | L   | 0.893      | -            | -                | -                | -         |   -20.19 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |     1614 | 2024-08-22 | Metizport       | W   | 0.880      | 0.535        | -                | 0.454 (0.214)    | -         |     0.58 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |     1920 | 2024-08-13 | Liquid          | L   | 0.819      | -            | -                | -                | -         |    -9.00 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |     1964 | 2024-08-12 | MOUZ            | L   | 0.813      | -            | -                | -                | -         |    -5.37 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     2013 | 2024-08-10 | Virtus.pro      | W   | 0.800      | 1.000        | 0.436 (0.348)    | 0.297 (0.237)    | 1 (0.800) |    12.36 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     2057 | 2024-08-08 | Eternal Fire    | W   | 0.788      | 0.143        | 1.000 (0.113)    | -                | 1 (0.788) |    20.00 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     2109 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.780      | -            | -                | -                | 1 (0.780) |     0.59 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     2211 | 2024-08-04 | Natus Vincere   | L   | 0.760      | -            | -                | -                | -         |    -2.58 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     2258 | 2024-08-03 | Spirit          | L   | 0.753      | -            | -                | -                | -         |    -3.09 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2292 | 2024-08-02 | HEROIC          | W   | 0.745      | 0.581        | -                | 0.415 (0.180)    | 1 (0.745) |     8.80 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2419 | 2024-07-30 | OG              | W   | 0.726      | -            | -                | -                | -         |     0.40 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2450 | 2024-07-29 | HEROIC          | L   | 0.719      | -            | -                | -                | -         |   -14.45 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2827 | 2024-07-18 | M80             | L   | 0.646      | -            | -                | -                | -         |   -16.53 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2876 | 2024-07-17 | Virtus.pro      | L   | 0.641      | -            | -                | -                | -         |   -10.21 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     3209 | 2024-06-16 | Falcons         | W   | 0.433      | -            | -                | -                | -         |     3.39 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     3218 | 2024-06-16 | Aurora          | W   | 0.432      | -            | -                | -                | -         |     1.29 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     3248 | 2024-06-15 | MIBR            | W   | 0.426      | -            | -                | -                | -         |     2.92 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3283 | 2024-06-14 | ENCE            | L   | 0.420      | -            | -                | -                | -         |   -12.65 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3293 | 2024-06-14 | Alliance        | W   | 0.419      | -            | -                | -                | -         |     0.13 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3617 | 2024-06-06 | FURIA           | L   | 0.367      | -            | -                | -                | -         |    -5.65 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3636 | 2024-06-06 | BetBoom         | L   | 0.366      | -            | -                | -                | -         |   -10.56 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3647 | 2024-06-06 | fnatic          | L   | 0.365      | -            | -                | -                | -         |   -10.56 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3686 | 2024-06-05 | BIG             | W   | 0.360      | -            | -                | -                | -         |     3.30 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3700 | 2024-06-05 | Eternal Fire    | W   | 0.358      | 0.715        | 1.000 (0.256)    | 0.625 (0.160)    | -         |     9.18 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3921 | 2024-05-27 | MOUZ            | L   | 0.303      | -            | -                | -                | -         |    -2.27 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3933 | 2024-05-27 | Liquid          | L   | 0.301      | -            | -                | -                | -         |    -4.61 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     4424 | 2024-05-11 | MOUZ            | L   | 0.195      | -            | -                | -                | -         |    -1.52 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     4478 | 2024-05-09 | Virtus.pro      | W   | 0.180      | -            | -                | -                | -         |     2.58 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4545 | 2024-05-05 | Natus Vincere   | W   | 0.155      | 0.889        | 1.000 (0.137)    | -                | -         |     4.30 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4611 | 2024-05-02 | HEROIC          | W   | 0.134      | -            | -                | -                | -         |     1.26 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4660 | 2024-04-30 | Qiang           | W   | 0.120      | -            | -                | -                | -         |     0.03 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($98,726.70)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-09 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-08-25 |      0.901 | $7,500.00      | $6,757.86       |
| 2024-08-18 |      0.854 | $16,000.00     | $13,671.10      |
| 2024-08-04 |      0.760 | $10,500.00     | $7,980.12       |
| 2024-07-21 |      0.668 | $10,000.00     | $6,679.67       |
| 2024-06-16 |      0.433 | $50,000.00     | $21,658.99      |
| 2024-06-09 |      0.387 | $8,000.00      | $3,096.70       |
| 2024-06-02 |      0.342 | $4,000.00      | $1,366.03       |
| 2024-05-12 |      0.200 | $45,000.00     | $9,016.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
