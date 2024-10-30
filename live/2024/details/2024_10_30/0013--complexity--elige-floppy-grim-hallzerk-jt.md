### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [13](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [3]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  1602.5<br />
<br />
Final Rank Value (1602.5) = Starting Rank Value (1616.3) + Head To Head Adjustments (-13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.665[<sup>1</sup>](#table2)
- Bounty Collected: 0.675[<sup>2</sup>](#table1)
- Opponent Network: 0.210[<sup>2</sup>](#table1)
- LAN Wins: 0.903[<sup>2</sup>](#table1)

The average of these factors is 0.613<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1616.3
- 400 + ( ( 0.613 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1616.3


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
|           40 |      436 | 2024-10-08 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -7.71 | EliGE, floppy, Grim, hallzerk, JT |
|           39 |      458 | 2024-10-07 | Imperial        | W   | 1.000      | 0.624        | 0.248 (0.155)    | 0.578 (0.361)    | 1 (1.000) |     3.41 | EliGE, floppy, Grim, hallzerk, JT |
|           38 |      469 | 2024-10-07 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -12.19 | EliGE, floppy, Grim, hallzerk, JT |
|           37 |     1141 | 2024-09-18 | Liquid          | L   | 0.920      | -            | -                | -                | -         |   -12.01 | EliGE, floppy, Grim, hallzerk, JT |
|           36 |     1172 | 2024-09-17 | FaZe            | W   | 0.914      | 0.889        | 0.586 (0.476)    | 0.283 (0.230)    | 1 (0.914) |    17.47 | EliGE, floppy, Grim, hallzerk, JT |
|           35 |     1234 | 2024-09-15 | MOUZ            | W   | 0.899      | 0.889        | 0.983 (0.785)    | 0.337 (0.269)    | 1 (0.899) |    22.23 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |     1251 | 2024-09-14 | Astralis        | W   | 0.893      | 0.889        | 0.259 (0.206)    | 0.214 (0.170)    | 1 (0.893) |     9.00 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |     1289 | 2024-09-13 | BIG             | L   | 0.887      | -            | -                | -                | -         |   -18.56 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |     1317 | 2024-09-12 | MOUZ            | W   | 0.880      | 0.889        | 0.983 (0.769)    | 0.337 (0.264)    | 1 (0.880) |    22.62 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |     1354 | 2024-09-11 | Astralis        | W   | 0.873      | 0.889        | 0.259 (0.201)    | 0.214 (0.166)    | 1 (0.873) |     9.56 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |     1381 | 2024-09-10 | M80             | L   | 0.867      | -            | -                | -                | -         |   -20.78 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |     1966 | 2024-08-24 | Falcons         | L   | 0.753      | -            | -                | -                | -         |   -17.98 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |     2019 | 2024-08-22 | Metizport       | W   | 0.740      | 0.535        | -                | 0.469 (0.185)    | -         |     0.56 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     2325 | 2024-08-13 | Liquid          | L   | 0.679      | -            | -                | -                | -         |    -8.06 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     2369 | 2024-08-12 | MOUZ            | L   | 0.673      | -            | -                | -                | -         |    -3.52 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     2418 | 2024-08-10 | Virtus.pro      | W   | 0.659      | 1.000        | 0.469 (0.309)    | 0.291 (0.192)    | 1 (0.659) |    10.99 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     2462 | 2024-08-08 | Eternal Fire    | W   | 0.647      | 0.143        | 1.000 (0.092)    | -                | 1 (0.647) |    17.03 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     2514 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.639      | -            | -                | -                | 1 (0.639) |     0.58 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2616 | 2024-08-04 | Natus Vincere   | L   | 0.620      | -            | -                | -                | -         |    -2.00 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2663 | 2024-08-03 | Spirit          | L   | 0.612      | -            | -                | -                | -         |    -2.44 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2697 | 2024-08-02 | HEROIC          | W   | 0.605      | 0.581        | 0.443 (0.156)    | 0.502 (0.176)    | 1 (0.605) |    12.84 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2824 | 2024-07-30 | OG              | W   | 0.586      | -            | -                | -                | -         |     0.06 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2855 | 2024-07-29 | HEROIC          | L   | 0.579      | -            | -                | -                | -         |    -5.86 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     3232 | 2024-07-18 | M80             | L   | 0.505      | -            | -                | -                | -         |   -12.31 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     3281 | 2024-07-17 | Virtus.pro      | L   | 0.501      | -            | -                | -                | -         |    -7.06 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     3614 | 2024-06-16 | Falcons         | W   | 0.293      | -            | -                | -                | -         |     2.02 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3623 | 2024-06-16 | Aurora          | W   | 0.291      | -            | -                | -                | -         |     0.91 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3653 | 2024-06-15 | MIBR            | W   | 0.286      | -            | -                | -                | -         |     2.25 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3688 | 2024-06-14 | ENCE            | L   | 0.280      | -            | -                | -                | -         |    -6.05 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3698 | 2024-06-14 | Alliance        | W   | 0.278      | -            | -                | -                | -         |     0.09 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     4022 | 2024-06-06 | FURIA           | L   | 0.227      | -            | -                | -                | -         |    -2.69 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     4041 | 2024-06-06 | BetBoom         | L   | 0.225      | -            | -                | -                | -         |    -6.55 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     4052 | 2024-06-06 | fnatic          | L   | 0.225      | -            | -                | -                | -         |    -5.76 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     4091 | 2024-06-05 | BIG             | W   | 0.219      | -            | -                | -                | -         |     2.77 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     4105 | 2024-06-05 | Eternal Fire    | W   | 0.218      | 0.715        | 1.000 (0.156)    | 0.539 (0.084)    | -         |     5.83 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     4326 | 2024-05-27 | MOUZ            | L   | 0.163      | -            | -                | -                | -         |    -0.83 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     4338 | 2024-05-27 | Liquid          | L   | 0.160      | -            | -                | -                | -         |    -2.37 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4829 | 2024-05-11 | MOUZ            | L   | 0.054      | -            | -                | -                | -         |    -0.28 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4883 | 2024-05-09 | Virtus.pro      | W   | 0.039      | -            | -                | -                | -         |     0.66 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4950 | 2024-05-05 | Natus Vincere   | W   | 0.014      | -            | -                | -                | -         |     0.40 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($76,292.84)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.31) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-09-22 |      0.947 | $23,500.00     | $22,265.28      |
| 2024-08-25 |      0.761 | $7,500.00      | $5,704.92       |
| 2024-08-18 |      0.714 | $16,000.00     | $11,424.83      |
| 2024-08-04 |      0.620 | $10,500.00     | $6,506.01       |
| 2024-07-21 |      0.528 | $10,000.00     | $5,275.76       |
| 2024-06-16 |      0.293 | $50,000.00     | $14,639.41      |
| 2024-06-09 |      0.247 | $8,000.00      | $1,973.56       |
| 2024-06-02 |      0.201 | $4,000.00      | $804.46         |
| 2024-05-12 |      0.060 | $45,000.00     | $2,698.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
