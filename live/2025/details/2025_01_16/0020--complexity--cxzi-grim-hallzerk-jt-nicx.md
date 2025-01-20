### Roster Details<br />
Team Name: Complexity<br />
Roster: cxzi, Grim, hallzerk, JT, nicx<br />
Global Rank: [20](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [6]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  1312.9<br />
<br />
Final Rank Value (1312.9) = Starting Rank Value (1333.0) + Head To Head Adjustments (-20.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.514[<sup>2</sup>](#table1)
- Opponent Network: 0.106[<sup>2</sup>](#table1)
- LAN Wins: 0.741[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1333.0
- 400 + ( ( 0.471 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1333.0


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
|           33 |        8 | 2025-01-16 | Virtus.pro      | L   | 1.000      | -            | -                | -                | -         |   -17.66 | cxzi, Grim, hallzerk, JT, nicx    |
|           32 |      463 | 2024-12-02 | BIG             | L   | 0.902      | -            | -                | -                | -         |   -12.99 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |      482 | 2024-12-02 | Cloud9          | W   | 0.896      | -            | -                | -                | 1 (0.896) |     6.63 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |      498 | 2024-12-01 | Imperial        | W   | 0.889      | 0.143        | 0.165 (0.021)    | 0.430 (0.055)    | 1 (0.889) |     7.76 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      528 | 2024-11-30 | Passion UA      | L   | 0.883      | -            | -                | -                | -         |   -20.61 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      537 | 2024-11-29 | FlyQuest        | L   | 0.882      | -            | -                | -                | -         |   -15.27 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      870 | 2024-11-14 | M80             | W   | 0.776      | -            | -                | -                | 1 (0.776) |     6.53 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      897 | 2024-11-13 | MIBR            | L   | 0.770      | -            | -                | -                | -         |   -11.03 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      922 | 2024-11-12 | BOSS            | W   | 0.764      | -            | -                | -                | 1 (0.764) |     4.13 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      939 | 2024-11-11 | BESTIA          | W   | 0.762      | 0.143        | 0.156 (0.017)    | 0.622 (0.068)    | 1 (0.762) |     5.11 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |     1621 | 2024-10-08 | MOUZ            | L   | 0.533      | -            | -                | -                | -         |    -1.58 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |     1643 | 2024-10-07 | Imperial        | W   | 0.527      | 0.624        | 0.165 (0.054)    | 0.430 (0.141)    | 1 (0.527) |     4.26 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1654 | 2024-10-07 | Liquid          | L   | 0.524      | -            | -                | -                | -         |    -2.94 | EliGE, floppy, Grim, hallzerk, JT |
|           20 |     2326 | 2024-09-18 | Liquid          | L   | 0.399      | -            | -                | -                | -         |    -2.33 | EliGE, floppy, Grim, hallzerk, JT |
|           19 |     2357 | 2024-09-17 | FaZe            | W   | 0.392      | 0.889        | 1.000 (0.349)    | 0.553 (0.193)    | 1 (0.392) |    11.79 | EliGE, floppy, Grim, hallzerk, JT |
|           18 |     2419 | 2024-09-15 | MOUZ            | W   | 0.377      | 0.889        | 0.679 (0.228)    | 0.479 (0.161)    | 1 (0.377) |    10.96 | EliGE, floppy, Grim, hallzerk, JT |
|           17 |     2436 | 2024-09-14 | Astralis        | W   | 0.372      | 0.889        | 0.328 (0.108)    | 0.231 (0.076)    | 1 (0.372) |     5.23 | EliGE, floppy, Grim, hallzerk, JT |
|           16 |     2474 | 2024-09-13 | BIG             | L   | 0.365      | -            | -                | -                | -         |    -5.11 | EliGE, floppy, Grim, hallzerk, JT |
|           15 |     2502 | 2024-09-12 | MOUZ            | W   | 0.359      | 0.889        | 0.679 (0.217)    | 0.479 (0.153)    | 1 (0.359) |    10.51 | EliGE, floppy, Grim, hallzerk, JT |
|           14 |     2539 | 2024-09-11 | Astralis        | W   | 0.352      | 0.889        | 0.328 (0.102)    | 0.231 (0.072)    | -         |     5.19 | EliGE, floppy, Grim, hallzerk, JT |
|           13 |     2566 | 2024-09-10 | M80             | L   | 0.345      | -            | -                | -                | -         |    -7.74 | EliGE, floppy, Grim, hallzerk, JT |
|           12 |     3151 | 2024-08-24 | Falcons         | L   | 0.231      | -            | -                | -                | -         |    -6.40 | EliGE, floppy, Grim, hallzerk, JT |
|           11 |     3204 | 2024-08-22 | Metizport       | W   | 0.218      | 0.535        | 0.181 (0.021)    | 0.788 (0.092)    | -         |     3.56 | EliGE, floppy, Grim, hallzerk, JT |
|           10 |     3510 | 2024-08-13 | Liquid          | L   | 0.157      | -            | -                | -                | -         |    -0.78 | EliGE, floppy, Grim, hallzerk, JT |
|            9 |     3554 | 2024-08-12 | MOUZ            | L   | 0.151      | -            | -                | -                | -         |    -0.30 | EliGE, floppy, Grim, hallzerk, JT |
|            8 |     3603 | 2024-08-10 | Virtus.pro      | W   | 0.137      | 1.000        | 0.133 (0.018)    | 0.381 (0.052)    | -         |     1.98 | EliGE, floppy, Grim, hallzerk, JT |
|            7 |     3647 | 2024-08-08 | Eternal Fire    | W   | 0.126      | -            | -                | -                | -         |     2.07 | EliGE, floppy, Grim, hallzerk, JT |
|            6 |     3699 | 2024-08-07 | ALTERNATE aTTaX | W   | 0.118      | -            | -                | -                | -         |     0.89 | EliGE, floppy, Grim, hallzerk, JT |
|            5 |     3801 | 2024-08-04 | Natus Vincere   | L   | 0.098      | -            | -                | -                | -         |    -0.27 | EliGE, floppy, Grim, hallzerk, JT |
|            4 |     3848 | 2024-08-03 | Spirit          | L   | 0.091      | -            | -                | -                | -         |    -0.07 | EliGE, floppy, Grim, hallzerk, JT |
|            3 |     3882 | 2024-08-02 | HEROIC          | W   | 0.083      | -            | -                | -                | -         |     0.06 | EliGE, floppy, Grim, hallzerk, JT |
|            2 |     4009 | 2024-07-30 | OG              | W   | 0.064      | -            | -                | -                | -         |     0.02 | EliGE, floppy, Grim, hallzerk, JT |
|            1 |     4040 | 2024-07-29 | HEROIC          | L   | 0.057      | -            | -                | -                | -         |    -1.76 | EliGE, floppy, Grim, hallzerk, JT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,770.58)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.903 | $10,000.00     | $9,033.17       |
| 2024-10-13 |      0.566 | $5,000.00      | $2,829.63       |
| 2024-09-22 |      0.426 | $23,500.00     | $10,007.16      |
| 2024-08-25 |      0.239 | $7,500.00      | $1,792.75       |
| 2024-08-18 |      0.192 | $16,000.00     | $3,078.88       |
| 2024-08-04 |      0.098 | $10,500.00     | $1,028.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
