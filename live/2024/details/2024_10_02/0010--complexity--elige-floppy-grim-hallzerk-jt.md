### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [10](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_02.md)<br />
Regional Rank: [2]( ../../standings_americas_2024_10_02.md)<br />
<br />
Final Rank Value:  1572.0<br />
<br />
Final Rank Value (1572.0) = Starting Rank Value (1618.7) + Head To Head Adjustments (-46.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.661[<sup>1</sup>](#table2)
- Bounty Collected: 0.703[<sup>2</sup>](#table1)
- Opponent Network: 0.229[<sup>2</sup>](#table1)
- LAN Wins: 0.955[<sup>2</sup>](#table1)

The average of these factors is 0.637<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1618.7
- 400 + ( ( 0.637 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1618.7


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
|           39 |      516 | 2024-09-18 | Liquid          | L   | 1.000      | -            | -                | -                | -         |   -12.00 | EliGE, floppy, Grim, hallzerk, JT |
|           38 |      547 | 2024-09-17 | FaZe            | W   | 1.000      | 0.889        | 0.533 (0.474)    | 0.364 (0.323)    | 1 (1.000) |    18.57 | EliGE, floppy, Grim, hallzerk, JT |
|           37 |      609 | 2024-09-15 | MOUZ            | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.338 (0.300)    | 1 (1.000) |    23.34 | EliGE, floppy, Grim, hallzerk, JT |
|           36 |      626 | 2024-09-14 | Astralis        | W   | 1.000      | 0.889        | 0.279 (0.248)    | 0.234 (0.208)    | 1 (1.000) |     9.57 | EliGE, floppy, Grim, hallzerk, JT |
|           35 |      664 | 2024-09-13 | BIG             | L   | 1.000      | -            | -                | -                | -         |   -26.29 | EliGE, floppy, Grim, hallzerk, JT |
|           34 |      692 | 2024-09-12 | MOUZ            | W   | 1.000      | 0.889        | 1.000 (0.889)    | 0.338 (0.300)    | 1 (1.000) |    24.30 | EliGE, floppy, Grim, hallzerk, JT |
|           33 |      729 | 2024-09-11 | Astralis        | W   | 1.000      | 0.889        | 0.279 (0.248)    | 0.234 (0.208)    | 1 (1.000) |    10.21 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |      756 | 2024-09-10 | M80             | L   | 1.000      | -            | -                | -                | -         |   -25.38 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |     1341 | 2024-08-24 | Falcons         | L   | 0.939      | -            | -                | -                | -         |   -20.30 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |     1394 | 2024-08-22 | Metizport       | W   | 0.926      | 0.535        | -                | 0.449 (0.222)    | -         |     0.66 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |     1700 | 2024-08-13 | Liquid          | L   | 0.865      | -            | -                | -                | -         |    -9.23 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |     1744 | 2024-08-12 | MOUZ            | L   | 0.859      | -            | -                | -                | -         |    -5.71 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |     1793 | 2024-08-10 | Virtus.pro      | W   | 0.845      | 1.000        | 0.434 (0.367)    | 0.269 (0.228)    | 1 (0.845) |    11.53 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |     1837 | 2024-08-08 | Eternal Fire    | W   | 0.833      | 0.143        | 0.974 (0.116)    | -                | 1 (0.833) |    20.84 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |     1889 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.825      | -            | -                | -                | 1 (0.825) |     0.67 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |     1991 | 2024-08-04 | Natus Vincere   | L   | 0.806      | -            | -                | -                | -         |    -2.49 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     2038 | 2024-08-03 | Spirit          | L   | 0.798      | -            | -                | -                | -         |    -2.91 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     2072 | 2024-08-02 | HEROIC          | W   | 0.791      | 0.581        | 0.207 (0.095)    | 0.378 (0.174)    | 1 (0.791) |     7.82 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     2199 | 2024-07-30 | OG              | W   | 0.772      | 0.581        | -                | 0.299 (0.134)    | 1 (0.772) |     0.54 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2230 | 2024-07-29 | HEROIC          | L   | 0.765      | -            | -                | -                | -         |   -16.90 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2607 | 2024-07-18 | M80             | L   | 0.691      | -            | -                | -                | -         |   -18.31 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2656 | 2024-07-17 | Virtus.pro      | L   | 0.687      | -            | -                | -                | -         |   -12.36 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2989 | 2024-06-16 | Falcons         | W   | 0.479      | -            | -                | -                | -         |     4.33 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2998 | 2024-06-16 | Aurora          | W   | 0.477      | -            | -                | -                | -         |     1.77 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     3028 | 2024-06-15 | MIBR            | W   | 0.472      | -            | -                | -                | -         |     3.65 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     3063 | 2024-06-14 | ENCE            | L   | 0.466      | -            | -                | -                | -         |   -13.84 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     3073 | 2024-06-14 | Alliance        | W   | 0.464      | -            | -                | -                | -         |     0.16 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3397 | 2024-06-06 | FURIA           | L   | 0.413      | -            | -                | -                | -         |    -6.88 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3416 | 2024-06-06 | BetBoom         | L   | 0.411      | -            | -                | -                | -         |   -11.92 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3427 | 2024-06-06 | fnatic          | L   | 0.410      | -            | -                | -                | -         |   -11.66 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3466 | 2024-06-05 | BIG             | W   | 0.405      | -            | -                | -                | -         |     1.86 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3480 | 2024-06-05 | Eternal Fire    | W   | 0.404      | 0.715        | 0.974 (0.281)    | 0.649 (0.187)    | -         |    10.15 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3701 | 2024-05-27 | MOUZ            | L   | 0.349      | -            | -                | -                | -         |    -2.76 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3713 | 2024-05-27 | Liquid          | L   | 0.346      | -            | -                | -                | -         |    -5.38 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     4204 | 2024-05-11 | MOUZ            | L   | 0.240      | -            | -                | -                | -         |    -2.00 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     4258 | 2024-05-09 | Virtus.pro      | W   | 0.225      | -            | -                | -                | -         |     2.68 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     4325 | 2024-05-05 | Natus Vincere   | W   | 0.200      | 0.889        | 1.000 (0.178)    | -                | -         |     5.63 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4391 | 2024-05-02 | HEROIC          | W   | 0.179      | -            | -                | -                | -         |     1.28 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4440 | 2024-04-30 | Qiang           | W   | 0.166      | -            | -                | -                | -         |     0.05 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100,605.62)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.31) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-22 |      1.000 | $23,500.00     | $23,500.00      |
| 2024-08-25 |      0.947 | $7,500.00      | $7,099.52       |
| 2024-08-18 |      0.900 | $16,000.00     | $14,399.99      |
| 2024-08-04 |      0.806 | $10,500.00     | $8,458.46       |
| 2024-07-21 |      0.714 | $10,000.00     | $7,135.23       |
| 2024-06-16 |      0.479 | $50,000.00     | $23,936.78      |
| 2024-06-09 |      0.433 | $8,000.00      | $3,461.14       |
| 2024-06-02 |      0.387 | $4,000.00      | $1,548.25       |
| 2024-05-12 |      0.246 | $45,000.00     | $11,066.23      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
