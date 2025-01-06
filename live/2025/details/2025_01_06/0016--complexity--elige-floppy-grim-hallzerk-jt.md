### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [16](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_06.md)<br />
Regional Rank: [5]( ../../standings_americas_2025_01_06.md)<br />
<br />
Final Rank Value:  1354.7<br />
<br />
Final Rank Value (1354.7) = Starting Rank Value (1359.8) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.527[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.761[<sup>2</sup>](#table1)

The average of these factors is 0.485<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1359.8
- 400 + ( ( 0.485 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1359.8


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
|           34 |      395 | 2024-12-02 | BIG             | L   | 0.970      | -            | -                | -                | -         |   -14.83 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |      414 | 2024-12-02 | Cloud9          | W   | 0.964      | -            | -                | -                | 1 (0.964) |     6.96 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |      430 | 2024-12-01 | Imperial        | W   | 0.958      | 0.143        | 0.158 (0.022)    | 0.451 (0.062)    | 1 (0.958) |     7.82 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      460 | 2024-11-30 | Passion UA      | L   | 0.952      | -            | -                | -                | -         |   -22.83 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      469 | 2024-11-29 | FlyQuest        | L   | 0.950      | -            | -                | -                | -         |   -17.38 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      802 | 2024-11-14 | M80             | W   | 0.844      | -            | -                | -                | 1 (0.844) |     6.49 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      829 | 2024-11-13 | MIBR            | L   | 0.838      | -            | -                | -                | -         |   -13.43 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      854 | 2024-11-12 | BOSS            | W   | 0.832      | -            | -                | -                | 1 (0.832) |     3.74 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      871 | 2024-11-11 | BESTIA          | W   | 0.830      | 0.143        | -                | 0.512 (0.061)    | 1 (0.830) |     4.67 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1553 | 2024-10-08 | MOUZ            | L   | 0.601      | -            | -                | -                | -         |    -2.06 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1575 | 2024-10-07 | Imperial        | W   | 0.595      | 0.624        | 0.158 (0.059)    | 0.451 (0.168)    | 1 (0.595) |     4.36 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1586 | 2024-10-07 | Liquid          | L   | 0.593      | -            | -                | -                | -         |    -3.61 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2258 | 2024-09-18 | Liquid          | L   | 0.467      | -            | -                | -                | -         |    -2.98 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2289 | 2024-09-17 | FaZe            | W   | 0.461      | 0.889        | 0.920 (0.377)    | 0.498 (0.204)    | 1 (0.461) |    13.62 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2351 | 2024-09-15 | MOUZ            | W   | 0.446      | 0.889        | 0.666 (0.264)    | 0.480 (0.190)    | 1 (0.446) |    12.80 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2368 | 2024-09-14 | Astralis        | W   | 0.440      | 0.889        | 0.316 (0.124)    | 0.188 (0.074)    | 1 (0.440) |     5.95 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2406 | 2024-09-13 | BIG             | L   | 0.434      | -            | -                | -                | -         |    -6.60 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2434 | 2024-09-12 | MOUZ            | W   | 0.427      | 0.889        | 0.666 (0.253)    | 0.480 (0.182)    | 1 (0.427) |    12.41 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2471 | 2024-09-11 | Astralis        | W   | 0.420      | 0.889        | 0.316 (0.118)    | 0.188 (0.070)    | -         |     6.00 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2498 | 2024-09-10 | M80             | L   | 0.414      | -            | -                | -                | -         |    -9.47 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3083 | 2024-08-24 | Falcons         | L   | 0.300      | -            | -                | -                | -         |    -8.23 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3136 | 2024-08-22 | Metizport       | W   | 0.287      | 0.535        | 0.168 (0.026)    | 0.805 (0.124)    | -         |     4.04 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3442 | 2024-08-13 | Liquid          | L   | 0.226      | -            | -                | -                | -         |    -1.20 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3486 | 2024-08-12 | MOUZ            | L   | 0.220      | -            | -                | -                | -         |    -0.48 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3535 | 2024-08-10 | Virtus.pro      | W   | 0.206      | 1.000        | 0.158 (0.032)    | 0.340 (0.070)    | -         |     3.01 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3579 | 2024-08-08 | Eternal Fire    | W   | 0.194      | -            | -                | -                | -         |     3.34 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3631 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.186      | -            | -                | -                | -         |     1.27 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3733 | 2024-08-04 | Natus Vincere   | L   | 0.167      | -            | -                | -                | -         |    -0.47 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3780 | 2024-08-03 | Spirit          | L   | 0.159      | -            | -                | -                | -         |    -0.14 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3814 | 2024-08-02 | HEROIC          | W   | 0.152      | 0.581        | 0.822 (0.073)    | -                | -         |     4.38 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3941 | 2024-07-30 | OG              | W   | 0.133      | -            | -                | -                | -         |     0.04 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3972 | 2024-07-29 | HEROIC          | L   | 0.126      | -            | -                | -                | -         |    -0.33 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4349 | 2024-07-18 | M80             | L   | 0.052      | -            | -                | -                | -         |    -1.19 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4398 | 2024-07-17 | Virtus.pro      | L   | 0.048      | -            | -                | -                | -         |    -0.79 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,488.92)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.972 | $10,000.00     | $9,719.09       |
| 2024-10-13 |      0.635 | $5,000.00      | $3,172.58       |
| 2024-09-22 |      0.494 | $23,500.00     | $11,619.07      |
| 2024-08-25 |      0.308 | $7,500.00      | $2,307.19       |
| 2024-08-18 |      0.261 | $16,000.00     | $4,176.34       |
| 2024-08-04 |      0.167 | $10,500.00     | $1,749.19       |
| 2024-07-21 |      0.075 | $10,000.00     | $745.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
