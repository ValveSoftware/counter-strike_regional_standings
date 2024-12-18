### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [20](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [14]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1335.8<br />
<br />
Final Rank Value (1335.8) = Starting Rank Value (1418.0) + Head To Head Adjustments (-82.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.601[<sup>1</sup>](#table2)
- Bounty Collected: 0.445[<sup>2</sup>](#table1)
- Opponent Network: 0.178[<sup>2</sup>](#table1)
- LAN Wins: 0.902[<sup>2</sup>](#table1)

The average of these factors is 0.531<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1418.0
- 400 + ( ( 0.531 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1418.0


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
|           41 |       63 | 2024-12-14 | Arrow           | L   | 1.000      | -            | -                | -                | -         |   -29.88 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           40 |      221 | 2024-12-06 | paiN            | L   | 1.000      | -            | -                | -                | -         |   -12.53 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           39 |      245 | 2024-12-05 | G2              | L   | 1.000      | -            | -                | -                | -         |    -1.21 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           38 |      255 | 2024-12-04 | HEROIC          | L   | 1.000      | -            | -                | -                | -         |    -5.75 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           37 |      297 | 2024-12-02 | Complexity      | W   | 1.000      | -            | -                | -                | 1 (1.000) |    16.39 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           36 |      318 | 2024-12-01 | FURIA           | L   | 1.000      | -            | -                | -                | -         |    -7.74 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           35 |      337 | 2024-11-30 | Virtus.pro      | W   | 1.000      | 0.143        | 0.177 (0.025)    | -                | 1 (1.000) |    14.72 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           34 |      364 | 2024-11-30 | FlyQuest        | L   | 1.000      | -            | -                | -                | -         |   -15.99 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           33 |      369 | 2024-11-29 | Passion UA      | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 1 (1.000) |     6.92 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           32 |      519 | 2024-11-22 | Passion UA      | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 1 (1.000) |     6.64 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           31 |      530 | 2024-11-21 | HEROIC          | W   | 1.000      | 0.143        | 0.727 (0.104)    | -                | 1 (1.000) |    26.73 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           30 |      542 | 2024-11-21 | Sashi           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.78 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           29 |      796 | 2024-11-11 | GUN5            | L   | 0.952      | -            | -                | -                | -         |   -23.27 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           28 |      953 | 2024-11-02 | ALTERNATE aTTaX | W   | 0.894      | -            | -                | -                | -         |     3.17 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           27 |     1109 | 2024-10-26 | OG              | L   | 0.845      | -            | -                | -                | -         |   -23.42 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           26 |     1136 | 2024-10-24 | BESTIA          | W   | 0.834      | 0.477        | 0.102 (0.041)    | 0.625 (0.248)    | -         |     5.71 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           25 |     1145 | 2024-10-24 | Aurora          | W   | 0.831      | 0.477        | -                | 0.345 (0.137)    | -         |     2.60 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           24 |     1498 | 2024-10-06 | FlyQuest        | L   | 0.715      | -            | -                | -                | -         |   -12.05 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           23 |     1504 | 2024-10-06 | SAW             | W   | 0.714      | 0.500        | 0.258 (0.092)    | 0.594 (0.212)    | 1 (0.714) |    13.75 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           22 |     1569 | 2024-10-04 | M80             | W   | 0.701      | 0.500        | 0.139 (0.049)    | 0.546 (0.192)    | 1 (0.701) |     7.55 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           21 |     1577 | 2024-10-04 | ODDIK           | W   | 0.700      | 0.500        | 0.094 (0.033)    | 0.495 (0.173)    | 1 (0.700) |     2.52 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           20 |     1936 | 2024-09-25 | ECSTATIC        | L   | 0.639      | -            | -                | -                | -         |   -17.84 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           19 |     1991 | 2024-09-24 | Monte           | L   | 0.632      | -            | -                | -                | -         |   -16.94 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           18 |     2200 | 2024-09-17 | The MongolZ     | L   | 0.586      | -            | -                | -                | -         |    -1.45 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           17 |     2308 | 2024-09-13 | Complexity      | W   | 0.560      | 0.889        | 0.124 (0.062)    | 0.352 (0.175)    | 1 (0.560) |     9.32 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           16 |     2338 | 2024-09-12 | fnatic          | W   | 0.554      | 0.889        | 0.188 (0.092)    | 0.404 (0.199)    | -         |     4.58 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           15 |     2378 | 2024-09-11 | Rooster         | W   | 0.546      | -            | -                | -                | -         |     0.36 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           14 |     2404 | 2024-09-10 | Imperial        | L   | 0.540      | -            | -                | -                | -         |   -12.45 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           13 |     2929 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.438      | -            | -                | -                | -         |   -11.75 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           12 |     2982 | 2024-08-24 | Virtus.pro      | L   | 0.428      | -            | -                | -                | -         |    -7.26 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           11 |     3003 | 2024-08-23 | GamerLegion     | W   | 0.421      | 0.535        | 0.171 (0.038)    | 0.685 (0.154)    | -         |     5.81 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|           10 |     3015 | 2024-08-23 | los kogutos     | W   | 0.419      | -            | -                | -                | -         |     2.50 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            9 |     3055 | 2024-08-22 | Qiang           | W   | 0.411      | -            | -                | -                | -         |     0.22 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            8 |     3081 | 2024-08-21 | Insilio         | W   | 0.407      | -            | -                | -                | -         |     0.49 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            7 |     3135 | 2024-08-21 | Passion UA      | L   | 0.404      | -            | -                | -                | -         |    -9.52 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            6 |     3458 | 2024-08-09 | Falcons         | L   | 0.327      | -            | -                | -                | -         |    -9.04 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            5 |     3490 | 2024-08-08 | SAW             | L   | 0.319      | -            | -                | -                | -         |    -4.77 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            4 |     3543 | 2024-08-07 | FlyQuest        | W   | 0.312      | -            | -                | -                | -         |     3.61 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            3 |     3697 | 2024-08-02 | Natus Vincere   | L   | 0.280      | -            | -                | -                | -         |    -0.91 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            2 |     3733 | 2024-08-01 | Virtus.pro      | W   | 0.275      | 0.581        | 0.177 (0.028)    | -                | -         |     4.05 | JDC, Krimbo, rigoN, syrsoN, tabseN |
|            1 |     3795 | 2024-07-31 | Natus Vincere   | L   | 0.266      | -            | -                | -                | -         |    -0.83 | JDC, Krimbo, rigoN, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($74,611.24)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-12-14 |      1.000 | $3,668.00      | $3,668.00       |
| 2024-11-12 |      0.960 | $1,000.00      | $959.68         |
| 2024-10-26 |      0.848 | $20,000.00     | $16,959.19      |
| 2024-10-06 |      0.715 | $20,000.00     | $14,300.00      |
| 2024-09-26 |      0.647 | $1,000.00      | $646.59         |
| 2024-09-22 |      0.621 | $17,500.00     | $10,861.42      |
| 2024-08-25 |      0.434 | $7,500.00      | $3,253.87       |
| 2024-08-09 |      0.327 | $4,500.00      | $1,473.57       |
| 2024-08-04 |      0.293 | $8,500.00      | $2,488.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
