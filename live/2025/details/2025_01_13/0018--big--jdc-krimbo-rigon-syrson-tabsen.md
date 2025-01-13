### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [18](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1333.6<br />
<br />
Final Rank Value (1333.6) = Starting Rank Value (1405.1) + Head To Head Adjustments (-71.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.629[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.857[<sup>2</sup>](#table1)

The average of these factors is 0.507<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1405.1
- 400 + ( ( 0.507 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1405.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      202 | 2024-12-14 | Arrow           | L   | 1.000      | -            | -                | -                | -         |   -29.60 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           40 |      360 | 2024-12-06 | paiN            | L   | 0.945      | -            | -                | -                | -         |   -12.02 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           39 |      384 | 2024-12-05 | G2              | L   | 0.939      | -            | -                | -                | -         |    -1.11 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           38 |      394 | 2024-12-04 | HEROIC          | L   | 0.938      | -            | -                | -                | -         |    -4.21 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           37 |      436 | 2024-12-02 | Complexity      | W   | 0.924      | -            | -                | -                | 1 (0.924) |    13.67 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           36 |      457 | 2024-12-01 | FURIA           | L   | 0.917      | -            | -                | -                | -         |    -7.10 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           35 |      476 | 2024-11-30 | Virtus.pro      | W   | 0.910      | 0.143        | 0.146 (0.019)    | -                | 1 (0.910) |    11.82 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           34 |      503 | 2024-11-30 | FlyQuest        | L   | 0.905      | -            | -                | -                | -         |   -15.31 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           33 |      508 | 2024-11-29 | Passion UA      | W   | 0.904      | 0.143        | -                | 0.844 (0.109)    | 1 (0.904) |     6.39 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           32 |      658 | 2024-11-22 | Passion UA      | W   | 0.852      | 0.143        | -                | 0.844 (0.103)    | 1 (0.852) |     5.86 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           31 |      669 | 2024-11-21 | HEROIC          | W   | 0.847      | 0.143        | 0.873 (0.106)    | -                | 1 (0.847) |    23.50 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           30 |      681 | 2024-11-21 | Sashi           | W   | 0.845      | -            | -                | -                | 1 (0.845) |     3.73 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           29 |      935 | 2024-11-11 | GUN5            | L   | 0.779      | -            | -                | -                | -         |   -19.01 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           28 |     1092 | 2024-11-02 | ALTERNATE aTTaX | W   | 0.721      | -            | -                | -                | -         |     2.81 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           27 |     1248 | 2024-10-26 | OG              | L   | 0.673      | -            | -                | -                | -         |   -19.02 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           26 |     1275 | 2024-10-24 | BESTIA          | W   | 0.661      | 0.477        | 0.156 (0.049)    | 0.606 (0.191)    | -         |     4.37 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           25 |     1284 | 2024-10-24 | Aurora          | W   | 0.659      | 0.477        | 0.058 (0.018)    | 0.313 (0.098)    | -         |     1.94 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           24 |     1637 | 2024-10-06 | FlyQuest        | L   | 0.543      | -            | -                | -                | -         |    -9.59 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           23 |     1643 | 2024-10-06 | SAW             | W   | 0.541      | 0.500        | 0.264 (0.071)    | 0.452 (0.122)    | 1 (0.541) |     8.54 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           22 |     1708 | 2024-10-04 | M80             | W   | 0.529      | 0.500        | 0.144 (0.038)    | 0.445 (0.118)    | 1 (0.529) |     4.78 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           21 |     1716 | 2024-10-04 | ODDIK           | W   | 0.527      | 0.500        | 0.091 (0.024)    | 0.388 (0.102)    | 1 (0.527) |     1.47 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           20 |     2075 | 2024-09-25 | ECSTATIC        | L   | 0.467      | -            | -                | -                | -         |   -13.07 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           19 |     2130 | 2024-09-24 | Monte           | L   | 0.460      | -            | -                | -                | -         |   -12.55 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           18 |     2339 | 2024-09-17 | The MongolZ     | L   | 0.413      | -            | -                | -                | -         |    -0.85 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           17 |     2447 | 2024-09-13 | Complexity      | W   | 0.388      | 0.889        | 0.126 (0.043)    | 0.297 (0.102)    | 1 (0.388) |     5.63 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           16 |     2477 | 2024-09-12 | fnatic          | W   | 0.381      | 0.889        | 0.188 (0.064)    | 0.308 (0.104)    | -         |     2.67 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           15 |     2517 | 2024-09-11 | Rooster         | W   | 0.374      | -            | -                | -                | -         |     0.24 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           14 |     2543 | 2024-09-10 | Imperial        | L   | 0.367      | -            | -                | -                | -         |    -8.87 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           13 |     3068 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.266      | -            | -                | -                | -         |    -7.01 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           12 |     3121 | 2024-08-24 | Virtus.pro      | L   | 0.256      | -            | -                | -                | -         |    -4.99 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           11 |     3142 | 2024-08-23 | GamerLegion     | W   | 0.248      | 0.535        | 0.200 (0.027)    | 0.606 (0.080)    | -         |     3.77 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           10 |     3154 | 2024-08-23 | los kogutos     | W   | 0.247      | -            | -                | -                | -         |     1.74 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            9 |     3194 | 2024-08-22 | Qiang           | W   | 0.239      | -            | -                | -                | -         |     0.10 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            8 |     3220 | 2024-08-21 | Insilio         | W   | 0.234      | -            | -                | -                | -         |     0.25 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            7 |     3274 | 2024-08-21 | Passion UA      | L   | 0.232      | -            | -                | -                | -         |    -5.49 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            6 |     3597 | 2024-08-09 | Falcons         | L   | 0.154      | -            | -                | -                | -         |    -4.42 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            5 |     3629 | 2024-08-08 | SAW             | L   | 0.146      | -            | -                | -                | -         |    -2.63 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            4 |     3682 | 2024-08-07 | FlyQuest        | W   | 0.139      | -            | -                | -                | -         |     1.62 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            3 |     3836 | 2024-08-02 | Natus Vincere   | L   | 0.108      | -            | -                | -                | -         |    -0.41 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            2 |     3872 | 2024-08-01 | Virtus.pro      | W   | 0.102      | -            | -                | -                | -         |     1.23 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            1 |     3934 | 2024-07-31 | Natus Vincere   | L   | 0.094      | -            | -                | -                | -         |    -0.35 | JDC, Krimbo, rigoN, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,814.91)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-12-14 |      1.000 | $3,668.00      | $3,668.00       |
| 2024-11-12 |      0.787 | $1,000.00      | $787.23         |
| 2024-10-26 |      0.676 | $20,000.00     | $13,510.10      |
| 2024-10-06 |      0.543 | $20,000.00     | $10,850.92      |
| 2024-09-26 |      0.474 | $1,000.00      | $474.13         |
| 2024-09-22 |      0.448 | $17,500.00     | $7,843.47       |
| 2024-08-25 |      0.261 | $7,500.00      | $1,960.47       |
| 2024-08-09 |      0.155 | $4,500.00      | $697.53         |
| 2024-08-04 |      0.120 | $8,500.00      | $1,023.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
