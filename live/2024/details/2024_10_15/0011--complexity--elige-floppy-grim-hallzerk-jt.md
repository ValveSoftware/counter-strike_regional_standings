### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [11](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_15.md)<br />
Regional Rank: [3]( ../../standings_americas_2024_10_15.md)<br />
<br />
Final Rank Value:  1589.6<br />
<br />
Final Rank Value (1589.6) = Starting Rank Value (1633.1) + Head To Head Adjustments (-43.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.657[<sup>1</sup>](#table2)
- Bounty Collected: 0.689[<sup>2</sup>](#table1)
- Opponent Network: 0.244[<sup>2</sup>](#table1)
- LAN Wins: 0.950[<sup>2</sup>](#table1)

The average of these factors is 0.635<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1633.1
- 400 + ( ( 0.635 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1633.1


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
|           42 |      128 | 2024-10-08 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -8.31 | EliGE, floppy, Grim, hallzerk, JT |
|           41 |      150 | 2024-10-07 | Imperial        | W   | 1.000      | 0.624        | -                | 0.550 (0.343)    | 1 (1.000) |     2.77 | EliGE, floppy, Grim, hallzerk, JT |
|           40 |      161 | 2024-10-07 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -11.94 | EliGE, floppy, Grim, hallzerk, JT |
|           39 |      833 | 2024-09-18 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -12.65 | EliGE, floppy, Grim, hallzerk, JT |
|           38 |      864 | 2024-09-17 | FaZe            | W   | 1.000      | 0.889        | 0.520 (0.462)    | 0.318 (0.283)    | 1 (1.000) |    17.84 | EliGE, floppy, Grim, hallzerk, JT |
|           37 |      926 | 2024-09-15 | MOUZ            | W   | 0.999      | 0.889        | 1.000 (0.888)    | 0.373 (0.331)    | 1 (0.999) |    24.17 | EliGE, floppy, Grim, hallzerk, JT |
|           36 |      943 | 2024-09-14 | Astralis        | W   | 0.994      | 0.889        | 0.261 (0.231)    | 0.220 (0.195)    | 1 (0.994) |     8.29 | EliGE, floppy, Grim, hallzerk, JT |
|           35 |      981 | 2024-09-13 | BIG             | L   | 0.988      | -            | -                | -                | -         |   -23.08 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |     1009 | 2024-09-12 | MOUZ            | W   | 0.981      | 0.889        | 1.000 (0.872)    | 0.373 (0.325)    | 1 (0.981) |    24.71 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |     1046 | 2024-09-11 | Astralis        | W   | 0.974      | 0.889        | 0.261 (0.226)    | 0.220 (0.191)    | 1 (0.974) |     8.74 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |     1073 | 2024-09-10 | M80             | L   | 0.968      | -            | -                | -                | -         |   -24.31 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |     1658 | 2024-08-24 | Falcons         | L   | 0.854      | -            | -                | -                | -         |   -20.01 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |     1711 | 2024-08-22 | Metizport       | W   | 0.841      | 0.535        | -                | 0.476 (0.214)    | -         |     0.55 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |     2017 | 2024-08-13 | Liquid          | L   | 0.779      | -            | -                | -                | -         |    -8.97 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |     2061 | 2024-08-12 | MOUZ            | L   | 0.774      | -            | -                | -                | -         |    -4.29 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     2110 | 2024-08-10 | Virtus.pro      | W   | 0.760      | 1.000        | 0.437 (0.332)    | 0.316 (0.240)    | 1 (0.760) |    12.70 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     2154 | 2024-08-08 | Eternal Fire    | W   | 0.748      | 0.143        | 0.932 (0.100)    | -                | 1 (0.748) |    18.75 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     2206 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.740      | -            | -                | -                | 1 (0.740) |     0.54 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     2308 | 2024-08-04 | Natus Vincere   | L   | 0.720      | -            | -                | -                | -         |    -2.43 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     2355 | 2024-08-03 | Spirit          | L   | 0.713      | -            | -                | -                | -         |    -3.06 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2389 | 2024-08-02 | HEROIC          | W   | 0.706      | 0.581        | 0.256 (0.105)    | 0.433 (0.178)    | 1 (0.706) |    10.01 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2516 | 2024-07-30 | OG              | W   | 0.687      | -            | -                | -                | -         |     0.13 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2547 | 2024-07-29 | HEROIC          | L   | 0.680      | -            | -                | -                | -         |   -11.95 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2924 | 2024-07-18 | M80             | L   | 0.606      | -            | -                | -                | -         |   -15.76 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2973 | 2024-07-17 | Virtus.pro      | L   | 0.601      | -            | -                | -                | -         |    -8.63 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     3306 | 2024-06-16 | Falcons         | W   | 0.394      | -            | -                | -                | -         |     2.82 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     3315 | 2024-06-16 | Aurora          | W   | 0.392      | -            | -                | -                | -         |     1.17 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     3345 | 2024-06-15 | MIBR            | W   | 0.386      | -            | -                | -                | -         |     2.53 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3380 | 2024-06-14 | ENCE            | L   | 0.380      | -            | -                | -                | -         |   -11.51 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3390 | 2024-06-14 | Alliance        | W   | 0.379      | -            | -                | -                | -         |     0.11 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3714 | 2024-06-06 | FURIA           | L   | 0.327      | -            | -                | -                | -         |    -4.47 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3733 | 2024-06-06 | BetBoom         | L   | 0.326      | -            | -                | -                | -         |    -9.51 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3744 | 2024-06-06 | fnatic          | L   | 0.325      | -            | -                | -                | -         |    -9.51 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3783 | 2024-06-05 | BIG             | W   | 0.320      | -            | -                | -                | -         |     2.94 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3797 | 2024-06-05 | Eternal Fire    | W   | 0.318      | 0.715        | 0.932 (0.212)    | 0.602 (0.137)    | -         |     8.07 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     4018 | 2024-05-27 | MOUZ            | L   | 0.263      | -            | -                | -                | -         |    -1.59 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     4030 | 2024-05-27 | Liquid          | L   | 0.261      | -            | -                | -                | -         |    -4.06 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     4521 | 2024-05-11 | MOUZ            | L   | 0.155      | -            | -                | -                | -         |    -0.96 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     4575 | 2024-05-09 | Virtus.pro      | W   | 0.140      | -            | -                | -                | -         |     2.27 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4642 | 2024-05-05 | Natus Vincere   | W   | 0.115      | 0.889        | 1.000 (0.102)    | -                | -         |     3.21 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4708 | 2024-05-02 | HEROIC          | W   | 0.094      | -            | -                | -                | -         |     1.16 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4757 | 2024-04-30 | Qiang           | W   | 0.080      | -            | -                | -                | -         |     0.02 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($92,743.89)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-08-25 |      0.861 | $7,500.00      | $6,460.70       |
| 2024-08-18 |      0.815 | $16,000.00     | $13,037.16      |
| 2024-08-04 |      0.720 | $10,500.00     | $7,564.10       |
| 2024-07-21 |      0.628 | $10,000.00     | $6,283.46       |
| 2024-06-16 |      0.394 | $50,000.00     | $19,677.93      |
| 2024-06-09 |      0.347 | $8,000.00      | $2,779.73       |
| 2024-06-02 |      0.302 | $4,000.00      | $1,207.55       |
| 2024-05-12 |      0.161 | $45,000.00     | $7,233.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
