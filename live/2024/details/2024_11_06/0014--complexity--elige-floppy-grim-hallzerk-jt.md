### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [14](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_06.md)<br />
Regional Rank: [3]( ../../standings_americas_2024_11_06.md)<br />
<br />
Final Rank Value:  1468.4<br />
<br />
Final Rank Value (1468.4) = Starting Rank Value (1461.2) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.580[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.831[<sup>2</sup>](#table1)

The average of these factors is 0.541<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1461.2
- 400 + ( ( 0.541 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 1461.2


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
|           38 |      577 | 2024-10-08 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -8.21 | EliGE, floppy, Grim, hallzerk, JT |
|           37 |      599 | 2024-10-07 | Imperial        | W   | 1.000      | 0.624        | 0.119 (0.074)    | 0.588 (0.367)    | 1 (1.000) |     4.16 | EliGE, floppy, Grim, hallzerk, JT |
|           36 |      610 | 2024-10-07 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -12.02 | EliGE, floppy, Grim, hallzerk, JT |
|           35 |     1282 | 2024-09-18 | Liquid          | L   | 0.874      | -            | -                | -                | -         |   -11.59 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |     1313 | 2024-09-17 | FaZe            | W   | 0.868      | 0.889        | 0.327 (0.252)    | 0.320 (0.247)    | 1 (0.868) |    18.02 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |     1375 | 2024-09-15 | MOUZ            | W   | 0.853      | 0.889        | 0.483 (0.366)    | 0.342 (0.259)    | 1 (0.853) |    20.65 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |     1392 | 2024-09-14 | Astralis        | W   | 0.847      | 0.889        | 0.291 (0.219)    | 0.245 (0.185)    | 1 (0.847) |    12.87 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |     1430 | 2024-09-13 | BIG             | L   | 0.841      | -            | -                | -                | -         |   -17.29 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |     1458 | 2024-09-12 | MOUZ            | W   | 0.834      | 0.889        | 0.483 (0.358)    | 0.342 (0.254)    | 1 (0.834) |    21.09 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |     1495 | 2024-09-11 | Astralis        | W   | 0.827      | 0.889        | 0.291 (0.214)    | 0.245 (0.180)    | 1 (0.827) |    13.67 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |     1522 | 2024-09-10 | M80             | L   | 0.821      | -            | -                | -                | -         |   -19.11 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     2107 | 2024-08-24 | Falcons         | L   | 0.707      | -            | -                | -                | -         |   -16.60 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     2160 | 2024-08-22 | Metizport       | W   | 0.694      | 0.535        | -                | 0.509 (0.189)    | -         |     0.88 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     2466 | 2024-08-13 | Liquid          | L   | 0.632      | -            | -                | -                | -         |    -7.54 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     2510 | 2024-08-12 | MOUZ            | L   | 0.627      | -            | -                | -                | -         |    -3.72 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     2559 | 2024-08-10 | Virtus.pro      | W   | 0.613      | 1.000        | 0.216 (0.132)    | 0.298 (0.183)    | 1 (0.613) |    10.55 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2603 | 2024-08-08 | Eternal Fire    | W   | 0.601      | 0.143        | 0.459 (0.039)    | -                | 1 (0.601) |    15.18 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2655 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.593      | -            | -                | -                | 1 (0.593) |     0.88 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2757 | 2024-08-04 | Natus Vincere   | L   | 0.573      | -            | -                | -                | -         |    -1.28 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2804 | 2024-08-03 | Spirit          | L   | 0.566      | -            | -                | -                | -         |    -1.35 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2838 | 2024-08-02 | HEROIC          | W   | 0.559      | 0.581        | 0.524 (0.170)    | 0.554 (0.180)    | 1 (0.559) |    14.37 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2965 | 2024-07-30 | OG              | W   | 0.540      | -            | -                | -                | -         |     0.12 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2996 | 2024-07-29 | HEROIC          | L   | 0.533      | -            | -                | -                | -         |    -2.97 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     3373 | 2024-07-18 | M80             | L   | 0.459      | -            | -                | -                | -         |   -10.84 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3422 | 2024-07-17 | Virtus.pro      | L   | 0.454      | -            | -                | -                | -         |    -6.09 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3755 | 2024-06-16 | Falcons         | W   | 0.247      | -            | -                | -                | -         |     1.81 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3764 | 2024-06-16 | Aurora          | W   | 0.245      | -            | -                | -                | -         |     1.06 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3794 | 2024-06-15 | MIBR            | W   | 0.239      | 0.500        | -                | 0.572 (0.068)    | -         |     2.27 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3829 | 2024-06-14 | ENCE            | L   | 0.233      | -            | -                | -                | -         |    -4.61 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3839 | 2024-06-14 | Alliance        | W   | 0.232      | -            | -                | -                | -         |     0.14 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     4163 | 2024-06-06 | FURIA           | L   | 0.181      | -            | -                | -                | -         |    -2.05 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     4182 | 2024-06-06 | BetBoom         | L   | 0.179      | -            | -                | -                | -         |    -5.09 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     4193 | 2024-06-06 | fnatic          | L   | 0.178      | -            | -                | -                | -         |    -4.45 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     4232 | 2024-06-05 | BIG             | W   | 0.173      | -            | -                | -                | -         |     2.28 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     4246 | 2024-06-05 | Eternal Fire    | W   | 0.171      | 0.715        | 0.459 (0.056)    | -                | -         |     4.41 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4467 | 2024-05-27 | MOUZ            | L   | 0.117      | -            | -                | -                | -         |    -0.66 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4479 | 2024-05-27 | Liquid          | L   | 0.114      | -            | -                | -                | -         |    -1.64 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4970 | 2024-05-11 | MOUZ            | L   | 0.008      | -            | -                | -                | -         |    -0.05 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68,231.44)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      0.901 | $23,500.00     | $21,179.65      |
| 2024-08-25 |      0.714 | $7,500.00      | $5,358.44       |
| 2024-08-18 |      0.668 | $16,000.00     | $10,685.68      |
| 2024-08-04 |      0.573 | $10,500.00     | $6,020.94       |
| 2024-07-21 |      0.481 | $10,000.00     | $4,813.79       |
| 2024-06-16 |      0.247 | $50,000.00     | $12,329.55      |
| 2024-06-09 |      0.200 | $8,000.00      | $1,603.99       |
| 2024-06-02 |      0.155 | $4,000.00      | $619.68         |
| 2024-05-12 |      0.014 | $45,000.00     | $619.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
